import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ConversationMember } from './conversation-member.entity';
import { Message } from './message.entity';

export enum ConversationType {
  DM = 'dm',
  GROUP = 'group',
}

@Entity()
export class Conversation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  coverImage: string;

  @Column({
    type: 'enum',
    enum: ConversationType,
  })
  type: ConversationType;

  @OneToMany(() => ConversationMember, (member) => member.conversation)
  members: ConversationMember[];

  @OneToMany(() => Message, (message) => message.conversation)
  messages: Message[];
}
