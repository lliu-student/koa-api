import { Context, Next } from "koa";
import { accessLogger } from "../logger";

function AccessLogMiddleware(ctx: Context, next: Next) {
  const logStr = `path: ${ctx.path} -- method: ${ctx.method} -- status: ${ctx.status} -- ip: ${ctx.ip} -- userAgent: ${ctx.header["user-agent"]}`;
  accessLogger.info(logStr);
  return next();
}

export default AccessLogMiddleware;
