import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TestPage from "./pages/Test/testPage";
import NoteCard from "./pages/Test/NoteCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<TestPage />} />

          <Route
            path="/note"
            element={<NoteCard right="몇일" wrong="며칠" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
