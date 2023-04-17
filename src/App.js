
// import './App.css';
// import TabelaAlmoço from './components/TabelaAlmoço';
import Home from './components/Home';
import Eventos from './components/Eventos';
import Almoço from './components/Almoço';
import {BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Nav variant="tabs">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="almoço">Almoço</Nav.Link>
        <Nav.Link as={Link} to="/eventos">Eventos</Nav.Link>
      </Nav>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/almoço" element={<Almoço/>}> </Route>
        <Route path="/eventos" element={<Eventos/>}> </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
