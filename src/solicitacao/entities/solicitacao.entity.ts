import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Solicitacao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column({ default: 'PENDING' })
    status: string;

    @ManyToOne(() => User, (user) => user.solicitacoes)
    user: User;
}
