// Importamos los módulos necesarios de React
import React, { useState } from "react";
import OrderList from "./OrderList";
import NavBar from "./NavBar";

// Definimos el componente funcional App
const App = () => {
  // Definimos el estado local para el apartado seleccionado en la barra de navegación
  const [selectedTab, setSelectedTab] = useState("upcoming");

  // Función para manejar la selección de un apartado en la barra de navegación
  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
  };

  // Renderizamos la interfaz del componente App
  return (
    <div>
      {/* Renderizamos la barra de navegación con el componente NavBar */}
      <NavBar selectedTab={selectedTab} onSelectTab={handleSelectTab} />
      {/* Renderizamos la lista de pedidos con el componente OrderList */}
      <OrderList selectedTab={selectedTab} />
    </div>
  );
};

// Exportamos el componente App para su uso en otras partes de la aplicación
export default App;
