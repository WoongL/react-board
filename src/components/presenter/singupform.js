import { useRef } from "react";
import { Link } from "react-router-dom";
import "../../css/singup.css";
import { INPUTREDUCER_TYPE } from "../../utils/reducer";

export function SingupForm({ name, nickname, pw, dispatch, onSingup }) {
  const idinputRef = useRef();
  const nicknameRef = useRef();
  const pwinputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();

    onSingup(inputFocus);
  }
  function inputFocus(inputname) {
    switch (inputname) {
      case "id":
        idinputRef.current.focus();
        break;
      case "nickname":
        nicknameRef.current.focus();
        break;
      case "pw":
        pwinputRef.current.focus();
        break;
      default:
        break;
    }
  }

  function onChange(e) {
    const { name, value } = e.target;
    dispatch({ type: INPUTREDUCER_TYPE.CHANGE, name, value });
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
          ref={idinputRef}
        />
        <br />
        <input
          name="nickname"
          onChange={onChange}
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          ref={nicknameRef}
        />
        <br />
        <input
          name="pw"
          onChange={onChange}
          placeholder="비밀번호를 입력해주세요"
          value={pw}
          ref={pwinputRef}
        />
        <br />
        <div className="singhButtons">
          <button className="singhButton" onClick={onSubmit}>
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
