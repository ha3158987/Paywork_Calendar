import * as moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { clickDate } from "ReduxStore/modules/calendar";

const useCalendar = () => {
  const dispatch = useDispatch();
  const { currYear, currMonth, today, selectedDate } = useSelector(
    (state) => state
  );

  const isToday = (date) => {
    return (
      currYear === today.year &&
      currMonth === today.month &&
      date.date === today.date
    );
  };

  const isSelectedDate = (date) => {
    return (
      selectedDate &&
      currYear === selectedDate.year &&
      currMonth === selectedDate.month &&
      date.date === selectedDate.date
    );
  };

  //보여지는 월의 마지막 날짜
  const lastDateOfCurrMonth = moment([currYear, 0, 31])
    .month(currMonth - 1)
    .format("DD");

  //이번달 1일의 요일
  const firstDayOfThisMonth = moment([currYear, currMonth - 1, 1]).day();

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

  const getDatesOfLastMonth = () => {
    const emptyArr = Array.from({ length: firstDayOfThisMonth });
    let firstShowingDate = lastDateOfLastMonth - firstDayOfThisMonth + 1;
    return emptyArr.map(() => {
      return {
        date: firstShowingDate++,
        month: "previous",
      };
    });
  };

  const getDatesOfNextMonth = () => {
    const emptyArr = Array.from({ length: 6 - lastDayOfThisMonth });
    let count = 1;
    return emptyArr.map(() => {
      return {
        date: count++,
        month: "next",
      };
    });
  };

  const datesOfMonth = [
    ...getDatesOfLastMonth(),
    ...datesOfCurrMonth,
    ...getDatesOfNextMonth(),
  ];

  const handleClickedDate = (clickedDate, displayedMonth) => {
    dispatch(
      clickDate({
        clickedDate,
        displayedMonth,
      })
    );
  };
  return {
    currYear,
    currMonth,
    isToday,
    isSelectedDate,
    datesOfMonth,
    handleClickedDate,
  };
};

export default useCalendar;
