import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'categories' })
export class Category {
    @PrimaryGeneratedColumn()
    id: number
    @Column()   
    name: string
    @Column()
    status: number
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: string
    @ManyToOne(() => Category, category => category.children, { nullable: true })
    @JoinColumn({ name: 'category_id' })
    parent: Category;
    @OneToMany(() => Category, category => category.parent)
    children: Category[];
}
