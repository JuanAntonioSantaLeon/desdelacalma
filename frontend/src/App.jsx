import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Clientes from "./pages/Clientes";
import ClienteForm from "./pages/ClienteForm";
import ClienteDetail from "./pages/ClienteDetail";
import ClienteEdit from "./pages/ClienteEdit";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<h1>Inicio</h1>} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/new-cliente" element={<ClienteForm />} />
            <Route path="/clientes/:id" element={<ClienteDetail />} />
            <Route path="/clientes/:id/edit" element={<ClienteEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;