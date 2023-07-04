import Schema, { Rules, Values } from 'async-validator';
import { Context } from 'koa';

async function validate<T extends Values>(
  ctx: Context,
  rules: Rules,
): Promise<{ data: T; error: any | null }> {
  const validator = new Schema(rules);
  let data = {};

  switch (ctx.method) {
    case 'GET':
      data = ctx.request.query;
      break;
    case 'POST':
      data = ctx.request.body;
      break;
    case 'PUT':
      data = ctx.request.body;
      break;
    case 'DELETE':
      data = ctx.request.query;
      break;
  }

  return await validator
    .validate(data)
    .then(() => {
      return {
        data: data as T,
        error: null,
      };
    })
    .catch((err) => {
      return {
        data: {} as T,
        error: err,
      };
    });
}

export default validate;
