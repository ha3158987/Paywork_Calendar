import styled from "styled-components";

const DatesOfMonth = ({
  today,
  currMonth,
  currYear,
  firstDayOfThisMonth,
  lastDayOfThisMonth,
  lastDateOfLastMonth,
  datesOfCurrMonth,
  selectedDate,
  handleClickedDate,
}) => {
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

  return (
    <DatesOfMonthLayout>
      {datesOfMonth.map((date) => (
        <Date key={`date-${date.month}-${date.date}`}>
          <DateButton
            onClick={() => handleClickedDate(date, currMonth)}
            category={date.month}
            isToday={
              currYear === today.year &&
              currMonth === today.month &&
              date.date === today.date
            }
            isSelectedDate={
              selectedDate &&
              currYear === selectedDate.year &&
              currMonth === selectedDate.month &&
              date.date === selectedDate.date
            }
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
