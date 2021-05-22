import { getRepository } from 'typeorm';
import {
  RemoveAuthQuestionMutationArgs,
  RemoveAuthQuestionResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import Question from '../../../entities/Question';

const resolvers: Resolvers = {
  Mutation: {
    RemoveAuthQuestion: authResolver(
      async (
        _,
        args: RemoveAuthQuestionMutationArgs
      ): Promise<RemoveAuthQuestionResponse> => {
        const { id } = args;

        try {
          await getRepository(Question).delete(id);

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
      }
    ),
  },
};

export default resolvers;
