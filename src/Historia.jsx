function Historia() {
  return (
    <div className="container-fluid mt-5 px-5">
      {/* TÍTULO */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-success">
          🎄 Historia de la Navidad
        </h1>
        <p className="fs-4 text-muted">
          Un recorrido por el origen y evolución de una de las celebraciones más
          importantes del mundo.
        </p>
      </div>

      {/* CONTENIDO EN DOS COLUMNAS */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4">
          <img
            src="https://cdn.bolivia.com/images/v2/navidad/origenes/pesebre-dos-800.jpg"
            className="img-fluid rounded shadow-lg"
          />
        </div>

        <div className="col-md-6 fs-4">
          <p>
            La Navidad es una festividad cristiana que celebra el nacimiento de
            Jesucristo en Belén. Su origen se remonta al siglo IV, cuando la
            Iglesia estableció el 25 de diciembre como la fecha oficial de
            celebración.
          </p>

          <p>
            Con el paso del tiempo, esta celebración se expandió por todo el
            mundo, fusionándose con costumbres culturales de cada país, dando
            lugar a tradiciones únicas como el árbol, los villancicos y el
            intercambio de regalos.
          </p>
        </div>
      </div>

      {/* TARJETAS INFORMATIVAS */}
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg h-100 border-success">
            <div className="card-body">
              <h4 className="card-title text-success">📜 Origen</h4>
              <p className="card-text fs-5">
                Se relaciona con antiguas festividades romanas adaptadas al
                cristianismo.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-lg h-100 border-danger">
            <div className="card-body">
              <h4 className="card-title text-danger">🌍 Expansión</h4>
              <p className="card-text fs-5">
                La Navidad se extendió a Europa, América, Asia y África con el
                paso de los siglos.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-lg h-100 border-warning">
            <div className="card-body">
              <h4 className="card-title text-warning">🎁 Actualidad</h4>
              <p className="card-text fs-5">
                Hoy en día es una celebración religiosa, cultural y familiar en
                todo el mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Historia;
