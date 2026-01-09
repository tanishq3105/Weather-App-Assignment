

export interface WeatherMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface WindData {
    speed: number;
    deg: number;
    gust: number;
}

export interface CloudData {
    all: number;
}

export interface SystemData {
    pod: string;
}

export interface WeatherForecastItem {
    dt: number;
    main: WeatherMain;
    weather: WeatherCondition[];
    clouds: CloudData;
    wind: WindData;
    visibility: number;
    pop: number;
    sys: SystemData;
    dt_txt: string;
}

export interface WeatherApiResponse {
    cod: string;
    message: number;
    cnt: number;
    list: WeatherForecastItem[];
    city: {
        id: number;
        name: string;
        coord: {
            lat: number;
            lon: number;
        };
        country: string;
        population: number;
        timezone: number;
        sunrise: number;
        sunset: number;
    };
}


export interface NormalizedWeatherData {
    city: string;
    country: string;
    timestamp: string;
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    condition: string;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
    windDeg: number;
    windGust: number;
    pressure: number;
    visibility: number;
    cloudiness: number;
    precipitation: number;
    dayPeriod: 'day' | 'night';
}

export interface ForecastData {
    city: string;
    country: string;
    forecast: NormalizedWeatherData[];
}


export interface UseWeatherReturn {
    data: ForecastData | null;
    loading: boolean;
    error: string | null;
    refetch: (city: string) => Promise<void>;
}

export interface ResponseWeatherForecastItem {
    city: string;
    country: string;
    timestamp: string;
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    condition: string;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
    windDeg: number;
    windGust: number;
    pressure: number;
    visibility: number;
    cloudiness: number;
    precipitation: number;
    dayPeriod: "day" | "night";
}

export interface ResponseWeatherApiResponse {
    city: string;
    country: string;
    forecast: ResponseWeatherForecastItem[];
}