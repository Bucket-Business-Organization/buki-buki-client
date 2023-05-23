import { login } from "@/apis/auth";
import DefaultButton from "@/components/common/DefaultButton";
import Input from "@/components/common/Input";
import Link from "next/link";
import { useState } from "react";

interface FormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // 로그인 요청
      const response = await login({
        email: formValues.email,
        pw: formValues.password,
      });

      // 로그인 요청이 성공적으로 처리되면 알림 표시
      if (response.isSuccess) {
        alert("로그인 완료");
      } else {
        alert("로그인에 실패했습니다.");
      }
    } catch (error) {
      console.error(error);
      alert("로그인 중 문제가 발생했습니다.");
    }
  };

  const handleForgotPassword = () => {
    // TODO: Add forgot password logic
  };

  return (
    <div className="w-1/2	m-auto mt-10 ">
      <h1 className="text-center text-2xl	font-bold mb-14">로그인</h1>
      <form onSubmit={handleFormSubmit}>
        <Input
          type="email"
          id="이메일"
          label="이메일"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          id="비밀번호"
          label="비밀번호"
          value={formValues.password}
          onChange={handleInputChange}
        />
        <Link
          href="/forgot-password"
          className="text-sm text-gray-500 absolute right-0 top-0 mt-3 mr-3"
        >
          비밀번호 찾기
        </Link>
        <DefaultButton
          type="submit"
          label={"로그인"}
          onClick={() => {
            alert("로그인 완료");
          }}
          className="block mx-auto mt-10"
        />
      </form>
      <p className="mt-3 text-sm text-gray-500">
        회원이 아니신가요?
        <Link href="/SignUp" className="font-semibold text-black ml-1">
          회원가입
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
