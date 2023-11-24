import { serverPath } from "../../properties";

export async function getEventData() {
    const url = serverPath + "event/1/query?limit=30&includearrivals=true&includeallmagnitudes=true&includeallorigins=true";

    const response = await fetch(url);
    if (!response.ok) {
        return null;
    }

    const data = await response.text();
    return data;
}