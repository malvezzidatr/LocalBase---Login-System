import React from "react";
import "./App.css";
import { RegisterProvider } from "./contexts/RegisterContexts";
import Routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <RegisterProvider>
        <Routes />
      </RegisterProvider>
    </div>
  );
}

export default App;
