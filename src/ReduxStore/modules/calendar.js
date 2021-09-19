import * as moment from "moment";
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
      let newCalendarState = { ...calendarState };
      if (action.payload.clickedDate.month === "previous") {
        if (calendarState.currMonth === 1) {
          newCalendarState = {
            ...calendarState,
            currYear: calendarState.currYear - 1,
            currMonth: 12,
          };
        } else {
          newCalendarState = {
            ...calendarState,
            currMonth: calendarState.currMonth - 1,
          };
        }
      } else if (action.payload.clickedDate.month === "next") {
        if (calendarState.currMonth === 12) {
          newCalendarState = {
            ...calendarState,
            currYear: calendarState.currYear + 1,
            currMonth: 1,
          };
        } else {
          newCalendarState = {
            ...calendarState,
            currMonth: calendarState.currMonth + 1,
          };
        }
      }

      if (!newCalendarState.selectedDate) {
        return {
          ...newCalendarState,
          selectedDate: {
            year: newCalendarState.currYear,
            month: newCalendarState.currMonth,
            date: action.payload.clickedDate.date,
          },
        };
      }

      if (
        action.payload.displayedMonth === newCalendarState.selectedDate.month &&
        action.payload.clickedDate.date === newCalendarState.selectedDate.date
      ) {
        return {
          ...newCalendarState,
          selectedDate: null,
        };
      } else {
        return {
          ...newCalendarState,
          selectedDate: {
            year: newCalendarState.currYear,
            month: newCalendarState.currMonth,
            date: action.payload.clickedDate.date,
          },
        };
      }
    }
    case CLICK_PREV_BUTTON: {
      if (calendarState.currMonth === 1) {
        return {
          ...calendarState,
          currYear: calendarState.currYear - 1,
          currMonth: 12,
        };
      } else {
        return {
          ...calendarState,
          currMonth: calendarState.currMonth - 1,
        };
      }
    }
    case CLICK_NEXT_BUTTON: {
      if (calendarState.currMonth === 12) {
        return {
          ...calendarState,
          currYear: calendarState.currYear + 1,
          currMonth: 1,
        };
      } else {
        return {
          ...calendarState,
          currMonth: calendarState.currMonth + 1,
        };
      }
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
