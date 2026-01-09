import { ForecastData, NormalizedWeatherData, WeatherApiResponse, WeatherForecastItem } from "@/app/types/weather";
import { NextRequest } from "next/server";

export function aggregateDaily(
    apiData: WeatherApiResponse
): ForecastData {
    const map: Record<string, WeatherForecastItem[]> = {}

    for (const item of apiData.list) {
        const date = item.dt_txt.split(" ")[0]
        if (!map[date]) map[date] = []
        map[date].push(item)
    }

    const dailySummaries: NormalizedWeatherData[] = []

    for (const date of Object.keys(map).sort()) {
        const group = map[date]

        const avgTemp =
            group.reduce((sum, i) => sum + i.main.temp, 0) / group.length

        const mostCommon = (arr: string[]) =>
            Object.entries(
                arr.reduce((a, v) => ((a[v] = (a[v] || 0) + 1), a), {} as Record<string, number>)
            ).sort((a, b) => b[1] - a[1])[0][0]

        const condition = mostCommon(group.map(i => i.weather[0].main))

        const sample = group[Math.floor(group.length / 2)]

        dailySummaries.push({
            city: apiData.city.name,
            country: apiData.city.country,
            timestamp: sample.dt_txt,
            temp: Number(avgTemp.toFixed(1)),
            feelsLike: sample.main.feels_like,
            tempMin: Math.min(...group.map(i => i.main.temp_min)),
            tempMax: Math.max(...group.map(i => i.main.temp_max)),
            condition,
            description: sample.weather[0].description,
            icon: sample.weather[0].icon,
            humidity: Math.round(group.reduce((s, i) => s + i.main.humidity, 0) / group.length),
            windSpeed: Number((group.reduce((s, i) => s + i.wind.speed, 0) / group.length).toFixed(1)),
            windDeg: Math.round(group.reduce((s, i) => s + i.wind.deg, 0) / group.length),
            windGust: Number((group.reduce((s, i) => s + i.wind.gust, 0) / group.length).toFixed(1)),
            pressure: Math.round(group.reduce((s, i) => s + i.main.pressure, 0) / group.length),
            visibility: sample.visibility,
            cloudiness: sample.clouds.all,
            precipitation: sample.pop,
            dayPeriod: sample.sys.pod === "d" ? "day" : "night"
        })
    }

    return {
        city: apiData.city.name,
        country: apiData.city.country,
        forecast: dailySummaries.slice(0, 5)
    }
}

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams;
    const city = params.get('city');
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}`)
    const data = await res.json();
    const dailyData = aggregateDaily(data);
    return Response.json(dailyData)
}