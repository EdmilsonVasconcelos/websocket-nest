import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './chat/chat.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    ChatModule,
    NotificationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
