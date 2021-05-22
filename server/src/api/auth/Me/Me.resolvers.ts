import { Context } from 'koa';
import { MeResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';

const resolvers: Resolvers = {
  Query: {
    Me: authResolver(
      async (_, __, { ctx }: { ctx: Context }): Promise<MeResponse> => {
        const { admin } = ctx.state;

        if (admin === undefined) {
          return {
            ok: false,
            error: '인증되지 않았습니다.',
            me: null,
          };
        } else {
          return {
            ok: true,
            error: null,
            me: admin,
          };
        }
      }
    ),
  },
};

export default resolvers;
