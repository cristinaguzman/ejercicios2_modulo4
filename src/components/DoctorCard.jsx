import React, { useEffect, useState } from "react";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Simula la carga de datos desde una API
    setDoctors([
      { id: 1, name: "Dr. Juan Pérez", specialty: "Cardiología" },
      { id: 2, name: "Dra. Ana Gómez", specialty: "Pediatría" },
    ]);
  }, []);

  return (
    <div>
      <h2>Listado de Doctores</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            {doctor.name} - {doctor.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
