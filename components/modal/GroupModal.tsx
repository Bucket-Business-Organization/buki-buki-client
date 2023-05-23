import React from "react";
import { Dialog, Transition } from "@headlessui/react";

interface GroupModalProps {
  isOpen: boolean;
  closeModal: () => void;
  group: {
    name: string;
    createdAt: string;
    category: string;
    isPublic: boolean;
    admin: string;
    members: string[];
    description: string;
  };
  currentUser: string;
  onGroupBucketClick: () => void;
  onGroupManageClick: () => void;
  onGroupLeaveOrDeleteClick: () => void;
}

const GroupModal: React.FC<GroupModalProps> = ({
  isOpen,
  closeModal,
  group,
  currentUser,
  onGroupBucketClick,
  onGroupManageClick,
  onGroupLeaveOrDeleteClick,
}) => {
  const isAdmin = currentUser === group.admin;

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
              그룹 조회
            </Dialog.Title>
            <div className="px-6 py-4">
              <div className="mb-4">
                <h2 className="text-xl font-bold">그룹명</h2>
                <p>{group.name}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold">그룹 생성일자</h2>
                <p>{group.createdAt}</p>
              </div>
              <div className="mb-4 flex justify-between">
                <div>
                  <h2 className="text-xl font-bold">그룹 카테고리</h2>
                  <p>{group.category}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold">그룹 공개 여부</h2>
                  <p>{group.isPublic ? "공개" : "비공개"}</p>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold">그룹 관리자</h2>
                <p className="flex flex-wrap">{group.admin}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold">그룹원</h2>
                <ul className="flex flex-wrap list-disc pl-5">
                  {group.members.map((member) => (
                    <li key={member} className="pr-5">
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold">그룹 설명</h2>
                <p>{group.description}</p>
              </div>
            </div>
            <div className="px-6 py-4 flex justify-between space-x-4">
              <button
                onClick={onGroupBucketClick}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                그룹 버킷
              </button>
              {isAdmin && (
                <button
                  onClick={onGroupManageClick}
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  그룹 관리
                </button>
              )}
              <button
                onClick={onGroupLeaveOrDeleteClick}
                className={`px-4 py-2 ${
                  isAdmin ? "bg-red-500" : "bg-yellow-500"
                } text-white rounded-md`}
              >
                {isAdmin ? "그룹 삭제" : "그룹 나가기"}
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default GroupModal;
