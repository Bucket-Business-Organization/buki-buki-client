import React, { useState } from "react";
import Input from "../common/Input";
import DefaultButton from "../common/DefaultButton";
interface CategoryOption {
  value: string;
  label: string;
}

const AddBukiForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
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

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
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

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="title"
        label="제목"
        value={title}
        onChange={handleTitleChange}
        placeholder="버킷리스트 항목의 제목을 입력하세요."
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          id="start-date"
          label="시작일"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <Input
          id="end-date"
          label="종료일"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
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
      />
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
  );
};

export default AddBukiForm;
