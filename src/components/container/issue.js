import { message } from "antd";
import { useContext, useEffect, useReducer, useState } from "react";
import { inputReducer, INPUTREDUCER_TYPE } from "../../utils/reducer";
import {
  deleteCommentApi,
  deleteIssueApi,
  getCommentApi,
  getIssueInfoApi,
  postCommentApi,
  putIssueApi,
} from "../../utils/serverapi";
import { IssueFrom } from "../presenter/issueform";
import { IssueInputForm } from "../presenter/issueinputform";
import { UserContext } from "./main";

export function Issue({ match, history }) {
  const { boardid, issueid } = match.params;
  const [inputs, dispatch] = useReducer(inputReducer, {
    content: "",
  });
  const [issueupdateinputs, issueupdatedispatch] = useReducer(inputReducer, {
    title: "",
    content: "",
  });
  const userinfo = useContext(UserContext).userinfo;
  const [comments, setComment] = useState([]);
  const [issueinfo, setIssueInfo] = useState();
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    getIssueInfoApi({ boardid, issueid }, (result) => {
      setIssueInfo(result.data);
    });
    getCommentApi({ issueid }, (result) => {
      setComment(result.data);
    });
  }, [issueid]);

  if (issueinfo == null) return <div></div>;

  const oncommentcreate = (r) => {
    if (userinfo == null) {
      message.error("댓글쓰기는 회원만 가능합니다");
      history.push("/login");
    } else {
      if (inputs.content == "") {
        message.warning("댓글내용을 입력해주세요");
        return;
      }
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

  const commentDelete = (commentid) => {
    deleteCommentApi({ commentid }, () => {
      getCommentApi({ issueid }, (result) => {
        message.success("댓글이 삭제되었습니다");
        setComment(result.data);
      });
    });
  };

  const isWriter =
    userinfo && userinfo.nickname == issueinfo.writer ? "정답" : null;

  //이슈작성자면 삭제버튼 활성화 및 기능구현
  const ondelete =
    isWriter &&
    ((e) => {
      deleteIssueApi({ issueid }, () => {
        message.success("화제거리가 삭제되었습니다");
        history.push(`/board/${boardid}`);
      });
    });
  const onIssueUpdate = (e) => {
    e.preventDefault();
    const { title, content } = issueupdateinputs;

    if (title == "" || content == "") {
      message.warning(`${title == "" ? "제목" : "내용"}을 입력해주세요`);
      return;
    }

    putIssueApi(
      {
        issueid,
        title,
        content,
      },
      () => {
        getIssueInfoApi({ boardid, issueid }, (result) => {
          message.success("이슈가 수정되었습니다");
          setIssueInfo(result.data);
          setIsUpdate(false);
        });
      }
    );
  };

  return isUpdate ? (
    <IssueInputForm
      inputs={issueupdateinputs}
      dispatch={issueupdatedispatch}
      onSubmit={onIssueUpdate}
      onCancel={() => setIsUpdate(false)}
    />
  ) : (
    <IssueFrom
      boardid={boardid}
      issueinfo={issueinfo}
      comments={comments}
      inputs={inputs}
      dispatch={dispatch}
      oncommentcreate={oncommentcreate}
      ondelete={ondelete}
      commentDelete={commentDelete}
      setIsUpdate={() => {
        issueupdatedispatch({ type: INPUTREDUCER_TYPE.RESET });
        setIsUpdate(true);
      }}
    />
  );
}
