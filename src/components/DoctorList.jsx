import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Simula la carga de datos desde una API
    setDoctors([
      { id: 1, name: 'Dr. Juan Pérez', specialty: 'Cardiología' },
      { id: 2, name: 'Dra. Ana Gómez', specialty: 'Pediatría' },
    ]);
  }, []);

  return (
    <div>
      <h2>Listado de Doctores</h2>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} name={doctor.name} specialty={doctor.specialty} />
      ))}
    </div>
  );
};

export default DoctorList;
