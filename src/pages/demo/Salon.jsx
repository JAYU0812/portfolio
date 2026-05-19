import React from "react";

export default function Salon() {

  const services = [
    "Hair Cut & Styling",
    "Facial & Cleanup",
    "Makeup Services",
    "Hair Coloring",
    "Waxing",
    "Threading",
    "Bridal Makeup",
    "Skin Care",
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">

      {/* Header */}
      <header className="bg-pink-600 text-white p-4 flex justify-between items-center">

        <h1 className="text-xl font-bold">
          Glow Beauty Salon
        </h1>

        <a
          href="tel:9876543210"
          className="bg-white text-pink-600 px-4 py-1 rounded"
        >
          Call Now
        </a>

      </header>

      {/* Hero */}
      <section className="bg-white text-center py-12 px-4">

        <h2 className="text-3xl font-bold mb-3">
          Look Good. Feel Confident.
        </h2>

        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Professional beauty & grooming services for men and women.
          Book your appointment easily on WhatsApp.
        </p>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-pink-600 transition"
        >
          Book Appointment
        </a>

      </section>

      {/* Services */}
      <section className="py-10 px-4">

        <h3 className="text-2xl font-semibold text-center mb-6">
          Our Services
        </h3>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow"
            >
              {service}
            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 p-4">
        © 2025 Glow Beauty Salon
      </footer>

    </div>
  );
}