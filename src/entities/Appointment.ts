import { Patient } from './Patient';
import { Doctor } from './Doctor';

export interface Appointment {
    id: string;
    patient: Patient;
    doctor: Doctor;
    date: Date;
    time: string;
}
