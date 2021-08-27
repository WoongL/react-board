import { INPUTREDUCER_TYPE } from "../../utils/reducer";

export function IssueInputForm({ inputs, dispatch, onSubmit, onCancel }) {
  const { title, content } = inputs;
  function onChange(e) {
    const { name, value } = e.target;
    dispatch({ type: INPUTREDUCER_TYPE.CHANGE, name, value });
  }

  return (
    <div>
      <br />
      <br />
      <form className="inputform">
        <input
          name="title"
          onChange={onChange}
          placeholder="화제거리의 제목을 입력해주세요"
          value={title}
          autoComplete="off"
        />
        <br />
        <br />
        <input
          name="content"
          onChange={onChange}
          placeholder="화제의 내용을 입력해주세요"
          value={content}
          autoComplete="off"
        />
        <br />
        <br />
        <div className="inputbuttons">
          <button className="inputformButton" onClick={onSubmit}>
            작성
          </button>
          <button className="inputformButton" onClick={onCancel}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
}
