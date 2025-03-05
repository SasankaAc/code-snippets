import { Module } from '@nestjs/common';
import { ChatHistoryService } from './service/chat-history.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGOOSE_COLLECTIONS } from 'src/common/enum/mongo-collections.enum';
import { LmsChatSchema } from './schema/lms-chat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MONGOOSE_COLLECTIONS.LMS_CHATS, schema: LmsChatSchema },
    ]),
  ],
  providers: [ChatHistoryService],
  exports: [ChatHistoryService],
})
export class ChatHistoryModule {}
