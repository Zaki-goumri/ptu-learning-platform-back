import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Conversation } from './conversation.entity';
import { User } from 'src/user/entities/user.entity';

export const conversationMemberRole = {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
} as const;

export type ConversationMemeberRole = (typeof conversationMemberRole)[keyof typeof conversationMemberRole]

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

  @Column({
    type: 'enum',
    enum: conversationMemberRole,
    default: conversationMemberRole.MEMBER,
  })
  role: ConversationMemeberRole;
}
