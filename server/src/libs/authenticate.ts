import { Context } from 'koa';
import jwt from 'jsonwebtoken';
import Admin from '../entities/Admin';
import { product } from './constants';
import { getRepository } from 'typeorm';
import { ApolloError } from 'apollo-server-errors';

export function createAccessToken(admin: Admin) {
  const token = {
    id: admin.id,
  };

  return jwt.sign(token, process.env.ACCESS_SECRET!, {
    expiresIn: '15m',
  });
}

export function createRefreshToken(admin: Admin) {
  const token = {
    id: admin.id,
  };

  return jwt.sign(token, process.env.REFRESH_SECRET!, {
    expiresIn: '7d',
  });
}

export function setTokenCookie(
  ctx: Context,
  accessToken: string,
  refreshToken: string
) {
  ctx.cookies.set('accessToken', accessToken, {
    httpOnly: false,
    domain: product ? '.thewhy.kr' : undefined,
    sameSite: 'lax',
    secure: product && true,
  });

  ctx.cookies.set('refreshToken', refreshToken, {
    httpOnly: true,
    domain: product ? '.thewhy.kr' : undefined,
    sameSite: 'lax',
    secure: product && true,
  });
}

async function decodeToken(token: string): Promise<Admin | undefined> {
  const decoded: any = jwt.verify(token, process.env.ACCESS_SECRET!);
  const admin = await getRepository(Admin).findOne({ id: decoded.id });

  if (admin) {
    return admin;
  } else {
    return undefined;
  }
}

const authResolver =
  (resolverFunction) => async (parent, args, context, info) => {
    const { ctx }: { ctx: Context } = context;
    const token = ctx.request.headers['authorization'];

    if (!token) {
      setTokenCookie(ctx, '', '');
      throw new ApolloError('Not Authenticated!');
    }

    try {
      const admin = await decodeToken(token.split(' ')[1]);

      if (admin) {
        ctx.state.admin = {
          id: admin.id,
        };
      } else {
        ctx.state.admin = undefined;
      }
    } catch (err) {
      const message =
        err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;

      if (message === 'jwt expired') {
        const token = ctx.cookies.get('refreshToken');

        if (!token) {
          setTokenCookie(ctx, '', '');
        } else {
          try {
            const payload: any = jwt.verify(token, process.env.REFRESH_SECRET!);
            const admin = await getRepository(Admin).findOne({
              id: payload.id,
            });

            if (!admin) {
              setTokenCookie(ctx, '', '');
            } else {
              const accessToken = createAccessToken(admin);
              const refreshToken = createRefreshToken(admin);

              setTokenCookie(ctx, accessToken, refreshToken);

              ctx.state.admin = {
                id: admin.id,
              };
            }
          } catch (err) {
            setTokenCookie(ctx, '', '');
          }
        }
      }
    }

    const resolved = await resolverFunction(parent, args, context, info);

    return resolved;
  };

export default authResolver;
