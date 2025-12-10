function Inicio() {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center text-center"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://cdn.pixabay.com/photo/2016/11/29/09/15/christmas-1869533_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white p-5 rounded shadow-lg bg-dark bg-opacity-75">
        <h1 className="display-3 fw-bold text-danger mb-4">
          🎄 Navidad 2025 🎄
        </h1>

        <p className="fs-3 mb-4">
          Felices fiestas <strong>Amor y Paz</strong> en este día
        </p>

        <p className="fs-5 mb-5">
          ¡Feliz Navidad! Que la magia de estas fiestas ilumine tu hogar, que la paz y el amor te acompañen hoy y siempre, y que la alegría de estos días te traiga muchos momentos inolvidables y esperanza para el nuevo año.
        </p>

        <div className="d-flex justify-content-center gap-4">
          <a href="/historia" className="btn btn-danger btn-lg">
            Historia
          </a>
          <a href="/galeria" className="btn btn-warning btn-lg">
            Ver Galería
          </a>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
