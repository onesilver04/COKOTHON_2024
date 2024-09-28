import React from "react";
import "./NoteCard.css";
import Note from "../../../components/Note";
import dummy from "../dummy";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const NoteCard = () => {
  return (
    <>
      <Header title="오답 노트" />
      <div className="note-card-container">
        {dummy.map((item) => {
          return (
            <Note wrong={item.wrong} right={item.right} define={item.define} />
          );
        })}
        <div className="footer-container" />
      </div>
      <Footer />
    </>
  );
};

export default NoteCard;
