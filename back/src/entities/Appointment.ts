import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Status from "../enums/Status";
import { User } from "./User";

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    date!: string;

    @Column()
    time!: string;

    @Column({default: "Activo"})
    status!: Status

    @ManyToOne(() => User, user => user.appointments)
    user!: User
}