import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'items' })
export class Item {
    @PrimaryGeneratedColumn()
    id: number
    @Column()   
    name: string
    @Column()
    status: number
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: string
}
