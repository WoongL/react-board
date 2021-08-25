import { message } from "antd";
import { useContext, useEffect, useReducer, useState } from "react";
import { inputReducer, INPUTREDUCER_TYPE } from "../../utils/reducer";
import { getCommentApi, postCommentApi } from "../../utils/serverapi";
import { IssueFrom } from "../presenter/issueform";
import { UserContext } from "./main";

export function Issue({ match, history }) {
  const { boardid, issueid } = match.params;
  const [inputs, dispatch] = useReducer(inputReducer, {
    content: "",
  });
  const userinfo = useContext(UserContext).userinfo;
  const [comments, setComment] = useState([]);

  useEffect(() => {
    getCommentApi({ issueid }, (result) => {
      setComment(result.data);
    });
  }, [issueid]);

  const oncommentcreate = (r) => {
    if (userinfo == null) {
      message.error("댓글쓰기는 회원만 가능합니다");
      history.push("/login");
    } else {
      postCommentApi(
        { issueid, content: inputs.content, writer: userinfo.nickname },
        () => {
          getCommentApi({ issueid }, (result) => {
            setComment(result.data);
            message.success("댓글이 작성되었습니다");
            dispatch({ type: INPUTREDUCER_TYPE.RESET });
          });
        }
      );
    }
  };

  return (
    <IssueFrom
      boardid={boardid}
      issueid={issueid}
      comments={comments}
      inputs={inputs}
      dispatch={dispatch}
      oncommentcreate={oncommentcreate}
    />
  );
}
