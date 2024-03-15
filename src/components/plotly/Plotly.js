// react
import { useState, useEffect, useRef } from "react";

// plotly
import P from "plotly.js-dist";

export default function Plotly(props) {
  // unpack props
  const propsData = props.data ? props.data : {};
  const height = props.height;
  const maxHeight = props.maxHeight;
  const width = props.width;
  const maxWidth = props.maxWidth;
  const title = props.title;
  const type = props.type;

  // plotly variables
  const plotlyRef = useRef(null);
  const [data, setData] = useState(propsData)
  const [layout, setLayout] = useState({
    height: maxHeight ? Math.min(maxHeight, height): height,
    width: maxWidth ? Math.min(maxWidth, width) : width,
    title: title,
  });

  // refresh plotly on data or layout change (layout width || height)
  useEffect(() => {
    P.react(plotlyRef.current, data, layout);
  }, [data, layout]);

  // inject type into data if type props used
  // !!! disabled eslint, because data used to set itself !!!
  useEffect(() => {
    if (type) {
      setData(data.map(({ x, y }) => ({x, y, type: type})));
    }
  }, [type]); // eslint-disable-line

  // resize handler on window.resize
  const handleResize = () => {
    setLayout({
      ...layout,
      height: maxHeight ? Math.min(maxHeight, plotlyRef.current.clientHeight) : plotlyRef.current.clientHeight,
      width: maxWidth ? Math.min(maxWidth, plotlyRef.current.clientWidth) : plotlyRef.current.clientWidth,
    });
  };

  // initialize plotly and resize events
  // !!! disabled eslint, because only initial data state needed to initialize plotly !!!
  useEffect(() => {
    // initialize plotly
    P.newPlot(plotlyRef.current, data, layout);

    // set size handler
    window.addEventListener("resize", handleResize);

    // clean event handlers
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // eslint-disable-line

  return (
    <div ref={plotlyRef} style={{ margin: "3px" }} />
  );
};
