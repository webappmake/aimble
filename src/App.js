import * as React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import './styles/aimble.scss';
import config from './constants/aimbleConfig';
import logo from './assets/img/Aimble-Portfolio.png';
import Portal from './pages/AAASample';
import { Button } from '@mui/material';

function App() {

  let navigate = useNavigate();
  
  function handleClick() {
    navigate("/home");
  }

  return (
    <>
      <Button onClick={handleClick}>Aimble</Button>
      <Routes>
        <Route path='/' element={<h1>Home Page Component</h1>} />
        <Route path='login' element={<h1>Login Page Component</h1>} />     
      </Routes>
      {/* <Portal {...config} logo={logo} /> */}
    </>        
  )    
}

export default App;
