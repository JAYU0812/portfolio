import { Link } from "react-router-dom";

export default function MedicalStore() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Portfolio Demo Navigation Bar */}
      <div className="bg-[#121316] text-white px-4 sm:px-6 py-2.5 text-xs flex items-center justify-between border-b border-[#333]">
        <Link to="/projects" className="text-[#E8C37D] hover:underline font-mono truncate mr-2">
          ← Back to Portfolio
        </Link>
        <span className="text-gray-400 font-mono hidden sm:inline shrink-0">
          Client Demo: Pharmacy & Healthcare Store
        </span>
      </div>

      {/* Header */}
      <header className="bg-sky-800 text-white p-3.5 sm:p-4 flex justify-between items-center shadow-xs">
        <h1 className="text-base sm:text-xl font-bold truncate mr-2">
          Shree Ambica Medical Store
        </h1>
        <a
          href="tel:9876543210"
          className="bg-white text-sky-900 font-semibold px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm shrink-0"
        >
          Call Now
        </a>
      </header>

      {/* Hero */}
      <section className="bg-white text-center py-10 sm:py-12 px-4 border-b border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-gray-900">
          Trusted Healthcare & Medicines Near You
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto text-xs sm:text-sm">
          All genuine allopathic medicines, surgical supplies, and fast local doorstep delivery.
        </p>
        <a
          href="https://wa.me/917990361109"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sky-700 text-white px-6 py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-sky-800 transition shadow-sm"
        >
          Order via WhatsApp
        </a>
      </section>

      {/* Services */}
      <section className="py-10 sm:py-12 px-4 max-w-5xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
          Available Services & Supplies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 text-center">
          {[
            "Allopathic & Generic Medicines",
            "Surgical & Diagnostic Supplies",
            "Health & Dietary Supplements",
            "Infant & Mother Care Essentials",
            "Blood Pressure & Sugar Checks",
            "Local Home Delivery Service",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 font-medium text-gray-800 text-sm hover:border-sky-300 transition"
            >
              <span className="text-sky-600 mr-2">✔</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-6 border-t border-gray-200">
        Digitized by Soni Jaykumar • © Shree Ambica Medical Store
      </footer>
    </div>
  );
}