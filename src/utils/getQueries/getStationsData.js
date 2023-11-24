import { serverPath } from "../../properties";

export async function getStationsData() {
    const url = serverPath + "station/1/query";

    const response = await fetch(url);
    if (!response.ok) {
        return null;
    }

    const data = await response.text();
    return data;
}