import React from "react";
import { Link } from "react-router-dom";
import "./Mypage.css";
import Note from "../../../components/Note"; // Note 컴포넌트 임포트
import dummy from "../dummy"; // dummy 데이터를 임포트
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const Mypage = () => {
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
