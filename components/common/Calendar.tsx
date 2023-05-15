import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type CalendarProps = {
  onDatesSelected: (startDate: Date | null, endDate: Date | null) => void;
};

const Calendar: React.FC<CalendarProps> = ({ onDatesSelected }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

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
