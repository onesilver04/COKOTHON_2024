import React from "react";
import "./NoteCard.css";
import Note from "../../../components/Note";
import dummy from "../dummy";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const NoteCard = () => {
  return (
    <div className="note-card-container">
      <Header title="오답 노트" />
      {dummy.map((item) => {
        return (
          <Note wrong={item.wrong} right={item.right} define={item.define} />
        );
      })}
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default NoteCard;
