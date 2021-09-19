export const stateCreator = ({ type, currCalendarState }) => {
  const isJanuary = (currMonth) => {
    return currMonth === 1;
  };
  const isDecember = (currMonth) => {
    return currMonth === 12;
  };

  switch (type) {
    // 이전 달 날짜 선택 상황
    case "previous": {
      // 연도 변경 체크
      if (isJanuary(currCalendarState.currMonth)) {
        return {
          ...currCalendarState,
          currYear: currCalendarState.currYear - 1,
          currMonth: 12,
        };
      } else {
        return {
          ...currCalendarState,
          currMonth: currCalendarState.currMonth - 1,
        };
      }
    }
    // 다음 달 날짜 선택 상황
    case "next": {
      // 연도 변경 체크
      if (isDecember(currCalendarState.currMonth)) {
        return {
          ...currCalendarState,
          currYear: currCalendarState.currYear + 1,
          currMonth: 1,
        };
      } else {
        return {
          ...currCalendarState,
          currMonth: currCalendarState.currMonth + 1,
        };
      }
    }
    default: {
      return {
        ...currCalendarState,
      };
    }
  }
};

export const isSameSelectedDate = ({ payload, selectedDate }) => {
  return (
    payload.displayedMonth === selectedDate?.month &&
    payload.clickedDate.date === selectedDate?.date
  );
};
