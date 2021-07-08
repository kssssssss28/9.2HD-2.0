
import React,{useState}from 'react'

import './App.css'
import constantData from '../src/data/aitag.json';

import Setting from './Setting'

let total;
function App() {

  return (
    <div className="App">
      <Setting   />
    </div>
  );
}

export default App;