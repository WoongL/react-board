import { message } from "antd";
import { useContext, useReducer } from "react";
import { inputReducer } from "../../utils/reducer";
import { loginApi } from "../../utils/serverapi";
import { LoginForm } from "../presenter/loginform";
import { UserContext } from "./main";

export function Login({ history }) {
  const setUserinfo = useContext(UserContext).setUserinfo;
  const [inputs, dispatch] = useReducer(inputReducer, {
    name: "",
    pw: "",
  });

  const { name, pw } = inputs;

  function onLogin(inputFocus) {
    loginApi(inputs, (r) => {
      const apimessage = r.data;
      if (!name || !pw) {
        message.error("입력부족");
        if (!name) inputFocus("id");
        else inputFocus("pw");
        return;
      }

      switch (apimessage) {
        case "아이디가 존재하지 않습니다":
          message.error("아이디가 존재하지 않습니다");
          inputFocus("id");
          break;
        case "비밀번호가 틀렸습니다":
          message.error("비밀번호가 틀렸습니다");
          inputFocus("pw");
          break;
        default:
          const userinfo = r.data.userinfo;

          message.success(`${userinfo.nickname}님 로그인에 성공하셨습니다`);
          setUserinfo(userinfo);
          localStorage.setItem("userinfo_id", userinfo.id);
          localStorage.setItem("userinfo_nickname", userinfo.nickname);
          localStorage.setItem("userinfo_authtoken", userinfo.authtoken);
          history.push("/");
          break;
      }
    });
  }

  return (
    <LoginForm name={name} pw={pw} dispatch={dispatch} onLogin={onLogin} />
  );
}
