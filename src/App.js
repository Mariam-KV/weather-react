import React from "react";
import "./App.css";
import Weather from "./weather";
function App() {
  return (
    <div className="App">
      <Weather defaultCity="tbilisi" />
    </div>
  );
}

export default App;
