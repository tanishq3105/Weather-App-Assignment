"use client";
import { useCallback, useEffect, useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { Moon, Sun } from "lucide-react";
import { SearchBar } from "../components/weather/search-bar";
import { UnitToggle } from "../components/weather/unit-toggle";
import { ErrorMessage } from "../components/common/error-message";
import { Card } from "../components/ui/card";
import { SkeletonLoader } from "../components/ui/skeleton";
import { WeatherCard } from "../components/weather/weather-card";
import { EmptyState } from "../components/common/empty-state";
import { ForecastCard } from "../components/weather/forecast-card";
import { useCurrentLocation } from "../hooks/useCurrentLocation";
import { useLocation } from "react-router-dom";

export default function WeatherApp() {
  const [isDark, setIsDark] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const { city } = useCurrentLocation();
  const { data, loading, error, refetch } = useWeather();

  const bgClass = isDark ? "bg-gray-950 text-white" : "bg-white text-gray-950";
  useEffect(() => {
    if (city?.length) {
      const name = city[0].name;
      setSearchInput(name);
      refetch(name);
    }
  }, [city, refetch]);

  const handleSearch = useCallback(async () => {
    await refetch(searchInput);
  }, [searchInput, refetch]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${bgClass}`}>
      <header
        className={`${
          isDark ? "bg-gray-900/80" : "bg-white/80"
        } backdrop-blur-xl sticky top-0 z-50 border-b ${
          isDark ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sun className="w-8 h-8 text-amber-400" />
            <h1 className="text-2xl font-light tracking-tight">Weather</h1>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition-all ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            onSearch={handleSearch}
            isDark={isDark}
            isLoading={loading}
          />
          <UnitToggle isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
        </div>

        {error && <ErrorMessage message={error} isDark={isDark} />}

        {loading ? (
          <Card isDark={isDark} className="p-8 mb-8">
            <SkeletonLoader isDark={isDark} count={3} />
          </Card>
        ) : data && data.forecast.length > 0 ? (
          <WeatherCard
            weather={data.forecast[0]}
            isCelsius={isCelsius}
            isDark={isDark}
            isCurrentLocation
          />
        ) : (
          <EmptyState isDark={isDark} />
        )}

        {data && data.forecast.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-medium mb-4">5-Day Forecast</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {data.forecast.map((forecast, idx) => (
                <ForecastCard
                  key={`${forecast.timestamp}-${idx}`}
                  forecast={forecast}
                  isCelsius={isCelsius}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
