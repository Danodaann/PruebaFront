// OrderList.jsx
import React, { useState, useEffect } from "react";
import OrderItem from "./OrderItem";
import OrderDetails from "./OrderDetails";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (typeof data === "object" && data.result) {
          setOrders(data.result);
          setFilteredOrders(data.result);
        } else {
          console.error("API response does not contain order data:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleSearch = (value) => {
    setSearchTerm(value);
    const filtered = orders.filter((order) =>
      order.order_number.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOrders(filtered);
  };

  const handleShowDetails = (order) => {
    setSelectedOrder(order);
  };

  const handleHideDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <div>
      <h2>
        Cargo Orders <FaRegBell />
      </h2>
      <label htmlFor="search">
        Search by Order Number: <CiSearch />
      </label>
      <input
        type="text"
        placeholder="Search..."
        id="search"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {filteredOrders.length > 0 ? (
        <div>
          {filteredOrders.map((order) => (
            <OrderItem
              key={order.order_number}
              order={order}
              onShowDetails={handleShowDetails}
            />
          ))}
          {selectedOrder && (
            <OrderDetails
              order={selectedOrder}
              onTrackOrder={(order) => {
                if (order.status >= 3) {
                  console.log("Track Order:", order.order_number);
                }
              }}
              onHideDetails={handleHideDetails}
            />
          )}
        </div>
      ) : (
        <p>No se encontraron pedidos próximos.</p>
      )}
    </div>
  );
};

export default OrderList;
