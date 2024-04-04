
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import StarShipDetails from './Components/StarShipDetails/StarShipDetails';
import StarShips from './Components/StarShips/StarShips'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StarShips />} />
        <Route path="/starships/:id/" element={<StarShipDetails />} />
      </Routes>
    </Router>
  );
}

export default App;