import ControlButton from "../../../../components/controls-button";
import { TEvent } from "../Calendar/settingsEvent";
import css from "./styles.module.scss";

type TselectedEventProps = {
  selectedEvent: TEvent;
  onClick?: () => void;
};

function CalendarItemDetail({ selectedEvent, onClick }: TselectedEventProps) {
  return (
    <div className={css.detailEvent}>
      <div className={css.control}>
        <ControlButton id="delete" />
        <ControlButton id="close" onClick={onClick}/>
      </div>
      <p>{selectedEvent.title}</p>
      <p>
        {selectedEvent.start.toLocaleString()}-
        {selectedEvent.end.toLocaleString()}
      </p>
      <p>{selectedEvent.desc}</p>
    </div>
  );
}

export default CalendarItemDetail;
