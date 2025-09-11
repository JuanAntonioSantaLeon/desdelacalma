import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getClienteById, updateCliente } from "../services/cliente";

export default function ClienteEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    arrival_date: "",
    departure_date: "",
    favorite_activities: "",
    notes: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getClienteById(id)
      .then((data) => {
        setFormData({
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          email: data.email || "",
          phone_number: data.phone_number || "",
          arrival_date: data.arrival_date || "",
          departure_date: data.departure_date || "",
          favorite_activities: data.favorite_activities || "",
          notes: data.notes || "",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar perfil", err);
        setLoading(false);
        setMessage("Error al cargar el perfil ❌");
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = { ...formData };

    // Normalizar fechas al formato que espera la API
    if (dataToSend.arrival_date) {
      dataToSend.arrival_date = new Date(dataToSend.arrival_date)
        .toISOString()
        .split("T")[0];
    } else {
      dataToSend.arrival_date = null;
    }
    if (dataToSend.departure_date) {
      dataToSend.departure_date = new Date(dataToSend.departure_date)
        .toISOString()
        .split("T")[0];
    } else {
      dataToSend.departure_date = null;
    }

    try {
      await updateCliente(id, dataToSend);
      navigate(`/clientes/${id}`);
    } catch (error) {
      console.error("Error al actualizar perfil", error);
      setMessage("Error al actualizar perfil ❌");
    }
  };

  if (loading)
    return (
      <div className="container my-4">
        <div className="alert alert-info">Cargando perfil...</div>
      </div>
    );

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Editar Perfil</h4>
        </div>
        <div className="card-body">
          {message && (
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <label htmlFor="first_name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="last_name" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Correo
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="phone_number" className="form-label">
                Número de teléfono
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="arrival_date" className="form-label">
                Fecha de llegada
              </label>
              <input
                type="date"
                id="arrival_date"
                name="arrival_date"
                value={formData.arrival_date}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="departure_date" className="form-label">
                Fecha de salida
              </label>
              <input
                type="date"
                id="departure_date"
                name="departure_date"
                value={formData.departure_date}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="col-12">
              <label htmlFor="favorite_activities" className="form-label">
                Actividades favoritas
              </label>
              <textarea
                id="favorite_activities"
                name="favorite_activities"
                value={formData.favorite_activities}
                onChange={handleChange}
                className="form-control"
                rows="2"
              />
            </div>

            <div className="col-12">
              <label htmlFor="notes" className="form-label">
                Notas
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="form-control"
                rows="3"
              />
            </div>

            <div className="col-12 d-flex justify-content-end">
              <button type="submit" className="btn btn-success">
                Guardar cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
