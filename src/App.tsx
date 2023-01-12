import "./App.css";
import Page from "./features/pages/Page";
import { Navigate, Route, Routes } from "react-router-dom";
import Filter from "./features/filter/Filter";

function App() {
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
