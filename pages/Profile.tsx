import BaseLayout from "../components/BaseLayout";
import SearchForm from "@/components/common/SearchForm";
import { useState } from "react";
import ProfileImage from "@/components/common/ProfileImage";
import Input from "@/components/common/Input";
import MyProfileForm from "@/components/form/MyProfileForm";
import DefaultModal from "@/components/common/DefaultModal";
import DefaultButton from "@/components/common/DefaultButton";
import AddBukiForm from "@/components/form/AddBukiForm";
import Link from "next/link";
import NewProfileForm from "@/components/form/NewProfileForm";

const Profile = () => {
  const [friendDeletion, setFriendDeletion] = useState(false);
  const [groupMemberInformation, setGroupMemberInformation] = useState(false);
  const [groupMemberRemoval, setGroupMemberRemoval] = useState(false);
  const [bucketDeletion, setBucketDeletion] = useState(false);

  return (
    <BaseLayout>
      {/* <NewProfileForm /> */}
      <Link href="/SignIn">
        <DefaultButton
          label={"로그인"}
          onClick={() => {
            alert("이동");
          }}
        />
      </Link>
      <Link href="/SignUp">
        <DefaultButton
          label={"회원가입"}
          onClick={() => {
            alert("이동");
          }}
        />
      </Link>
      <MyProfileForm
        nickname={""}
        gender={""}
        bucketListCount={0}
        birthdate={""}
        location={""}
        password={""}
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
      <button onClick={() => {}}>{">"}</button>
      <DefaultModal
        isOpen={friendDeletion}
        onClose={() => {
          setFriendDeletion(false);
        }}
        title={"친구 삭제 모달"}
      >
        <div className="text-xl font-medium">
          친구 <span className=" font-bold text-emerald-500">다람쥐</span>
          님을 삭제하시겠습니까?
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
          그룹원 <span className=" font-bold text-emerald-500">다람쥐</span>
          님을 추방하시겠습니까?
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
      <AddBukiForm />
    </BaseLayout>
  );
};

export default Profile;
