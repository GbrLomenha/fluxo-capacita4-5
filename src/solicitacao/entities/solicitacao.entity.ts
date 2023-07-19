import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Solicitacao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    status: string;

    @ManyToOne(() => User, (user) => user.solicitacoes)
    user: User;
}
