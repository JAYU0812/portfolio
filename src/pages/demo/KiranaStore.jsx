import { Link } from "react-router-dom";

export default function KiranaStore() {
  const products = [
    "Rice & Wheat",
    "Pulses & Grains",
    "Oil & Ghee",
    "Snacks & Biscuits",
    "Spices",
    "Dairy Products",
    "Soaps & Detergents",
    "Daily Essentials",
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Portfolio Demo Navigation Bar */}
      <div className="bg-[#121316] text-white px-4 sm:px-6 py-2.5 text-xs flex items-center justify-between border-b border-[#333]">
        <Link to="/projects" className="text-[#E8C37D] hover:underline font-mono truncate mr-2">
          ← Back to Portfolio
        </Link>
        <span className="text-gray-400 font-mono hidden sm:inline shrink-0">
          Client Demo: Digitized Grocery Platform
        </span>
      </div>

      {/* Header */}
      <header className="bg-emerald-700 text-white p-3.5 sm:p-4 flex justify-between items-center shadow-xs">
        <h1 className="text-base sm:text-xl font-bold truncate mr-2">
          Shree Patel Kirana Store
        </h1>
        <a
          href="tel:9876543210"
          className="bg-white text-emerald-800 font-semibold px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm shrink-0"
        >
          Call Now
        </a>
      </header>

      {/* Hero */}
      <section className="text-center py-10 sm:py-12 px-4 bg-white border-b border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-gray-900">
          Daily Grocery Delivered Near You
        </h2>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto text-xs sm:text-sm">
          Fresh groceries, best prices & quick service across the neighborhood.
        </p>
        <a
          href="https://wa.me/917990361109"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-emerald-700 transition shadow-sm"
        >
          Order on WhatsApp
        </a>
      </section>

      {/* Products */}
      <section className="py-10 sm:py-12 px-4 max-w-5xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
          Our Products & Inventory
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-xs border border-gray-100 text-center hover:border-emerald-300 transition"
            >
              <p className="font-semibold text-gray-800 text-sm">{product}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-6 border-t border-gray-200">
        Digitized by Soni Jaykumar • © Shree Patel Kirana Store
      </footer>
    </div>
  );
}