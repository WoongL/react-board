import { SingupForm } from "../presenter/singupform";
import { useReducer, useRef } from "react";
import { inputReducer } from "../../utils/reducer";
export function Singup(params) {
  const [inputs, dispatch] = useReducer(inputReducer, {
    name: "",
    nickname: "",
    pw: "",
  });
  const { name, nickname, pw } = inputs;
  return (
    <SingupForm name={name} nickname={nickname} pw={pw} dispatch={dispatch} />
  );
}
