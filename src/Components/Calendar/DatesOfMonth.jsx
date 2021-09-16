import styled from "styled-components";

const DatesOfMonth = () => {
  const datesTest = Array.from({ length: 42 });

  return (
    <DatesOfMonthLayout>
      {datesTest.map((date, index) => (
        <Date>
          <DateButton>{index + 1}</DateButton>
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
  background-color: "#f9f9f9";
  width: 50px;
  height: 100%;
  border-radius: 90px;
`;

export default DatesOfMonth;
