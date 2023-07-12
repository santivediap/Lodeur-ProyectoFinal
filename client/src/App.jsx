import { useState } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
