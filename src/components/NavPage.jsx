export const NavPage = ({ setPage, page }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p>Page: {page}</p>
      <button className="btn btn-info btn-sm" onClick={() => setPage(page + 1)}>
        Page: {page + 1}
      </button>
    </div>
  );
};
