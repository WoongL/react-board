import axios from "axios";
import { useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../../css/main.css";
import { Board } from "./board";
import { Home } from "./home";
import { Login } from "./login";
import { Singup } from "./singup";

export function Main() {
  function menuButton(linkpath, buttonname) {
    return (
      <Link to={linkpath}>
        <button>{buttonname}</button>
      </Link>
    );
  }

  return (
    <div className="main">
      <header>
        <div className="topMenu">
          {menuButton("/", "홈")}
          {menuButton("/login", "로그인")}
          {menuButton("/singup", "회원가입")}
          {menuButton("/board/1", "게시판1")}
          {menuButton("/board/2", "게시판2")}
          {menuButton("/board/3", "게시판3")}
        </div>
      </header>
      <main>
        <aside>배너1</aside>
        <section>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/singup" component={Singup} />
            <Route exact path="/board/:boardnumber" component={Board} />
            <Route exact path="/" component={Home} />
          </Switch>
        </section>
        <aside>배너2</aside>
      </main>
      <footer>연락처</footer>
    </div>
  );
}
