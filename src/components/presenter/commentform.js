import "../../css/comment.css";

export function CommentForm({ writer, content, createdate, ondelete }) {
  return (
    <div className="comment">
      <div className="comment_info">
        <h3>{`코멘트작성자 : ${writer}`}</h3>
        <h3>{`작성일 : ${createdate}`}</h3>
      </div>
      <div className="comment_content">
        <h3>{`내용 : ${content}`}</h3>
        {ondelete && <button onClick={ondelete}>댓글삭제</button>}
      </div>
    </div>
  );
}
