import React from "react";

export default function Note({ wrong, right, define }) {
  return (
    <div className="note-card">
      {/* 두 박스는 flex row로 나란히 배치 */}
      <div className="box-container">
        <div className="wrong-box">
          <p>{wrong}</p>
        </div>
        <div className="right-box">
          <p>{right}</p>
        </div>
      </div>
      {/* 박스들 아래에 설명 텍스트 */}
      <p className="description">{define}</p>
    </div>
  );
}
