import { useDispatch, useSelector } from "react-redux";
import { clickDate } from "ReduxStore/modules/calendar";

const useCalendar = () => {
  const { currYear, currMonth, today, selectedDate } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const handleClickedDate = (clickedDate, displayedMonth) => {
    dispatch(
      clickDate({
        clickedDate,
        displayedMonth,
      })
    );
  };
  return { currYear, currMonth, today, selectedDate, handleClickedDate };
};

export default useCalendar;
