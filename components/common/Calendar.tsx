import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type CalendarProps = {
  onDatesSelected: (startDate: Date | null, endDate: Date | null) => void;
};

const Calendar: React.FC<CalendarProps> = ({ onDatesSelected }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [dDay, setDDay] = useState<string>(""); // 변경된 부분: D-day를 표시할 상태 변수

  const handleDateChange = (date: Date | null) => {
    if (!startDate) {
      setStartDate(date);
    } else if (!endDate) {
      if (date && date.getTime() >= startDate.getTime()) {
        setEndDate(date);
        onDatesSelected(startDate, date);
      }
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  const handleDateRangeChange = ([startDate, endDate]: [
    Date | null,
    Date | null
  ]) => {
    setStartDate(startDate);
    setEndDate(endDate);
    onDatesSelected(startDate, endDate);
  };

  // 변경된 부분: D-day 계산 함수
  const calculateDDay = () => {
    if (startDate) {
      const today = new Date();
      const dDayValue = Math.floor(
        (startDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      );
      setDDay(`D-${dDayValue}`);
    } else {
      setDDay("");
    }
  };

  useEffect(() => {
    calculateDDay();
  }, [startDate]);

  return (
    <div className="flex justify-center">
      <DatePicker
        selected={startDate}
        onChange={handleDateRangeChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        calendarClassName="text-gray-700"
      />
    </div>
  );
};

export default Calendar;
