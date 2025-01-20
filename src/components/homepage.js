import React from "react";
import WelcomeImage from "../assets/Welcome.png";
// import Dollars from "../assets/Dollars.png";
// import Voucher from "../assets/Voucher.png";
import Nasgor from "../assets/nasi-goreng.png";
import Minyak from "../assets/minyak.png";
import Minuman from "../assets/Minuman.png";
import Roti from "../assets/Roti.png";
import Listrik from "../assets/Peralatan Listrik.png";
import Perlengkapan from "../assets/PerlengkapanRT.png";
import Snack from "../assets/snack.png";
import Lainnya from "../assets/Lainnya.png";
import Buah from "../assets/Buah.png";
import Perawatan from "../assets/Perawatan.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-md">
        {/* Banner */}
        <div className="p-4 text-center">
          <div className="bg-green-100 rounded-lg p-4">
            <img src={WelcomeImage} alt="User" className="max-w-full h-auto" />
          </div>
        </div>

        {/* Order */}
        <Link to="/cart">
          <button className="w-full sm:w-104 text-center py-2 px-6 bg-white text-blue-950 font-bold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            <div className="flex items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"
                alt="dollars"
                className="w-8 h-8 mr-2"
              />
            </div>

            <p>Order Now</p>
          </button>
        </Link>

        {/* Points and Vouchers */}
        {/* <div className="flex flex-wrap justify-between p-4 bg-gray-100">
          <button className="w-full sm:w-96 text-center py-2 px-6 bg-white text-blue-950 font-bold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            <div className="flex items-center justify-center">
              <img src={Dollars} alt="dollars" className="w-8 h-8 mr-2" />
            </div>
            <p>Poin Anda</p>
            <p className="text-lg font-bold">10</p>
          </button>

          <button className="w-full sm:w-96 text-center py-2 px-6 bg-white text-blue-950 font-bold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mt-4 sm:mt-0">
            <div className="flex items-center justify-center">
              <img src={Voucher} alt="dollars" className="w-8 h-8 mr-2" />
            </div>
            <p>Voucher</p>
            <p className="text-lg font-bold">10</p>
          </button>
        </div> */}

        {/* Categories */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-4 text-blue-950">
            Hari ini mau belanja apa?
          </h3>
          <div className="bg-white rounded-lg shadow-md p-4 grid grid-cols-2 md:grid-cols-5 gap-4">
            <button className="btn btn-outline btn-sm flex flex-col items-center justify-center h-32 overflow-hidden border border-gray-300 rounded-lg font-bold text-blue-950">
              <img src={Nasgor} alt="UMKM" className="w-16 h-16 mb-2" />
              Produk UMKM
            </button>
            <button className="btn btn-outline btn-sm flex flex-col items-center justify-center h-32 overflow-hidden border border-gray-300 rounded-lg font-bold text-blue-950">
              <img src={Minyak} alt="Minyak" className="w-16 h-16 mb-2" />
              Bahan Pokok & Dapur
            </button>
            <button className="btn btn-outline btn-sm flex flex-col items-center justify-center h-32 overflow-hidden border border-gray-300 rounded-lg font-bold text-blue-950">
              <img src={Minuman} alt="Minuman" className="w-16 h-16 mb-2" />
              Minuman & Es Krim
            </button>
            <button className="btn btn-outline btn-sm flex flex-col items-center justify-center h-32 overflow-hidden border border-gray-300 rounded-lg font-bold text-blue-950">
              <img src={Snack} alt="Snack" className="w-16 h-16 mb-2" />
              Camilan
            </button>
            <button className="btn btn-outline btn-sm flex flex-col items-center justify-center h-32 overflow-hidden border border-gray-300 rounded-lg font-bold text-blue-950">
              <img src={Roti} alt="Roti" className="w-16 h-16 mb-2" />
              Roti
            </button>
            <button className="btn btn-outline btn-sm flex flex-col items-center justify-center h-32 overflow-hidden border border-gray-300 rounded-lg font-bold text-blue-950">
              <img src={Buah} alt="Buah" className="w-16 h-16 mb-2" />
              Buah
            </button>
            <button className="btn btn-outline btn-sm flex flex-col items-center justify-center h-32 overflow-hidden border border-gray-300 rounded-lg font-bold text-blue-950">
              <img src={Perawatan} alt="Skincare" className="w-16 h-16 mb-2" />
              Perawatan
            </button>
            <button className="btn btn-outline btn-sm flex flex-col items-center justify-center h-32 overflow-hidden border border-gray-300 rounded-lg font-bold text-blue-950">
              <img src={Perlengkapan} alt="RT" className="w-16 h-16 mb-2" />
              Perlengkapan Rumah Tangga
            </button>
            <button className="btn btn-outline btn-sm flex flex-col items-center justify-center h-32 overflow-hidden border border-gray-300 rounded-lg font-bold text-blue-950">
              <img src={Listrik} alt="Listrik" className="w-16 h-16 mb-2" />
              Peralatan Listrik
            </button>
            <button className="btn btn-outline btn-sm flex flex-col items-center justify-center h-32 overflow-hidden border border-gray-300 rounded-lg font-bold text-blue-950">
              <img src={Lainnya} alt="Others" className="w-16 h-16 mb-2" />
              Lainnya
            </button>
          </div>

          {/* PRODUK UMKM */}
          <div className="p-4 bg-blue-50 min-h-screen">
            <h2 className="text-lg font-bold mb-4">Produk UMKM</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                <img
                  src="C:/Users/Muhammad Akmal/OneDrive/Documents/Web Dco Mart/Asset/umkm_nasi uduk.jpg"
                  alt="Nasi Uduk Bowl"
                  className="rounded-md mb-4"
                />
                <h3 className="text-base font-semibold mb-1">Nasi Uduk Bowl</h3>
                <p className="text-sm text-gray-500 mb-3">Bakul Mak Entiek</p>
                <div className="flex items-center justify-between">
                  <p className="text-green-600 font-bold">Rp 17.000</p>
                  <span className="text-sm text-gray-400">10 terjual</span>
                </div>
                <button className="mt-4 bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  +
                </button>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                <img
                  src="C:/Users/Muhammad Akmal/OneDrive/Documents/Web Dco Mart/Asset/umkm_nasi goreng.png"
                  alt="Nasi Goreng Spesial"
                  className="rounded-md mb-4"
                />
                <h3 className="text-base font-semibold mb-1">
                  Nasi Goreng Spesial
                </h3>
                <p className="text-sm text-gray-500 mb-3">Warung Bu Nenik</p>
                <div className="flex items-center justify-between">
                  <p className="text-green-600 font-bold">Rp 20.000</p>
                  <span className="text-sm text-gray-400">20 terjual</span>
                </div>
                <button className="mt-4 bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  +
                </button>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                <img
                  src="C:/Users/Muhammad Akmal/OneDrive/Documents/Web Dco Mart/Asset/umkm_nasi kuning.png"
                  alt="Nasi Kuning Lengkap"
                  className="rounded-md mb-4"
                />
                <h3 className="text-base font-semibold mb-1">
                  Nasi Kuning Lengkap
                </h3>
                <p className="text-sm text-gray-500 mb-3">Sutil Sederhana</p>
                <div className="flex items-center justify-between">
                  <p className="text-green-600 font-bold">Rp 21.000</p>
                  <span className="text-sm text-gray-400">10 terjual</span>
                </div>
                <button className="mt-4 bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  +
                </button>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                <img
                  src="C:/Users/Muhammad Akmal/OneDrive/Documents/Web Dco Mart/Asset/umkm_nasgor sosis.png"
                  alt="Nasi Goreng Sosis"
                  className="rounded-md mb-4"
                />
                <h3 className="text-base font-semibold mb-1">
                  Nasi Goreng Sosis
                </h3>
                <p className="text-sm text-gray-500 mb-3">Dapur Bapak</p>
                <div className="flex items-center justify-between">
                  <p className="text-green-600 font-bold">Rp 20.000</p>
                  <span className="text-sm text-gray-400">11 terjual</span>
                </div>
                <button className="mt-4 bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
