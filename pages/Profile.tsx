import InputForm from "@/components/common/InputForm";
import BaseLayout from "../components/BaseLayout";
import SearchForm from "@/components/common/SearchForm";
import UserModal from "@/components/common/UserModal";

import { useState } from "react";
import AlertModal from "@/components/common/AlertModal";
import ProfileImage from "@/components/common/ProfileImage";

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
      <InputForm />
      <SearchForm />
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
    </BaseLayout>
  );
};

export default Profile;
