import "../../css/input.css";
import "../../css/commentinput.css";
import { INPUTREDUCER_TYPE } from "../../utils/reducer";

export function CommentInputForm({ inputs, dispatch, oncommentcreate }) {
  const { content } = inputs;

  function onChange(e) {
    const { name, value } = e.target;

    dispatch({ type: INPUTREDUCER_TYPE.CHANGE, name, value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    oncommentcreate();
  };
  return (
    <div className="commentwirtebox">
      <form className="inputform issueinputform">
        <input
          name="content"
          onChange={onChange}
          placeholder="댓글을 입력해주세요"
          value={content}
          autoComplete="off"
        />
        <br />
        <br />
        <div className="inputformButtons issueinputform">
          <button className="inputformButton issueinputform" onClick={onSubmit}>
            작성
          </button>
        </div>
      </form>
    </div>
  );
}
