// react
import { useState, useEffect, useRef } from "react";

// mui
import { Box } from "@mui/material";

// plotly
import PlotlyDist from "plotly.js-dist";

export default function Plotly(props) {
  // unpack props
  const propsData = props.data;
  const height = props.height;
  const maxHeight = props.maxHeight;
  const width = props.width;
  const maxWidth = props.maxWidth;
  const title = props.title;
  const type = props.type;

  const plotlyRef = useRef(null);
  const [data, setData] = useState(propsData)
  const [layout, setLayout] = useState({
    height: maxHeight ? Math.min(maxHeight, height): height,
    width: maxWidth ? Math.min(maxWidth, width) : width,
    title: title,
  });

  useEffect(() => {
    PlotlyDist.react(plotlyRef.current, data, layout);
  }, [data, layout]);

  useEffect(() => {
    setData(data.map(({ x, y }) => ({x, y, type: type})));
  }, [type]);

  const handleResize = () => {
    setLayout({
      ...layout,
      height: maxHeight ? Math.min(maxHeight, plotlyRef.current.clientHeight) : plotlyRef.current.clientHeight,
      width: maxWidth ? Math.min(maxWidth, plotlyRef.current.clientWidth) : plotlyRef.current.clientWidth,
    });
  };

  useEffect(() => {
    // set plotly
    PlotlyDist.newPlot(plotlyRef.current, data, layout);

    // set size handler
    window.addEventListener("resize", handleResize);

    // clean event handlers
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div ref={plotlyRef} />
  );
};
