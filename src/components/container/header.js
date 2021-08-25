import "../../css/header.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BoardsContext, UserContext } from "./main";

export function Header() {
  const userinfo = useContext(UserContext).userinfo;
  const setUserinfo = useContext(UserContext).setUserinfo;
  const boards = useContext(BoardsContext);

  function userlogout() {
    localStorage.removeItem("userinfo_id");
    localStorage.removeItem("userinfo_nickname");
    localStorage.removeItem("userinfo_authtoken");
    setUserinfo(null);
  }

  function menuButton(linkpath, buttonname, onclickevent = () => {}) {
    return (
      <Link to={linkpath} key={buttonname}>
        <button className="topbutton" onClick={onclickevent}>
          {buttonname}
        </button>
      </Link>
    );
  }

  return (
    <header>
      <div className="userinfo">
        {userinfo ? `${userinfo.nickname}님 반갑습니다` : "로그인을 해주세요"}
      </div>
      <div className="topMenu">
        {menuButton("/", "홈")}
        {!userinfo && menuButton("/login", "로그인")}
        {!userinfo && menuButton("/singup", "회원가입")}
        {userinfo && menuButton("/", "로그아웃", userlogout)}

        {boards &&
          boards.map((board) => {
            return menuButton(`/board/${board.id}`, board.name);
          })}
      </div>
      <div className="toptail">광고배너</div>
    </header>
  );
}
