export interface ILmsChatMetadata {
  ip: string;
  userAgent: string;
  acceptLanguage: string;
}

export interface IChatContext {
  question: string;
  answer: string;
}

export interface ICreateLmsChat {
  sessionId: string;
  userId: string;
  question: string;
  answer: string;
  metadata: ILmsChatMetadata;
  context: IChatContext[];
}

export interface ICreateLmsChatResult {
  status: number;
  message: string;
}
