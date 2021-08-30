import "../../css/issue.css";
import { Comment } from "../container/comment";

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

      <br />
      {ondelete && <button onClick={onDelete}>삭제하기</button>}
      {ondelete && <button onClick={setIsUpdate}>수정하기</button>}

      <br />
    </div>
  );
}
