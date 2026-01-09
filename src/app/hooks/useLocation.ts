import { useState, useEffect } from "react";
type WeatherReverseResponse = { name: string }[];
export const useLocation = (lat: number | null, lon: number | null) => {
    const [city, setCity] = useState<WeatherReverseResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!lat || !lon) return;
        (async () => {
            try {
                const res = await fetch(`/api/geocode?lat=${lat}&lon=${lon}`);
                if (!res.ok) throw new Error("API failed");
                const name = await res.json();
                setCity(name);
            } catch (e) {
                setError((e as Error).message);
            }
        })();
    }, [lat, lon]);
    return { city, error };
};
