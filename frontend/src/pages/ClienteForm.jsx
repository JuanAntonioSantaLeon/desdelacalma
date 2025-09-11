import { useState } from "react";
import { createCliente } from "../services/cliente";

export default function ClienteForm() {
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

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCliente(formData);
      setMessage("Perfil creado con éxito 🎉");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        arrival_date: "",
        departure_date: "",
        favorite_activities: "",
        notes: "",
      });
    } catch (error) {
      setMessage("Error al crear el perfil ❌");
      console.error(error);
    }
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Crear Perfil</h4>
        </div>
        <div className="card-body">
          {message && (
            <div
              className={`alert ${
                message.includes("éxito") ? "alert-success" : "alert-danger"
              }`}
              role="alert"
            >
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
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
