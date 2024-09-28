import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TestPage from "./pages/Test/testPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
