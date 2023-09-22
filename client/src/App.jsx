import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Submission from './pages/Submission';
import EditGameData from './pages/EditGameData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Homepage/>}></Route>
          <Route path='/submission' element={<Submission/>}></Route>
          <Route path='/:game/edit' element={<EditGameData/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
