import dotenv from 'dotenv';
dotenv.config();
import Koa from 'koa';
import router from './router';
import { Server } from 'http';
import AccessLogMiddleware from './middleware/access.log.middleware';
import KoaBody from 'koa-body';

const app = new Koa();

app
  .use(
    KoaBody({
      multipart: true,
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
      },
    }),
  )
  .use(AccessLogMiddleware)
  .use(router.routes());

const run = (port: any): Server => {
  return app.listen(port);
};

export default run;
