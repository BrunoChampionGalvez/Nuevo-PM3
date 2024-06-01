import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credentials } from "./Credentials";
import { Appointment } from "./Appointment";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    birthdate!: string;

    @Column()
    nDni!: number;

    @OneToOne(() => Credentials)
    @JoinColumn()
    credentials!: Credentials

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments!: Appointment
}