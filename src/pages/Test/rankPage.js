import { useEffect, useState } from "react";
import axios from "axios";
import Rank from "../../components/Rank";
// import dummy from "../../rankDummy";
import "./rankPage.css";
import { ReactComponent as Trophy } from "../../assets/image 6.svg";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const RankPage = () => {
  const [rankData, setRankData] = useState([]);
  useEffect(() => {
    // 비동기 데이터를 가져오는 함수를 정의
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/v1/rank/list`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
          },
          params: {
            page: 1,
            size: 10,
          },
          withCredentials: true,
        });
        console.log(response.data.users);
        setRankData(response.data.users);
        // 필요한 경우, 상태 업데이트 등을 여기서 처리
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // 정의한 비동기 함수를 호출

    // 클린업 함수 반환 (필요한 경우에만)
    return () => {
      // 컴포넌트가 언마운트될 때 실행되는 정리 작업
      console.log("RankPage component unmounting...");
    };
  }, []); // 의존성 배열에 상태나 props가 필요하다면 추가

  return (
    <>
      <Header title="Ranking" url="/main" />
      <div className="outer-container">
        <div className="ranking-image">
          <Trophy />
        </div>
        <div className="ranking">
          <div className="ranking-container">
            <div>
              {rankData.map((item) => {
                return (
                  <Rank
                    key={item.rank} // 고유한 키를 설정
                    rank={item.rank}
                    username={item.name}
                    userExp={item.exp}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RankPage;
