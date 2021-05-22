import { getRepository } from 'typeorm';
import { RemoveReplyMutationArgs, RemoveReplyResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import Question from '../../../entities/Question';
import Reply from '../../../entities/Reply';

const resolvers: Resolvers = {
  Mutation: {
    RemoveReply: authResolver(
      async (
        _,
        args: RemoveReplyMutationArgs
      ): Promise<RemoveReplyResponse> => {
        const { id } = args;

        try {
          const reply = await getRepository(Reply).findOne(id);

          if (!reply) {
            return {
              ok: false,
              error: '존재하지 않는 문의 글 입니다.',
            };
          }

          await getRepository(Question).update(
            { id: reply.questionId },
            { isReply: false, replyId: undefined }
          );
          await getRepository(Reply).delete(id);

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
