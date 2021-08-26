import "../../css/input.css";
import "../../css/issue.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BoardsContext } from "../container/main";

import { INPUTREDUCER_TYPE } from "../../utils/reducer";
import { Comment } from "../container/comment";

export function IssueFrom({
  comments,
  boardid,
  inputs,
  dispatch,
  oncommentcreate,
  ondelete,
  issueinfo,
  commentDelete,
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

  const onDelete = (e) => {
    ondelete();
  };

  return (
    <div className="issue">
      <h1>{boardname}</h1>

      <h1>{`제목 : ${issueinfo.title}`}</h1>
      <br />

      <h2>{`작성자 : ${issueinfo.writer}`}</h2>
      <br />
      <br />

      <h2>{`내용 : ${issueinfo.content}`}</h2>

      <div className="issue_commentlist">
        {comments.map((comment) => {
          return (
            <Comment
              comment={comment}
              commentDelete={commentDelete}
              key={comment.id}
            />
          );
        })}
      </div>

      <div className="commentwirtebox">
        <form className="inputform issueinputform">
          <input
            name="content"
            onChange={onChange}
            placeholder="댓글을 입력해주세요"
            value={content}
            autoComplete="off"
          />
          <br />
          <br />
          <div className="inputformButtons issueinputform">
            <button
              className="inputformButton issueinputform"
              onClick={onSubmit}
            >
              작성
            </button>
          </div>
        </form>
      </div>

      <br />
      {ondelete && <button onClick={onDelete}>삭제하기</button>}
      <Link to={`/board/${boardid}`}>
        <button>{boardname}로 돌아가기</button>
      </Link>
      <br />
      <br />
    </div>
  );
}
