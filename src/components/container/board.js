import { BoardForm } from "../presenter/boardform";
import { IssueFrom } from "../presenter/issueform";

export function Board(params) {
  const { boardnumber, issuenumber } = params.match.params;
  return (
    <div>
      <h1>{"게시판" + boardnumber + " 글 : " + issuenumber}</h1>

      <h2>내용</h2>
      {!issuenumber && <BoardForm boardnumber={boardnumber} />}
      {issuenumber && <IssueFrom issuenumber={issuenumber} />}
    </div>
  );
}
