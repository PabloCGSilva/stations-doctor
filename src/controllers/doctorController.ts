import { Request, Response } from 'express';
import { getDoctors, addDoctor } from '../database';
import { Doctor } from '../entities/Doctor';

// GET all doctors from the database
export const getAllDoctors = (req: Request, res: Response): void => {
    const doctors = getDoctors();
    res.json(doctors);
};

// POST create a new doctor in the database
export const createDoctor = (req: Request, res: Response): void => {
    const newDoctor: Doctor = req.body;
    addDoctor(newDoctor);
    res.status(201).json(newDoctor);
};
