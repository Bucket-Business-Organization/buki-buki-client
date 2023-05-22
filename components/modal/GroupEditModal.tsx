import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface EditModalProps {
  isOpen: boolean;
  closeModal: () => void;
  groupName: string;
  setGroupName: (name: string) => void;
  groupCategory: string;
  setGroupCategory: (category: string) => void;
  isPublic: boolean;
  setIsPublic: (isPublic: boolean) => void;
  groupMembers: string[];
  setGroupMembers: (members: string[]) => void;
  groupDescription: string;
  setGroupDescription: (description: string) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  closeModal,
  groupName,
  setGroupName,
  groupCategory,
  setGroupCategory,
  isPublic,
  setIsPublic,
  groupMembers,
  setGroupMembers,
  groupDescription,
  setGroupDescription,
}) => {
  const [newMember, setNewMember] = useState("");

  const handleAddMember = () => {
    setGroupMembers([...groupMembers, newMember]);
    setNewMember("");
  };

  const handleRemoveMember = (member: string) => {
    setGroupMembers(groupMembers.filter((m) => m !== member));
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          {/* Modal content */}
          <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title className="text-2xl font-bold px-6 py-4">
              그룹 수정
            </Dialog.Title>
            <div className="px-6 py-4">
              <div className="mb-4">
                <label className="block mb-2">그룹명</label>
                <input
                  type="text"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">그룹 카테고리</label>
                <input
                  type="text"
                  value={groupCategory}
                  onChange={(e) => setGroupCategory(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">그룹 공개 여부</label>
                <input
                  type="checkbox"
                  checked={isPublic}
                  onChange={(e) => setIsPublic(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="isPublic">공개</label>
              </div>
              <div className="mb-4">
                <label className="block mb-2">그룹원</label>
                <ul className="list-disc pl-5">
                  {groupMembers.map((member) => (
                    <li key={member} className="mb-2">
                      {member}
                      <button
                        onClick={() => handleRemoveMember(member)}
                        className="ml-4 text-sm text-red-500"
                      >
                        삭제
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center mt-2">
                  <input
                    type="text"
                    value={newMember}
                    onChange={(e) => setNewMember(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 mr-4"
                  />
                  <button
                    onClick={handleAddMember}
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    추가
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2">그룹 설명</label>
                <textarea
                  value={groupDescription}
                  onChange={(e) => setGroupDescription(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  rows={4}
                />
              </div>
            </div>
            <div className="px-6 py-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-black rounded-md mr-4"
              >
                취소
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                저장
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditModal;
