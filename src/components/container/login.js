import { useReducer, useRef } from "react";
import { inputReducer } from "../../utils/reducer";
import { LoginForm } from "../presenter/loginform";

export function Login(params) {
  const [inputs, dispatch] = useReducer(inputReducer, {
    name: "",
    pw: "",
  });

  const { name, pw } = inputs;

  return <LoginForm name={name} pw={pw} dispatch={dispatch} />;
}
