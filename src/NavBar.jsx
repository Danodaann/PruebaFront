// Importamos los módulos necesarios de React
import React from "react";
import "./NavBar.css"; // Importamos el archivo de estilos CSS para la barra de navegación

// Definimos el componente funcional NavBar
const NavBar = ({ selectedTab, onSelectTab }) => {
  // Renderizamos la interfaz del componente NavBar
  return (
    <div className="navbar">
      {/* Botones para los diferentes apartados de la barra de navegación */}
      <button
        className={selectedTab === "upcoming" ? "active" : ""}
        onClick={() => onSelectTab("upcoming")}
        id="btn"
      >
        Upcoming
      </button>
      <button
        className={selectedTab === "completed" ? "active" : ""}
        onClick={() => onSelectTab("completed")}
        id="btn"
      >
        Completed
      </button>
      <button
        className={selectedTab === "past" ? "active" : ""}
        onClick={() => onSelectTab("past")}
        id="btn"
      >
        Past
      </button>
    </div>
  );
};

// Exportamos el componente NavBar para su uso en otras partes de la aplicación
export default NavBar;
