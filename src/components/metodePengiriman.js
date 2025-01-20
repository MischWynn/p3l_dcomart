import React from "react";
import Package from "../assets/package.jpeg";

const ShippingMethods = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-yellow-100 p-6 flex flex-col items-center">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-blue-950 mb-4 text-center">Shipping Information</h1>
        <img
          src={Package}
          alt="Shipping Illustration"
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <p className="text-blue-950">
          d'Co Mart menawarkan metode bagi customer untuk dapat mengambil barang pesanannya ditoko. Kami masih dalam tahap
          pengembangan, sehingga kami akan memperluas metode pengirimannya. Mohon doa dan restunya ya!
        </p>
      </div>
    </div>
  );
};

export default ShippingMethods;
