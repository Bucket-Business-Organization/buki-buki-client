import React, { useState } from "react";
import Input from "../common/Input";
import DefaultButton from "../common/DefaultButton";
import ProfileImage from "../common/ProfileImage";
import { BsFillPencilFill } from "react-icons/bs";
import WithdrawalModal from "../modal/WithdrawalFromMembership";

interface ProfileFormProps {
  nickname: string;
  gender: string;
  bucketListCount: number;
  birthdate: string;
  location: string;
  password: string;
}

const MyProfileForm: React.FC<ProfileFormProps> = ({
  nickname,
  gender,
  bucketListCount,
  birthdate,
  location,
  password,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isNickNameEditMode, setIsNickNameEditMode] = useState(false);
  const [isPasswordEditMode, setIsPasswordEditMode] = useState(false);
  const [isMyInfoMode, setIsMyInfoMode] = useState(false);
  const [updatedNickname, setUpdatedNickname] = useState("현의 선");
  const [updatedGender, setUpdatedGender] = useState("여자");
  const [updatedBirthdate, setUpdatedBirthdate] = useState("1998-04-04");
  const [updatedPassword, setUpdatedPassword] = useState("12345");
  const [updatedLocation, setUpdatedLocation] = useState("서울시 송파구");
  const [withdrawalFromMembership, setWithdrawalFromMembership] =
    useState(false);

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
  const handleMyInfoClick = () => {
    setIsMyInfoMode(true);
  };
  const handlNickNameEditClick = () => {
    setIsNickNameEditMode(true);
  };
  const handlPasswordEditClick = () => {
    setIsPasswordEditMode(true);
  };

  const handleSaveClick = () => {
    // Save the updated profile information here
    setUpdatedNickname(updatedNickname);
    setUpdatedGender(updatedGender);
    setUpdatedBirthdate(updatedBirthdate);
    setUpdatedLocation(updatedLocation);
    setIsEditMode(false);
  };
  const handleSaveNickNameClick = () => {
    // Save the updated profile information here
    setUpdatedNickname(updatedNickname);
    setIsNickNameEditMode(false);
  };
  const handlePaswwordSaveClick = () => {
    // Save the updated profile information here
    setUpdatedPassword(updatedPassword);
    setIsPasswordEditMode(false);
  };

  const handleCancelClick = () => {
    // Reset the updated profile information to the original values here
    setIsEditMode(false);
  };
  const handleNickCancelClick = () => {
    // Reset the updated profile information to the original values here
    setIsNickNameEditMode(false);
  };
  const handleNPasswordCancelClick = () => {
    // Reset the updated profile information to the original values here
    setIsPasswordEditMode(false);
  };

  return (
    <div className="rounded-2xl	border-solid	border-gray-200 border p-4 py-1">
      {/* 내정보 */}
      {isMyInfoMode ? (
        <div
          className={
            !isMyInfoMode
              ? "flex  items-center justify-between"
              : "flex  items-center justify-center"
          }
        >
          <div className="flex items-center justify-center flex-col h-full">
            <div className="flex items-center justify-center">
              <ProfileImage src="/다람.jpeg" alt="다람쥐 프로필" />
            </div>
            {/* 닉 변경 */}
            {!isNickNameEditMode ? (
              <div className="flex items-center justify-center">
                <div className="text-xl flex items-center justify-center mr-2">
                  현의 선
                </div>
                <BsFillPencilFill
                  className="text-gray-400"
                  onClick={handlNickNameEditClick}
                />
              </div>
            ) : (
              <div className="">
                <div className="flex">
                  <div className="text-gray-500 w-20 ">닉네임</div>

                  <Input
                    id="닉네임"
                    label="닉네임"
                    value={updatedNickname}
                    onChange={handleNicknameChange}
                    showLabel={false}
                    disabled={!isNickNameEditMode}
                    defaultValue={updatedNickname}
                    placeholder="이름(닉네임)"
                  />
                </div>

                <div className="text-right">
                  <div className="flex justify-end">
                    <DefaultButton
                      label="확인"
                      onClick={handleSaveNickNameClick}
                      className="text-sm text-blue-600 bg-white hover:bg-white"
                    />
                    <DefaultButton
                      label="취소"
                      onClick={handleNickCancelClick}
                      className="text-sm text-blue-600 bg-white hover:bg-white"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {isMyInfoMode ? null : (
            <div>
              <DefaultButton
                label={`내 정보 관리 >`}
                onClick={handleMyInfoClick}
                className=" text-sm  hover:bg-white hover:text-black text-green-950 bg-white"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="">
          <div className="flex  items-center justify-between">
            <div className="flex items-center justify-center text-center ">
              <div className="flex items-center justify-center ml-3">
                <ProfileImage src={"/다람.jpeg"} alt={"다람쥐 프로필"} />
              </div>
              <div className="text-xl ml-10 ">현의 선</div>
            </div>

            {isMyInfoMode ? null : (
              <div>
                <DefaultButton
                  label={`내 정보 관리 >`}
                  onClick={handleMyInfoClick}
                  className=" text-sm  hover:bg-white hover:text-black text-green-950 bg-white"
                />
              </div>
            )}
          </div>
          <div className="flex items-start px-2 ">
            <DefaultButton
              label={"버킷 보러가기"}
              onClick={() => {
                alert("버킷목록");
              }}
              className="text-sm	px-1 mr-9"
            />
            {!isEditMode ? (
              <div className="text-base leading-relaxed">
                <div>{updatedGender}</div>
                <div>{updatedBirthdate}</div>
                <div>{updatedLocation}</div>
              </div>
            ) : (
              <div className="">
                <div className="flex items-center ">
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
                </div>
                <div className="flex items-center">
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
                </div>
                <div className="flex items-center">
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
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {!isMyInfoMode ? (
        <div className="text-right">
          {isEditMode ? (
            <>
              <div className="flex justify-end">
                <DefaultButton
                  label="수정완료"
                  onClick={handleSaveClick}
                  className="text-sm text-blue-600 bg-white hover:bg-white"
                />
                <DefaultButton
                  label="수정취소"
                  onClick={handleCancelClick}
                  className="text-sm text-blue-600 bg-white hover:bg-white"
                />
              </div>
            </>
          ) : (
            <DefaultButton
              label={"수정하기"}
              onClick={handleEditClick}
              className="text-sm text-blue-600 bg-white hover:bg-white"
            />
          )}
        </div>
      ) : null}
      {/* 개인정보 비밀번호 변경 */}
      {isMyInfoMode ? (
        <div className="mt-10 w-2/3 flex flex-col justify-center m-auto ">
          <h2 className="text-lg font-bold border-b border-black mb-4">
            개인정보
          </h2>
          <div className="flex ">
            <div className="text-gray-500 w-20 ">이메일</div>

            <div className="text-black">yseon@naver.com</div>
          </div>
          {!isPasswordEditMode ? (
            <div className="w-full  flex justify-between">
              <div className="flex ">
                <div className="text-gray-500 w-20 ">비밀번호</div>
                <Input
                  id={"비밀번호"}
                  label={"비밀번호"}
                  defaultValue={updatedPassword}
                  type="password"
                  showLabel={false}
                  disabled={!isPasswordEditMode}
                  className="border-none ml-4"
                />
              </div>
              <DefaultButton
                label={"변경하기"}
                onClick={handlPasswordEditClick}
                className="text-sm text-blue-600 bg-white hover:bg-white"
              />
            </div>
          ) : (
            <div>
              <div className="flex mt-4">
                <h2 className="text-gray-500 w-20">비밀번호</h2>
                <div className="w-full">
                  <Input
                    id={"현재 비밀번호"}
                    label={"현재 비밀번호"}
                    type="password"
                    showLabel={false}
                    disabled={isPasswordEditMode}
                    placeholder="현재 비밀번호"
                  />
                  <Input
                    id={"새 비밀번호"}
                    label={"새 비밀번호"}
                    type="password"
                    showLabel={false}
                    disabled={isPasswordEditMode}
                    placeholder="새 비밀번호"
                  />
                  <Input
                    id={"새 비밀번호 확인"}
                    label={"새 비밀번호 확인"}
                    type="password"
                    showLabel={false}
                    disabled={isPasswordEditMode}
                    placeholder="새 비밀번호 확인"
                  />
                </div>
              </div>
              <div className="text-right">
                <div className="flex justify-end">
                  <DefaultButton
                    label="확인"
                    onClick={handlePaswwordSaveClick}
                    className="text-sm text-blue-600 bg-white hover:bg-white"
                  />
                  <DefaultButton
                    label="취소"
                    onClick={handleNPasswordCancelClick}
                    className="text-sm text-blue-600 bg-white hover:bg-white"
                  />
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-between items-center border-b border-black my-4">
            <h2 className="text-lg font-bold  ">회원탈퇴</h2>
            <button
              className="mr-5"
              onClick={() => {
                setWithdrawalFromMembership(true);
              }}
            >{`>`}</button>
            <WithdrawalModal
              withdrawalFromMembership={withdrawalFromMembership}
              setWithdrawalFromMembership={setWithdrawalFromMembership}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MyProfileForm;
