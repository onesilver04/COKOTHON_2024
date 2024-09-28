import React, { useEffect, useState } from "react";
import axios from "axios"; // axios 임포트
import { Link } from "react-router-dom";
import "./Mypage.css";
import Note from "../../../components/Note"; // Note 컴포넌트 임포트
import dummy from "../dummy"; // dummy 데이터를 임포트
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const Mypage = () => {
  const [userInfo, setUserInfo] = useState(null); // 유저 정보를 저장할 상태

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

  useEffect(() => {
    getInfo(); // 컴포넌트가 마운트될 때 유저 정보 가져오기
  }, []);

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
            {" "}
            {userInfo.point}
            점
          </p>
          <p className="profile-info">
            내 레벨 |
            {" "}
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

          {dummy.map((item) => {
            return (
              <Note
                key={item.id}
                wrong={item.wrong}
                right={item.right}
                define={item.define}
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
