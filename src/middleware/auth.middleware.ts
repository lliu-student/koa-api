import { Context, Next } from 'koa';
import { verify } from '../../utils/auth';
import response from '../../utils/response';
import { HTTP_STATUS_CODE_ENUM } from '../../utils/enums/http-status-code.enum';

function AuthMiddleware(ctx: Context, next: Next) {
  const token = ctx.headers.authorization;
  if (token) {
    const { error } = verify(token);
    if (!error) {
      return next();
    }
    return response.error(
      ctx,
      error.message,
      HTTP_STATUS_CODE_ENUM.UNAUTHORIZED,
    );
  }
  return response.error(
    ctx,
    'No token provided.',
    HTTP_STATUS_CODE_ENUM.UNAUTHORIZED,
  );
}

export default AuthMiddleware;
