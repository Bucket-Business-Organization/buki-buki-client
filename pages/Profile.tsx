import BaseLayout from "../components/BaseLayout";
import SearchForm from "@/components/common/SearchForm";
import UserModal from "@/components/common/UserModal";

import { useState } from "react";
import AlertModal from "@/components/common/AlertModal";
import ProfileImage from "@/components/common/ProfileImage";
import Input from "@/components/common/Input";
import InputForm from "@/components/form/InputForm";

const Profile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCloseAlertModal = () => {
    setShowAlertModal(false);
  };

  return (
    <BaseLayout>
      <InputForm
        name="다람쥐"
        gender="남"
        numCompleted={3}
        birthday={new Date("1997-01-01")}
        location="서울"
        onSubmit={(values) => console.log(values)}
      />
      <SearchForm onSearch={(searchText) => console.log(searchText)} />
      <button onClick={handleOpenModal}>Open UserModal</button>
      <br />
      <button onClick={() => setShowAlertModal(true)}>Open AlertModal</button>
      <UserModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        imageSrc="https://i.ibb.co/h7453Mp/image.png"
        imageAlt="Profile image"
        userName="다람쥐"
        userStatusMessage="날 떠나지마"
        groupName="산오르기"
        isConfirm={false}
        showUserInfo={false}
      />
      {showAlertModal && (
        <AlertModal onClose={handleCloseAlertModal} isWithdraw />
      )}
      <ProfileImage src="/다람.jpeg" />
      <Input id="name" label="name" placeholder="이름(닉네임)" />
      <Input id="gender" label="gender" placeholder="성별" />
      <Input
        id="numCompleted"
        label="numCompleted"
        placeholder="달성한 버킷 리스트 수"
      />
      <Input id="birthday" label="birthday" placeholder="생년월일" />
      <Input id="location" label="location" placeholder="주거지역" />
    </BaseLayout>
  );
};

export default Profile;
