import styled from "styled-components";
import useCalendar from "Hooks/useCalendar";

const DatesOfMonth = () => {
  const {
    currMonth,
    isToday,
    isSelectedDate,
    datesOfMonth,
    handleClickedDate,
  } = useCalendar();

  return (
    <DatesOfMonthLayout>
      {datesOfMonth.map((date) => (
        <Date key={`date-${date.month}-${date.date}`}>
          <DateButton
            onClick={() => handleClickedDate(date, currMonth)}
            category={date.month}
            isToday={isToday(date)}
            isSelectedDate={isSelectedDate(date)}
          >
            {date.date}
          </DateButton>
        </Date>
      ))}
    </DatesOfMonthLayout>
  );
};

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

export default DatesOfMonth;
