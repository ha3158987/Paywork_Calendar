import styled from "styled-components";

const DatesOfMonth = ({
  firstDayOfThisMonth,
  lastDayOfThisMonth,
  lastDateOfLastMonth,
  datesOfCurrMonth,
  todayDate,
}) => {
  const getDatesOfLastMonth = () => {
    const emptyArr = Array.from({ length: firstDayOfThisMonth });
    let firstShowingDate = lastDateOfLastMonth - firstDayOfThisMonth;
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
        <Date>
          <DateButton>{date.date}</DateButton>
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
  background-color: transparent;
  /* background-color: "#f9f9f9"; */
  width: 50px;
  height: 100%;
  border-radius: 90px;
`;

export default DatesOfMonth;
