import jwt from "jsonwebtoken";
import config from "../src/config";

function sign(data: any) {
  return jwt.sign(data, config.jwt.jwt_secret as string, {
    expiresIn: config.jwt.jwt_expire,
  });
}

function verify(token: string) {
  try {
    const decoded = jwt.verify(token, config.jwt.jwt_secret as string);
    return {
      admin: decoded,
      error: null,
    };
  } catch (error) {
    return {
      admin: null,
      error: error,
    };
  }
}

export default {
  sign,
  verify,
};
