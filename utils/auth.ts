import jwt, {
  JsonWebTokenError,
  JwtPayload,
  TokenExpiredError,
} from 'jsonwebtoken';
import config from '../src/config';

function sign(data: any) {
  return jwt.sign(data, config.jwt.jwt_secret as string, {
    expiresIn: config.jwt.jwt_expire,
  });
}

function verify(token: string): {
  admin: JwtPayload | string | null;
  error: TokenExpiredError | JsonWebTokenError | null;
} {
  try {
    const decoded = jwt.verify(token, config.jwt.jwt_secret as string);
    return {
      admin: decoded,
      error: null,
    };
  } catch (error) {
    return {
      admin: null,
      error: error as TokenExpiredError | JsonWebTokenError | null,
    };
  }
}

export { sign, verify };
