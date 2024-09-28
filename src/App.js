import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TestPage from "./pages/Test/testPage";
import RankPage from "./pages/Test/rankPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<TestPage />} />
          <Route path="/test" element={<RankPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
