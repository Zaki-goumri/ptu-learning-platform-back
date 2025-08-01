import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Conversation } from './conversation.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Conversation, (conversation) => conversation.messages)
  @JoinColumn({ name: 'conversationId' })
  conversation: Conversation;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'senderId' })
  sender: User;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;
}
