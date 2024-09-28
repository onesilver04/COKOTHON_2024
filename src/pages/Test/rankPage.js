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
          <div>
            {dummy.map((item) => {
              return (
                <Rank
                  rank={item.rank}
                  username={item.username}
                  userExp={item.userExp}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankPage;
