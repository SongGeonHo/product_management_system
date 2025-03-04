import "./Signup.css";
import { Form, redirect, useActionData } from "react-router-dom";

import { fetchSignup } from "../api/httpMemberService";

function Signup() {
  // 예외처리 ( 400 또는 500 발생됨)
  const responseErrorData = useActionData();
  console.log("useActionData:", responseErrorData);

  return (
    <div className="container">
      <div className="signup">
        <div>
          <Form method="post">
            {responseErrorData && responseErrorData.message && (
              <p>{responseErrorData.message}</p>
            )}

            <div>
              <label htmlFor="userid">userid:</label>
              <input type="text" name="userid" id="userid" />
            </div>
            <div>
              <label htmlFor="password">password:</label>
              <input
                type="password"
                name="passwd"
                id="password"
                defaultValue={1234}
              />
            </div>
            <div>
              <label htmlFor="username">username:</label>
              <input type="text" name="username" id="username" />
            </div>
            <div>
              <label htmlFor="post">Post (이후 api 연결 필요요):</label>
              <input type="text" name="post" id="post" />
            </div>
            <div>
              <label htmlFor="addr1">Addr 1:</label>
              <input type="text" name="addr1" id="addr1" />
            </div>
            <div>
              <label htmlFor="addr2">Addr 2:</label>
              <input type="text" name="addr2" id="addr2" />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="text" name="phoneNumber" id="phoneNumber" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <button name="signup" className="btn btn-success m-5">
                signup
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export async function action({ request }) {
  // 실제 boot 서버와 연동:  api/httpMemberService.js 의
  // fetchSignup() 함수와 연동

  // 회원가입폼 데이터 얻기
  const data = await request.formData();
  const authData = {
    userid: data.get("userid"),
    passwd: data.get("passwd"),
    username: data.get("username"),
    post: data.get("post"),
    addr1: data.get("addr1"),
    addr2: data.get("addr2"),
    phoneNumber: data.get("phoneNumber"),
    email: data.get("email"),
  };
  console.log("authData>>", authData);

  var response = null;

  //boot에서 400(유효성에러) 또는 500(userid중복에러) 넘어옴
  // 이때 try~catch로 처리해서 useActionData() 이용해서 처리(화면이 안바뀜)
  // 만약 try~catch 사용안하면 errorElement:ErrorPage 처리됨(화면이 바뀜)
  try {
    response = await fetchSignup(authData);
    console.log("action.response>:", response);
  } catch (e) {
    console.log(">>>>>>>>>>>>>>>>>ERROR", e);

    if (e.status === 400) {
      console.log("유효성 에러 발생1:", e);
      console.log("유효성 에러 발생2:", e.response.data);
      return e.response.data; // JSON리턴
    }

    if (e.status === 500) {
      console.log("id 중복에러 발생:", e);
      console.log("id 중복에러 발생2:", e.response.data);
      return e.response.data;
    }
  }

  return redirect("/"); // 성공 시 리디렉션
}

export default Signup;
