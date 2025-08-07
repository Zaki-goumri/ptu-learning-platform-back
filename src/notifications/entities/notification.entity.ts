import { ApiProperty } from "@nestjs/swagger";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { User } from "src/user/entities/user.entity";

@Entity()
export class Notification {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426614174000',
        description: 'The unique identifier of the notification'
    })
    id: string;

    @Column()
    @ApiProperty({
        example: 'New Message from John Doe',
        description: 'The title of the notification'
    })
    title: string;

    @Column()
    @ApiProperty({
        example: 'Hello, this is a message from John Doe',
        description: 'The message of the notification'
    })
    message: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'userId'})
    user: User;

    @Column({default: false})
    @ApiProperty({
        example: false,
        description: 'Whether the notification is read or not'
    })
    read: boolean;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    @ApiProperty({
        example: '2023-01-01T00:00:00.000Z',
        description: 'Timestamp when the notification was created'
    })
    createdAt: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
    @ApiProperty({
        example: '2023-01-01T00:00:00.000Z',
        description: 'Timestamp when the notification was last updated'
    })
    updatedAt: Date;

}
