import styled from "styled-components";

const Calendar = () => {
  return (
    <CalendarContainer>
      <CalendarLayout></CalendarLayout>
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

export default Calendar;
