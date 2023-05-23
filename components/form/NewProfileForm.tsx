import React from "react";
import ProfileImage from "../common/ProfileImage";
import Input from "../common/Input";

interface NewProfileFormProps {
  // Props 정의
}

const NewProfileForm: React.FC<NewProfileFormProps> = () => {
  const handleSave = () => {
    // 프로필 정보 저장 처리
  };

  const handleEdit = () => {
    // 프로필 정보 수정 처리
  };

  return (
    <div className="flex">
      <div className="flex items-center">
        <ProfileImage src={"/다람.jpeg"} alt={"다람쥐 프로필"} />
      </div>
      <div className="ml-4">
        <Input id={""} label={""} />
        <div className="flex items-center">
          <label htmlFor="name" className="mr-2">
            이름:
          </label>
          <input type="text" id="name" />
        </div>
        <div className="flex items-center">
          <label htmlFor="gender" className="mr-2">
            성별:
          </label>
          <input type="text" id="gender" />
        </div>
        <div className="flex items-center">
          <label htmlFor="birthdate" className="mr-2">
            생년월일:
          </label>
          <input type="text" id="birthdate" />
        </div>
        <div className="flex items-center">
          <label htmlFor="location" className="mr-2">
            주거지역:
          </label>
          <input type="text" id="location" />
        </div>
        <div>
          <button onClick={handleSave} className="mr-2">
            내 정보 관리
          </button>
          <button onClick={handleEdit}>수정하기</button>
        </div>
      </div>
    </div>
  );
};

export default NewProfileForm;
