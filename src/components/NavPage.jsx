export const NavPage = ({ setPage, page }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <button
        className="btn btn-info btn-sm"
        onClick={() => (page <= 1 ? alert("No hay data") : setPage(page - 1))}
      >
        Page: {page - 1}
      </button>
      <p>Page: {page}</p>
      <button className="btn btn-info btn-sm" onClick={() => setPage(page + 1)}>
        Page: {page + 1}
      </button>
    </div>
  );
};
