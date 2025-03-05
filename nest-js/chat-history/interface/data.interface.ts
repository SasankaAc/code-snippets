import { ObjectId } from 'mongoose';
import { IChatContext, ILmsChatMetadata } from './chat-history.interface';

export interface ILmsChat {
  _id: ObjectId;
  userId: ObjectId;
  sessionId: string;
  question: string;
  answer: string;
  createdAt: Date;
  metadata: ILmsChatMetadata;
  context: Array<IChatContext>;
}
