import { ReactComponent as PrevArrow } from "Assets/leftArrow.svg";
import { ReactComponent as NextArrow } from "Assets/rightArrow.svg";
import styled from "styled-components";

const CalendarButtons = () => {
  return (
    <CalendarButtonLayout>
      <PrevArrowButton>
        <PrevArrow />
      </PrevArrowButton>
      <NextArrowButton>
        <NextArrow />
      </NextArrowButton>
      <ThisMonthButton>이번달</ThisMonthButton>
    </CalendarButtonLayout>
  );
};

// todo: 반복되는 스타일 변수화하기
const CalendarButtonLayout = styled.div`
  display: flex;
  justify-content: flex-end;

  & > button {
    padding: 0.3rem 0.5rem;
    margin: 0.5rem;
    cursor: pointer;

    :hover {
      background-color: #d0d0d0;
      transition: background-color 0.2s;
    }
  }
`;

const PrevArrowButton = styled.button`
  border: none;
  border-radius: 5px;
`;

const NextArrowButton = styled.button`
  border: none;
  border-radius: 5px;
`;

const ThisMonthButton = styled.button`
  border: none;
  border-radius: 5px;
`;

export default CalendarButtons;
