import { join } from "@/apis/auth";
import DefaultButton from "@/components/common/DefaultButton";
import Input from "@/components/common/Input";
import Link from "next/link";
import { useState } from "react";

interface FormValues {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Join = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // 회원가입 요청
      const response = await join({
        nickname: formValues.nickname,
        email: formValues.email,
        pw: formValues.password,
      });

      // 성공적으로 가입되면 알림 표시
      if (response.isSuccess) {
        alert("가입완료");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error(error);
      alert("회원가입 중 문제가 발생했습니다.");
    }
  };

  const handleCheckNicknameAvailability = () => {
    // TODO: Add nickname availability check logic
  };

  const handleVerifyEmail = () => {
    // TODO: Add email verification logic
  };

  return (
    <div className="w-1/2	m-auto mt-10 ">
      <h1 className="text-center text-2xl	font-bold mb-14">회원가입</h1>
      <form onSubmit={handleFormSubmit}>
        <Input
          id="닉네임"
          label="닉네임"
          type="text"
          defaultValue={formValues.nickname}
          onChange={handleInputChange}
        />
        <DefaultButton
          type="button"
          onClick={handleCheckNicknameAvailability}
          label={"중복확인"}
          className="text-black py-1 px-2 text-sm bg-gray-300 rounded-none absolute top-32 right-52"
        />

        <Input
          type="email"
          id="이메일"
          label="이메일"
          defaultValue={formValues.email}
          onChange={handleInputChange}
        />
        <DefaultButton
          type="button"
          onClick={handleVerifyEmail}
          label={"인증하기"}
          className=" text-black py-1 px-2 text-sm bg-gray-300 rounded-none  absolute top-56 right-52"
        />

        <Input
          type="password"
          id="비밀번호"
          label="비밀번호"
          defaultValue={formValues.password}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          id="비밀번호 확인"
          label="비밀번호 확인"
          defaultValue={formValues.confirmPassword}
          onChange={handleInputChange}
        />
        <DefaultButton
          type="submit"
          label={"회원가입 완료"}
          onClick={() => {
            alert("가입완료");
          }}
          className="block mx-auto mt-10"
        />
      </form>
      <p className="mt-3 text-sm text-gray-500">
        이미 회원이신가요?
        <Link href="/Login" className="font-semibold text-black">
          로그인 하기
        </Link>
      </p>
    </div>
  );
};

export default Join;
