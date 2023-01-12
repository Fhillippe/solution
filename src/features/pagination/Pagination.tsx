import { PaginationItem } from "@mui/material";
import Paginator from "@mui/material/Pagination";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

const Pagination = () => {
  const params = useParams();
  const totalPages = useAppSelector((state: RootState) => {
    return state.page.totalPages;
  });
  const [page, setPage] = useState(Number(params.number));
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <Paginator
      count={totalPages}
      page={page}
      onChange={handleChange}
      renderItem={(item) => (
        <PaginationItem component={Link} to={`/page/${item.page}`} {...item} />
      )}
    />
  );
};

export default Pagination;
