import { Link } from "react-router-dom";
import "../../css/login.css";
import { INPUTREDUCER_TYPE } from "../../utils/reducer";

export function LoginForm({ name, pw, dispatch, onLogin }) {
  function onSubmit(e) {
    e.preventDefault();
    onLogin();
    //로그인 통신

    dispatch({ type: INPUTREDUCER_TYPE.RESET });
  }
  function onChange(e) {
    const { name, value } = e.target;
    dispatch({ type: INPUTREDUCER_TYPE.CHANGE, name, value });
  }

  return (
    <div className="login">
      <h1>로그인</h1>
      <form className="loginform">
        <input
          name="name"
          onChange={onChange}
          placeholder="아이디를 입력해주세요"
          value={name}
        />
        <br />
        <input
          name="pw"
          onChange={onChange}
          placeholder="비밀번호를 입력해주세요"
          value={pw}
        />
        <br />
        <div className="loginButtons">
          <button className="loginButton" onClick={onSubmit}>
            로그인
          </button>
          <Link to="/singup">
            <button className="loginButton">회원가입</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
