import mongoose, { Schema } from 'mongoose';
import { ILmsChat } from '../interface/data.interface';

const LmsChatSchema = new mongoose.Schema<ILmsChat>({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  sessionId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  context: [
    {
      question: {
        type: String,
      },
      answer: {
        type: String,
      },
    },
  ],
  metadata: {
    ip: {
      type: String,
    },
    userAgent: {
      type: String,
    },
    acceptLanguage: {
      type: String,
    },
  },
});

export { LmsChatSchema };
