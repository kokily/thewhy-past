import { Context } from 'koa';
import { LogoutResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver, { setTokenCookie } from '../../../libs/authenticate';

const resolvers: Resolvers = {
  Mutation: {
    Logout: authResolver(
      async (_, __, { ctx }: { ctx: Context }): Promise<LogoutResponse> => {
        setTokenCookie(ctx, '', '');

        return {
          ok: true,
          error: null,
        };
      }
    ),
  },
};

export default resolvers;
