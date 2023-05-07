import React, { useState } from 'react';
import EditModal from '@/components/common/EditModal';
import BaseLayout from '@/components/BaseLayout';


const GroupList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupName, setGroupName] = useState('Example Group');
  const [groupCategory, setGroupCategory] = useState('Travel');
  const [isPublic, setIsPublic] = useState(true);
  const [groupMembers, setGroupMembers] = useState(['John Doe', 'Jane Smith']);
  const [groupDescription, setGroupDescription] = useState('This is an example group for bucket lists.');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BaseLayout>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">그룹: {groupName}</h1>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-green-500 text-white rounded-md"
      >
        그룹 수정
      </button>
      <EditModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        groupName={groupName}
        setGroupName={setGroupName}
        groupCategory={groupCategory}
        setGroupCategory={setGroupCategory}
        isPublic={isPublic}
        setIsPublic={setIsPublic}
        groupMembers={groupMembers}
        setGroupMembers={setGroupMembers}
        groupDescription={groupDescription}
        setGroupDescription={setGroupDescription}
      />
    </div>
    </BaseLayout>
  );
};

export default GroupList;
