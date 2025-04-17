import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Submission from "./pages/Submission";
import EditGameData from "./pages/EditGameData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/:game/edit" element={<EditGameData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
