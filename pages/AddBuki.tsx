import Calendar from "@/components/common/Calendar";
import DefaultButton from "@/components/common/DefaultButton";
import Input from "@/components/common/Input";
import CalendarModal from "@/components/modal/CalendarModal";
import React, { useEffect, useState } from "react";
import { BsFillCalendarHeartFill } from "react-icons/bs";

interface CategoryOption {
  value: string;
  label: string;
}

const AddBuki: React.FC = () => {
  const [title, setTitle] = useState("");
  const [dDay, setDDay] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null); // 수정된 부분: 시작일 상태 추가
  const [endDate, setEndDate] = useState<Date | null>(null); // 수정된 부분: 종료일 상태 추가
  const [memo, setMemo] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [categoryOptions] = useState<CategoryOption[]>([
    { value: "travel", label: "여행" },
    { value: "food", label: "음식" },
    { value: "activity", label: "활동" },
  ]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [privacyOptions] = useState<CategoryOption[]>([
    { value: "only-me", label: "나만 보기" },
    { value: "friends", label: "친구" },
    { value: "public", label: "전체 공개" },
  ]);
  const [selectedPrivacy, setSelectedPrivacy] = useState<string>("only-me");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false); // 수정된 부분: 시작일 선택 상태
  const [showEndDatePicker, setShowEndDatePicker] = useState(false); // 수정된 부분: 종료일 선택 상태

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDDay(event.target.value);
  };

  // 수정된 부분: 시작일 변경 핸들러
  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  // 수정된 부분: 종료일 변경 핸들러
  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleMemoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setImage(fileList[0]);
    }
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const options = event.target.options;
    const selectedOptions: string[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    setSelectedCategories(selectedOptions);
  };

  const handlePrivacyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrivacy(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Form submitted:", {
      title,
      startDate,
      endDate,
      memo,
      image,
      categories: selectedCategories,
      privacy: selectedPrivacy,
    });
  };

  // 수정된 부분: D-day 값을 계산하는 함수
  const calculateDDay = () => {
    if (startDate && endDate) {
      const today = new Date();
      const dDayValue = Math.floor(
        (startDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      );
      setDDay(dDayValue >= 0 ? `D-${dDayValue}` : `D+${Math.abs(dDayValue)}`);
    } else {
      setDDay("");
    }
  };

  // 수정된 부분: D-day 값이 변경될 때마다 계산하기
  useEffect(() => {
    calculateDDay();
  }, [startDate, endDate]);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  // 수정된 부분: 달력 모달을 열고 닫는 함수
  const toggleCalendarModal = () => {
    setShowCalendar(!showCalendar);
  };

  // 수정된 부분: 시작일 선택 모달을 열고 닫는 함수
  const toggleStartDatePicker = () => {
    setShowStartDatePicker(!showStartDatePicker);
  };

  // 수정된 부분: 종료일 선택 모달을 열고 닫는 함수
  const toggleEndDatePicker = () => {
    setShowEndDatePicker(!showEndDatePicker);
  };

  return (
    <div className="w-2/3 m-auto">
      <h1 className="text-center mb-6 text-xl text-emerald-500">
        버킷리스트 추가
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
          id="title"
          label="제목"
          value={title}
          onChange={handleTitleChange}
          placeholder="버킷리스트 항목의 제목을 입력하세요."
        />
        <div className="flex items-center">
          <Input
            id="d-day"
            label="D-day"
            type="text"
            value={dDay}
            onChange={handleDDayChange}
            placeholder="시작일과 종료일을 선택해주세요."
          />

          <div>
            <button type="button" onClick={toggleCalendarModal}>
              <BsFillCalendarHeartFill className="ml-2 text-xl text-emerald-500" />
            </button>
          </div>
        </div>
        {!showCalendar ? (
          <Calendar
            onDatesSelected={function (
              startDate: Date | null,
              endDate: Date | null
            ) {
              setStartDate(startDate);
              setEndDate(endDate);
            }}
          />
        ) : null}
        {/* 수정된 부분: 시작일 선택 모달 */}
        {showStartDatePicker && (
          <CalendarModal
            isOpen={showStartDatePicker}
            onClose={toggleStartDatePicker}
            onDatesSelected={handleStartDateChange}
          />
        )}
        {/* 수정된 부분: 종료일 선택 모달 */}
        {showEndDatePicker && (
          <CalendarModal
            isOpen={showEndDatePicker}
            onClose={toggleEndDatePicker}
            onDatesSelected={handleEndDateChange}
          />
        )}
        <CalendarModal
          isOpen={true}
          onClose={toggleEndDatePicker}
          onDatesSelected={handleEndDateChange}
        />
        <Input
          id="memo"
          label="메모"
          value={memo}
          onChange={handleMemoChange}
          placeholder="버킷리스트 항목에 대한 설명을 입력하세요."
          type="textarea"
        />
        <Input
          id="image"
          label="이미지"
          type="file"
          onChange={handleImageChange}
          accept="image/*"
        />{" "}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="category">카테고리</label>
            <select
              id="category"
              value={selectedCategories}
              onChange={handleCategoryChange}
              multiple
            >
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="privacy">공개 범위</label>
            <select
              id="privacy"
              value={selectedPrivacy}
              onChange={handlePrivacyChange}
            >
              {privacyOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <DefaultButton
          type="submit"
          label={"추가하기"}
          onClick={() => {
            alert("추가완료");
          }}
        />
      </form>
    </div>
  );
};

export default AddBuki;
