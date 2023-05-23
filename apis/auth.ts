import axios from "./axios";

interface JoinRequest {
  email: string;
  nickname: string;
  pw: number | string;
}

interface JoinResponse {
  code: string;
  data: string;
  isSuccess: boolean;
}

export const join = async (request: JoinRequest): Promise<JoinResponse> => {
  const { data } = await axios.post<JoinResponse>("/buki/join", request);
  return data;
};

interface LoginRequest {
  email: string;
  pw: number | string;
}

interface LoginResponseData {
  expireTime: string;
  tokenValue: string;
}

interface LoginResponse {
  code: string;
  data: LoginResponseData;
  isSuccess: boolean;
}

export const login = async (request: LoginRequest): Promise<LoginResponse> => {
  const { data } = await axios.post<LoginResponse>("/buki/login", request);

  localStorage.setItem("token", data.data.tokenValue);

  return data;
};
