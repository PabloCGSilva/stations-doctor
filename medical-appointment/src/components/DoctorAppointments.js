import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorAppointments = ({ match }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`/api/doctor/${match.params.id}/appointments`);
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [match.params.id]);

  return (
    <div>
      <h1>Doctor Appointments</h1>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            {appointment.patientName} - {appointment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorAppointments;
