import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/input.css";
import "../../css/board.css";
import { INPUTREDUCER_TYPE } from "../../utils/reducer";
import { BoardsContext } from "../container/main";

export function BoardForm({
  boardid,
  issues,
  inputs,
  dispatch,
  onissuecreate,
}) {
  const [isWrite, setIsWrite] = useState(false);
  const boards = useContext(BoardsContext);
  const { title, content } = inputs;

  const boardname =
    boards &&
    boards.map((board) => {
      if (boardid == board.id) return board.name;
    });

  useEffect(() => {
    setIsWrite(false);
  }, [boardid, issues]);

  function issueCard(issue) {
    const { id, title, content, createdAt } = issue;

    return (
      <Link to={`/board/${boardid}/${id}`} key={id}>
        <div className="issuecard">
          <div className="issueimg"></div>
          <div className="issuetext">
            <h1 className="issue_title">{title}</h1>
            <h3 className="issue_description">{content}</h3>
            <h3 className="issue_date">
              {dayjs(createdAt).format("YYYY년 MM월 DD일")}
            </h3>
          </div>
        </div>
      </Link>
    );
  }

  ///작성창 내부
  function onChange(e) {
    const { name, value } = e.target;
    dispatch({ type: INPUTREDUCER_TYPE.CHANGE, name, value });
  }

  function onSubmit(e) {
    e.preventDefault();

    onissuecreate();
  }

  return (
    <div>
      <h1>{boardname}</h1>
      <h3>{boardname}에 대한 설명</h3>
      {isWrite ? (
        <div>
          <br />
          <br />
          <form className="inputform">
            <input
              name="title"
              onChange={onChange}
              placeholder="화제거리의 제목을 입력해주세요"
              value={title}
              autoComplete="off"
            />
            <br />
            <br />
            <input
              name="content"
              onChange={onChange}
              placeholder="화제의 내용을 입력해주세요"
              value={content}
              autoComplete="off"
            />
            <br />
            <br />
            <div className="inputbuttons">
              <button className="inputformButton" onClick={onSubmit}>
                작성
              </button>
              <button
                className="inputformButton"
                onClick={() => setIsWrite(false)}
              >
                취소
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div className="board_content">
            {issues.map((issue) => issueCard(issue))}
          </div>
          <button
            onClick={() => {
              dispatch({ type: INPUTREDUCER_TYPE.RESET });
              setIsWrite(true);
            }}
          >
            작성
          </button>
          <br />
          <br />
        </div>
      )}
    </div>
  );
}
