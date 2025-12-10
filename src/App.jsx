import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow">
      <div className="container-fluid px-5">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          🎄 Navidad 2025
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto fs-5">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/historia">Historia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tradiciones">Tradiciones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galeria">Galería</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </Router>
  );
}

export default App;

