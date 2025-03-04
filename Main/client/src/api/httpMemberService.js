// httpMemberService.js

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8090/emart", // Boot 서버에 반드시 CORS 설정 필수
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

// 회원가입
export async function fetchSignup(user) {
  console.log("fetchSignup 요청");

  const response = await instance.post(`/signup`, user);
  console.log("fetchSignup.response: ", response);
  return response;
}

// 로그인 처리
export async function fetchAuthenticate(authData) {
  const response = await instance.post(`/authenticate`, authData);

  console.log("authenticate.response:", response);

  return response;
}

// 마이페이지
export async function fetchMypage(token) {
  const response = await instance.get(`/mypage`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("mypage.response:", response);

  return response;
}
