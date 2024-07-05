import { getAppointments, scheduleAppointment } from '../database'; // Import database functions
// GET all appointments from the database
export const getAllAppointments = (req, res) => {
    const appointments = getAppointments(); // Retrieve all appointments from the database
    res.json(appointments); // Send the appointments as JSON response
};
// POST create a new appointment in the database
export const createAppointment = (req, res) => {
    const newAppointment = req.body; // Extract appointment data from request body
    // Validate appointment data (if needed)
    scheduleAppointment(newAppointment); // Add the new appointment to the database
    res.status(201).json(newAppointment); // Respond with the newly created appointment as JSON
};
