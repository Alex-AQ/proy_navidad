function Galeria() {
  return (
    <div className="container-fluid mt-5 px-5">
      {/* TÍTULO */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-warning">
          📸 Galería Navideña
        </h1>
        <p className="fs-4 text-muted">
          Momentos, luces y colores que reflejan el espíritu de la Navidad.
        </p>
      </div>

      {/* GALERÍA GRID */}
      <div className="row g-4">

        <div className="col-lg-4 col-md-6">
          <div className="card h-100 shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-r9EshNOyMwX-BytbzzumQH-28mmrxJ9BCA&s"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Decoración Navideña</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card h-100 shadow-lg">
            <img
              src="https://estaticos-cdn.prensaiberica.es/clip/377531cb-59af-4029-8193-2ad305b6b342_original-libre-aspect-ratio_default_0.jpg"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Luces de Navidad</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card h-100 shadow-lg">
            <img
              src="https://s.yimg.com/ny/api/res/1.2/3f1Oqlw9HSYWYQzeF_djjQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTYzMDtoPTQyMDtjZj13ZWJw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/8141344e5be97750983264b67fb472d7"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Celebración Familiar</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card h-100 shadow-lg">
            <img
              src="https://media.revistagq.com/photos/618c0ccb87216bc073142fa7/3:2/w_6591,h_4394,c_limit/GettyImages-1275681142.jpg"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Árbol de Navidad</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card h-100 shadow-lg">
            <img
              src="https://www.latercera.com/resizer/v2/MW2IHY6JE5DEZFLT5VWIKRUMGY.jpg?auth=7bfa324dbbd7e3b59826024a7beb7c1c0a0fbd23b36a46b39cdd7c00367f56ed&width=990&smart=true"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Regalos</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card h-100 shadow-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Julaftonen_av_Carl_Larsson_1904.jpg"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Nochebuena</h5>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Galeria;
