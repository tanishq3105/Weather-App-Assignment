'use client';

import { useState, useCallback } from 'react';
import { WeatherApiResponse, ForecastData, NormalizedWeatherData, UseWeatherReturn, ResponseWeatherApiResponse } from '../types/weather';
import { kelvinToCelsius, formatDate, getWeatherIcon } from '../utils/temperature';


export function useWeather(): UseWeatherReturn {
    const [data, setData] = useState<ForecastData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const refetch = useCallback(async (city: string) => {
        if (!city.trim()) {
            setError('Please enter a valid city name');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);

            if (!response.ok) {
                throw new Error(response.status === 404 ? 'City not found' : 'Failed to fetch weather data');
            }

            const apiData: ResponseWeatherApiResponse = await response.json();

            const normalizedForecast = apiData.forecast.map((item): NormalizedWeatherData => ({
                city: apiData.city,
                country: apiData.country,
                timestamp: item.timestamp.split(' ')[0],
                temp: kelvinToCelsius(item.temp),
                feelsLike: kelvinToCelsius(item.feelsLike),
                tempMin: kelvinToCelsius(item.tempMin),
                tempMax: kelvinToCelsius(item.tempMax),
                condition: item.condition,
                description: item.description,
                icon: getWeatherIcon(item.icon),
                humidity: item.humidity,
                windSpeed: item.windSpeed,
                windDeg: item.windDeg,
                windGust: item.windGust,
                pressure: item.pressure,
                visibility: item.visibility,
                cloudiness: item.cloudiness,
                precipitation: item.precipitation * 100,
                dayPeriod: item.dayPeriod,
            }));
            setData({
                city: apiData.city,
                country: apiData.city,
                forecast: normalizedForecast,
            });
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
            setError(errorMessage);
            setData(null);
        } finally {
            setLoading(false);
        }
    }, []);

    return { data, loading, error, refetch };
}