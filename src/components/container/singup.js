import { SingupForm } from "../presenter/singupform";
import { useReducer } from "react";
import { inputReducer } from "../../utils/reducer";
import { singupApi } from "../../utils/serverapi";
import { message } from "antd";
export function Singup({ history }) {
  const [inputs, dispatch] = useReducer(inputReducer, {
    name: "",
    nickname: "",
    pw: "",
  });
  const { name, nickname, pw } = inputs;

  function onSingup(inputFocus) {
    singupApi(inputs, (r) => {
      const apimessage = r.data;
      if (!name || !nickname || !pw) {
        message.error("입력부족");
        if (!name) inputFocus("id");
        else if (!nickname) inputFocus("nickname");
        else inputFocus("pw");
        return;
      }

      switch (apimessage) {
        case "아이디 중복":
          message.error("아이디 중복");
          inputFocus("id");
          break;
        case "닉네임 중복":
          message.error("닉네임 중복");
          inputFocus("nickname");
          break;
        default:
          history.push("/login");
      }
    });
  }
  return (
    <SingupForm
      name={name}
      nickname={nickname}
      pw={pw}
      dispatch={dispatch}
      onSingup={onSingup}
    />
  );
}
