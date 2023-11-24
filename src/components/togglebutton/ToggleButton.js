import "./ToggleButton.css";

export function ToggleButton({ IconElement, isChecked, onChange }) {
  return (
    <label className="toggle-button">
      <input
        checked={isChecked}
        onChange={onChange}
        className="toggle-button__input"
        type="checkbox"
      />
      <span className="toggle-button__background">{IconElement}</span>
    </label>
  );
}
