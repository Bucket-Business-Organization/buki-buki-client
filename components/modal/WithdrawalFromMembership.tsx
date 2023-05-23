import React, { useState, Dispatch, SetStateAction } from "react";
import DefaultButton from "../common/DefaultButton";
import DefaultModal from "../common/DefaultModal";
import Input from "../common/Input";

interface WithdrawalModalProps {
  withdrawalFromMembership: boolean;
  setWithdrawalFromMembership: Dispatch<SetStateAction<boolean>>;
}

const WithdrawalModal: React.FC<WithdrawalModalProps> = ({
  withdrawalFromMembership,
  setWithdrawalFromMembership,
}) => {
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <DefaultModal
      isOpen={withdrawalFromMembership}
      onClose={() => {
        setWithdrawalFromMembership(false);
        setIsAgreed(false);
      }}
      title={"회원 탈퇴 모달"}
    >
      <h2 className="text-xl font-medium">회원탈퇴</h2>
      <p className="my-5">
        탈퇴 완료 후에는 회원님의 모든 정보가 삭제됩니다. 아래 입력창에
        “동의합니다”를 입력하고 확인을 누르면 탈퇴가 완료됩니다.
      </p>
      <p className="text-sm mb-2 text-red-500">
        위 내용을 확인했으며 회원 탈퇴를 동의하십니까?
      </p>

      <div>
        <div className="mb-4">
          <Input
            placeholder="동의합니다"
            onChange={(e) => {
              if (e.target.value === "동의합니다") {
                setIsAgreed(true);
              } else {
                setIsAgreed(false);
              }
            }}
            id={"회원탈퇴인풋"}
            label={"회원탈퇴인풋"}
            showLabel={false}
          />
        </div>
        <DefaultButton
          label="확인"
          onClick={() => {
            if (isAgreed) {
              console.log("탈퇴 완료");
              setWithdrawalFromMembership(false); // 모달 닫기
            } else {
              alert("회원 탈퇴에 동의해주세요.");
            }
          }}
          disabled={!isAgreed}
          className={`w-full ${isAgreed ? "" : "bg-gray-400"} text-white`}
        />
      </div>
    </DefaultModal>
  );
};

export default WithdrawalModal;
