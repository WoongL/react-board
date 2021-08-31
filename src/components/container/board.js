import { message } from "antd";
import { useContext, useEffect, useReducer, useState } from "react";
import { QureyString } from "../../utils/qureystring";
import { inputReducer, INPUTREDUCER_TYPE } from "../../utils/reducer";
import { getIssueApi, postIssueApi } from "../../utils/serverapi";
import { BoardForm } from "../presenter/boardform";
import { BoardPaging } from "../presenter/boardpaging";
import { IssueInputForm } from "../presenter/issueinputform";
import { UserContext } from "./main";

export function Board({ match, history, location }) {
  const { boardid } = match.params;
  const userinfo = useContext(UserContext).userinfo;
  const [isWrite, setIsWrite] = useState(false);

  const [inputs, dispatch] = useReducer(inputReducer, {
    title: "",
    content: "",
  });

  const [issues, setIssue] = useState([]);
  const [pagecount, setPageCount] = useState();

  const onissuecreate = () => {
    if (userinfo == null) {
      message.error("화제거리를 작성은 회원만 가능합니다");
      history.push("/login");
    } else {
      if (inputs.title == "" || inputs.content == "") {
        message.warning(
          `${inputs.title == "" ? "제목" : "내용"}을 입력해주세요`
        );
        return;
      }
      postIssueApi(
        {
          boardid,
          title: inputs.title,
          content: inputs.content,
          writer: userinfo.nickname,
        },
        () => {
          loadIssueData(() => {
            setIsWrite(false);
            message.success("화제거리가 작성되었습니다");
          });
        }
      );
    }
  };

  function loadIssueData(callback) {
    const query = QureyString(location);

    getIssueApi({ boardid, page: query.page }, (result) => {
      const data = result.data;
      setIssue(data.issue);
      setPageCount(Math.ceil(data.count.count / 18));

      callback();
    });
  }

  useEffect(() => {
    loadIssueData();
  }, [boardid, location]);

  function onSubmit(e) {
    e.preventDefault();

    onissuecreate();
  }

  return isWrite ? (
    <IssueInputForm
      inputs={inputs}
      dispatch={dispatch}
      onSubmit={onSubmit}
      onCancel={() => setIsWrite(false)}
    />
  ) : (
    <div>
      <BoardForm
        issues={issues}
        boardid={boardid}
        setIsWrite={() => {
          dispatch({ type: INPUTREDUCER_TYPE.RESET });
          setIsWrite(true);
        }}
      />
      <BoardPaging boardid={boardid} pagecount={pagecount} />
    </div>
  );
}
