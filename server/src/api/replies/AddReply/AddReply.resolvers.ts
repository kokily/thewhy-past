import { getRepository } from 'typeorm';
import { AddReplyMutationArgs, AddReplyResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import Question from '../../../entities/Question';
import Reply from '../../../entities/Reply';

const resolvers: Resolvers = {
  Mutation: {
    AddReply: authResolver(
      async (_, args: AddReplyMutationArgs): Promise<AddReplyResponse> => {
        const { questionId } = args;

        try {
          const reply = await getRepository(Reply).create({ ...args });

          await reply.save();
          await getRepository(Question).update(
            { id: questionId },
            { isReply: true, replyId: reply.id }
          );

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
