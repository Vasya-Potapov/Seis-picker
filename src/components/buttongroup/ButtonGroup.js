import "./ButtonGroup.css";
import { ToggleButton } from "../togglebutton/ToggleButton";
import { ListIcon, ChartIcon } from "../icons";

export function ButtonGroup({
  wadatiChartVisibility,
  onWadatiChartVisibilityChange,
  eventListVisibility,
  onEventListVisibilityChange,
}) {
  return (
    <div className="button-group">
      <ToggleButton
        isChecked={eventListVisibility}
        onChange={onEventListVisibilityChange}
        IconElement={
          <ListIcon
            color={eventListVisibility ? "#b89c84" : "#61849a"}
            size={24}
          />
        }
      />
      <ToggleButton
        isChecked={wadatiChartVisibility}
        onChange={onWadatiChartVisibilityChange}
        IconElement={
          <ChartIcon
            color={wadatiChartVisibility ? "#b89c84" : "#61849a"}
            size={24}
          />
        }
      />
    </div>
  );
}
