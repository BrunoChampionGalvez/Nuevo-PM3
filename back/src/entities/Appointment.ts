import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @Column({ default: "Activo" })
    status!: Status;

    @Column()
    userId!: number;

    @ManyToOne(() => User, user => user.appointments)
    @JoinColumn()
    user!: User;
}