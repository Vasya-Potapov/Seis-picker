import { Loader } from "../loader/Loader";
import "./Button.css";

export function Button({ onClick, title, visibility, isLoading }) {
  return (
    <button disabled={!visibility} className="button" onClick={onClick}>
      {isLoading ? <Loader /> : title}
    </button>
  );
}
