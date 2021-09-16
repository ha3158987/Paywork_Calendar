import CalendarButtons from "./CalendarButtons";
import styled from "styled-components";

const Calendar = () => {
  return (
    <CalendarContainer>
      <CalendarLayout>
        <CalendarHeader>
          <CurrentYearMonthLayer>
            <CurrentYear>2021.</CurrentYear>
            <CurrentMonth>9</CurrentMonth>
          </CurrentYearMonthLayer>
          <CalendarButtonLayer>
            <CalendarButtons />
          </CalendarButtonLayer>
        </CalendarHeader>
        <CalendarBody></CalendarBody>
      </CalendarLayout>
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CalendarLayout = styled.div`
  position: absolute;
  width: 430px;
  height: 460px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
`;

const CalendarHeader = styled.div`
  display: flex;
  margin: 1rem 0.5rem;
`;

const CurrentYearMonthLayer = styled.div`
  display: flex;
  width: 50%;

  & > p {
    font-weight: 600;
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
