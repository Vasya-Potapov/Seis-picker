import * as seisplotjs from "seisplotjs";
import { filterData } from "../filterData";

const calculateXByChannel = (seismogramByChannel, yByChannel) => {
  const stepByChannel = seismogramByChannel.map(
    (seismogram) =>
      (seismogram._endTime._d - seismogram._startTime._d) / seismogram.y.length
  );
  const startTimeByChannel = seismogramByChannel.map((seismogram) =>
    seismogram._startTime._d.getTime()
  );

  const xByChannel = yByChannel.map((yArray, i) =>
    yArray.map(
      (_, j) =>
        new Date(Math.round(startTimeByChannel[i] + stepByChannel[i] * j))
    )
  );

  return xByChannel;
};

export function parseChartData(data) {
  const dataRecords = seisplotjs.miniseed.parseDataRecords(data);
  const seismogramByChannel =
    seisplotjs.miniseed.seismogramPerChannel(dataRecords);

  const channelNames = seismogramByChannel.map(
    (seismogram) => seismogram.channelCode
  );

  const yByChannel = filterData(seismogramByChannel);

  const xByChannel = calculateXByChannel(seismogramByChannel, yByChannel);
  // console.log(xByChannel);

  return { channelNames, xByChannel, yByChannel };
}
