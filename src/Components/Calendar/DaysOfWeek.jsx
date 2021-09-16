import styled from "styled-components";

const DaysOfWeek = () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <DaysOfWeekLayout>
      {days.map((day) => (
        <Day>{day}</Day>
      ))}
    </DaysOfWeekLayout>
  );
};

const DaysOfWeekLayout = styled.div`
  width: 100%;
  display: flex;
`;

const Day = styled.span`
  border: 1px solid orange;
  width: 70px;
  height: 30px;
  text-align: center;
  font-weight: bold;
`;

export default DaysOfWeek;
