import React from 'react'
import './App.css';
import Input from './Input';

function App() {
  return (
    <div className="App">
      <Input
        labelName="Title"
        placeholder="Enter game title"></Input>

      <Input
        labelName="Year"
        placeholder="Enter release year"></Input>

      <Input
        labelName="Developer"
        placeholder="Enter developer name"></Input>

      <Input
        labelName="Genre"
        placeholder="Enter game genre"></Input>
    </div>
  );
}

export default App;
