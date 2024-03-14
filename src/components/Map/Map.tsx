import css from "./Map.module.scss";
import { useRef, useEffect } from "react";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import useMap from "../../hooks/useMap";
import { Marker, layerGroup } from "leaflet";
import { URL_MARKER_DEFAULT } from "../../const/const";
import { CityData, PointsData } from "../../types/auth-type";

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [60, 60],
  iconAnchor: [20, 60],
});

type TMapProps = {
  POINTS: PointsData;
  CITY: CityData;
};
const MapBlock = ({ POINTS, CITY }: TMapProps) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, CITY);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      
        const marker = new Marker({
          lat: POINTS.lat,
          lng: POINTS.lng,
        });
        marker.setIcon(defaultCustomIcon).addTo(markerLayer);
     
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, POINTS]);

  return <div className={css.wrapper} ref={mapRef}></div>;
};

export default MapBlock;
