import { message } from "antd";
import { useContext, useEffect, useReducer, useState } from "react";
import { inputReducer, INPUTREDUCER_TYPE } from "../../utils/reducer";
import { getIssueApi, postIssueApi } from "../../utils/serverapi";
import { BoardForm } from "../presenter/boardform";
import { IssueInputForm } from "../presenter/issueinputform";
import { UserContext } from "./main";

export function Board({ match, history }) {
  const { boardid } = match.params;
  const userinfo = useContext(UserContext).userinfo;
  const [isWrite, setIsWrite] = useState(false);

  const [inputs, dispatch] = useReducer(inputReducer, {
    title: "",
    content: "",
  });

  const [issues, setIssue] = useState([]);

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
          getIssueApi({ boardid }, (result) => {
            setIssue(result.data);
            setIsWrite(false);
            message.success("화제거리가 작성되었습니다");
          });
        }
      );
    }
    //화제거리 생성 처리
  };

  useEffect(() => {
    //게사판의 화제 불러오는 로직
    getIssueApi({ boardid }, (result) => {
      setIssue(result.data);
    });
  }, [boardid]);

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
    <BoardForm
      issues={issues}
      boardid={boardid}
      setIsWrite={() => {
        dispatch({ type: INPUTREDUCER_TYPE.RESET });

        setIsWrite(true);
      }}
    />
  );
}
