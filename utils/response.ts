import { Context } from 'koa';
import { HTTP_STATUS_CODE_ENUM } from './enums/http-status-code.enum';

/**
 *
 * @param {Context} ctx
 * @param {*} data 返回数据
 * @param {number} code 状态码
 */
function success(ctx: Context, data = [], code = HTTP_STATUS_CODE_ENUM.OK) {
  ctx.body = {
    code,
    data,
  };
}

/**
 *
 * @param {Context} ctx
 * @param {string} msg 错误提示
 * @param {number} code 状态码
 * @param {*} data 拓展提示
 */
function error(
  ctx: Context,
  msg = 'error',
  code = HTTP_STATUS_CODE_ENUM.INTERNAL_SERVER_ERROR,
  data = [],
) {
  ctx.body = {
    code,
    msg,
    data,
  };
}

export default { success, error };
