const parseNetworks = (xml) => Array.from(xml.getElementsByTagName("Network"));
const parseStations = (network) =>
  Array.from(network.getElementsByTagName("Station"));

export function parseStationsData(data) {
  const xml = new DOMParser().parseFromString(data, "text/xml");
  const networks = parseNetworks(xml);

  return networks
    .map((network) =>
      network.getAttribute("code") === "LD" //только в сети KA пока есть данные
        ? parseStations(network).map((station) => ({
          network: network.getAttribute("code"),
          station: station.getAttribute("code"),
        }))
        : []
    )
    .flat();
}
