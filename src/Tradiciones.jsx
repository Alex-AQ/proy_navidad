function Tradiciones() {
  return (
    <div className="container-fluid mt-5 px-5">
      {/* TÍTULO */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">
          🎄 Tradiciones Navideñas
        </h1>
        <p className="fs-4 text-muted">
          Costumbres que unen a las familias y llenan de alegría estas fechas.
        </p>
      </div>

      {/* TARJETAS */}
      <div className="row text-center">
        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow-lg border-danger">
            <div className="card-body">
              <h1>🎄</h1>
              <h4 className="card-title text-danger mt-3">
                Árbol de Navidad
              </h4>
              <p className="card-text fs-5">
                Se adorna con luces, esferas y estrellas como símbolo de unión y
                esperanza.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow-lg border-warning">
            <div className="card-body">
              <h1>🎁</h1>
              <h4 className="card-title text-warning mt-3">Regalos</h4>
              <p className="card-text fs-5">
                Representan el amor, el cariño y el compartir con nuestros seres
                queridos.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow-lg border-success">
            <div className="card-body">
              <h1>🍽️</h1>
              <h4 className="card-title text-success mt-3">Cena Familiar</h4>
              <p className="card-text fs-5">
                Una reunión especial donde la familia comparte alimentos y
                momentos inolvidables.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow-lg border-primary">
            <div className="card-body">
              <h1>🎶</h1>
              <h4 className="card-title text-primary mt-3">
                Villancicos
              </h4>
              <p className="card-text fs-5">
                Canciones tradicionales que transmiten alegría y el espíritu de
                la Navidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tradiciones;
