import { message } from "antd";
import dayjs from "dayjs";
import { useContext } from "react";
import { CommentForm } from "../presenter/commentform";
import { UserContext } from "./main";

export function Comment({ comment, commentDelete }) {
  const userinfo = useContext(UserContext).userinfo;

  const isCommentWriter =
    userinfo && userinfo.nickname == comment.writer ? "정답" : null;
  const ondelete =
    isCommentWriter &&
    (() => {
      commentDelete(comment.id);
    });

  return (
    <div>
      <CommentForm
        writer={comment.writer}
        content={comment.content}
        createdate={dayjs(comment.createdAt).format(
          "YYYY년 MM월 DD일 hh시 mm분 ss초"
        )}
        ondelete={ondelete}
      />
    </div>
  );
}
