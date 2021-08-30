import { Link } from "react-router-dom";

export function BoardPaging({ pagecount, boardid }) {
  function PageButton(page) {
    return (
      <Link key={page} to={`/board/${boardid}?page=${page}`}>
        <button>{page}</button>
      </Link>
    );
  }
  function PageButtons() {
    var pagebuttons = [];
    for (let i = 1; i <= pagecount; i++) {
      pagebuttons = [...pagebuttons, PageButton(i)];
    }
    return pagebuttons;
  }

  return <div>{PageButtons()}</div>;
}
