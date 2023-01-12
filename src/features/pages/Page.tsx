import { useParams, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { useEffect, useState } from "react";
import { loadPage } from "./pageSlice";
import Pagination from "../pagination/Pagination";
import {
  Box,
  CircularProgress,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Page = () => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const dispatch = useAppDispatch();
  const page = useAppSelector((state: RootState) => state.page.currentPage);
  const loading = useAppSelector((state: RootState) => state.page.pageLoading);
  const error = useAppSelector((state: RootState) => state.page.pageError);
  let params = useParams();
  const [modal, setModal] = useState({
    id: "",
    name: "",
    year: "",
    color: "",
    pantone_value: "",
  });
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  useEffect(() => {
    dispatch(loadPage([`page=${params.number}`, "per_page=5"]));
  }, [params]);
  if (loading) {
    return <CircularProgress style={{ display: "block" }} />;
  } else if (error) {
    return <div className="error">Failed to find anything</div>;
  }
  const toRender = page.map((color: any) => {
    if (id && id != color.id) return;
    return (
      <TableRow
        style={{ backgroundColor: color.color }}
        onClick={() => {
          setModal(color);
          setOpen(true);
        }}
        key={color.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {color.name}
        </TableCell>
        <TableCell align="right">{color.id}</TableCell>
        <TableCell align="right">{color.color}</TableCell>
        <TableCell align="right">{color.year}</TableCell>
      </TableRow>
    );
  });
  return (
    <div className="page">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Color name</TableCell>
              <TableCell align="right">id</TableCell>
              <TableCell align="right">Hex value</TableCell>
              <TableCell align="right">year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{toRender}</TableBody>
        </Table>
      </TableContainer>
      <Pagination />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modal.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            ID : {modal.id}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Year : {modal.year}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Hex value : {modal.color}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Pantone value : {modal.pantone_value}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Page;
