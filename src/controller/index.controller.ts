import { Context } from 'koa';
import logger from '../logger';

class IndexController {
  async index(ctx: Context) {
    logger.info('index');
    ctx.body = [1, 2, 3, 4, 5];
  }
}

export default new IndexController();
