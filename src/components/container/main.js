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

export const UserContext = React.createContext();

export function Main() {
  const [userinfo, setUserinfo] = useState(null);

  //userinfo init
  useEffect(() => {
    const id = localStorage.getItem("userinfo_id");

    if (id) {
      const nickname = localStorage.getItem("userinfo_nickname");
      const authtoken = localStorage.getItem("userinfo_authtoken");

      setUserinfo({ id, nickname, authtoken });
    }
  }, []);

  return (
    <div className="main">
      <UserContext.Provider value={{ userinfo, setUserinfo }}>
        <Header />
        <main>
          <aside>배너1</aside>
          <section>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/singup" component={Singup} />
              <Route exact path="/board/:boardnumber" component={Board} />
              <Route
                exact
                path="/board/:boardnumber/:issuenumber"
                component={Issue}
              />
              <Route exact path="/" component={Home} />
            </Switch>
          </section>
          <aside>배너2</aside>
        </main>
        <footer>연락처</footer>
      </UserContext.Provider>
    </div>
  );
}
