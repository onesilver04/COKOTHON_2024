import React from "react";

export default function Rank({ rank, username, userExp }) {
  return (
    <div id="rank1" className="rank">
      <div className="rank-container">
        <p className="rank-contents">
          {rank}. {username}: {userExp}Exp
        </p>
      </div>
    </div>
  );
}
