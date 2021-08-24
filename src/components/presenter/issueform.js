import { CommentForm } from "./commentform";
import "../../css/issue.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BoardsContext } from "../container/main";
import dayjs from "dayjs";
import { INPUTREDUCER_TYPE } from "../../utils/reducer";

export function IssueFrom({
  issueid,
  comments,
  boardid,
  inputs,
  dispatch,
  oncommentcreate,
}) {
  const boards = useContext(BoardsContext);
  const { content } = inputs;

  const boardname =
    boards &&
    boards.map((board) => {
      if (boardid == board.id) return board.name;
    });

  function onChange(e) {
    const { name, value } = e.target;

    dispatch({ type: INPUTREDUCER_TYPE.CHANGE, name, value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    oncommentcreate();
  };

  return (
    <div className="issue">
      <h1>{boardname}</h1>

      <h1>{"글 : " + issueid}</h1>

      <h2>내용</h2>

      <div>{issueid}</div>

      <div className="issue_commentlist">
        {comments.map((comment) => {
          return (
            <CommentForm
              writer={comment.writer}
              content={comment.content}
              createdate={dayjs(comment.createdAt).format("YYYY년 MM월 DD일")}
              key={comment.id}
            />
          );
        })}
      </div>

      <div>
        <br />
        <br />
        <form className="issuecreate">
          <input
            name="content"
            onChange={onChange}
            placeholder="댓글을 입력해주세요"
            value={content}
          />
          <br />
          <br />
          <button className="issuecreate" onClick={onSubmit}>
            작성
          </button>
        </form>
        <br />
        <br />
      </div>

      <Link to={`/board/${boardid}`}>
        <button>{boardname}로 돌아가기</button>
      </Link>
      <br />
      <br />
    </div>
  );
}
