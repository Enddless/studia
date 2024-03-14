import { useEffect, useState, useRef, MutableRefObject } from "react";
import { Map, TileLayer } from "leaflet";
import { CityData } from "../types/auth-type";
// import { ICity } from "../interfaces/interfaces";

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: CityData
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      // "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      const layer = new TileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
