import "./EventCard.css";
import { formatTime } from "../../utils";

export function EventCard({ magnitude, time, onClick, isSelected }) {
  return (
    <div
      className={"event-card" + (isSelected ? " event-card_active" : "")}
      onClick={onClick}
    >
      {formatTime(time)}, M: {magnitude}
    </div>
  );
}
