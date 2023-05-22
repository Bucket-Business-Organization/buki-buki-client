import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface Group {
  id: number;
  name: string;
  category: string;
  isPublic: boolean;
  admin: string;
  members: string[];
  description: string;
  createdAt: any;
}

interface GroupInfoModalProps {
  group: Group;
  isOpen: boolean;
  closeModal: () => void;
}

const GroupInfoModal: React.FC<GroupInfoModalProps> = ({
  group,
  isOpen,
  closeModal,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              {group.name}
            </Dialog.Title>

            <div className="mt-2 flex justify-between">
              <p>그룹원: {group.members.length}</p>
              <p>카테고리: {group.category}</p>
              <p>생성일: {group.createdAt}</p>
            </div>

            <h4 className="mt-4 font-bold">그룹 버킷리스트 목록</h4>
            <div className="overflow-y-auto h-32">
              <p>버키버키버키버키</p>
              <p>버키버키버키버키</p>
              <p>버키버키버키버키</p>
              <p>버키버키버키버키</p>
              <p>버키버키버키버키</p>
              <p>버키버키버키버키</p>
              <p>버키버키버키버키</p>
              <p>버키버키버키버키</p>
            </div>

            <div className="mt-4">
              <h4 className="font-bold">그룹 설명</h4>
              <p>{group.description}</p>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={closeModal}
              >
                참여 요청
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default GroupInfoModal;
