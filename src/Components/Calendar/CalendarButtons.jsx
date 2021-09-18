import Button from "Components/Common/Button";
import styled from "styled-components";

const CalendarButtons = ({
  handlePrevButtonClick,
  handleNextButtonClick,
  handleThisMonthButtonClick,
}) => {
  return (
    <CalendarButtonLayout>
      <Button
        icon={"prev"}
        name={"previous"}
        handleClickFunc={handlePrevButtonClick}
      />
      <Button
        icon={"next"}
        name={"next"}
        handleClickFunc={handleNextButtonClick}
      />
      <Button name={"thisMonth"} handleClickFunc={handleThisMonthButtonClick}>
        이번달
      </Button>
    </CalendarButtonLayout>
  );
};

const CalendarButtonLayout = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default CalendarButtons;
