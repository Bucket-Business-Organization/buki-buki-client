import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type CalendarModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onDatesSelected: (startDate: Date | null, endDate: Date | null) => void;
};

const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  onClose,
  onDatesSelected,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateRangeChange = ([startDate, endDate]: [
    Date | null,
    Date | null
  ]) => {
    setStartDate(startDate);
    setEndDate(endDate);
    onDatesSelected(startDate, endDate);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full overflow-y-auto bg-black bg-opacity-50 z-40 flex justify-center items-center">
          <div
            className="bg-white w-90 rounded-lg max-w-full mx-auto p-6 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-3 flex flex-col items-center justify-center">
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
          </div>
        </div>
      )}
    </>
  );
};

export default CalendarModal;
