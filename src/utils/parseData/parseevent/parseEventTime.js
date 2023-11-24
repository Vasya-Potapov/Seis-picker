export const parseEventTime = (event) =>
  event.querySelector("origin").querySelector("time").querySelector("value")
    .textContent;
