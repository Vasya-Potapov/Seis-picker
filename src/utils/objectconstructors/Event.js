import {
  parseEventMagnitude,
  parseEventPicks,
  parseEventTime,
} from "../parseData";

export class Event {
  constructor(event) {
    this.eventId = event.getAttribute("publicID");
    this.magnitude = parseEventMagnitude(event);
    this.time = parseEventTime(event);
    this.picks = parseEventPicks(event);
  }
}
