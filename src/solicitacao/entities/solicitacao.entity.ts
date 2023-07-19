import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Solicitacao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    status: string;
}
