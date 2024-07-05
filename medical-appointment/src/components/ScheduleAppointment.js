import React, { useState } from 'react';
import axios from 'axios';

const ScheduleAppointment = () => {
  const [doctorId, setDoctorId] = useState('');
  const [patientId, setPatientId] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/appointments', {
        doctorId,
        patientId,
        date
      });
      alert('Appointment scheduled successfully!');
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      alert('Failed to schedule appointment. Please try again.');
    }
  };

  return (
    <div>
      <h1>Schedule Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Doctor ID:
          <input type="text" value={doctorId} onChange={e => setDoctorId(e.target.value)} />
        </label>
        <br />
        <label>
          Patient ID:
          <input type="text" value={patientId} onChange={e => setPatientId(e.target.value)} />
        </label>
        <br />
        <label>
          Date:
          <input type="text" value={date} onChange={e => setDate(e.target.value)} />
        </label>
        <br />
        <button type="submit">Schedule Appointment</button>
      </form>
    </div>
  );
};

export default ScheduleAppointment;
