import styled from "styled-components";

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

const CurrentYear = styled.p`
  color: #333333;
`;

const CurrentMonth = styled.p`
  color: #333333;
`;

const CalendarButtonLayer = styled.div`
  width: 50%;
`;

const CalendarBody = styled.div`
  width: 100%;
`;

const DaysOfWeekLayout = styled.div`
  width: 400px;
  height: 40px;
  margin: 0 auto;
  display: flex;
`;

const Day = styled.span`
  width: 70px;
  height: 30px;
  text-align: center;
  font-weight: bold;
  color: ${(props) =>
    props.day === "일"
      ? "#ff6b6b"
      : props.day === "토"
      ? "#5352ed"
      : "#2f3542"};
`;

const DatesOfMonthLayout = styled.div`
  width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(6, 50px);
  grid-template-columns: repeat(7, 1fr);
`;

const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DateButton = styled.button`
  width: 50px;
  height: 100%;
  border-radius: 90px;
  font-weight: 900;
  background-color: ${(props) =>
    props.isSelectedDate && props.category === "current"
      ? "#1e90ff"
      : props.isToday
      ? "#e9e9e9"
      : "transparent"};
  color: ${(props) =>
    props.category === "previous" || props.category === "next"
      ? "#c9c9c9"
      : props.isSelectedDate
      ? "#ffffff"
      : "#55555"};
`;

const CalendarButtonLayout = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const style = {
  CalendarContainer,
  CalendarLayout,
  CalendarHeader,
  CurrentYearMonthLayer,
  CurrentYear,
  CurrentMonth,
  CalendarButtonLayer,
  CalendarBody,
  DaysOfWeekLayout,
  Day,
  DatesOfMonthLayout,
  Date,
  DateButton,
  CalendarButtonLayout,
};
