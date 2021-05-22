export const typeDefs = ["type LoginResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  Login(password: String!): LoginResponse!\n  Logout: LogoutResponse!\n  Register(username: String!, password: String!): RegisterResponse!\n  SendContact(name: String!, email: String!, subject: String!, body: String!): SendContactResponse!\n}\n\ntype LogoutResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Me {\n  id: String\n}\n\ntype MeResponse {\n  ok: Boolean!\n  error: String\n  me: Me\n}\n\ntype Query {\n  Me: MeResponse!\n}\n\ntype RegisterResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype SendContactResponse {\n  ok: Boolean!\n  error: String\n}\n\nscalar Date\n\ntype Admin {\n  id: ID!\n  username: String!\n  password: String!\n  created_at: Date!\n}\n\ntype Notice {\n  id: ID!\n  num: Int!\n  title: String!\n  body: String!\n  created_at: Date!\n  updated_at: Date\n}\n\ntype Question {\n  id: ID!\n  name: String!\n  password: String!\n  phone: String\n  email: String\n  isReply: Boolean!\n  title: String!\n  body: String!\n  replyId: String\n  reply: Reply\n  created_at: Date!\n  updated_at: Date\n}\n\ntype Reply {\n  id: ID!\n  body: String!\n  questionId: String\n  question: Question\n  created_at: Date!\n  updated_at: Date\n}\n\ntype Story {\n  id: ID!\n  title: String!\n  body: String!\n  thumbnail: String\n  tags: [String]\n  created_at: Date!\n  updated_at: Date\n}\n"];
/* tslint:disable */

export interface Query {
  Me: MeResponse;
}

export interface MeResponse {
  ok: boolean;
  error: string | null;
  me: Me | null;
}

export interface Me {
  id: string | null;
}

export interface Mutation {
  Login: LoginResponse;
  Logout: LogoutResponse;
  Register: RegisterResponse;
  SendContact: SendContactResponse;
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

export type Date = any;

export interface Admin {
  id: string;
  username: string;
  password: string;
  created_at: Date;
}

export interface Notice {
  id: string;
  num: number;
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date | null;
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
