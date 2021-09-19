import * as moment from "moment";
import { stateCreator, isSameSelectedDate } from "ReduxStore/Helpers/calendar";

//initialState
export const calendarInitialState = {
  today: {
    year: moment().year(),
    month: moment().month() + 1,
    date: moment().get("date"),
  },
  currYear: moment().year(),
  currMonth: moment().month() + 1,
  selectedDate: null,
};

//action type
const CLICK_DATE = "CLICK_DATE";
const CLICK_PREV_BUTTON = "CLICK_PREV_BUTTON";
const CLICK_NEXT_BUTTON = "CLICK_NEXT_BUTOON";
const CLICK_THISMONTH_BUTTON = "CLICK_THISMONTH_BUTTON";

//action 함수
export const clickDate = ({ clickedDate, displayedMonth }) => ({
  type: CLICK_DATE,
  payload: { clickedDate, displayedMonth },
});
export const clickPrevButton = () => ({
  type: CLICK_PREV_BUTTON,
});
export const clickNextButton = () => ({
  type: CLICK_NEXT_BUTTON,
});
export const clickThisMonthButton = () => ({
  type: CLICK_THISMONTH_BUTTON,
});

//reducer 함수
function calendarReducer(calendarState = calendarInitialState, action) {
  switch (action.type) {
    case CLICK_DATE: {
      let newCalendarState = stateCreator({
        type: action.payload.clickedDate.month,
        currCalendarState: calendarState,
      });

      // 선택한 날짜 재선택 === 해제
      if (
        isSameSelectedDate({
          payload: action.payload,
          selectedDate: newCalendarState.selectedDate,
        })
      ) {
        return {
          ...newCalendarState,
          selectedDate: null,
        };
      }
      // 새로 날짜 선택, 다른 날짜 선택 === 선택
      return {
        ...newCalendarState,
        selectedDate: {
          year: newCalendarState.currYear,
          month: newCalendarState.currMonth,
          date: action.payload.clickedDate.date,
        },
      };
    }
    case CLICK_PREV_BUTTON: {
      return stateCreator({
        type: "previous",
        currCalendarState: calendarState,
      });

      // if (calendarState.currMonth === 1) {
      //   return {
      //     ...calendarState,
      //     currYear: calendarState.currYear - 1,
      //     currMonth: 12,
      //   };
      // } else {
      //   return {
      //     ...calendarState,
      //     currMonth: calendarState.currMonth - 1,
      //   };
      // }
    }
    case CLICK_NEXT_BUTTON: {
      return stateCreator({ type: "next", currCalendarState: calendarState });
      // if (calendarState.currMonth === 12) {
      //   return {
      //     ...calendarState,
      //     currYear: calendarState.currYear + 1,
      //     currMonth: 1,
      //   };
      // } else {
      //   return {
      //     ...calendarState,
      //     currMonth: calendarState.currMonth + 1,
      //   };
      // }
    }
    case CLICK_THISMONTH_BUTTON: {
      return {
        ...calendarState,
        currYear: calendarState.today.year,
        currMonth: calendarState.today.month,
      };
    }
    default:
      return calendarState;
  }
}

export { calendarReducer };
