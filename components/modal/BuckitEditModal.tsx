import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface Bucket {
  id: number;
  content: string;
  date: string;
  dDay: number;
  writer: string;
  status: string;
  category: string[];
  progress: number;
  members: string[];
  etc: string;
}

interface BucketEditModalProps {
  bucket: Bucket;
  isOpen: boolean;
  closeModal: () => void;
}

const BucketEditModal: React.FC<BucketEditModalProps> = ({
  bucket,
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
              {bucket.content}
            </Dialog.Title>

            <div className="mt-2 flex justify-between">
              <p>날짜: {bucket.date}</p>
              <p>d-day: {bucket.dDay}</p>
            </div>

            <div className="mt-2">
              <p>작성자: {bucket.writer}</p>
            </div>

            <div className="mt-4">
              <h4 className="font-bold">진행 상태</h4>
              <p>{bucket.status}</p>
            </div>

            <div className="mt-4">
              <h4 className="font-bold">카테고리</h4>
              {bucket.category.map((cat, index) => (
                <p key={index}>{cat}</p>
              ))}
            </div>

            <div className="mt-4">
              <h4 className="font-bold">진행도</h4>
              <p>{bucket.progress}%</p>
            </div>

            <div className="mt-4">
              <h4 className="font-bold">그룹원</h4>
              <p>{bucket.members.join(", ")}</p>
            </div>

            <div className="mt-4">
              <h4 className="font-bold">기타 내용</h4>
              <p>{bucket.etc}</p>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={closeModal}
              >
                수정
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BucketEditModal;
