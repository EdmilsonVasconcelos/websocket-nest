import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChatDto } from './dto/create-chat.dto';
import { Chat } from './schemas/chat.schema';

@Injectable()
export class ChatService {
  constructor(@InjectModel('Chat') private chatModel: Model<Chat>) {}

  async create(createChatDto: CreateChatDto): Promise<Chat> {
    const newChat = new this.chatModel(createChatDto);
    return newChat.save();
  }

  async findAll(): Promise<Chat[]> {
    return this.chatModel.find().sort({ createdAt: -1 }).lean().exec();
  }
}
