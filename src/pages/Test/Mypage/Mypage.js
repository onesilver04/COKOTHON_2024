import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Mypage.css";
import axios from "axios"; // axios 임포트
import Note from "../../../components/Note"; // Note 컴포넌트 임포트
// import dummy from "../dummy"; // dummy 데이터를 임포트
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const Mypage = () => {
  const [userInfo, setUserInfo] = useState(null); // 유저 정보를 저장할 상태
  const [wrongs, setWrongs] = useState([]);
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
        setWrongs(response.data);
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

  // 유저 정보를 가져오는 API 함수
  const getInfo = async () => {
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/v1/auth/profile`;
      console.log("API URL:", url);

      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      });

      console.log("API Response:", response.data); // API 응답 확인
      setUserInfo(response.data); // 가져온 유저 정보를 상태에 저장
    } catch (error) {
      console.error("유저정보 가져오기 오류!", error.response ? error.response.data : error.message);
    }
  };

  // 컴포넌트가 마운트될 때 유저 정보 가져오기
  useEffect(() => {
    getInfo();
  }, []); // 빈 배열을 전달하여 한 번만 호출되도록 설정

  // 로딩 중 상태 처리
  if (!userInfo) {
    return <div>Loading...</div>; // 유저 정보가 로딩 중일 때 표시할 내용
  }

  return (
    <>
      <Header title="My Page" />
      <div className="my-page">
        <div className="profile-section">
          <div className="profile-image" style={{ backgroundImage: `url(${userInfo.profileImagePath})` }} />
          <h2 className="profile-name">{userInfo.nickname}</h2>
          <p className="profile-info">
            내 마일리지 |
            {userInfo.point}
            점
          </p>
          <p className="profile-info">
            내 레벨 |
            {Math.floor(userInfo.xp / 10)}
            {" "}
            Lv
          </p>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress" style={{ width: `${(userInfo.xp % 10) * 10}%` }} />
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

          {wrongs.map((item) => {
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
