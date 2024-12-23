import React, { Profiler } from "react";

const App = () => {
  const onRenderCallback = (id, phase, actualDuration) => {
    console.log(`${id} - ${phase} - ${actualDuration}`);
  };

  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <h1>Sistema Hospitalario</h1>
    </Profiler>
  );
};

export default App;
