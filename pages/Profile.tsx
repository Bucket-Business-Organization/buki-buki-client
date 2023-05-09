import BaseLayout from "../components/BaseLayout";
import SearchForm from "@/components/common/SearchForm";
import { useState } from "react";
import AlertModal from "@/components/common/AlertModal";
import ProfileImage from "@/components/common/ProfileImage";
import Input from "@/components/common/Input";
import InputForm from "@/components/form/InputForm";
import DefaultModal from "@/components/common/DefaultModal";
import DefaultButton from "@/components/common/DefaultButton";

const Profile = () => {
  const [friendDeletion, setFriendDeletion] = useState(false);
  const [groupMemberInformation, setGroupMemberInformation] = useState(false);
  const [groupMemberRemoval, setGroupMemberRemoval] = useState(false);
  const [withdrawalFromMembership, setWithdrawalFromMembership] =
    useState(false);
  const [bucketDeletion, setBucketDeletion] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

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
      <button
        onClick={() => {
          setFriendDeletion(true);
        }}
      >
        친구 삭제 모달
      </button>
      <br />
      <button
        onClick={() => {
          setGroupMemberInformation(true);
        }}
      >
        그룹원 정보 모달
      </button>
      <br />
      <button
        onClick={() => {
          setGroupMemberRemoval(true);
        }}
      >
        그룹원 추방 모달
      </button>
      <br />
      <button
        onClick={() => {
          setBucketDeletion(true);
        }}
      >
        버킷 삭제 모달
      </button>
      <br />
      <button
        onClick={() => {
          setWithdrawalFromMembership(true);
        }}
      >
        회원 탈퇴 모달
      </button>

      <DefaultModal
        isOpen={friendDeletion}
        onClose={() => {
          setFriendDeletion(false);
        }}
        title={"친구 삭제 모달"}
      >
        <div className="text-xl font-medium">
          친구 <span className=" font-bold text-emerald-500">다람쥐</span>님을
          삭제하시겠습니까?
        </div>
        <ProfileImage src="/다람.jpeg" alt="profileImage" size={120} />
        <div className="mb-5">
          <div className="text-sm text-gray-500 text-center	">날떠나지마</div>
          <div className="font-semibold text-emerald-500 text-base ">
            산오르기 그룹
          </div>
        </div>
        <div className="flex space-x-2">
          <DefaultButton
            label="취소"
            onClick={() => {
              setFriendDeletion(false);
            }}
            className="w-24"
          />
          <DefaultButton
            label="확인"
            onClick={() => {
              setFriendDeletion(false);
            }}
            className="w-24"
          />
        </div>
      </DefaultModal>
      <DefaultModal
        isOpen={groupMemberInformation}
        onClose={() => {
          setGroupMemberInformation(false);
        }}
        title={"그룹원 정보 모달"}
      >
        <div className="text-xl font-medium">
          그룹원 <span className=" font-bold text-emerald-500">다람쥐</span>
        </div>
        <ProfileImage src="/다람.jpeg" alt="profileImage" size={120} />
        {true && (
          <div className="mb-5">
            <div className="text-sm text-gray-500 text-center	">찍찍...</div>
            <div className="font-semibold text-emerald-500 text-base ">
              버뮤다뮤다 그룹
            </div>
          </div>
        )}

        <DefaultButton
          label="추방하기"
          onClick={() => {
            setGroupMemberInformation(false);
          }}
          className="w-24"
        />
      </DefaultModal>
      <DefaultModal
        isOpen={groupMemberRemoval}
        onClose={() => {
          setGroupMemberRemoval(false);
        }}
        title={"그룹원 추방 모달"}
      >
        <div className="text-xl font-medium">
          그룹원 <span className=" font-bold text-emerald-500">다람쥐</span>님을
          추방하시겠습니까?
        </div>
        <ProfileImage src="/다람.jpeg" alt="profileImage" size={120} />
        <div className="flex space-x-2">
          <DefaultButton
            label="취소"
            onClick={() => {
              setGroupMemberRemoval(false);
            }}
            className="w-24"
          />
          <DefaultButton
            label="확인"
            onClick={() => {
              setGroupMemberRemoval(false);
            }}
            className="w-24"
          />
        </div>
      </DefaultModal>
      <DefaultModal
        isOpen={bucketDeletion}
        onClose={() => {
          setBucketDeletion(false);
        }}
        title={"버킷 삭제 모달"}
      >
        <div className="text-xl font-medium">버킷삭제</div>
        <span className="my-5">
          해당 버킷을 삭제 하시겠습니까? <br />
          삭제시 복구가 불가능 합니다.
        </span>
        <DefaultButton
          label="동의합니다"
          onClick={() => {
            alert("삭제가 완료되었습니다.");
            setBucketDeletion(false);
          }}
        />
      </DefaultModal>
      <DefaultModal
        isOpen={withdrawalFromMembership}
        onClose={() => {
          setWithdrawalFromMembership(false);
          setIsAgreed(false);
        }}
        title={"회원 탈퇴 모달"}
      >
        <h2 className="text-xl font-medium">회원탈퇴</h2>
        <p className="mb-4">
          탈퇴 완료 후에는 회원님의 모든 정보가 삭제됩니다. 아래 입력창에
          “동의합니다”를 입력하고 확인을 누르면 탈퇴가 완료됩니다.
        </p>
        <p className="text-sm mb-2">
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
