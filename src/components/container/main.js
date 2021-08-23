import React, { useContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../../css/main.css";
import { Board } from "./board";
import { Header } from "./header";
import { Home } from "./home";
import { Login } from "./login";
import { Singup } from "./singup";
import "antd/dist/antd.css";
import { Issue } from "./issue";
import { getBoardsApi } from "../../utils/serverapi";

export const UserContext = React.createContext();
export const BoardsContext = React.createContext();

export function Main() {
  const [userinfo, setUserinfo] = useState(null);
  const [boards, setBoards] = useState();

  //userinfo init
  useEffect(() => {
    const id = localStorage.getItem("userinfo_id");

    if (id) {
      const nickname = localStorage.getItem("userinfo_nickname");
      const authtoken = localStorage.getItem("userinfo_authtoken");

      setUserinfo({ id, nickname, authtoken });
    }

    getBoardsApi((r) => {
      const data = r.data;
      setBoards(data);
    });
  }, []);

  return (
    <div className="main">
      <UserContext.Provider value={{ userinfo, setUserinfo }}>
        <BoardsContext.Provider value={boards}>
          <Header />
          <main>
            <aside>배너1</aside>
            <section>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/singup" component={Singup} />
                <Route exact path="/board/:boardid" component={Board} />
                <Route
                  exact
                  path="/board/:boardid/:issuenumber"
                  component={Issue}
                />
                <Route exact path="/" component={Home} />
              </Switch>
            </section>
            <aside>배너2</aside>
          </main>
          <footer>연락처</footer>
        </BoardsContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
