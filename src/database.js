// Simulated data for patients
let patientsData = [];
// Simulated data for doctors
let doctorsData = [];
// Simulated data for appointments
let appointmentsData = [];
// Functions for patients
export const getPatients = () => {
    return patientsData;
};
export const addPatient = (patientData) => {
    patientsData.push(patientData);
    return patientData;
};
export const updatePatient = (id, patientData) => {
    let updatedPatient = patientsData.find(patient => patient.id === id);
    if (updatedPatient) {
        updatedPatient = { ...updatedPatient, ...patientData };
    }
    return updatedPatient;
};
export const deletePatient = (id) => {
    patientsData = patientsData.filter(patient => patient.id !== id);
};
// Functions for doctors
export const getDoctors = () => {
    return doctorsData;
};
export const addDoctor = (doctorData) => {
    doctorsData.push(doctorData);
    return doctorData;
};
export const updateDoctor = (id, doctorData) => {
    let updatedDoctor = doctorsData.find(doctor => doctor.id === id);
    if (updatedDoctor) {
        updatedDoctor = { ...updatedDoctor, ...doctorData };
    }
    return updatedDoctor;
};
export const deleteDoctor = (id) => {
    doctorsData = doctorsData.filter(doctor => doctor.id !== id);
};
// Functions for appointments
export const getAppointments = () => {
    return appointmentsData;
};
export const addAppointment = (appointmentData) => {
    appointmentsData.push(appointmentData);
    return appointmentData;
};
export const updateAppointment = (id, appointmentData) => {
    let updatedAppointment = appointmentsData.find(appointment => appointment.id === id);
    if (updatedAppointment) {
        updatedAppointment = { ...updatedAppointment, ...appointmentData };
    }
    return updatedAppointment;
};
export const deleteAppointment = (id) => {
    appointmentsData = appointmentsData.filter(appointment => appointment.id !== id);
};
