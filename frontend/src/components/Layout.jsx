import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light custom-header">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h2 className="m-0">Desde la Calma</h2>
          </Link>

          {/* Toggler para mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/clientes">Clientes</Link>
              </li>
            </ul>

            {/* Botón a la derecha */}
            <div className="d-flex align-items-center">
              <Link to="/new-cliente" className="btn btn-pastel-green">
                Nuevo Cliente
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido */}
      <main className="container my-4 flex-grow-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="custom-footer text-center py-3 mt-auto">
        <p className="mb-0">Contáctanos · info@desdelacalma.example</p>
      </footer>
    </div>
  );
}
