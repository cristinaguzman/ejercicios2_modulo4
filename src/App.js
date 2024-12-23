import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DoctorCard from './components/DoctorCard';

const App = () => {
  const doctors = [
    { id: 1, name: 'Dr. Juan Pérez', specialty: 'Cardiología' },
    { id: 2, name: 'Dra. Ana Gómez', specialty: 'Pediatría' },
  ];

  return (
    <div>
      <Header />
      <main style={{ padding: '1rem' }}>
        <h2>Doctores Disponibles</h2>
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} name={doctor.name} specialty={doctor.specialty} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
