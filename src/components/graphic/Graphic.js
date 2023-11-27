import { useState, useEffect } from "react";
import "./Graphic.css";
import Plot from "react-plotly.js";
import { getGraphicData, parseChartData } from "../../utils";

export function Graphic(props) {
  const [data, setData] = useState([]);

  const LINE_COLORS = ["#123c69", "#227D22", "#BF2324"];

  const defaultYGridShape = {
    line: { color: "#4d5a6a" },
    xref: "paper",
    yref: "paper",
    x0: 0,
    x1: 1,
  };

  const defaultXGridShape = {
    line: { color: "#4d5a6a" },
    xref: "paper",
    yref: "paper",
    y0: 0,
    y1: 1,
  };

  const   defaultGridShape = [
    {
      ...defaultYGridShape,
      y0: 0,
      y1: 0,
    },
    {
      ...defaultYGridShape,
      y0: 0.33,
      y1: 0.33,
    },
    {
      ...defaultYGridShape,
      y0: 0.66,
      y1: 0.66,
    },
    {
      ...defaultYGridShape,
      y0: 1,
      y1: 1,
    },
    {
      ...defaultXGridShape,
      x0: 0,
      x1: 0,
    },
    {
      ...defaultXGridShape,
      x0: 1,
      x1: 1,
    },
  ];

  const defaultLineShape = {
    line: { color: "black" },
    yref: "paper",
    y0: 0,
    y1: 1,
    opacity: 1,
  };

  const defaultSquareShape = {
    fillcolor: "black",
    line: { color: "black" },
    yref: "paper",
    xsizemode: "pixel",
    y0: 0.93,
    y1: 1,
    x0: 0,
    x1: 12,
    opacity: 1,
  };

  const graphTitleAnnotation = {
    text: `${props.network}.${props.station}`,
    xref: "paper",
    yref: "paper",
    x: 1.02,
    y: 0,
    textangle: "-90",
    showarrow: false,
    font: {
      color: "#4d5a6a",
      size: 16,
    },
  };

  const defaultAnnotation = {
    xanchor: "left",
    yref: "paper",
    y: 1.02,
    showarrow: false,
    font: { size: 12, color: "f0ece9" },
  };

  const defaultLayout = {
    margin: {
      t: props.position !== "first" ? 1 : 30,
      r: 60,
      b: props.position !== "last" ? 1 : 20,
      l: 40,
    },
    font: {
      color: "#4d5a6a",
    },
    paper_bgcolor: "#eee2dc",
    plot_bgcolor: "#f0ece9",
    yaxis1: {
      fixedrange: true,
      gridcolor: "#4d5a6a44",
    },
    yaxis2: {
      fixedrange: true,
      gridcolor: "#4d5a6a44",
    },
    yaxis3: {
      fixedrange: true,
      gridcolor: "#4d5a6a44",
    },
    xaxis: {
      gridcolor: "#4d5a6a44",
      showticklabels: props.position === "" ? false : true,
      side: props.position !== "first" ? "bottom" : "top",
      autorange: false,
    },
    grid: {
      rows: 3,
      columns: 1,
      xside: props.position !== "first" ? "bottom" : "top",
    },
    shapes: defaultGridShape,
    annotations: [graphTitleAnnotation],
  };

  const [layout, setLayout] = useState(defaultLayout);

  const classname =
    props.position === ""
      ? "graphic__wrapper"
      : "graphic__wrapper_" + props.position;

  const setNewData = async () => {
    if (
      !props.startTime ||
      !props.endTime ||
      !props.network ||
      !props.station
    ) {
      return;
    }

    const seisData = await getGraphicData(
      props.network,
      props.station,
      props.startTime,
      props.endTime
    );

    if (!seisData.byteLength) {
      setData([]);
      return;
    }

    const { channelNames, xByChannel, yByChannel } = parseChartData(seisData);

    setData(
      xByChannel.map((_, i) => {
        return {
          x: xByChannel[i],
          y: yByChannel[i],
          name: channelNames[i],
          yaxis: "y" + (i + 1),
          type: "scatter",
          mode: "lines",
          hoverinfo: "none",
          line: {
            color: LINE_COLORS[i],
            width: 1,
          },
        };
      })
    );
  };

  useEffect(() => {
    setNewData();
  }, [props.startTime, props.endTime, props.station, props.network]);

  useEffect(() => {
    if (!props.waves || !data) {
      return;
    }

    setLayout({
      ...layout,
      shapes: [
        ...defaultGridShape,
        ...props.waves.map((wave) => {
          return {
            ...defaultSquareShape,
            xanchor: wave.time,
          };
        }),
        ...props.waves.map((wave) => {
          return {
            ...defaultLineShape,
            x0: wave.time,
            x1: wave.time,
          };
        }),
      ],
      annotations: [
        graphTitleAnnotation,
        ...props.waves.map((wave) => {
          return {
            ...defaultAnnotation,
            x: wave.time,
            text: wave.phase,
          };
        }),
      ],
    });
  }, [props.waves, data]);

  const setRange = (newRange) => {
    setLayout({
      ...layout,
      xaxis: { ...layout.xaxis, range: newRange },
    });
  };

  useEffect(() => {
    if (!props.range) {
      return;
    }

    setRange(props.range);
  }, [props.range]);
  console.log(data);
  if (data.length !== 0) {
    return (
      <Plot
        onClick={(e) => {
          if (e.event.shiftKey && e.event.button === 0) {
            props.changeWave(
              new Date(e.points[0].x),
              "P",
              props.id,
              props.network,
              props.station
            );
          }
  
          if (e.event.ctrlKey && e.event.button === 0) {
            props.changeWave(
              new Date(e.points[0].x),
              "S",
              props.id,
              props.network,
              props.station
            );
          }
        }}
        onRelayout={(e) => {
          const zeroPoint = e["xaxis.range[0]"];
          const firstPoint = e["xaxis.range[1]"];
  
          if (!zeroPoint || !firstPoint) {
            return;
          }
  
          if (typeof zeroPoint === "number" && isFinite(zeroPoint)) {
            props.resize(zeroPoint, firstPoint);
            return;
          }
  
          props.resize(new Date(zeroPoint), new Date(firstPoint));
        }}
        onDoubleClick={() => {
          if (!props.startTime || !props.endTime) {
            props.resize(-1, 6);
            return;
          }
  
          props.resize(props.startTime, props.endTime);
        }}
        className={classname}
        data={data}
        layout={layout}
        config={{
          modeBarButtonsToRemove: [
            "resetScale2d",
            "toImage",
            "zoom2d",
            "pan2d",
            "zoomIn2d",
            "zoomOut2d",
            "autoScale2d",
          ],
          displaylogo: false,
          doubleClick: false,
          scrollZoom: true,
        }}
      />
    );
  } else return null;
}
