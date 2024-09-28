import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-left: 25px;
  padding-bottom: 9px;
  padding-top: 35px;
`;

const SentenceContainer = styled.div`
  width: 402px;
  height: 161px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: #e8cccb;
  opacity: 55%;
  padding-left: 20px;
  padding-right: 20px;
`;

const Sentence = () => {
  const [author, setAuthor] = useState();
  const [sentence, setSentence] = useState();
  useEffect(() => {
    // 비동기 데이터를 가져오는 함수를 정의
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/v1/wise/get`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
          },
          withCredentials: true,
        });
        console.log(response.data);
        setAuthor(response.data.author);
        setSentence(response.data.content);
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
  }, []);
  return (
    <div>
      <Text>
        { author }
        {" "}
      </Text>
      <SentenceContainer>
        <div style={{ fontSize: "30px", color: "black" }}>{ sentence }</div>
      </SentenceContainer>
    </div>
  );
};
export default Sentence;
