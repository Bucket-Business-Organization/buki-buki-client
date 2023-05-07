import { useState } from "react";
import DefaultButton from "./DefaultButton";

type Props = {
  isWithdraw?: boolean;
  isDeleteBucket?: boolean;
  onClose: () => void;
};

const AlertModal: React.FC<Props> = ({
  isWithdraw = false,
  isDeleteBucket = false,
  onClose,
}) => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "동의합니다") {
      setIsAgreed(true);
    } else {
      setIsAgreed(false);
    }
  };

  const handleConfirmClick = () => {
    if (isWithdraw) {
      if (isAgreed) {
        console.log("탈퇴 완료");
        onClose(); // 모달 닫기
      } else {
        alert("회원 탈퇴에 동의해주세요.");
      }
    } else if (isDeleteBucket) {
      alert("삭제 완료!");
      onClose();
    }
  };

  const handleOverlayClick = () => {
    onClose(); // 모달 닫기
  };

  return (
    <div>
      {
        <div
          className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleOverlayClick} // 모달 바깥 영역 클릭 이벤트 추가
        >
          <div
            className="bg-white w-96 p-8 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {isWithdraw && (
              <div>
                <h2 className="text-lg font-bold mb-4">{`정말 탈퇴하시겠습니까?`}</h2>
                <p className="mb-4">
                  탈퇴 완료 후에는 회원님의 모든 정보가 삭제됩니다. 아래
                  입력창에 “동의합니다”를 입력하고 확인을 누르면 탈퇴가
                  완료됩니다.
                </p>
                <p className="text-sm mb-2">
                  위 내용을 확인했으며 회원 탈퇴를 동의하십니까?
                </p>
              </div>
            )}
            {isDeleteBucket && (
              <div>
                <h2 className="text-lg font-bold mb-4">
                  해당 버킷을 삭제 하시겠습니까?{" "}
                </h2>
                <p className="mb-4">삭제 시 복구가 불가능 합니다.</p>
              </div>
            )}
            {isWithdraw && (
              <div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="동의합니다"
                    onChange={handleInputChange}
                    className="border border-gray-400 p-2 rounded w-full"
                  />
                </div>
                <DefaultButton
                  label="확인"
                  onClick={handleConfirmClick}
                  disabled={!isAgreed}
                  className={`w-full ${
                    isAgreed ? "" : "bg-gray-400"
                  } text-white`}
                />
              </div>
            )}
            {isDeleteBucket && (
              <DefaultButton
                label="확인"
                onClick={handleConfirmClick}
                className={`w-full ${isAgreed ? "" : "bg-gray-400"} text-white`}
              />
            )}
          </div>
        </div>
      }
    </div>
  );
};

export default AlertModal;
