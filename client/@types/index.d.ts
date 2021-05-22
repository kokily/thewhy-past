interface StoryType {
  id: string;
  title: string;
  body: string;
  thumbnail?: string;
  tags?: [string];
  created_at: string;
  updated_at?: string;
}

interface NoticeType {
  id: string;
  num: number;
  title: string;
  body: string;
  created_at: string;
  updated_at?: string;
}

interface QuestionType {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  isReply: boolean;
  title: string;
  body: string;
  replyId: string;
  reply: ReplyType;
  created_at: string;
  updated_at?: string;
}

interface ReplyType {
  id: string;
  body: string;
  questionId: string;
  created_at: string;
  updated_at?: string;
}

interface MeType {
  adminId: string;
}

interface MenuProps {
  title: string;
  url: string;
  items?: { id?: number; subTitle?: string; subUrl?: string }[];
}

interface StateProps {
  name: string;
  email: string;
  subject: string;
  body: string;
}

interface ActionProps {
  name: string;
  value: string;
}
