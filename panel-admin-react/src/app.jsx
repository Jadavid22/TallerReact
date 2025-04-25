import React from 'react';
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './Componentes/Navbar.jsx'
import Home from './Pages/Home.jsx'
import Clientes from './Pages/Clientes.jsx'
import Proveedor from './Pages/Proveedor.jsx'
import Usuarios from './Pages/Usuarios.jsx'
import Logout from './Pages/Logout.jsx'
import Container from 'react-bootstrap/Container';

function App() {
    return (
      <div className="d-flex flex-column min-vh-100 bg-light">
        <NavigationBar />
        <Container className="my-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/proveedor" element={<Proveedor />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Container>
      </div>
    );
  }
  
  export default App;