import React from "react";
import Rank from "../../components/Rank";
import dummy from "../../rankDummy";
import "./rankPage.css";
import { ReactComponent as Trophy } from "../../assets/image 6.svg";

const RankPage = () => {
  return (
    <div className="outer-container">
      <div className="ranking-image">
        <Trophy />
      </div>
      <div className="ranking">
        <div className="ranking-container">
          <ol>
            {dummy.map((item) => {
              return <Rank username={item.username} userExp={item.userExp} />;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RankPage;
