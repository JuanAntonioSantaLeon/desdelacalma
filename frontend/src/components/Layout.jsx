import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/"><h2>Desde la Calma</h2></Link>
          <div className="navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/clientes">Clientes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/new-cliente">Nuevo Cliente</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container my-4 flex-grow-1">
        <Outlet />
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">Contactanos</p>
      </footer>
    </div>
  );
}