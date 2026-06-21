import axios from "axios";

const LOGIN_API =
  "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin";

export const loginUser = async (email, password) => {
  const response = await axios.post(LOGIN_API, {
    email,
    password,
  });

  return response.data;
};