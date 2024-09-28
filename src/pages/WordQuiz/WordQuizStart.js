// import styled from "styled-components";
import "./quizCss.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ReactComponent as QuestionIcon } from "../../assets/QuestionIconStart.svg";

const WordQuizStart = () => {
  const checkAttendant = async () => {
    await axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/v1/attendance`, undefined, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
        withCredentials: true,
      });
  };
  return (
    <div className="WordQuizStartPage">
      <Header title="맞춤법 퀴즈" />
      <div className="iconContainer">
        <QuestionIcon />
      </div>
      <div className="startContainer" style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/quiz"><button className="start" type="button" style={{ color: "white", fontSize: "20px" }} onClick={checkAttendant}>시작하기</button></Link>
      </div>
      <Footer />
    </div>
  );
};
export default WordQuizStart;
