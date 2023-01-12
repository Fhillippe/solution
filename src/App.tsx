import "./App.css";
import Page from "./features/pages/Page";
import { Navigate, Route, Routes } from "react-router-dom";
import Filter from "./features/filter/Filter";
import { useAppSelector } from "./app/hooks";
import { RootState } from "./app/store";

function App() {
  const modal = useAppSelector((state: RootState) => {
    return state.modal.display;
  });
  return (
    <div className="App">
      <Filter />
      <Routes>
        <Route path="/page/:number" element={<Page />} />
        <Route path="/" element={<Navigate to="/page/1" />} />
      </Routes>
    </div>
  );
}

export default App;
