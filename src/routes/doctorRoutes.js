import { getDoctors, addDoctor, updateDoctor, deleteDoctor } from '../database';
// GET all doctors
export const getAllDoctors = (req, res) => {
    const doctors = getDoctors();
    res.json(doctors);
};
// GET a doctor by ID
export const getDoctorById = (req, res) => {
    const { id } = req.params;
    const doctor = getDoctors().find(d => d.id === id);
    if (!doctor) {
        res.status(404).json({ error: 'Doctor not found' });
    }
    else {
        res.json(doctor);
    }
};
// POST a new doctor
export const createDoctor = (req, res) => {
    const doctorData = req.body;
    const newDoctor = addDoctor(doctorData);
    res.status(201).json(newDoctor);
};
// PUT update a doctor by ID
export const updateDoctorById = (req, res) => {
    const { id } = req.params;
    const doctorData = req.body;
    const updatedDoctor = updateDoctor(id, doctorData);
    if (!updatedDoctor) {
        res.status(404).json({ error: 'Doctor not found' });
    }
    else {
        res.json(updatedDoctor);
    }
};
// DELETE a doctor by ID
export const deleteDoctorById = (req, res) => {
    const { id } = req.params;
    deleteDoctor(id);
    res.status(204).end();
};
