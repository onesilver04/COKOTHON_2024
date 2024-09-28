import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Mypage.css";
import Note from "../../../components/Note"; // Note 컴포넌트 임포트
// import dummy from "../dummy"; // dummy 데이터를 임포트
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const Mypage = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    // 비동기 데이터를 가져오는 함수를 정의
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/v1/wrong-notes`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
          },
          params: {
            count: 5,
          },
          withCredentials: true,
        });
        console.log(response.data);
        setNotes(response.data);
        // 필요한 경우, 상태 업데이트 등을 여기서 처리
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // 정의한 비동기 함수를 호출

    // 클린업 함수 반환 (필요한 경우에만)
    return () => {
      // 컴포넌트가 언마운트될 때 실행되는 정리 작업
      console.log("RankPage component unmounting...");
    };
  }, []);
  return (
    <>
      <Header title="My Page" />
      <div className="my-page">
        <div className="profile-section">
          <div className="profile-image" />
          <h2 className="profile-name">name</h2>
          <p className="profile-info">내 마일리지 | nn점</p>
          <p className="profile-info">내 레벨 | n Lv</p>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress" />
            </div>
          </div>
        </div>
        <div className="note-section">
          <div className="note-header">
            <h3>오답노트</h3>
            <Link to="/note" className="more-link">
              더보기
            </Link>
          </div>

          {notes.map((item) => {
            return (
              <Note
                key={item.quizId}
                wrong={item.answerIndex === 1 ? item.options[0] : item.options[1]}
                right={item.answerIndex === 1 ? item.options[1] : item.options[0]}
                define={item.question}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mypage;
