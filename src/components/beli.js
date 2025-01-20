import React from 'react';
import LogoLogin from '../assets/login.svg';  // Ganti dengan path logo yang sesuai
import LogoDashboard from '../assets/dashboard.svg';  // Ganti dengan path logo yang sesuai
import LogoCart from '../assets/add-cart.svg';  // Ganti dengan path logo yang sesuai
import LogoSummary from '../assets/summary.svg';  // Ganti dengan path logo yang sesuai
import LogoPickup from '../assets/take-order.svg';  // Ganti dengan path logo yang sesuai

const HowToBuy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-yellow-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-green-800 mb-6 text-center">Cara Membeli Barang di d'Co Mart</h1>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-yellow-700 mb-4">Langkah-langkah Pembelian</h2>

        <ol className="list-decimal pl-6 space-y-4">
          {/* Step 1: Login */}
          <li className="flex items-start space-x-4">
            <img src={LogoLogin} alt="Login Icon" className="w-8 h-8" />
            <div>
              <h3 className="font-semibold text-blue-950">1. Login Akun</h3>
              <p className="text-green-700">
                Sebelum memulai pembelian, pastikan Anda sudah melakukan login ke akun d'Co Mart. Jika belum memiliki akun, lakukan registrasi terlebih dahulu.
              </p>
            </div>
          </li>

          {/* Step 2: Dashboard */}
          <li className="flex items-start space-x-4">
            <img src={LogoDashboard} alt="Dashboard Icon" className="w-8 h-8" />
            <div>
              <h3 className="font-semibold text-blue-950">2. Masuk ke Halaman Dashboard</h3>
              <p className="text-green-700">
                Setelah berhasil login, masuk ke halaman dashboard untuk mengelola akun dan melihat produk yang tersedia untuk dibeli.
              </p>
            </div>
          </li>

          {/* Step 3: Choose Products */}
          <li className="flex items-start space-x-4">
            <img src={LogoCart} alt="Cart Icon" className="w-8 h-8" />
            <div>
              <h3 className="font-semibold text-blue-950">3. Pilih Barang</h3>
              <p className="text-green-700">
                Telusuri berbagai produk yang tersedia, pilih barang yang Anda inginkan, dan masukkan ke dalam keranjang belanja.
              </p>
            </div>
          </li>

          {/* Step 4: Summary */}
          <li className="flex items-start space-x-4">
            <img src={LogoSummary} alt="Summary Icon" className="w-8 h-8" />
            <div>
              <h3 className="font-semibold text-blue-950">4. Lihat Ringkasan Pesanan</h3>
              <p className="text-green-700">
                Sebelum melanjutkan ke pembayaran, pastikan untuk memeriksa kembali ringkasan pesanan Anda, termasuk jumlah dan harga barang yang dipilih.
              </p>
            </div>
          </li>

          {/* Step 5: Confirm Order */}
          <li className="flex items-start space-x-4">
            <img src={LogoSummary} alt="Confirm Icon" className="w-8 h-8" />
            <div>
              <h3 className="font-semibold text-blue-950">5. Pastikan Pesanan Benar</h3>
              <p className="text-green-700">
                Pastikan barang yang Anda pesan sudah benar. Metode pembayaran yang tersedia hanya Cash on Delivery (COD).
              </p>
            </div>
          </li>

          {/* Step 6: Pickup */}
          <li className="flex items-start space-x-4">
            <img src={LogoPickup} alt="Pickup Icon" className="w-8 h-8" />
            <div>
              <h3 className="font-semibold text-blue-950">6. Pengambilan Barang di Toko</h3>
              <p className="text-green-700">
                Anda dapat mengambil barang yang sudah dipesan langsung ke toko. Jangan lupa untuk menunjukkan order summary sebagai bukti pembelian saat pengambilan.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HowToBuy;
