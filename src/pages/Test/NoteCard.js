import React from "react";
import "./NoteCard.css";
import Note from "../../components/Note";
import dummy from "./dummy";

const NoteCard = () => {
  return (
    <div>
      {dummy.map((item) => {
        return (
          <Note wrong={item.wrong} right={item.right} define={item.define} />
        );
      })}
    </div>
  );
};

export default NoteCard;
