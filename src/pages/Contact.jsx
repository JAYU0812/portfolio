import React from "react";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">

      {/* Header */}
      <header className="flex items-center justify-between p-5 shadow-md">

        <h1 className="text-2xl font-bold">
          SONI JAYKUMAR HASMUKH
        </h1>

        <nav>

          <a href="/" className="mx-2 hover:underline">
            Home
          </a>

          <a href="/about" className="mx-2 hover:underline">
            About
          </a>

          <a href="/projects" className="mx-2 hover:underline">
            Projects
          </a>

          <a href="/resume" className="mx-2 hover:underline">
            Resume
          </a>

          <a
            href="/contact"
            className="mx-2 font-semibold underline text-blue-600"
          >
            Contact
          </a>

        </nav>
      </header>

      {/* Main */}
      <main className="max-w-3xl mx-auto p-6">

        <h2 className="text-4xl font-bold mb-6 text-center">
          Contact Me
        </h2>

        <p className="text-gray-700 text-center mb-10">
          Feel free to reach out to me for collaborations, queries,
          or opportunities!
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 mb-2"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 mb-2"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 mb-2"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>

        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center">

          <p className="text-gray-700">
            You can also reach me at:
          </p>

          <p className="text-blue-600 font-semibold">
            jay2701soni@gmail.com
          </p>

          <div className="mt-4 flex justify-center space-x-4">

            <a
              href="https://github.com/JAYU0812"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/sonijay1908"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>

          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-sm text-gray-500 mt-10">
        © 2025 JAY SONI. All rights reserved.
      </footer>
    </div>
  );
}