import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './components/main/Home'
import React,{FC, useEffect} from 'react';
import { NavBar } from './components/secondary/NavBar';
import { ModelInfo } from './components/main/ModelInfo';
import AOS from "aos";
import "aos/dist/aos.css";
function App (){
  useEffect(()=>{
    AOS.init({  duration:1500  })
  },[])
  return (

    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/models' element={<ModelInfo/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
