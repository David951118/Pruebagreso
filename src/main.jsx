import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/paginas/Login'
import Registro from './components/paginas/Registro'
import Admin from './components/paginas/Admin'
import Usuario from './components/paginas/Usuario';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
         <Router>
        <Routes>
        <Route path="/" element={<App/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/registro" element={<Registro/>}></Route>
          <Route path="/Admin" element={<Admin/>}></Route>
          <Route path="/Usuario" element={<Usuario/>}></Route>
        </Routes>
      </Router>
  </React.StrictMode>
)
