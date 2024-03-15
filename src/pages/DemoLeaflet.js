// mui
import { Box } from "@mui/material";

// leaflet
import Leaflet from "../components/leaflet/Leaflet.js";

export default function DemoLeafletPage() {
  return (
    <Box>
      <p>Leaflet React component supports multiple independent instances at the same time.</p>
      <Leaflet
        lat={51.505}
        lon={-0.09}
        zoom={12}
      />
      <Leaflet
        lat={33.448}
        lon={-112.07}
        zoom={10}
      />
    </Box>
  )
};
