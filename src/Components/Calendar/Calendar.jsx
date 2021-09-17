import { useState } from "react";
import CalendarButtons from "./CalendarButtons";
import DaysOfWeek from "./DaysOfWeek";
import DatesOfMonth from "./DatesOfMonth";
import styled from "styled-components";

const Calendar = () => {
  const moment = require("moment");
  const [currYear, setCurrYear] = useState(moment().year());
  const [currMonth, setCurrMonth] = useState(moment().month() + 1);
  const [selectedDate, setSelectedDate] = useState(null);
  const thisYear = currYear;
  const thisMonth = currMonth - 1; //이번 달: +1 해야함
  const todayDate = moment().get("date"); //오늘 날짜
  const todayDay = moment().get("day"); //오늘 요일(인덱스)
  //이번달 1일의 요일
  const firstDayOfThisMonth = moment([thisYear, thisMonth, 1]).day();
  //보여지는 월의 마지막 날짜
  const lastDateOfCurrMonth = moment([thisYear, 0, 31])
    .month(thisMonth)
    .format("DD");
  //이번달 마지막날의 요일
  const lastDayOfThisMonth = moment([
    thisYear,
    thisMonth,
    lastDateOfCurrMonth,
  ]).day();
  //이전달의 마지막 날짜
  const lastDateOfLastMonth = moment([thisYear, 0, 31])
    .month(thisMonth - 1)
    .format("DD");
  //보여지는 월의 1 ~ 마지막날짜까지 일자를 갖고 있는 배열
  const datesOfCurrMonth = Array.from(
    { length: lastDateOfCurrMonth },
    (v, i) => {
      return {
        date: i + 1,
        month: "current",
      };
    }
  );

  const handleClickedDate = (date) => {
    setSelectedDate(date);
  };

  const handlePrevButtonClick = () => {
    if (currMonth === 1) {
      setCurrYear(currYear - 1);
      setCurrMonth(12);
    } else {
      setCurrMonth(currMonth - 1);
    }
  };

  return (
    <CalendarContainer>
      <CalendarLayout>
        <CalendarHeader>
          <CurrentYearMonthLayer>
            <CurrentYear>{currYear} </CurrentYear>
            <CurrentMonth>. {currMonth}</CurrentMonth>
          </CurrentYearMonthLayer>
          <CalendarButtonLayer>
            <CalendarButtons handlePrevButtonClick={handlePrevButtonClick} />
          </CalendarButtonLayer>
        </CalendarHeader>
        <CalendarBody>
          <DaysOfWeek />
          <DatesOfMonth
            firstDayOfThisMonth={firstDayOfThisMonth}
            lastDayOfThisMonth={lastDayOfThisMonth}
            lastDateOfLastMonth={lastDateOfLastMonth}
            datesOfCurrMonth={datesOfCurrMonth}
            todayDate={todayDate}
            selectedDate={selectedDate}
            handleClickedDate={handleClickedDate}
          />
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
