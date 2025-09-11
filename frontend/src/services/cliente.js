import api from "./api";

// Obtener todos los perfiles
export const getClientes = async () => {
  const response = await api.get("clientes/");
  return response.data;
};

// Crear un nuevo perfil
export const createCliente = async (profileData) => {
  const response = await api.post("clientes/", profileData);
  return response.data;
};

// 🔎 Obtener un perfil específico por ID
export const getClienteById = async (id) => {
  const response = await api.get(`clientes/${id}/`);
  return response.data;
};

// Actualizar perfil
export const updateCliente = async (id, profileData) => {
  const response = await api.patch(`clientes/${id}/`, profileData);
  return response.data;
};

// Eliminar perfil
export const deleteCliente = async (id) => {
  await api.delete(`clientes/${id}/`);
};