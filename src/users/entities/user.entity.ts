import { Chat } from "src/chat/entities/chat.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    uuid: string
    @Column()
    name: string
    @OneToMany(() => Chat, chat => chat.id)
    chats: Chat[]
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: string
}