import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './orders.css';

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/allOrders')
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the orders:", error);
      });
  }, []);

  // If there are no orders, display a helpful message and a link
  if (allOrders.length === 0) {
    return (
      <div className="orders-container no-orders">
        <p>You haven't placed any orders.</p>
        <Link to={"/"} className="btn">
          Browse Stocks
        </Link>
      </div>
    );
  }

  // If there are orders, display the table
  return (
    <div className="orders-container">
      {/* ---- Main Heading ---- */}
      <h2>Orders ({allOrders.length})</h2>

      {/* ---- Orders Table ---- */}
      <div>
        {/* Table Header */}
        <div className="table-header">
          <span>Instrument</span>
          <span>Mode</span>
          <span>Qty.</span>
          <span>LTP</span>
          <span>Cur. val</span>
        </div>

        {/* Table Body */}
        {allOrders.map((order) => {
          const currentValue = order.price * order.qty;
          return (
            // Use the unique '_id' from your data for the key prop
            <div className="table-row" key={order._id}>
              <span>{order.name}</span>
              <span>{order.mode}</span>
              <span>{order.qty}</span>
              <span>{(order.price || 0).toFixed(2)}</span>
              <span>{(currentValue || 0).toFixed(2)}</span>
            </div>
          );
        })}
      </div>

      {/* ---- Summary Section ---- */}
      <div className="summary-footer">
        <div>
          <h3>
            {allOrders
              .reduce((acc, order) => acc + order.price * order.qty, 0)
              .toFixed(2)}
          </h3>
          <p>Total Current Value</p>
        </div>
      </div>
    </div> // <-- This was the corrected closing tag
  );
};

export default Orders;