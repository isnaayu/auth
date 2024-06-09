const jwt = require("jsonwebtoken");
const secret = "auth";

export const decodeJWT = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (e) {
    throw new Error("Error decoding token: " + e.message);
  }
};
