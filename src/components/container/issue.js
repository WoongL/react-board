import { Link } from "react-router-dom";
import { IssueFrom } from "../presenter/issueform";

export function Issue(params) {
  const { boardnumber, issuenumber } = params.match.params;

  return (
    <div>
      <h1>{"게시판" + boardnumber + " 글 : " + issuenumber}</h1>

      <h2>내용</h2>

      <IssueFrom issuenumber={issuenumber} />

      <Link to={`/board/${boardnumber}`}>
        <button>{`게시판${boardnumber}로 돌아가기`}</button>
      </Link>
    </div>
  );
}
