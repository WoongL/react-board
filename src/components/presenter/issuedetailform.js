import "../../css/issuedetail.css";

export function IssueDetailForm({ issueinfo }) {
  return (
    <div className="issuedetail_box">
      <div className="issuedetail_top">
        <h1>{`제목 : ${issueinfo.title}`}</h1>
        <h2>{`작성자 : ${issueinfo.writer}`}</h2>
      </div>
      <h2 className="issuedetail_content">{`내용 : ${issueinfo.content}`}</h2>
    </div>
  );
}
