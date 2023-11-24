const pickIdWithoutChannel = (pickId) =>
  pickId.slice(0, pickId.lastIndexOf("."));

export class Pick {
  constructor(pick) {
    this.phase = pick.querySelector("phaseHint").textContent;
    this.time = pick.querySelector("time").querySelector("value").textContent;
    this.pickId = pickIdWithoutChannel(pick.getAttribute("publicID"));
    this.network = pick.querySelector("waveformID").getAttribute("networkCode");
    this.station = pick.querySelector("waveformID").getAttribute("stationCode");
  }
}
