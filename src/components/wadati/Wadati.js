import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import "./Wadati.css";

export function Wadati({ times }) {
  const [chartData, setChartData] = useState({});
  const [approxData, setApproxData] = useState({});

  const defaultLayout = {
    margin: {
      t: 1,
      r: 1,
      b: 40,
      l: 40,
    },
    font: {
      color: "#4d5a6a",
    },
    paper_bgcolor: "eee2dc",
    plot_bgcolor: "#f0ece9",
    yaxis: {
      linecolor: "#4d5a6a",
      mirror: true,
      gridcolor: "#4d5a6a44",
    },
    xaxis: {
      linecolor: "#4d5a6a",
      mirror: true,
      gridcolor: "#4d5a6a44",
    },
    showlegend: false,
  };

  useEffect(() => {
    const coords = times
      .filter((item) => item?.startTime && item?.waves?.length > 1)
      .map((item) => {
        const MILI_IN_SEC = 1000;
        const PwaveIdP = item.waves.findIndex((wave) => wave.phase === "P");
        const PwaveIdS = item.waves.findIndex((wave) => wave.phase === "S");
        const PwaveTime = item.waves[PwaveIdP].time.getTime() / MILI_IN_SEC;
        const SwaveTime = item.waves[PwaveIdS].time.getTime() / MILI_IN_SEC;

        return {
          x: PwaveTime - item.startTime.getTime() / MILI_IN_SEC,
          y: SwaveTime - PwaveTime,
        };
      });

    setChartData({
      x: coords.map((item) => item.x),
      y: coords.map((item) => item.y),
      type: "scatter",
      mode: "markers",
      name: "waves",
      marker: { color: "#4d5a6a" },
    });
  }, [times]);

  useEffect(() => {
    if (!chartData?.x?.length) {
      return;
    }

    const { sumX, sumX2, sumY, sumXY } = chartData.x.reduce(
      (acc, currentValue, index) => {
        const sumX = acc.sumX + currentValue;
        const sumX2 = acc.sumX2 + currentValue * currentValue;
        const sumY = acc.sumY + chartData.y[index];
        const sumXY = acc.sumXY + currentValue * chartData.y[index];

        return { sumX, sumX2, sumY, sumXY };
      },
      { sumX: 0, sumX2: 0, sumY: 0, sumXY: 0 }
    );

    const a =
      (chartData.x.length * sumXY - sumX * sumY) /
      (chartData.x.length * sumX2 - sumX * sumX);

    const b = (sumY - a * sumX) / chartData.x.length;

    const minX = Math.min(...chartData.x);
    const maxX = Math.max(...chartData.x);

    const x0 = minX - 2;
    const x1 = maxX + 2;

    const y0 = a * x0 + b;
    const y1 = a * x1 + b;

    setApproxData({
      x: [x0, x1],
      y: [y0, y1],
      type: "scatter",
      mode: "lines",
      name: "approximated",
      marker: { color: "#4d5a6a88" },
      line: { dash: "dashdot" },
    });
  }, [chartData]);

  return (
    <div className="wadati-chart">
      <h2 className="wadati-chart__title">Wadati chart</h2>
      <Plot
        className="wadati-chart__container"
        layout={defaultLayout}
        data={[chartData, approxData]}
        config={{
          modeBarButtonsToRemove: [
            "toImage",
            "pan2d",
            "zoom2d",
            "zoomIn2d",
            "zoomOut2d",
            "autoScale2d",
            "lasso2d",
            "resetScale2d",
            "select2d",
          ],
          displaylogo: false,
        }}
      />
    </div>
  );
}
