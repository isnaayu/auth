import ApiInstance from "../api/ApiInstance";

export const register = (userData) => {
  return ApiInstance.post("api/auth/register", userData);
};

export const login = (loginData) => {
  return ApiInstance.post("api/auth/login", loginData);
};
