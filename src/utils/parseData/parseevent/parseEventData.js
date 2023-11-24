import { Event } from "../../objectconstructors";

const parseEvents = (xml) => Array.from(xml.getElementsByTagName("event"));

export const parseEventData = (data) => {
  const xml = new DOMParser().parseFromString(data, "text/xml");
  console.log(xml);
  const events = parseEvents(xml);

  return events.map((event) => new Event(event));
};
