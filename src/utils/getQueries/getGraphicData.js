import { serverPath } from "../../properties";

export async function getGraphicData(network, station, startTime, endTime) {
    const url =
        serverPath +
        `dataselect/1/query?` +
        `network=${network}&station=${station}` +
        `&starttime=${startTime.toISOString()}&endtime=${endTime.toISOString()}`;

    const response = await fetch(url);
    if (!response.ok) {
        return null;
    }

    const data = await response.arrayBuffer();
    return data;
}