import KoaRouter from 'koa-router';
import indexController from '../controller/index.controller';

const router = new KoaRouter({ prefix: '/admin' });

router.get('/', indexController.index);

export default router;
