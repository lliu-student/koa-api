import { Context } from 'koa';

class UploadController {
  index(ctx: Context) {
    console.log(ctx.request.files);
  }

  upload(ctx: Context) {
    const file = ctx.request.files?.file;
  }
}
