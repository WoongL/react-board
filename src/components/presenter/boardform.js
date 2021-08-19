import { Link } from "react-router-dom";
import "../../css/board.css";

export function BoardForm({ boardnumber }) {
  function issueCard(issuenumber) {
    return (
      <Link to={`/board/${boardnumber}/${issuenumber}`}>
        <div className="issuecard">
          <div className="issueimg"></div>
          <div className="issuetext">
            <h1 className="issue_title">번호 : {issuenumber}</h1>
            <h3 className="issue_description">요약</h3>
            <h3 className="issue_date">날짜</h3>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div>
      <div className="board_content">
        {issueCard("1")}
        {issueCard("2")}
        {issueCard("3")}
        {issueCard("4")}
        {issueCard("5")}
        {issueCard("6")}
        {issueCard("7")}
        {issueCard("8")}
        {issueCard("9")}
        {issueCard("10")}
        {issueCard("11")}
        {issueCard("12")}
      </div>
    </div>
  );
}
