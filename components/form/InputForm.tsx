// import { useState } from "react";

// type ProfileFormProps = {
//   name: string;
//   gender: string;
//   numCompleted: number;
//   birthday?: Date;
//   location: string;
//   onSubmit: (values: ProfileFormValues) => void;
// };

// type ProfileFormValues = {
//   name: string;
//   gender: string;
//   numCompleted: number;
//   birthday?: Date;
//   location: string;
// };

// const InputForm = ({
//   name,
//   gender,
//   numCompleted,
//   birthday,
//   location,
//   onSubmit,
// }: ProfileFormProps) => {
//   const [formValues, setFormValues] = useState<ProfileFormValues>({
//     name,
//     gender,
//     numCompleted,
//     birthday: birthday ? new Date(birthday) : undefined,
//     location,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     if (name === "birthday") {
//       const selectedDate = new Date(value);
//       const today = new Date();
//       if (selectedDate > today) {
//         alert("생년월일은 오늘 이전 날짜만 입력 가능합니다.");
//         setFormValues((prevValues) => ({
//           ...prevValues,
//           birthday: undefined,
//         }));
//         return;
//       }
//     }
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: name === "birthday" ? new Date(value) : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const { name, gender, numCompleted, birthday, location } = formValues;
//     if (!name || !gender || !numCompleted || !birthday || !location) {
//       alert("모든 항목을 입력해주세요.");
//       return;
//     }
//     onSubmit(formValues);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="flex flex-col items-center">
//         <h1 className="text-2xl font-bold mb-8">프로필 수정</h1>
//         <div className="w-96 space-y-4">
//           <div>
//             <label htmlFor="name" className="sr-only">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               className="p-2 rounded-md border-gray-300 w-full"
//               placeholder="이름(닉네임)"
//               value={formValues.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="gender" className="sr-only">
//               Gender
//             </label>
//             <input
//               type="text"
//               name="gender"
//               id="gender"
//               className="p-2 rounded-md border-gray-300 w-full"
//               placeholder="성별"
//               value={formValues.gender}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="numCompleted" className="sr-only">
//               Number of Completed Tasks
//             </label>
//             <input
//               type="number"
//               name="numCompleted"
//               id="numCompleted"
//               className="p-2 rounded-md border-gray-300 w-full"
//               placeholder="달성한 버킷리스트 수"
//               value={formValues.numCompleted}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="birthday" className="sr-only">
//               Birthday
//             </label>
//             <input
//               type="date"
//               name="birthday"
//               id="birthday"
//               className="p-2 rounded-md border-gray-300 w-full"
//               placeholder="생년월일"
//               value={formValues.birthday?.toISOString().substr(0, 10)}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="location" className="sr-only">
//               Location
//             </label>
//             <input
//               type="text"
//               name="location"
//               id="location"
//               className="p-2 rounded-md border-gray-300 w-full"
//               placeholder="주거지역"
//               value={formValues.location}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="mt-8 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-2 px-4 rounded-md"
//         >
//           수정완료
//         </button>
//       </div>
//     </form>
//   );
// };

// export default InputForm;

import React, { useState } from "react";
import Input from "../common/Input";
import DefaultButton from "../common/DefaultButton";

interface ProfileFormProps {
  nickname: string;
  gender: string;
  bucketListCount: number;
  birthdate: string;
  location: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  nickname,
  gender,
  bucketListCount,
  birthdate,
  location,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedNickname, setUpdatedNickname] = useState(nickname);
  const [updatedGender, setUpdatedGender] = useState(gender);
  const [updatedBirthdate, setUpdatedBirthdate] = useState(birthdate);
  const [updatedLocation, setUpdatedLocation] = useState(location);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedNickname(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedGender(event.target.value);
  };

  const handleBirthdateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const today = new Date();
    const selectedDate = new Date(event.target.value);
    if (selectedDate > today) {
      // If the selected date is beyond today, set the date to today's date
      alert("생년월일을 확인해주세요");
    } else {
      setUpdatedBirthdate(event.target.value);
    }
  };
  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedLocation(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    // Save the updated profile information here
    setUpdatedNickname(updatedNickname);
    setUpdatedGender(updatedGender);
    setUpdatedBirthdate(updatedBirthdate);
    setUpdatedLocation(updatedLocation);
    setIsEditMode(false);
  };

  const handleCancelClick = () => {
    // Reset the updated profile information to the original values here
    setIsEditMode(false);
  };

  return (
    <div>
      <h1>Profile</h1>
      <Input
        id="nickname"
        label="Nickname"
        value={updatedNickname}
        onChange={handleNicknameChange}
        showLabel={false}
        disabled={!isEditMode}
        defaultValue={updatedNickname}
        placeholder="이름(닉네임)"
      />
      <Input
        id="gender"
        label="Gender"
        value={updatedGender}
        onChange={handleGenderChange}
        showLabel={false}
        disabled={!isEditMode}
        defaultValue={updatedGender}
        placeholder="성별"
      />
      <Input
        id="bucketListCount"
        label="Bucket List Count"
        type="number"
        value={bucketListCount !== undefined ? bucketListCount.toString() : ""}
        onChange={() => {}}
        showLabel={false}
        disabled={true}
        defaultValue={
          bucketListCount !== undefined ? bucketListCount.toString() : ""
        }
        placeholder="달성한 버킷리스트 수"
      />

      <Input
        id="birthdate"
        label="Birthdate"
        type="date"
        value={updatedBirthdate}
        onChange={handleBirthdateChange}
        showLabel={false}
        disabled={!isEditMode}
        defaultValue={updatedBirthdate}
        placeholder="생년월일"
      />
      <Input
        id="location"
        label="Location"
        value={updatedLocation}
        onChange={handleLocationChange}
        showLabel={false}
        disabled={!isEditMode}
        defaultValue={updatedLocation}
        placeholder="주거지역"
      />
      {isEditMode ? (
        <>
          <div className="flex space-x-2">
            <DefaultButton label="프로필 수정완료" onClick={handleSaveClick} />
            <DefaultButton label="수정취소" onClick={handleCancelClick} />
          </div>
        </>
      ) : (
        <DefaultButton label="프로필 수정하기" onClick={handleEditClick} />
      )}
    </div>
  );
};

export default ProfileForm;
