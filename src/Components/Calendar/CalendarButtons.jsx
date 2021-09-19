import { useDispatch } from "react-redux";
import { style } from "./CalendarStyles";
import Button from "Components/Common/Button";
import {
  clickPrevButton,
  clickNextButton,
  clickThisMonthButton,
} from "ReduxStore/modules/calendar";

const CalendarButtons = () => {
  const dispatch = useDispatch();
  const handlePrevButtonClick = () => {
    dispatch(clickPrevButton());
  };

  const handleNextButtonClick = () => {
    dispatch(clickNextButton());
  };

  const handleThisMonthButtonClick = () => {
    dispatch(clickThisMonthButton());
  };

  return (
    <CalendarButtonLayout>
      <Button
        icon={"prev"}
        name={"previous"}
        handleClickFunc={handlePrevButtonClick}
      />
      <Button
        icon={"next"}
        name={"next"}
        handleClickFunc={handleNextButtonClick}
      />
      <Button name={"thisMonth"} handleClickFunc={handleThisMonthButtonClick}>
        이번달
      </Button>
    </CalendarButtonLayout>
  );
};

export default CalendarButtons;

const { CalendarButtonLayout } = style;
