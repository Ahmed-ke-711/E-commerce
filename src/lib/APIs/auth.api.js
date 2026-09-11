import axios from "axios";

export const login = async (userData) => {
  const { data } = await axios.post(
    "https://fitness.elevateegy.com/api/v1/auth/signin",
    userData,
  );
  return data;
};

export const register = async (userData) => {
  const { data } = await axios.post(
    "https://fitness.elevateegy.com/api/v1/auth/signup",
    userData
  );
  return data;
};