import { getPatients, addPatient, updatePatient, deletePatient } from '../database';
// GET all patients
export const getAllPatients = (req, res) => {
    const patients = getPatients();
    res.json(patients);
};
// GET a patient by ID
export const getPatientById = (req, res) => {
    const { id } = req.params;
    const patient = getPatients().find(p => p.id === id);
    if (!patient) {
        res.status(404).json({ error: 'Patient not found' });
    }
    else {
        res.json(patient);
    }
};
// POST a new patient
export const createPatient = (req, res) => {
    const patientData = req.body;
    const newPatient = addPatient(patientData);
    res.status(201).json(newPatient);
};
// PUT update a patient by ID
export const updatePatientById = (req, res) => {
    const { id } = req.params;
    const patientData = req.body;
    const updatedPatient = updatePatient(id, patientData);
    if (!updatedPatient) {
        res.status(404).json({ error: 'Patient not found' });
    }
    else {
        res.json(updatedPatient);
    }
};
// DELETE a patient by ID
export const deletePatientById = (req, res) => {
    const { id } = req.params;
    deletePatient(id);
    res.status(204).end();
};
