import { Route, Router, Switch } from "react-router-dom";
import "../../css/main.css";
import { Login } from "./login";
import { Singup } from "./singup";

export function Main() {
  return (
    <div className="main">
      <header>로그인메뉴,카테고리메뉴,그외메뉴</header>
      <main>
        <aside>배너1</aside>
        <section>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/singh" component={Singup} />
          </Switch>
        </section>
        <aside>배너2</aside>
      </main>
      <footer>연락처</footer>
    </div>
  );
}
