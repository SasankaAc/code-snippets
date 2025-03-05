import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MONGOOSE_COLLECTIONS } from '../../common/enum/mongo-collections.enum';
import { ILmsChat } from '../interface/data.interface';
import {
  ICreateLmsChat,
  ICreateLmsChatResult,
} from '../interface/chat-history.interface';
import { Util } from '../../common/util';

@Injectable()
export class ChatHistoryService {
  private readonly logger = new Logger(ChatHistoryService.name);
  constructor(
    @InjectModel(MONGOOSE_COLLECTIONS.LMS_CHATS)
    private chatbotLmsChatsModel: Model<ILmsChat>,
  ) {}

  async persistLmsChatHistory(
    chat: ICreateLmsChat,
  ): Promise<ICreateLmsChatResult> {
    try {
      this.logger.verbose('Start persisting lms chat history');
      this.logger.debug('Chat history data:', JSON.stringify(chat));
      await this.chatbotLmsChatsModel.create(chat);
      this.logger.verbose('Completed persisting lms chat history');
      return {
        status: 201,
        message: 'Success',
      };
    } catch (e) {
      Util.wrapException(
        'Failed to execute persistLmsChatHistory()',
        e,
        this.logger,
      );
    }
  }
}
