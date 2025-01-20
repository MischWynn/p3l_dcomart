import React from 'react'

const contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-yellow-100 p-6 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-yellow-700 mb-4">Butuh bantuan?</h2>
        <p className="text-green-700 mb-4">
          Apabila kamu memiliki kendala atau pertanyaan, Anda bisa menghubungi kami melalui WhatsApp.
        </p>
        <a
          href="https://wa.me/6281234567890"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hubungi Kami via WhatsApp
        </a>
      </div>
    </div>
  )
}

export default contact
