import { ApolloServer, gql } from 'apollo-server-koa';
import Koa, { Context } from 'koa';
import Router from 'koa-router';
import cors from '@koa/cors';
import bodyParser from 'koa-body';

const app = new Koa();
const router = new Router();

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World!',
  },
};

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ ctx }: { ctx: Context }) => ({ ctx }),
});

app.use(cors({ credentials: true }));
app.use(bodyParser({ multipart: true }));
app.use(router.routes());
app.use(router.allowedMethods());

router.get('/graphql', apollo.getMiddleware());
router.post('/graphql', apollo.getMiddleware());

apollo.applyMiddleware({ app, cors: false });

export default app;
