// react
import { useEffect, useRef } from "react";

// leaflet
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Leaflet(props) {
  // unpack props
  const lat = props.lat ? props.lat : 0;
  const lon = props.lon ? props.lon : 0;
  const zoom = props.zoom ? props.zoom : 10;

  // leaflet variables
  const leafletRef = useRef(null);

  // initialize map
  useEffect(() => {
    // create map and set view ([lat, long], zoom)
    const map = L.map(leafletRef.current).setView([lat, lon], zoom);

    // add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    return () => {
      map.off();
      map.remove();
    };
  }, []);

  return (
    <div ref={leafletRef} style={{ width: "100%", height: "300px", margin: "3px" }} />
  );
}
