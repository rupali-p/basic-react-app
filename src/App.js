import React from 'react';
import "./style.css";
import Timer from "./timer";
import Onboarding from "./onboarding";
function App() {
  return (
    <div className="App">
      <div classname="container">

        <Onboarding />
        <Timer />
      </div>
    </div>
  );
}

export default App;
