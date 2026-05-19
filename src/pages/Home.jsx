import React from "react";
import "@lottiefiles/lottie-player";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden relative">

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">

        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300 opacity-30 rounded-full blur-3xl animate-ping"></div>

      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">

        <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col md:flex-row items-center justify-between">

          <h1 className="text-2xl font-bold text-gray-900">
            Jay Soni
          </h1>

          <nav className="flex flex-wrap justify-center gap-5 mt-4 md:mt-0 text-sm md:text-base">

            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>

            <Link to="/projects" className="hover:text-blue-600 transition">
              Projects
            </Link>

            <Link to="/resume" className="hover:text-blue-600 transition">
              Resume
            </Link>

            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>

          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">

        <div className="max-w-5xl mx-auto text-center">

          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_qp1q7mct.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px", margin: "0 auto" }}
            loop
            autoplay
          ></lottie-player>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-6">

            Websites & Apps
            <span className="block text-blue-600">
              For Local Businesses
            </span>

          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">

            I build modern websites & Android apps for Kirana stores,
            medical shops, salons and local businesses with WhatsApp
            ordering, Google Maps and mobile-friendly design.

          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">

            <a
              href="#demos"
              className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300"
            >
              View Business Demos
            </a>

            <Link
              to="/projects"
              className="px-8 py-4 bg-gray-900 text-white rounded-xl shadow-lg hover:bg-black hover:scale-105 transition duration-300"
            >
              View My Projects
            </Link>

            <a
              href="https://wa.me/917990361109"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 hover:scale-105 transition duration-300"
            >
              WhatsApp Me
            </a>

          </div>

          <p className="mt-6 text-sm text-gray-500">
            Business websites starting from ₹3,000 • Fast delivery
          </p>

        </div>

      </section>

      {/* BUSINESS DEMOS */}
      <section
        id="demos"
        className="py-20 bg-gray-50 px-4"
      >

        <div className="max-w-7xl mx-auto">

          <h3 className="text-4xl font-bold text-center mb-14">
            Business Website Demos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Kirana */}
            <Link
              to="/kirana-demo"
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden"
            >

              <div className="p-8 text-center">

                <div className="text-6xl mb-4">
                  🛒
                </div>

                <h4 className="text-2xl font-bold mb-3">
                  Kirana Store Demo
                </h4>

                <p className="text-gray-600">
                  Grocery & daily essentials store website
                </p>

              </div>

            </Link>

            {/* Medical */}
            <Link
              to="/medical-demo"
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden"
            >

              <div className="p-8 text-center">

                <div className="text-6xl mb-4">
                  💊
                </div>

                <h4 className="text-2xl font-bold mb-3">
                  Medical Store Demo
                </h4>

                <p className="text-gray-600">
                  Pharmacy & healthcare business website
                </p>

              </div>

            </Link>

            {/* Salon */}
            <Link
              to="/salon-demo"
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden"
            >

              <div className="p-8 text-center">

                <div className="text-6xl mb-4">
                  💇
                </div>

                <h4 className="text-2xl font-bold mb-3">
                  Salon & Beauty Demo
                </h4>

                <p className="text-gray-600">
                  Beauty salon & grooming website
                </p>

              </div>

            </Link>

          </div>

        </div>

      </section>

      {/* PRICING */}
      <section className="py-20 px-4 bg-white">

        <div className="max-w-7xl mx-auto">

          <h3 className="text-4xl font-bold text-center mb-4">
            Simple Pricing
          </h3>

          <p className="text-center text-gray-600 mb-14">
            Affordable pricing specially for local businesses
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Starter */}
            <div className="border rounded-2xl p-8 shadow hover:shadow-xl transition">

              <h4 className="text-2xl font-bold mb-4">
                Starter Website
              </h4>

              <p className="text-5xl font-bold text-blue-600 mb-6">
                ₹3,000
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">

                <li>✔ 1 Page Website</li>
                <li>✔ Mobile Friendly</li>
                <li>✔ WhatsApp Button</li>
                <li>✔ Google Maps</li>
                <li>✔ Fast Delivery</li>

              </ul>

              <a
                href="https://wa.me/917990361109"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Get Started
              </a>

            </div>

            {/* Popular */}
            <div className="border-2 border-green-500 rounded-2xl p-8 shadow-2xl scale-105 bg-green-50">

              <div className="mb-3 text-sm font-semibold text-green-700">
                MOST POPULAR
              </div>

              <h4 className="text-2xl font-bold mb-4">
                Website + Android App
              </h4>

              <p className="text-5xl font-bold text-green-600 mb-6">
                ₹8,000+
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">

                <li>✔ Website Included</li>
                <li>✔ Android App</li>
                <li>✔ WhatsApp Orders</li>
                <li>✔ App Setup</li>
                <li>✔ Fast Delivery</li>

              </ul>

              <a
                href="https://wa.me/917990361109"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition"
              >
                Contact Now
              </a>

            </div>

            {/* Support */}
            <div className="border rounded-2xl p-8 shadow hover:shadow-xl transition">

              <h4 className="text-2xl font-bold mb-4">
                Monthly Support
              </h4>

              <p className="text-5xl font-bold text-purple-600 mb-6">
                ₹300
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">

                <li>✔ Hosting Support</li>
                <li>✔ Small Updates</li>
                <li>✔ WhatsApp Support</li>
                <li>✔ Peace of Mind</li>

              </ul>

              <a
                href="https://wa.me/917990361109"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-purple-500 text-white py-3 rounded-xl hover:bg-purple-600 transition"
              >
                Contact Me
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white text-center px-4">

        <h3 className="text-4xl font-bold mb-6">
          Want a Website for Your Shop?
        </h3>

        <p className="max-w-2xl mx-auto text-lg mb-8">
          Message me on WhatsApp and I’ll show you a demo specially designed
          for your business.
        </p>

        <a
          href="https://wa.me/917990361109"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-white text-green-600 rounded-2xl text-lg font-semibold hover:scale-105 transition"
        >
          Contact on WhatsApp
        </a>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm bg-white">

        © 2025 Jay Soni. All rights reserved.

      </footer>

    </div>
  );
}