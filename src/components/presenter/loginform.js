import { Link } from "react-router-dom";
import "../../css/login.css";
import { REDUCER_TYPE } from "../../utils/reducer";

export function LoginForm({ name, pw, dispatch }) {
  //   function onSignup(e) {
  //     e.preventDefault();
  //     //회원가입 페이지로
  //   }
  function onReset(e) {
    e.preventDefault();

    //로그인 통신

    dispatch({ type: REDUCER_TYPE.RESET });
  }
  function onChange(e) {
    const { name, value } = e.target;
    dispatch({ type: REDUCER_TYPE.CHANGE, name, value });
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
          <button className="loginButton" onClick={onReset}>
            로그인
          </button>
          <Link to="/singh">
            <button className="loginButton">회원가입</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
