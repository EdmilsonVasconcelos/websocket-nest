import { Module } from '@nestjs/common';
import { NotificationsGateway } from './notifications.gateway';
import { ChatModule } from 'src/chat/chat.module';

@Module({
  providers: [NotificationsGateway],
  imports: [ChatModule],
})
export class NotificationsModule {}
