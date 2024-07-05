import { Router } from 'express'; // Import Router from express to define routes
import { getAllAppointments, createAppointment } from '../controllers/appointmentController'; // Import controller functions
const router = Router(); // Create a new Router instance
// Route to get all appointments
router.get('/', getAllAppointments);
// Route to create a new appointment
router.post('/', createAppointment);
export default router;
