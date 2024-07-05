import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AvailableDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('/api/doctors')
      .then(response => setDoctors(response.data))
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  return (
    <div>
      <h1>Available Doctors</h1>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>
            {doctor.name} - {doctor.crm} - {doctor.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableDoctors;
