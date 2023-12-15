import { User } from "src/users/entities/user.entity"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'chat' })
export class Chat {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    uuid: string
    @Column()
    content: string
    @JoinColumn({ name: 'transmitter_id' })
    @ManyToOne(() => User, user => user.id)
    transmitter: User
    @JoinColumn({ name: 'receiver_id' })
    @ManyToOne(() => User, user => user.id)
    receiver: User
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: string
}