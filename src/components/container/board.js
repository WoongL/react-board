import { BoardForm } from "../presenter/boardform";
import { IssueFrom } from "../presenter/issueform";

export function Board(params) {
  const { boardnumber } = params.match.params;
  return (
    <div>
      <h1>{"게시판" + boardnumber}</h1>

      <h2>내용</h2>
      <BoardForm boardnumber={boardnumber} />
    </div>
  );
}
