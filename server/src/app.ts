import { ApolloServer } from 'apollo-server-koa';
import Koa, { Context } from 'koa';
import Router from 'koa-router';
import cors from '@koa/cors';
import bodyParser from 'koa-body';
import schema from './libs/schema';
import upload from './routes/upload';

const app = new Koa();
const router = new Router();

const apollo = new ApolloServer({
  schema,
  context: ({ ctx }: { ctx: Context }) => ({ ctx }),
});

app.use(cors({ credentials: true }));
app.use(bodyParser({ multipart: true }));
app.use(router.routes());
app.use(router.allowedMethods());

router.use('/upload', upload.routes());
router.get('/graphql', apollo.getMiddleware());
router.post('/graphql', apollo.getMiddleware());

apollo.applyMiddleware({ app, cors: false });

export default app;
