import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Summary = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product A', price: 50000, quantity: 2 },
    { id: 2, name: 'Product B', price: 30000, quantity: 1 },
  ]);
  const [userInfo, setUserInfo] = useState({ name: 'User', contact: '' });
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    setShowPopup(true);
    setTimeout(() => {
      navigate('/order-review', { state: { cartItems, userInfo, total: calculateTotal() } });
    }, 5000);
  };
  
  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/order-review', { state: { cartItems, userInfo, total: calculateTotal() } });
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate('/order-review', { state: { cartItems, userInfo, total: calculateTotal() } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-yellow-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-green-800 mb-4">Order Summary</h1>

      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-4">
        <h2 className="text-lg font-semibold text-yellow-700 mb-4">Your Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>{item.name}</span>
              <span>{item.quantity} x Rp{item.price.toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center font-bold text-green-800 mt-4">
          <span>Total:</span>
          <span>Rp{calculateTotal().toLocaleString()}</span>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-4 mt-4">
        <h2 className="text-lg font-semibold text-yellow-700 mb-4">Payment Method</h2>
        <p className="text-green-700">Cash on Delivery (COD)</p>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 w-full max-w-lg"
      >
        Place Order
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-80 text-center">
            <h2 className="text-lg font-bold text-green-800 mb-4">Order Received</h2>
            <p className="text-green-700 mb-4">
              Terimakasih sudah berbelanja, {userInfo.name}! Dimohon untuk menunjukkan bukti pesanan ketika mengambil barang pesanan.
            </p>
            <button
              onClick={handleClosePopup} // Change to handleClosePopup to navigate on close
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
