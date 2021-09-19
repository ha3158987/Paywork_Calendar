import { style } from "./CalendarStyle";

const DaysOfWeek = () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <DaysOfWeekLayout>
      {days.map((day) => (
        <Day key={`days-${day}`} day={day}>
          {day}
        </Day>
      ))}
    </DaysOfWeekLayout>
  );
};

export default DaysOfWeek;

const { DaysOfWeekLayout, Day } = style;
