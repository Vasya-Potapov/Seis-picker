import { filterInstance } from "./Filter";

export const filterData = (seismogramByChannel) => {
  return seismogramByChannel.map((seismogram) => {
    const yChannelRMean = seismogram.y.map((y) => y - seismogram.y[0]);

    return filterInstance.iirFilter.simulate(yChannelRMean);
  });
};
