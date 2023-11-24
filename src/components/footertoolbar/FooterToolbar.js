import "./FooterToolbar.css";
import { ButtonGroup } from "../buttongroup/ButtonGroup";
import { Button } from "../button/Button";

export function FooterToolbar({
  wadatiChartVisibility,
  onWadatiChartVisibilityChange,
  eventListVisibility,
  onEventListVisibilityChange,
  sendUpdatePicksButtonVisibility,
  onUpdatePicksButtonClick,
  sendUpdatePicksButtonLoading,
}) {
  return (
    <footer className="toolbar">
      <div className="toolbar__container">
        <ButtonGroup
          wadatiChartVisibility={wadatiChartVisibility}
          onWadatiChartVisibilityChange={onWadatiChartVisibilityChange}
          eventListVisibility={eventListVisibility}
          onEventListVisibilityChange={onEventListVisibilityChange}
        />
        <Button
          title="send data"
          onClick={onUpdatePicksButtonClick}
          visibility={sendUpdatePicksButtonVisibility}
          isLoading={sendUpdatePicksButtonLoading}
        />
      </div>
    </footer>
  );
}
