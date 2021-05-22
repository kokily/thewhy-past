import { getRepository } from 'typeorm';
import { RegisterMutationArgs, RegisterResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import Admin from '../../../entities/Admin';

const resolvers: Resolvers = {
  Mutation: {
    Register: async (
      _,
      args: RegisterMutationArgs
    ): Promise<RegisterResponse> => {
      const { username, password } = args;

      try {
        const exist = await getRepository(Admin).findOne({ username });

        if (exist) {
          return {
            ok: false,
            error: '이미 존재하는 관리자입니다.',
          };
        }

        const admin = await getRepository(Admin).create({ ...args });

        await admin.setPassword(password);
        await admin.save();

        return {
          ok: true,
          error: null,
        };
      } catch (err) {
        return {
          ok: false,
          error: err.message,
        };
      }
    },
  },
};

export default resolvers;
