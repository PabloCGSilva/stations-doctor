import { getDoctors, addDoctor } from '../database';
// GET all doctors from the database
export const getAllDoctors = (req, res) => {
    const doctors = getDoctors();
    res.json(doctors);
};
// POST create a new doctor in the database
export const createDoctor = (req, res) => {
    const newDoctor = req.body;
    addDoctor(newDoctor);
    res.status(201).json(newDoctor);
};
