import { getAppointments, addAppointment, updateAppointment, deleteAppointment } from '../database';
// GET all appointments
export const getAllAppointments = (req, res) => {
    const appointments = getAppointments();
    res.json(appointments);
};
// GET an appointment by ID
export const getAppointmentById = (req, res) => {
    const { id } = req.params;
    const appointment = getAppointments().find(a => a.id === id);
    if (!appointment) {
        res.status(404).json({ error: 'Appointment not found' });
    }
    else {
        res.json(appointment);
    }
};
// POST a new appointment
export const createAppointment = (req, res) => {
    const appointmentData = req.body;
    const newAppointment = addAppointment(appointmentData);
    res.status(201).json(newAppointment);
};
// PUT update an appointment by ID
export const updateAppointmentById = (req, res) => {
    const { id } = req.params;
    const appointmentData = req.body;
    const updatedAppointment = updateAppointment(id, appointmentData);
    if (!updatedAppointment) {
        res.status(404).json({ error: 'Appointment not found' });
    }
    else {
        res.json(updatedAppointment);
    }
};
// DELETE an appointment by ID
export const deleteAppointmentById = (req, res) => {
    const { id } = req.params;
    deleteAppointment(id);
    res.status(204).end();
};
