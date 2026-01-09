import { NormalizedWeatherData } from "@/app/types/weather";
import {
  formatDate,
  formatTemperature,
  formatWindSpeed,
} from "@/app/utils/temperature";
import { Card } from "../ui/card";
import { Droplets, Wind } from "lucide-react";

interface ForecastCardProps {
  forecast: NormalizedWeatherData;
  isCelsius: boolean;
  isDark: boolean;
}

export const ForecastCard: React.FC<ForecastCardProps> = ({
  forecast,
  isCelsius,
  isDark,
}) => {
  const { date, time } = formatDate(forecast.timestamp);
  const cardClass = isDark
    ? "bg-gray-900 border-gray-800"
    : "bg-gray-50 border-gray-200";

  return (
    <Card isDark={isDark} className={cardClass} isHoverable>
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-gray-500 font-medium">{date}</p>
            <p className="text-sm text-gray-600">{time}</p>
          </div>
          <span className="text-2xl">{forecast.icon}</span>
        </div>
        <div>
          <p className="text-2xl font-light text-blue-500">
            {formatTemperature(forecast.temp, isCelsius)}
          </p>
          <p className="text-xs text-gray-500 capitalize">
            {forecast.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-200/50">
          <div className="flex items-center gap-1">
            <Droplets className="w-3 h-3 text-blue-400" />
            <span className="text-xs">{forecast.humidity}%</span>
          </div>
          <div className="flex items-center gap-1">
            <Wind className="w-3 h-3 text-blue-400" />
            <span className="text-xs">
              {formatWindSpeed(forecast.windSpeed)} km/h
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
