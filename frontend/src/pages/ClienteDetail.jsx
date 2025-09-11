import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getClienteById, deleteCliente } from "../services/cliente";

export default function ClienteDetail() {
  const { id } = useParams(); // 👈 obtiene el ID desde la URL
  const navigate = useNavigate();
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getClienteById(id)
      .then((data) => {
        setCliente(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar perfil", err);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("¿Seguro que deseas eliminar este perfil?")) {
      await deleteCliente(id);
      navigate("/clientes");
    }
  };

  if (loading)
    return (
      <div className="container my-4">
        <div className="alert alert-info">Cargando perfil...</div>
      </div>
    );

  if (!cliente)
    return (
      <div className="container my-4">
        <div className="alert alert-danger">Perfil no encontrado ❌</div>
      </div>
    );

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">
            Detalle de {cliente.first_name} {cliente.last_name}
          </h4>
        </div>
        <div className="card-body">
          <p>
            <strong>Email:</strong> {cliente.email}
          </p>
          <p>
            <strong>Número de teléfono:</strong> {cliente.phone_number}
          </p>
          <p>
            <strong>Fecha llegada:</strong> {cliente.arrival_date || "N/A"}
          </p>
          <p>
            <strong>Fecha salida:</strong> {cliente.departure_date || "N/A"}
          </p>
          <p>
            <strong>Actividades favoritas:</strong>{" "}
            {cliente.favorite_activities || "N/A"}
          </p>
          <p>
            <strong>Notas:</strong> {cliente.notes || "N/A"}
          </p>
        </div>
        <div className="card-footer d-flex justify-content-end gap-2">
          <Link to={`/clientes/${id}/edit`} className="btn btn-outline-primary">
            Editar
          </Link>
          <button onClick={handleDelete} className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
