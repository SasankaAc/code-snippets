import { Test, TestingModule } from '@nestjs/testing';
import { ChatHistoryService } from './chat-history.service';
import { getModelToken } from '@nestjs/mongoose';
import { MONGOOSE_COLLECTIONS } from '../../common/enum/mongo-collections.enum';
import { ICreateLmsChat } from '../interface/chat-history.interface';

describe('ChatHistoryService', () => {
  let service: ChatHistoryService;

  const sampleCreateLmsChatRequest: ICreateLmsChat = {
    answer: 'answer',
    userId: 'userA',
    context: [],
    metadata: {
      acceptLanguage: 'acceptLanguage',
      ip: 'ip',
      userAgent: 'userAgent',
    },
    question: 'question',
    sessionId: 'sessionId',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChatHistoryService,
        {
          provide: getModelToken(MONGOOSE_COLLECTIONS.LMS_CHATS),
          useValue: {
            create: jest.fn().mockReturnValue({}),
          },
        },
      ],
    }).compile();

    service = module.get<ChatHistoryService>(ChatHistoryService);
  });

  it('Should return status and message when persistLmsChatHistory is success', async () => {
    const result = await service.persistLmsChatHistory(
      sampleCreateLmsChatRequest,
    );
    expect(result).toEqual({
      status: 201,
      message: 'Success',
    });
  });
});
