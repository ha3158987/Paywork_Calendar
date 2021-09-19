import * as moment from "moment";
import { stateCreator, isSameSelectedDate } from "ReduxStore/Helpers/calendar";

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

const CLICK_DATE = "CLICK_DATE";
const CLICK_PREV_BUTTON = "CLICK_PREV_BUTTON";
const CLICK_NEXT_BUTTON = "CLICK_NEXT_BUTOON";
const CLICK_THISMONTH_BUTTON = "CLICK_THISMONTH_BUTTON";

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
      // 최초로 날짜 선택, 다른 날짜 선택 === 선택
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
    }
    case CLICK_NEXT_BUTTON: {
      return stateCreator({ type: "next", currCalendarState: calendarState });
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
