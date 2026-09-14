import { Link } from "react-router-dom";

export default function Salon() {
  const services = [
    "Hair Cut & Creative Styling",
    "Deep Cleansing & Facials",
    "Event & Party Makeup",
    "Organic Hair Coloring",
    "Waxing & Skin Polish",
    "Threading & Eyebrows",
    "Bridal Packages",
    "Anti-Pollution Treatments",
  ];

  return (
    <div className="bg-stone-50 text-stone-800 min-h-screen">
      {/* Portfolio Demo Navigation Bar */}
      <div className="bg-[#121316] text-white px-6 py-2.5 text-xs flex items-center justify-between border-b border-[#333]">
        <Link to="/projects" className="text-[#E8C37D] hover:underline font-mono">
          ← Back to Soni Jaykumar's Portfolio
        </Link>
        <span className="text-gray-400 font-mono hidden sm:inline">
          Client Demo: Beauty & Grooming Salon
        </span>
      </div>

      {/* Header */}
      <header className="bg-[#A03E5C] text-white p-4 flex justify-between items-center shadow-xs">
        <h1 className="text-xl font-serif font-bold tracking-wide">
          Glow Beauty Salon & Studio
        </h1>
        <a
          href="tel:9876543210"
          className="bg-white text-[#A03E5C] font-semibold px-4 py-1.5 rounded-lg text-sm"
        >
          Call Now
        </a>
      </header>

      {/* Hero */}
      <section className="bg-white text-center py-14 px-4 border-b border-stone-100">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-3 text-stone-900">
          Curated Grooming & Aesthetic Beauty
        </h2>
        <p className="text-stone-600 mb-6 max-w-xl mx-auto text-sm">
          Professional beauty, hair styling, and skin care services. Book an appointment instantly on WhatsApp.
        </p>
        <a
          href="https://wa.me/917990361109"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#A03E5C] text-white px-7 py-3 rounded-xl text-base font-semibold hover:bg-[#862E49] transition shadow-sm"
        >
          Book Appointment on WhatsApp
        </a>
      </section>

      {/* Services */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl font-serif font-bold text-center mb-8 text-stone-900">
          Signature Treatments & Services
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-xs border border-stone-200 text-center hover:border-[#A03E5C] transition"
            >
              <p className="font-medium text-stone-800 text-sm">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-stone-500 py-6 border-t border-stone-200">
        Digitized by Soni Jaykumar • © Glow Beauty Salon
      </footer>
    </div>
  );
}