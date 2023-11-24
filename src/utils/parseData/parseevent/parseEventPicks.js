import { Pick } from "../../objectconstructors";

export const parseEventPicks = (event) =>
  Array.from(event.getElementsByTagName("pick"))
    .map((pick) => new Pick(pick)
    )
    .filter((pick) => pick ?? false);