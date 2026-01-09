import { NormalizedWeatherData } from "@/app/types/weather";
import { formatTemperature, formatWindSpeed } from "@/app/utils/temperature";
import { Droplets, Wind } from "lucide-react";

interface WeatherCardProps {
  weather: NormalizedWeatherData;
  isCelsius: boolean;
  isDark: boolean;
  isCurrentLocation?: boolean;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  weather,
  isCelsius,
  isDark,
  isCurrentLocation = false,
}) => {
  const cardClass = isDark
    ? "bg-gray-900 border-gray-800"
    : "bg-gray-50 border-gray-200";

  return (
    <div
      className={`${cardClass} rounded-3xl border p-8 hover:shadow-xl transition-all`}
    >
      <div className="flex items-start justify-between">
        <div>
          {isCurrentLocation && (
            <p className="text-sm font-medium opacity-70 mb-1">
              📍 {weather.city}, {weather.country}
            </p>
          )}
          <p className="text-5xl font-light text-blue-500 mb-4">
            {formatTemperature(weather.temp, isCelsius)}
          </p>
          <p className="text-lg opacity-75 capitalize">{weather.description}</p>
          <p className="text-sm opacity-60 mt-2">
            Feels like {formatTemperature(weather.feelsLike, isCelsius)}
          </p>
        </div>
        <div className="text-right space-y-4">
          <div className="text-5xl">{weather.icon}</div>
          <div>
            <Droplets className="w-5 h-5 inline mr-2" />
            <span className="text-sm opacity-70">{weather.humidity}%</span>
          </div>
          <div>
            <Wind className="w-5 h-5 inline mr-2" />
            <span className="text-sm opacity-70">
              {formatWindSpeed(weather.windSpeed)} km/h
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
