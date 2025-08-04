import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Conversation } from './conversation.entity';
import { User } from 'src/user/entities/user.entity';
import {
  CONVERSATION_MEMBER_ROLE,
  ConversationMemeberRoleType,
} from '../types/memebe_role.type';

@Entity()
export class ConversationMember {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Conversation, (conversation) => conversation.members)
  @JoinColumn({ name: 'conversationId' })
  conversation: Conversation;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ nullable: true })
  nickname: string;

  @Column({ default: false })
  muted: boolean;

  @Column()
  conversationId: string;

  @Column()
  userId: string;

  @Column({
    type: 'enum',
    enum: CONVERSATION_MEMBER_ROLE,
    default: CONVERSATION_MEMBER_ROLE.MEMBER,
  })
  role: ConversationMemeberRoleType;
}
