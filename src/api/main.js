import axios from "axios";

const getAttendance = async (id, password) => {
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

const getInfo = async (id, password) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/v1/profile`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("유저정보 가져오기 오류!", error);
    throw error;
  }
};

export default { getAttendance, getInfo };
