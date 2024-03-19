// react
import { useState, useEffect } from "react";

// mui
import { Box } from "@mui/material";

// plotly
import Plotly from "../components/plotly/Plotly.js";

function getRequest(props) {
  // unpack props
  const { url, setState } = props;

  fetch(url)
  .then(response => {
    if (response.status > 400) {
      throw new Error(response.status + " " + response.statusText);
    }
    return response.json();
  })
  .then(json => setState(json))
  .catch(ERR => console.log(ERR))
}

export default function DemoApiPage() {
  const domain = window.location.hostname === "localhost" ? `http://${process.env.REACT_APP_GODADDY_IP}:3000/` : process.env.REACT_APP_ADDRESS;
  const [memoryApi, setMemoryApi] = useState({});
  const [freemem, setFreemem] = useState(0);
  const [totalmem, setTotalmem] = useState(0);
  const [spaceApi, setSpaceApi] = useState({});
  const [freespace, setFreespace] = useState(0);
  const [totalspace, setTotalspace] = useState(0);
  const [data, setData] = useState([{}]);

  // get api
  useEffect(() => {
    getRequest({
      url: domain + "api/godaddy/memory",
      setState: setMemoryApi
    });
    getRequest({
      url: domain + "api/godaddy/space",
      setState: setSpaceApi
    });
  }, []);

  useEffect(() => {
    if (memoryApi && Object.keys(memoryApi).includes("freemem")) {
      setFreemem(memoryApi.freemem);
    }
    if (memoryApi && Object.keys(memoryApi).includes("totalmem")) {
      setTotalmem(memoryApi.totalmem);
    }
  }, [memoryApi]);

  useEffect(() => {
    if (spaceApi && Object.keys(spaceApi).includes("freespace")) {
      setFreespace(spaceApi.freespace);
    }
    if (memoryApi && Object.keys(spaceApi).includes("totalspace")) {
      setTotalspace(spaceApi.totalspace);
    }
  }, [spaceApi]);

  useEffect(() => {
    setData({
      ...data,
      values: [freemem, totalmem - freemem],
      labels: ["freeMem", "usedMem"],
      type: "pie"
    })
  }, [freemem, totalmem]);

  return (
    <Box>
      <p>{JSON.stringify(memoryApi)}</p>
      <p>{JSON.stringify(spaceApi)}</p>
      <Plotly
        data={data}
        title={"Memory"}
      />
    </Box>
  );
};
