import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { loadPage, shiftLeft, shiftRight } from "../pages/pageSlice";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const totalPages = useAppSelector(
    (state: RootState) => state.page.totalPages
  );
  const pageNumber = useAppSelector(
    (state: RootState) => state.page.pageNumber
  );
  const leftDisabled = pageNumber === 1 ? true : false;
  const rightDisabled = pageNumber === totalPages ? true : false;
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLButtonElement;
    const left = target.classList.contains("left");
    let newPage = pageNumber;
    if (left) {
      dispatch(shiftLeft());
      newPage--;
    } else {
      dispatch(shiftRight());
      newPage++;
    }
    dispatch(loadPage([`page=${newPage}`, "per_page=5"]));
  };
  return (
    <div className="pagination">
      <button
        className="left Arrow"
        onClick={handleClick}
        disabled={leftDisabled}
      >
        Left arrow
      </button>
      <button
        className="right Arrow"
        onClick={handleClick}
        disabled={rightDisabled}
      >
        Right arrow
      </button>
      <span>
        page: {pageNumber} out of {totalPages}
      </span>
    </div>
  );
};

export default Pagination;
