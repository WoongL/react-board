import { useContext } from "react";
import { Link } from "react-router-dom";
import { IssueFrom } from "../presenter/issueform";
import { BoardsContext } from "./main";

export function Issue(params) {
  const { boardid, issuenumber } = params.match.params;
  const boards = useContext(BoardsContext);

  return (
    <div>
      <h1>
        {boards &&
          boards.map((board) => {
            if (boardid == board.id) return board.name;
          })}
      </h1>

      <h1>{"글 : " + issuenumber}</h1>

      <h2>내용</h2>

      <IssueFrom issuenumber={issuenumber} />

      <Link to={`/board/${boardid}`}>
        <button>{`게시판${boardid}로 돌아가기`}</button>
      </Link>
    </div>
  );
}
