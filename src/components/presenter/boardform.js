import { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
  const { name, content } = inputs;

  const boardname =
    boards &&
    boards.map((board) => {
      if (boardid == board.id) return board.name;
    });

  const tempIssues = [
    { id: 1, name: "임시1", content: "임시111" },
    { id: 2, name: "임시2", content: "임시222" },
    { id: 3, name: "임시3", content: "임시333" },
    { id: 4, name: "임시4", content: "임시444" },
    { id: 5, name: "임시5", content: "임시555" },
    { id: 6, name: "임시6", content: "임시666" },
    { id: 7, name: "임시7", content: "임시777" },
    { id: 8, name: "임시8", content: "임시888" },
    { id: 9, name: "임시9", content: "임시999" },
    { id: 10, name: "임시10", content: "임시" },
    { id: 11, name: "임시11", content: "임시1" },
  ];

  function issueCard(issue) {
    const { id, name, content } = issue;

    return (
      <Link to={`/board/${boardid}/${id}`} key={id}>
        <div className="issuecard">
          <div className="issueimg"></div>
          <div className="issuetext">
            <h1 className="issue_title">{name}</h1>
            <h3 className="issue_description">{content}</h3>
            <h3 className="issue_date">날짜</h3>
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
          <form className="issuecreate">
            <input
              name="name"
              onChange={onChange}
              placeholder="화제거리의 제목을 입력해주세요"
              value={name}
            />
            <br />
            <br />
            <input
              name="content"
              onChange={onChange}
              placeholder="화제의 내용을 입력해주세요"
              value={content}
            />
            <br />
            <br />
            <button className="issuecreate" onClick={onSubmit}>
              작성
            </button>
            <button onClick={() => setIsWrite(false)}>취소</button>
          </form>
        </div>
      ) : (
        <div>
          <div className="board_content">
            {tempIssues.map((issue) => issueCard(issue))}
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
