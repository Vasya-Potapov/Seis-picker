const PREFIX = "smi:ippg_nsk.ippg.org/pick/";

export function generatePickId(phase, eventId, networkCode, stationCode) {
  return `${PREFIX}${phase}/${eventId.slice(
    eventId.lastIndexOf("/") + 1,
    -1
  )}/${networkCode}${stationCode}`;
}
