import { style } from "./CalendarStyle";
import CalendarButtons from "./CalendarButtons";
import DaysOfWeek from "./DaysOfWeek";
import DatesOfMonth from "./DatesOfMonth";
import useCalendar from "Hooks/useCalendar";

const Calendar = () => {
  const { currYear, currMonth } = useCalendar();

  return (
    <CalendarContainer>
      <CalendarLayout>
        <CalendarHeader>
          <CurrentYearMonthLayer>
            <CurrentYear>{currYear}</CurrentYear>
            <CurrentMonth>. {currMonth}</CurrentMonth>
          </CurrentYearMonthLayer>
          <CalendarButtonLayer>
            <CalendarButtons />
          </CalendarButtonLayer>
        </CalendarHeader>
        <CalendarBody>
          <DaysOfWeek />
          <DatesOfMonth />
        </CalendarBody>
      </CalendarLayout>
    </CalendarContainer>
  );
};

export default Calendar;

const {
  CalendarContainer,
  CalendarLayout,
  CalendarHeader,
  CurrentYearMonthLayer,
  CurrentYear,
  CurrentMonth,
  CalendarButtonLayer,
  CalendarBody,
} = style;
