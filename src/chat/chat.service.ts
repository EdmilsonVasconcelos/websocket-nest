import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './schemas/chat.schema';

@Injectable()
export class ChatService {
  constructor(@InjectModel('Chat') private chatModel: Model<Chat>) {}

  create(createChatDto: CreateChatDto): Promise<Chat> {
    const newChat = new this.chatModel(createChatDto);
    return newChat.save();
  }

  findAll(): Promise<Chat[]> {
    return this.chatModel.find().lean().exec();
  }

  findOne(id: string): Promise<Chat> {
    return this.chatModel.findById(id).lean().exec();
  }

  update(id: string, updateChatDto: UpdateChatDto): Promise<Chat> {
    return this.chatModel
      .findByIdAndUpdate(id, updateChatDto, { new: true })
      .exec();
  }

  remove(id: string): Promise<Chat> {
    return this.chatModel.findByIdAndDelete(id).exec();
  }
}
