import axios from "axios";

const login = async (id, password) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/v1/auth/login`,
      {
        id,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json", // Content-Type 설정
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("로그인 오류!", error);
    throw error;
  }
};

const register = async (id, password, nickname) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/v1/auth/register`,
      {
        id,
        password,
        nickname,
      },
      {
        headers: {
          "Content-Type": "application/json", // Content-Type 설정
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("회원가입 오류!", error);
    throw error;
  }
};

export default { login, register };
