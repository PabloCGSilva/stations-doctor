import { getPatients, addPatient } from '../database'; // Import database functions
// GET all patients from the database
export const getAllPatients = (req, res) => {
    const patients = getPatients(); // Retrieve all patients from database
    res.json(patients); // Respond with JSON array of patients
};
// POST create a new patient in the database
export const createPatient = (req, res) => {
    const newPatient = req.body; // Extract new patient data from request body
    addPatient(newPatient); // Add the new patient to the database
    res.status(201).json(newPatient); // Respond with the newly created patient as JSON
};
