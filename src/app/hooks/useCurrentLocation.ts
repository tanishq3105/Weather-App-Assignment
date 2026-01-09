import { useState, useEffect } from "react";
import { useLocation } from "./useLocation";


export const useCurrentLocation = () => {
    const [lat, setLat] = useState<number | null>(null);
    const [lon, setLon] = useState<number | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setLat(pos.coords.latitude);
                setLon(pos.coords.longitude);
            },
            (err) => console.error(err)
        );
    }, []);

    const { city, error } = useLocation(lat, lon);

    return { city, error }

};
