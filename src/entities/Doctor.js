import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Appointment from './Appointment';
@Entity()
export class Doctor {
    @PrimaryGeneratedColumn()
    id;
    @Column()
    name;
    @Column()
    specialty;
    @OneToMany(() => Appointment, appointment => appointment.doctor)
    appointments;
}
