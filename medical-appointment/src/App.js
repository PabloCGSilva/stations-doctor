import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AvailableDoctors from './components/AvailableDoctors';
import ScheduleAppointment from './components/ScheduleAppointment';
import DoctorAppointments from './components/DoctorAppointments';
import PatientAppointments from './components/PatientAppointments';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/schedule">Schedule Appointment</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<AvailableDoctors />} />
          <Route path="/schedule" element={<ScheduleAppointment />} />
          <Route path="/doctor/:id/appointments" element={<DoctorAppointments />} />
          <Route path="/patient/:id/appointments" element={<PatientAppointments />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
