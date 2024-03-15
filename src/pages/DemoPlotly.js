// react
import { useState } from "react";

// mui
import { Box } from "@mui/material";

// plotly
import Plotly from "../components/plotly/Plotly.js";

export default function DemoPlotlyPage() {
  const [data, setData] = useState(
    [{
	    x: [1, 2, 3, 4, 5],
	    y: [1, 2, 4, 8, 16]
    }]
  );

  return (
    <Box>
      <p>Plotly React component supports multiple independent instances at the same time.</p>
      <Plotly
        data={data}
        title={"Bar Graph"}
        type={"bar"}
      />
      <Plotly
        data={data}
        title={"Scatter Graph"}
        type={"scatter"}
      />
    </Box>
  )
};
