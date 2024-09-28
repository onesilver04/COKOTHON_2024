/* eslint-disable camelcase */
import axios from "axios";

const getQuiz = async (id, password) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/v1/quiz`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("퀴즈 가져오기 오류!", error);
    throw error;
  }
};

const postQuiz = async (quiz_id, user_choice) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/v1/quiz/answer`, {
      quiz_id, // quiz_id를 데이터로 전달
      user_choice, // user_choice를 데이터로 전달
    }, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("퀴즈 정답 오류!", error);
    throw error;
  }
};

export default { getQuiz, postQuiz };
