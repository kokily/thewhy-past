import { getRepository } from 'typeorm';
import { RemoveStoryMutationArgs, RemoveStoryResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import Story from '../../../entities/Story';

const resolvers: Resolvers = {
  Mutation: {
    RemoveStory: authResolver(
      async (
        _,
        args: RemoveStoryMutationArgs
      ): Promise<RemoveStoryResponse> => {
        const { id } = args;

        try {
          await getRepository(Story).delete(id);

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
