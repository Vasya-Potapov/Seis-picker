import "./ModalWindow.css";

export function ModalWindow({ element, visibility }) {
  return (
    <div className={"modal-window" + (visibility ? "" : " modal-window_hidden")}>
      <div className="modal-window__container">{element}</div>
    </div>
  );
}
