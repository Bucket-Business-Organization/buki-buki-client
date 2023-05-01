import { useState } from "react";
import tw from "tailwind-styled-components";

type ProfileFormProps = {
  name: string;
  gender: string;
  numCompleted: number;
  birthday?: Date;
  location: string;
  onSubmit: (values: ProfileFormValues) => void;
};

type ProfileFormValues = {
  name: string;
  gender: string;
  numCompleted: number;
  birthday?: Date;
  location: string;
};

const ProfileForm = ({
  name,
  gender,
  numCompleted,
  birthday,
  location,
  onSubmit,
}: ProfileFormProps) => {
  const [formValues, setFormValues] = useState<ProfileFormValues>({
    name,
    gender,
    numCompleted,
    birthday: birthday ? new Date(birthday) : undefined,
    location,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "birthday") {
      const selectedDate = new Date(value);
      const today = new Date();
      if (selectedDate > today) {
        alert("생년월일은 오늘 이전 날짜만 입력 가능합니다.");
        setFormValues((prevValues) => ({
          ...prevValues,
          birthday: undefined,
        }));
        return;
      }
    }
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: name === "birthday" ? new Date(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, gender, numCompleted, birthday, location } = formValues;
    if (!name || !gender || !numCompleted || !birthday || !location) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-8">프로필 수정</h1>
        <div className="w-96 space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="p-2 rounded-md border-gray-300 w-full"
              placeholder="이름(닉네임)"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="gender" className="sr-only">
              Gender
            </label>
            <input
              type="text"
              name="gender"
              id="gender"
              className="p-2 rounded-md border-gray-300 w-full"
              placeholder="성별"
              value={formValues.gender}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="numCompleted" className="sr-only">
              Number of Completed Tasks
            </label>
            <input
              type="number"
              name="numCompleted"
              id="numCompleted"
              className="p-2 rounded-md border-gray-300 w-full"
              placeholder="달성한 버킷리스트 수"
              value={formValues.numCompleted}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="birthday" className="sr-only">
              Birthday
            </label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              className="p-2 rounded-md border-gray-300 w-full"
              placeholder="생년월일"
              value={formValues.birthday?.toISOString().substr(0, 10)}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="location" className="sr-only">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="p-2 rounded-md border-gray-300 w-full"
              placeholder="주거지역"
              value={formValues.location}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 bg-emerald-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          수정완료
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
