import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom';
import Home from './Home/Home';
import Error from './Error/Error';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import Project from './Projects/Project/Project';
import OndeFica from './OndeFica/OndeFica';
import Footer from './Footer/Footer';
import RedesSociais from './RedesSociais/RedesSociais';
import HorarioAtendimento from './HorarioAtendimento/HorarioAtendimento';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/onde-fica' element={<OndeFica />}/>
      <Route path='/redes-sociais' element={<RedesSociais />}/>
      <Route path='/horario-atendimento' element={<HorarioAtendimento />}/>
      <Route path='*' element={<Error />}/>
    </Routes>
    <Footer />
  </Router>
);
