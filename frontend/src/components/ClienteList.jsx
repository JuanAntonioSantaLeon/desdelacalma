import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UserClienteList() {
  const [clientes, setClientes] = useState([]);
  const [search, setSearch] = useState("");
  const [ordering, setOrdering] = useState("created_at");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [arrivalStart, setArrivalStart] = useState("");
  const [arrivalEnd, setArrivalEnd] = useState("");
  const [departureStart, setDepartureStart] = useState("");
  const [departureEnd, setDepartureEnd] = useState("");

  const resetPage = () => setPage(1);

  const fetchClientes = async () => {
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (ordering) params.append("ordering", ordering);
    if (page) params.append("page", page);
    if (arrivalStart) params.append("arrival_date__gte", arrivalStart);
    if (arrivalEnd) params.append("arrival_date__lte", arrivalEnd);
    if (departureStart) params.append("departure_date__gte", departureStart);
    if (departureEnd) params.append("departure_date__lte", departureEnd);

    try {
      const res = await fetch(`http://localhost:8000/api/clientes/?${params}`);
      if (!res.ok) {
        console.error("Error al cargar perfiles:", res.status);
        setClientes([]);
        setTotalPages(1);
        return;
      }
      const data = await res.json();
      setClientes(data.results);
      setTotalPages(Math.ceil(data.count / 10));
    } catch (error) {
      console.error("Error en fetch:", error);
      setClientes([]);
      setTotalPages(1);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, [search, ordering, page, arrivalStart, arrivalEnd, departureStart, departureEnd]);

  return (
    <div className="container my-4">

      {/* Filtros */}
      <div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <input
                type="text"
                placeholder="Buscar por nombre, email o actividad..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); resetPage(); }}
                className="form-control"
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <select
                value={ordering}
                onChange={(e) => { setOrdering(e.target.value); resetPage(); }}
                className="form-select"
              >
                <option value="first_name">Nombre</option>
                <option value="last_name">Apellido</option>
                <option value="arrival_date">Fecha de llegada</option>
                <option value="-arrival_date">Fecha de llegada (desc)</option>
              </select>
            </div>

            <div className="col-md-6 col-lg-2">
              <label className="form-label">Llegada desde:</label>
              <input
                type="date"
                value={arrivalStart}
                onChange={(e) => { setArrivalStart(e.target.value); resetPage(); }}
                className="form-control"
              />
            </div>
            <div className="col-md-6 col-lg-2">
              <label className="form-label">Hasta:</label>
              <input
                type="date"
                value={arrivalEnd}
                onChange={(e) => { setArrivalEnd(e.target.value); resetPage(); }}
                className="form-control"
              />
            </div>

            <div className="col-md-6 col-lg-2">
              <label className="form-label">Salida desde:</label>
              <input
                type="date"
                value={departureStart}
                onChange={(e) => { setDepartureStart(e.target.value); resetPage(); }}
                className="form-control"
              />
            </div>
            <div className="col-md-6 col-lg-2">
              <label className="form-label">Hasta:</label>
              <input
                type="date"
                value={departureEnd}
                onChange={(e) => { setDepartureEnd(e.target.value); resetPage(); }}
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Listado de perfiles */}
      <div className="row">
        {clientes.map((p) => (
          <div key={p.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                {/* Nombre como enlace */}
                <h5 className="card-title">
                  <Link to={`/clientes/${p.id}`} className="text-decoration-none">
                    {p.first_name} {p.last_name}
                  </Link>
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{p.email}</h6>
                <p className="card-text">
                  <strong>Llegada:</strong> {p.arrival_date || "N/A"} <br />
                  <strong>Salida:</strong> {p.departure_date || "N/A"}
                </p>
                <p className="card-text">
                  <strong>Actividades:</strong> {p.favorite_activities || "Ninguna"}
                </p>
                <p className="card-text">
                  <strong>Notas:</strong> {p.notes || "Sin notas"}
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 text-end">
                {/* Botón Ver detalle */}
                <Link to={`/clientes/${p.id}`} className="btn btn-outline-primary btn-sm">
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setPage(page - 1)}>
              Anterior
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">Página {page} de {totalPages}</span>
          </li>
          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setPage(page + 1)}>
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
