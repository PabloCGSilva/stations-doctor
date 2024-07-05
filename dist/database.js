// Simulated data for patients
let patientsData = [
    {
        id: "1",
        name: "John Doe",
        cpf: "123.456.789-00",
        birthdate: new Date("1990-01-01"),
    },
    {
        id: "2",
        name: "Jane Doe",
        cpf: "987.654.321-00",
        birthdate: new Date("1995-05-15"),
    },
];
// Simulated data for doctors
let doctorsData = [
    {
        id: "1",
        name: "Dr. Smith",
        CRM: "12345",
        specialty: "Cardiology",
    },
    {
        id: "2",
        name: "Dr. Johnson",
        CRM: "54321",
        specialty: "Dermatology",
    },
    // Add more doctors as needed
];
// Simulated data for appointments
let appointmentsData = [
    {
        id: "1",
        patient: patientsData[0],
        doctor: doctorsData[0],
        date: new Date("2024-07-10"),
        time: "09:00",
    },
    {
        id: "2",
        patient: patientsData[1],
        doctor: doctorsData[1],
        date: new Date("2024-07-12"),
        time: "10:30",
    },
    // Add more appointments as needed
];
// Example database functions
export const getPatients = () => {
    return patientsData;
};
export const addPatient = (patient) => {
    patientsData.push(patient);
};
export const getDoctors = () => {
    return doctorsData;
};
export const addDoctor = (doctor) => {
    doctorsData.push(doctor);
};
export const getAppointments = () => {
    return appointmentsData;
};
export const scheduleAppointment = (appointment) => {
    appointmentsData.push(appointment);
};
