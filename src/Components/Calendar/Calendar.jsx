import { useDispatch, useSelector } from "react-redux";
import CalendarButtons from "./CalendarButtons";
import DaysOfWeek from "./DaysOfWeek";
import DatesOfMonth from "./DatesOfMonth";
import styled from "styled-components";

import {
  clickDate,
  clickPrevButton,
  clickNextButton,
  clickThisMonthButton,
} from "ReduxStore/modules/calendar";

const Calendar = () => {
  const dispatch = useDispatch();
  const { currYear, currMonth } = useSelector((state) => state);

  const handleClickedDate = (clickedDate, displayedMonth) => {
    dispatch(
      clickDate({
        clickedDate,
        displayedMonth,
      })
    );
  };

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
    <CalendarContainer>
      <CalendarLayout>
        <CalendarHeader>
          <CurrentYearMonthLayer>
            <CurrentYear>{currYear}</CurrentYear>
            <CurrentMonth>. {currMonth}</CurrentMonth>
          </CurrentYearMonthLayer>
          <CalendarButtonLayer>
            <CalendarButtons
              handlePrevButtonClick={handlePrevButtonClick}
              handleNextButtonClick={handleNextButtonClick}
              handleThisMonthButtonClick={handleThisMonthButtonClick}
            />
          </CalendarButtonLayer>
        </CalendarHeader>
        <CalendarBody>
          <DaysOfWeek />
          <DatesOfMonth handleClickedDate={handleClickedDate} />
        </CalendarBody>
      </CalendarLayout>
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalendarLayout = styled.div`
  width: 430px;
  height: 460px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
`;

const CalendarHeader = styled.div`
  display: flex;
  margin: 1rem 0.5rem;
`;

const CurrentYearMonthLayer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-left: 1rem;

  & > p {
    margin: 0;
    font-weight: 900;
    font-size: 1.2rem;
  }
`;

const CurrentYear = styled.p``;

const CurrentMonth = styled.p``;

const CalendarButtonLayer = styled.div`
  width: 50%;
`;

const CalendarBody = styled.div``;

export default Calendar;
