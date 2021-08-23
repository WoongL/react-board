import { useEffect, useReducer, useState } from "react";
import { inputReducer } from "../../utils/reducer";
import { BoardForm } from "../presenter/boardform";

export function Board({ match }) {
  const { boardid } = match.params;

  const [inputs, dispatch] = useReducer(inputReducer, {
    name: "",
    content: "",
  });

  const [issues, setIssue] = useState([]);

  const onissuecreate = () => {
    console.log(inputs);

    //화제거리 생성 처리
  };

  useEffect(() => {
    //게사판의 화제 불러오는 로직
  }, []);

  return (
    <BoardForm
      issues={issues}
      boardid={boardid}
      inputs={inputs}
      dispatch={dispatch}
      onissuecreate={onissuecreate}
    />
  );
}
