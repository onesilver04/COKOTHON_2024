import React from "react";
import { Link } from "react-router-dom";
import "./Mypage.css";
import Note from "../../../components/Note"; // Note 컴포넌트 임포트
import dummy from "../dummy"; // dummy 데이터를 임포트

const Mypage = () => {
  return (
    <div className="my-page">
      {/* 상단 프로필 섹션 */}
      <div className="profile-section">
        <div className="profile-image" /> {/* self-closing 태그로 수정 */}
        <h2 className="profile-name">name</h2>
        <p className="profile-info">내 마일리지 | nn점</p>
        <p className="profile-info">내 레벨 | n Lv</p>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress" /> {/* self-closing 태그로 수정 */}
          </div>
        </div>
      </div>

      {/* 오답노트 섹션 */}
      <div className="note-section">
        <div className="note-header">
          <h3>오답노트</h3>
          <Link to="/note" className="more-link">
            더보기
          </Link>
        </div>

        {/* dummy 데이터를 기반으로 여러 Note 컴포넌트 렌더링 */}
        {dummy.map((item) => {
          return (
            <Note wrong={item.wrong} right={item.right} define={item.define} />
          );
        })}
      </div>
    </div>
  );
};

export default Mypage;
