import { Request, Response } from 'express';
import { getPatients, addPatient } from '../database'; // Import database functions
import { Patient } from '../entities/Patient'; // Import Patient entity

// GET all patients from the database
export const getAllPatients = (req: Request, res: Response): void => {
    const patients = getPatients(); // Retrieve all patients from database
    res.json(patients); // Respond with JSON array of patients
};

// POST create a new patient in the database
export const createPatient = (req: Request, res: Response): void => {
    const newPatient: Patient = req.body; // Extract new patient data from request body

    addPatient(newPatient); // Add the new patient to the database
    res.status(201).json(newPatient); // Respond with the newly created patient as JSON
};
