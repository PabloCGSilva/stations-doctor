import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientAppointments = ({ match }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`/api/patient/${match.params.id}/appointments`);
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [match.params.id]);

  return (
    <div>
      <h1>Patient Appointments</h1>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            {appointment.doctorName} - {appointment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientAppointments;
