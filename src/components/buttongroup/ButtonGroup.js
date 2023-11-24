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
            color={eventListVisibility ? "#202125" : "#61dafb"}
            size={24}
          />
        }
      />
      <ToggleButton
        isChecked={wadatiChartVisibility}
        onChange={onWadatiChartVisibilityChange}
        IconElement={
          <ChartIcon
            color={wadatiChartVisibility ? "#202125" : "#61dafb"}
            size={24}
          />
        }
      />
    </div>
  );
}
