export function Board(params) {
  const { boardnumber } = params.match.params;
  return (
    <div>
      <h1>게시판{boardnumber}</h1>
    </div>
  );
}
