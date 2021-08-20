import { CommentForm } from "./commentform";
import "../../css/issue.css";

export function IssueFrom({ issuenumber }) {
  return (
    <div className="issue">
      <div>{issuenumber}</div>
      <div className="issue_commentlist">
        <CommentForm
          writer="작성자1"
          content="내용11111111111111111111111111111111111111111111111111111111115555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555533333311111111111111133444444444444444444444444444333333333333333333333333333111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
          createdate="날짜1"
        />
        <CommentForm writer="작성자1" content="내용1" createdate="날짜1" />
        <CommentForm writer="작성자1" content="내용1" createdate="날짜1" />
        <CommentForm writer="작성자1" content="내용1" createdate="날짜1" />
        <CommentForm writer="작성자1" content="내용1" createdate="날짜1" />
        <CommentForm writer="작성자1" content="내용1" createdate="날짜1" />
      </div>
    </div>
  );
}
