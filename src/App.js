import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TestPage from "./pages/Test/testPage";
import Main from "./pages/Main/mainPage";
import SplashScreen from "./pages/SplashScreen/splashScreen";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<TestPage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<SplashScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
