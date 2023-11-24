import "./EventList.css";
import { useState, useEffect } from "react";
import { getEventData, parseEventData } from "../../utils";
import { EventCard } from "../eventcard/EventCard";

export function EventList({ onClickCallback }) {
  const [data, setData] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(-1);

  const setNewData = async () => {
    const data = await getEventData();
    if (!data) {
      alert("server has no event data");
      return;
    }

    setData(parseEventData(data));
  };

  useEffect(() => {
    setNewData();
  }, []);

  useEffect(() => {
    if (selectedEventId < 0 || !data || !data[selectedEventId]) {
      return;
    }

    onClickCallback(data[selectedEventId]);
  }, [selectedEventId]);

  return (
    <div className="event-list">
      <h2 className="event-list__title">Events</h2>
      {data.map((item, index) => (
        <EventCard
          key={"" + item.magnitude + item.time}
          magnitude={item.magnitude}
          time={item.time}
          onClick={() => setSelectedEventId(index)}
          isSelected={index === selectedEventId}
        />
      ))}
    </div>
  );
}
