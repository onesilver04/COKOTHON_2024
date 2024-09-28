import React from "react";

export default function Rank({ username, userExp }) {
  return (
    <li id="rank1" className="rank">
      <div className="rank-container">
        <p className="rank-username">{username}</p>
        <p className="rank-colon">:</p>
        <p className="rank-user-exp">{userExp}</p>
      </div>
    </li>
  );
}
