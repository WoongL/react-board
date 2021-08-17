import { Link } from "react-router-dom";
import "../../css/singup.css";
import { REDUCER_TYPE } from "../../utils/reducer";

export function SingupForm({ name, nickname, pw, dispatch }) {
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
    <div className="singh">
      <h1>회원가입</h1>
      <form className="singhform">
        <input
          name="name"
          onChange={onChange}
          placeholder="아이디를 입력해주세요"
          value={name}
        />
        <br />
        <input
          name="nickname"
          onChange={onChange}
          placeholder="닉네임을 입력해주세요"
          value={nickname}
        />
        <br />
        <input
          name="pw"
          onChange={onChange}
          placeholder="비밀번호를 입력해주세요"
          value={pw}
        />
        <br />
        <div className="singhButtons">
          <button className="singhButton" onClick={onReset}>
            회원가입
          </button>
          <Link to="/login">
            <button className="singhButton">로그인하러가기</button>
          </Link>
        </div>
      </form>
    </div>
  );
}