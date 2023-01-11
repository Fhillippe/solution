import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { loadPage } from "./features/pages/pageSlice";
import Page from "./features/pages/Page";
import Pagination from "./features/pagination/Pagination";
import Filter from "./features/filter/Filter";
import { Modal } from "./features/modal/Modal";
import { RootState } from "./app/store";
import { ColorInterface } from "./features/color/color";

function App() {
  const displayModal = useAppSelector(
    (state: RootState) => state.modal.display
  );
  const modalColor: ColorInterface = useAppSelector(
    (state: RootState) => state.modal.currentModal
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadPage(["page=1", "per_page=5"]));
  }, []);

  return (
    <div className="App">
      <Filter />
      <Page />
      <Pagination />
      {displayModal && <Modal color={modalColor} />}
    </div>
  );
}

export default App;
