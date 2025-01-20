import React from 'react';

const PaymentInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-yellow-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-green-800 mb-4">Cara Pembayaran</h1>

      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6 mb-4">
        <h2 className="text-lg font-semibold text-yellow-700 mb-4">Pembayaran Cash on Delivery (COD)</h2>
        <p className="text-green-700">
          Pembayaran dapat dilakukan langsung kepada kurir saat barang tiba di alamat Anda. Pastikan untuk mempersiapkan uang tunai sesuai dengan total yang tertera pada invoice.
        </p>
        <p className="text-green-700 mt-2">
          Pembayaran COD hanya tersedia untuk wilayah yang sudah kami tentukan. Jika Anda memilih metode pembayaran ini, kami akan mengonfirmasi pengiriman.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6 mb-4">
        <h2 className="text-lg font-semibold text-yellow-700 mb-4">Pembayaran Melalui Transfer Bank</h2>
        <p className="text-green-700">
          Untuk pembayaran menggunakan transfer bank, silakan melakukan transfer ke rekening yang telah kami sediakan. Setelah melakukan transfer, mohon untuk mengirimkan bukti transfer ke nomor WhatsApp kami untuk konfirmasi.
        </p>
        <p className="text-green-700 mt-2">
          Informasi rekening bank kami:
          <ul className="list-disc pl-6">
            <li>Bank BJB - No. Rekening: 1234567890</li>
          </ul>
        </p>
        <p className="text-green-700 mt-2">
          Setelah transfer, kirimkan bukti transfer melalui WhatsApp ke nomor berikut:
        </p>
        <a
          href="https://wa.me/6281234567890"
          className="text-blue-500 hover:text-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kirim Bukti Transfer ke WhatsApp
        </a>
      </div>

      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6 mt-4">
        <h2 className="text-lg font-semibold text-yellow-700 mb-4">Penting!</h2>
        <p className="text-green-700">
          Pastikan Anda memeriksa informasi yang benar saat melakukan transfer dan mengirimkan bukti transfer. Kami akan memproses pesanan Anda setelah pembayaran kami terima.
        </p>
      </div>
    </div>
  );
};

export default PaymentInfo;
