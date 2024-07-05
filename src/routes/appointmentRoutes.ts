import { Router } from 'express'; // Import Router from express to define routes
import { getAllAppointments, createAppointment } from '../controllers/appointmentController'; // Import controller functions
import { Request, Response } from 'express'; // Import Request and Response from express

const router = Router(); // Create a new Router instance

// Route to get all appointments
router.get('/', getAllAppointments);

// Route to create a new appointment
router.post('/', createAppointment);

export default router;
