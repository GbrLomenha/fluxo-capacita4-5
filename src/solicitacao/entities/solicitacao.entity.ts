import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Solicitacao {
    @PrimaryGeneratedColumn()
    id: number;   //Id da solicitacao

    @Column()
    title: string; //Titulo(Assunto) da solicitacao

    @Column()
    content: string; //Content da solicitacao

    @Column({ default: 'PENDING' })
    status: string;   //Status da solicitacao

    @ManyToOne(() => User, (user) => user.solicitacoes)
    user: User;       //Usuario que fez a Solicitacao
}
