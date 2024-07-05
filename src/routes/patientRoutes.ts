import { Router } from 'express';
import { getAllPatients, createPatient } from '../controllers/patientController';
const router = Router();

// GET all patients
router.get('/', getAllPatients);

// POST create a new patient
router.post('/', createPatient);

export default router;
