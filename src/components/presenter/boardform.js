import dayjs from "dayjs";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../../css/input.css";
import "../../css/board.css";
import { BoardsContext } from "../container/main";

export function BoardForm({ boardid, issues, setIsWrite }) {
  const boards = useContext(BoardsContext);

  const boardname =
    boards &&
    boards.map((board) => {
      if (boardid == board.id) return board.name;
    });

  function issueCard(issue) {
    const { id, title, content, writer, createdAt } = issue;

    return (
      <Link to={`/board/${boardid}/${id}`} key={id}>
        <div className="issuecard">
          <div className="issueimg"></div>
          <div className="issuetext">
            <h1 className="issue_title">{title}</h1>
            <h3 className="issue_writer">{`작성자 : ${writer}`}</h3>
            <h3 className="issue_description">{content}</h3>
            <h3 className="issue_date">
              {dayjs(createdAt).format("YYYY년 MM월 DD일")}
            </h3>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div>
      <h1>{boardname}</h1>
      <h3>{boardname}에 대한 설명</h3>
      <div>
        <div className="board_content">
          {issues.map((issue) => issueCard(issue))}
        </div>
        <button
          onClick={() => {
            setIsWrite();
          }}
        >
          작성
        </button>

        <br />
        <br />
      </div>
    </div>
  );
}
