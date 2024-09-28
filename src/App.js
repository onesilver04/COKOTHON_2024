import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TestPage from "./pages/Test/testPage";
import Main from "./pages/Main/mainPage";
import SplashScreen from "./pages/SplashScreen/splashScreen";
import Login from "./pages/Login/login";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<TestPage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
