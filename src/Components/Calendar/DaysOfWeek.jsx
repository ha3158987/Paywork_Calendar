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
  width: 400px;
  height: 40px;
  margin: 0 auto;
  display: flex;
`;

const Day = styled.span`
  width: 70px;
  height: 30px;
  text-align: center;
  font-weight: bold;
`;

export default DaysOfWeek;
