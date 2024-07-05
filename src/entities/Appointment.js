import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Doctor } from './Doctor';
import { Patient } from './Patient';
@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id;
    @ManyToOne(() => Doctor, doctor => doctor.appointments)
    doctor;
    @ManyToOne(() => Patient, patient => patient.appointments)
    patient;
    @Column()
    date;
}
