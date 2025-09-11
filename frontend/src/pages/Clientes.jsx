import { useEffect, useState } from "react";
import { getClientes } from "../services/cliente";
import UserClienteList from "../components/ClienteList";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientes().then(data => setClientes(data));
  }, []);

  return (
    <div className="card shadow">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">Lista de Perfiles</h4>
      </div>
      <div className="card-body">
        <UserClienteList />
      </div>
    </div>
  );
}