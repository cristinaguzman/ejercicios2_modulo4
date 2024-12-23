import React, { useRef } from "react";

const AppointmentForm = () => {
  const nameInputRef = useRef(null);

  const focusInput = () => {
    nameInputRef.current.focus();
  };

  return (
    <div>
      <h2>Agendar Cita</h2>
      <form>
        <div>
          <label>Nombre del Paciente:</label>
          <input ref={nameInputRef} type="text" />
        </div>
        <button type="button" onClick={focusInput}>
          Enfocar Nombre
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
