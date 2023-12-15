// OrderItem.jsx
import React from "react";
import { TbBus } from "react-icons/tb";
import { FaEye } from "react-icons/fa";

// Componente para mostrar un elemento individual en la lista de pedidos
const OrderItem = ({ order, onShowDetails }) => {
  return (
    <div key={order.order_number}>
      {/* Espacio para la foto circular */}
      <div className="circular-photo"></div>
      <p>
        {/* Mostramos el icono de Type */}
        Order : {order.order_number} | Type: {order.type} <TbBus />
        {/* Botón para mostrar los detalles del pedido */}
        <button onClick={() => onShowDetails(order)} className="btn-resume">
          Resume <FaEye />
        </button>
      </p>
    </div>
  );
};

export default OrderItem;
