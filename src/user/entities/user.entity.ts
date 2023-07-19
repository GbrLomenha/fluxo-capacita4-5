import { Solicitacao } from "src/solicitacao/entities/solicitacao.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    password: string;

    @OneToMany(() => Solicitacao, (solicitacao) => solicitacao.user)
    solicitacoes: Solicitacao[]
}
