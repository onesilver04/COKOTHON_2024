import axios from "axios";

const getQuiz = async (id, password) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/v1/attendance`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("출석 가져오기 오류!", error);
    throw error;
  }
};
