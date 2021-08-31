import "../../css/issue.css";
import { Comment } from "../container/comment";
import { IssueDetailForm } from "./issuedetailform";

export function IssueFrom({
  comments,
  ondelete,
  issueinfo,
  commentDelete,
  setIsUpdate,
}) {
  const onDelete = (e) => {
    ondelete();
  };

  return (
    <div className="issue">
      <IssueDetailForm issueinfo={issueinfo} />

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

      <br />
      {ondelete && <button onClick={onDelete}>삭제하기</button>}
      {ondelete && <button onClick={setIsUpdate}>수정하기</button>}

      <br />
    </div>
  );
}
