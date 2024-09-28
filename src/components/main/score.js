import styled from "styled-components";
import { Link } from "react-router-dom";

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-left: 25px;
  padding-bottom: 9px;
  padding-top: 35px;
`;

const ScoreContainer = styled.div`
  width: 402px;
  height: 131px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #e8cccb;
  opacity: 55%;
  padding-left: 20px;
  padding-right: 20px;
`;

const Score = () => {
  return (
    <div>
      <Text>
        <Link
          to="/rank"
          classname="more-link"
          style={{ "text-decoration": "none", color: "black" }}
        >
          내 어휘력 순위
        </Link>
      </Text>
      <ScoreContainer />
    </div>
  );
};
export default Score;
