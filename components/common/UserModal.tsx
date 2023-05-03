import { Fragment } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  userName: string;
  userStatusMessage: string;
  groupName: string;
  isConfirm: boolean;
  showUserInfo: boolean;
};

const UserModal = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  userName,
  userStatusMessage,
  groupName,
  isConfirm,
  showUserInfo,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Fragment>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-40 flex justify-center items-center"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-md shadow-md p-4 flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-lg font-medium">
            친구 <span className="text-emerald-500">{userName}</span>님을
            삭제하시겠습니까?
          </div>
          <div className="mb-4">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-full"
              width={80}
              height={80}
            />
          </div>
          {showUserInfo && (
            <div className="mb-4">
              <div className="text-sm">{userStatusMessage}</div>
              <div className="bg-emerald-500">{groupName}</div>
            </div>
          )}
          {isConfirm ? (
            <div className="mt-auto flex justify-end space-x-4">
              <button
                className="py-2 px-4 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                onClick={onClose}
              >
                취소
              </button>
              <button
                className="py-2 px-4 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                onClick={onClose}
              >
                확인
              </button>
            </div>
          ) : (
            <button
              className="py-2 px-4 rounded-md text-white bg-red-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
              onClick={onClose}
            >
              추방하기
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default UserModal;
