import React from "react";
import RankPage from "./rankPage";
import NoteCard from "./Note/NoteCard"; // NoteCard 컴포넌트를 임포트

const TestPage = () => {
  return (
    <div>
      <RankPage />
      <div>
        <h1> ## </h1>
      </div>
      <NoteCard wrong right />
    </div>
  );
};
export default TestPage;
