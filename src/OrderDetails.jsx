// OrderDetails.jsx
import React from "react";
import { LuBus } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import { BsCheckCircle } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

// Componente para mostrar los detalles de un pedido seleccionado
const OrderDetails = ({ order, onTrackOrder, onHideDetails }) => {
  return (
    <div className="container-details">
      {/* Espacio para la foto circular */}
      <div className="circular-photo-details"></div>
      <span className="span-title">Order Details</span>
      {/* Botón para ocultar los detalles */}
      <button onClick={onHideDetails} className="btn-hide">
        <IoIosArrowUp />
      </button>
      <p>
        {/* Mostramos el icono de Type */}
        Order : {order.order_number} | Type: {order.type} <LuBus />
      </p>
      <img src="../user-img.webp" alt="" className="imgRedonda" />

      <p>
        {/* Mostramos el valor de status_string */}
        Status: {order.status_string}{" "}
        {/* Mostramos la palomita verde si el estado es "Recolección completada" */}
        {order.status_string === "Recolección completada" && (
          <BsCheckCircle className="green-check" />
        )}
      </p>
      {order.destinations && order.destinations.length > 0 && (
        <div>
          {/* Detalles de la dirección de recogida */}
          <p>
            Pickup Address: {order.destinations[0].address} <CiLocationArrow1 />
          </p>
          {/* Detalles de la dirección de entrega */}
          <p>
            Dropoff Address: {order.destinations[1].address}{" "}
            <IoLocationOutline />
          </p>
          <p>Start Date: {order.start_date}</p>
          <p>End Date: {order.end_date}</p>
        </div>
      )}
      {/* Botón para rastrear el pedido, solo habilitado si el estado es >= 3 */}
      <button
        onClick={() => onTrackOrder(order)}
        disabled={order.status < 3}
        className="btn-track"
      >
        Track Order
      </button>
    </div>
  );
};

export default OrderDetails;
