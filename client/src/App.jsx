import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Submission from './pages/Submission';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/submission' element={<Submission/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
