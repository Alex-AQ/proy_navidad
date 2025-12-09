function Contacto() {
  return (
    <div className="container-fluid mt-5 px-5">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold">📩 Contáctanos</h1>
        <p className="fs-4 text-muted">
          Envíanos un mensaje y te responderemos pronto
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <form className="fs-5">
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Ingresa tu nombre"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Correo</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="ejemplo@gmail.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea
                  className="form-control form-control-lg"
                  rows="4"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button className="btn btn-success btn-lg w-100">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
