import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Nav.jsx";
import Inicio from "./Inicio.jsx";
import Historia from "./Historia.jsx";
import Tradiciones from "./Tradiciones.jsx";
import Galeria from "./Galeria.jsx";
import Contacto from "./Contacto.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/tradiciones" element={<Tradiciones />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;

