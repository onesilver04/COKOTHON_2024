import axios from "axios";

const postMail = async (title, content) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/v1/mail`,
      {
        title,
        content,
      },
      {
        headers: {
          "Content-Type": "application/json", // Content-Type 설정
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    console.error("메일 오류!", error);
    throw error;
  }
};

export default postMail;
