import { Solicitacao } from "src/solicitacao/entities/solicitacao.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 'client' })
    role: string;

    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    hashedPassword: string;

    @OneToMany(() => Solicitacao, (solicitacao) => solicitacao.user)
    solicitacoes: Solicitacao[]
}
