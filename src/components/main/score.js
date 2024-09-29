import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 임포트

const Text = styled.div`
    font-size: 16px;
    font-weight: 600;
    padding-left: 25px;
    padding-bottom: 9px;
    padding-top: 35px;
    cursor: pointer; /* 포인터 커서 추가 */
`;

const ScoreContainer = styled.div`
    width: 402px;
    height: 131px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: rgba(232, 204, 203, 0.55);
    padding-left: 20px;
    padding-right: 20px;
    font-size: 30px;
`;

const Score = () => {
  const [rankPercent, setRankPercent] = useState();
  const navigate = useNavigate(); // useNavigate 훅 호출

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/v1/rank/top-percent`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
          },
          withCredentials: true,
        });
        console.log(response.data);
        setRankPercent(response.data.rank_percent);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      console.log("RankPage component unmounting...");
    };
  }, []);

  // 점수 클릭 시 랭크 페이지로 이동하는 함수
  const handleScoreClick = () => {
    navigate("/rank"); // /rank 페이지로 이동
  };

  return (
    <div>
      <Text onClick={handleScoreClick}>
        {" "}
        {/* 클릭 시 핸들러 추가 */}
        내 어휘력 순위
      </Text>
      <ScoreContainer onClick={handleScoreClick} style={{ cursor: "pointer" }}>
        상위
        {" "}
        {rankPercent}
        % 입니다.
      </ScoreContainer>
    </div>
  );
};

export default Score;
