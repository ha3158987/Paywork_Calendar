import { useState } from "react";
import CalendarButtons from "./CalendarButtons";
import DaysOfWeek from "./DaysOfWeek";
import DatesOfMonth from "./DatesOfMonth";
import styled from "styled-components";

const Calendar = () => {
  const moment = require("moment");
  const today = {
    year: moment().year(),
    month: moment().month() + 1,
    date: moment().get("date"),
  };
  const [currYear, setCurrYear] = useState(today.year);
  const [currMonth, setCurrMonth] = useState(today.month);
  const [selectedDate, setSelectedDate] = useState(null);
  //이번달 1일의 요일
  const firstDayOfThisMonth = moment([currYear, currMonth - 1, 1]).day();
  //보여지는 월의 마지막 날짜
  const lastDateOfCurrMonth = moment([currYear, 0, 31])
    .month(currMonth - 1)
    .format("DD");
  //이번달 마지막날의 요일
  const lastDayOfThisMonth = moment([
    currYear,
    currMonth - 1,
    lastDateOfCurrMonth,
  ]).day();
  //이전달의 마지막 날짜
  const lastDateOfLastMonth = moment([currYear, 0, 31])
    .month(currMonth - 1 - 1)
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
    if (date.month === "previous") {
      handlePrevButtonClick();
    } else if (date.month === "next") {
      handleNextButtonClick();
    }
    setSelectedDate(date.date);
  };

  const handlePrevButtonClick = () => {
    if (currMonth === 1) {
      setCurrYear(currYear - 1);
      setCurrMonth(12);
    } else {
      setCurrMonth(currMonth - 1);
    }
  };

  const handleNextButtonClick = () => {
    if (currMonth === 12) {
      setCurrYear(currYear + 1);
      setCurrMonth(1);
    } else {
      setCurrMonth(currMonth + 1);
    }
  };

  const handleThisMonthButtonClick = () => {
    setCurrYear(today.year);
    setCurrMonth(today.month);
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
            <CalendarButtons
              handlePrevButtonClick={handlePrevButtonClick}
              handleNextButtonClick={handleNextButtonClick}
              handleThisMonthButtonClick={handleThisMonthButtonClick}
            />
          </CalendarButtonLayer>
        </CalendarHeader>
        <CalendarBody>
          <DaysOfWeek />
          <DatesOfMonth
            today={today}
            currMonth={currMonth}
            firstDayOfThisMonth={firstDayOfThisMonth}
            lastDayOfThisMonth={lastDayOfThisMonth}
            lastDateOfLastMonth={lastDateOfLastMonth}
            datesOfCurrMonth={datesOfCurrMonth}
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
