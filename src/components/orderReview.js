import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderReview = () => {
  const location = useLocation();
  const { cartItems, userInfo, total } = location.state || {};

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-yellow-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-green-800 mb-4">Order Review</h1>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-4">
        <h2 className="text-lg font-semibold text-yellow-700 mb-4">Your Order</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b py-2">
              <span>{item.name}</span>
              <span>{item.quantity} x Rp{item.price.toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center font-bold text-green-800 mt-4">
          <span>Total:</span>
          <span>Rp{total.toLocaleString()}</span>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-4 mt-4">
        <h2 className="text-lg font-semibold text-yellow-700 mb-4">Pickup Instructions</h2>
        <p className="text-green-700">Please show this order summary at the store to collect your items.</p>
      </div>
    </div>
  );
};

export default OrderReview;
