
export const kelvinToCelsius = (kelvin: number): number => {
    return Math.round(kelvin - 273.15);
};


export const celsiusToFahrenheit = (celsius: number): number => {
    return Math.round((celsius * 9) / 5 + 32);
};


export const convertTemperature = (celsius: number, isCelsius: boolean): number => {
    return isCelsius ? celsius : celsiusToFahrenheit(celsius);
};


export const formatTemperature = (temp: number, isCelsius: boolean): string => {
    const unit = isCelsius ? '°C' : '°F';
    return `${convertTemperature(temp, isCelsius)}${unit}`;
};


export const getWeatherIcon = (icon: string): string => {
    const iconMap: Record<string, string> = {
        "01d": "☀️",
        "01n": "🌙",
        "02d": "☁️",
        "02n": "☁️",
        "03d": "☁️",
        "03n": "☁️",
        "04d": "☁️",
        "04n": "☁️",
        "09d": "🌦️",
        "09n": "🌦️",
        "10d": "🌧️",
        "10n": "🌧️",
        "11d": "⛈️",
        "11n": "⛈️",
        "13d": "❄️",
        "13n": "❄️",
        "50d": "🌫️",
        "50n": "🌫️",
    };

    return iconMap[icon] || "☁️";
};



export const formatDate = (dateString: string): { date: string; time: string } => {
    const date = new Date(dateString);
    return {
        date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
    };
};


export const getDayOfWeek = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
};


export const getHour = (dateString: string): number => {
    const date = new Date(dateString);
    return date.getHours();
};


export const formatWindSpeed = (speedMs: number): number => {
    return Math.round(speedMs * 3.6);
};


export const getWindDirection = (degrees: number): string => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
};

export const formatVisibility = (meters: number): string => {
    const km = meters / 1000;
    return km >= 10 ? '10+ km' : `${km.toFixed(1)} km`;
};