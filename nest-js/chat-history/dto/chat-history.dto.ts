import { IsOptional, IsString } from 'class-validator';
import { ILmsChatMetadata } from '../interface/chat-history.interface';

export class LmsChatMetadataDto implements ILmsChatMetadata {
  @IsString()
  @IsOptional()
  acceptLanguage: string;

  @IsString()
  @IsOptional()
  ip: string;

  @IsString()
  @IsOptional()
  userAgent: string;
}
