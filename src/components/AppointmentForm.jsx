import React, { useRef } from 'react';

const AppointmentForm = () => {
  const nameInputRef = useRef(null);

  const handleFocus = () => {
    nameInputRef.current.focus();
  };

  return (
    <div>
      <h2>Agendar Cita</h2>
      <form>
        <label>Nombre del Paciente:</label>
        <input ref={nameInputRef} type="text" placeholder="Ingrese su nombre" />
        <button type="button" onClick={handleFocus}>Enfocar Campo</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
