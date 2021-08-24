import { useEffect, useReducer, useState } from "react";
import { inputReducer } from "../../utils/reducer";
import { getCommentApi } from "../../utils/serverapi";
import { IssueFrom } from "../presenter/issueform";

export function Issue(params) {
  const { boardid, issueid } = params.match.params;
  const [inputs, dispatch] = useReducer(inputReducer, {
    content: "",
  });
  const [comments, setComment] = useState([]);

  useEffect(() => {
    getCommentApi({ issueid }, (result) => {
      setComment(result.data);
    });
  }, [issueid]);

  const oncommentcreate = (r) => {
    console.log(inputs);
  };

  return (
    <IssueFrom
      boardid={boardid}
      issueid={issueid}
      comments={comments}
      inputs={inputs}
      dispatch={dispatch}
      oncommentcreate={oncommentcreate}
    />
  );
}
