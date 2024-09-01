import { Schema, Document } from 'mongoose';

export const ChatSchema = new Schema({
  message: { type: String, required: true },
  sender: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export interface Chat extends Document {
  message: string;
  sender: string;
}
