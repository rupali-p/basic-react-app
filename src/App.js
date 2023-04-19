import React from 'react';
import "./style.css";
import Timer from "./timer";
import Onboarding from "./onboarding";

function App() {
  return (
    <div className="container">
      <Onboarding />
      <Timer />
    </div>
  );
}

export default App;
