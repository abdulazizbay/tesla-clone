import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './components/main/Home'
import React,{FC} from 'react';
import { NavBar } from './components/secondary/NavBar';

function App (){
  return (

    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
