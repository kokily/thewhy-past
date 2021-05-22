export const typeDefs = ["type LoginResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  Login(password: String!): LoginResponse!\n  Logout: LogoutResponse!\n  Register(username: String!, password: String!): RegisterResponse!\n  SendContact(name: String!, email: String!, subject: String!, body: String!): SendContactResponse!\n  AddNotice(title: String!, body: String!): AddNoticeResponse!\n  RemoveNotice(id: ID!): RemoveNoticeResponse!\n  UpdateNotice(id: ID!, title: String, body: String): UpdateNoticeResponse!\n}\n\ntype LogoutResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Me {\n  id: String\n}\n\ntype MeResponse {\n  ok: Boolean!\n  error: String\n  me: Me\n}\n\ntype Query {\n  Me: MeResponse!\n  ListNotice(page: Int, title: String): ListNoticeResponse!\n  ReadNotice(id: ID!): ReadNoticeResponse!\n}\n\ntype RegisterResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype SendContactResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddNoticeResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListNoticeResponse {\n  ok: Boolean!\n  error: String\n  notice: [Notice]\n  lastPage: Int!\n}\n\ntype ReadNoticeResponse {\n  ok: Boolean!\n  error: String\n  notice: Notice\n}\n\ntype RemoveNoticeResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype UpdateNoticeResponse {\n  ok: Boolean!\n  error: String\n}\n\nscalar Date\n\ntype Admin {\n  id: ID!\n  username: String!\n  password: String!\n  created_at: Date!\n}\n\ntype Notice {\n  id: ID!\n  num: Int!\n  title: String!\n  body: String!\n  created_at: Date!\n  updated_at: Date\n}\n\ntype Question {\n  id: ID!\n  name: String!\n  password: String!\n  phone: String\n  email: String\n  isReply: Boolean!\n  title: String!\n  body: String!\n  replyId: String\n  reply: Reply\n  created_at: Date!\n  updated_at: Date\n}\n\ntype Reply {\n  id: ID!\n  body: String!\n  questionId: String\n  question: Question\n  created_at: Date!\n  updated_at: Date\n}\n\ntype Story {\n  id: ID!\n  title: String!\n  body: String!\n  thumbnail: String\n  tags: [String]\n  created_at: Date!\n  updated_at: Date\n}\n"];
/* tslint:disable */

export interface Query {
  Me: MeResponse;
  ListNotice: ListNoticeResponse;
  ReadNotice: ReadNoticeResponse;
}

export interface ListNoticeQueryArgs {
  page: number | null;
  title: string | null;
}

export interface ReadNoticeQueryArgs {
  id: string;
}

export interface MeResponse {
  ok: boolean;
  error: string | null;
  me: Me | null;
}

export interface Me {
  id: string | null;
}

export interface ListNoticeResponse {
  ok: boolean;
  error: string | null;
  notice: Array<Notice> | null;
  lastPage: number;
}

export interface Notice {
  id: string;
  num: number;
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date | null;
}

export type Date = any;

export interface ReadNoticeResponse {
  ok: boolean;
  error: string | null;
  notice: Notice | null;
}

export interface Mutation {
  Login: LoginResponse;
  Logout: LogoutResponse;
  Register: RegisterResponse;
  SendContact: SendContactResponse;
  AddNotice: AddNoticeResponse;
  RemoveNotice: RemoveNoticeResponse;
  UpdateNotice: UpdateNoticeResponse;
}

export interface LoginMutationArgs {
  password: string;
}

export interface RegisterMutationArgs {
  username: string;
  password: string;
}

export interface SendContactMutationArgs {
  name: string;
  email: string;
  subject: string;
  body: string;
}

export interface AddNoticeMutationArgs {
  title: string;
  body: string;
}

export interface RemoveNoticeMutationArgs {
  id: string;
}

export interface UpdateNoticeMutationArgs {
  id: string;
  title: string | null;
  body: string | null;
}

export interface LoginResponse {
  ok: boolean;
  error: string | null;
}

export interface LogoutResponse {
  ok: boolean;
  error: string | null;
}

export interface RegisterResponse {
  ok: boolean;
  error: string | null;
}

export interface SendContactResponse {
  ok: boolean;
  error: string | null;
}

export interface AddNoticeResponse {
  ok: boolean;
  error: string | null;
}

export interface RemoveNoticeResponse {
  ok: boolean;
  error: string | null;
}

export interface UpdateNoticeResponse {
  ok: boolean;
  error: string | null;
}

export interface Admin {
  id: string;
  username: string;
  password: string;
  created_at: Date;
}

export interface Question {
  id: string;
  name: string;
  password: string;
  phone: string | null;
  email: string | null;
  isReply: boolean;
  title: string;
  body: string;
  replyId: string | null;
  reply: Reply | null;
  created_at: Date;
  updated_at: Date | null;
}

export interface Reply {
  id: string;
  body: string;
  questionId: string | null;
  question: Question | null;
  created_at: Date;
  updated_at: Date | null;
}

export interface Story {
  id: string;
  title: string;
  body: string;
  thumbnail: string | null;
  tags: Array<string> | null;
  created_at: Date;
  updated_at: Date | null;
}
