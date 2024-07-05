import { Router } from 'express';
import { getAllDoctors, createDoctor } from '../controllers/doctorController';
const router = Router();
// GET all doctors
router.get('/', getAllDoctors);
// POST create a new doctor
router.post('/', createDoctor);
export default router;
