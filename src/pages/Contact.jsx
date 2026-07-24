import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! Thank you for reaching out.");
  };

  const handleMascotSpeak = (text) => {
    window.dispatchEvent(new CustomEvent("mascot-speak", { detail: { text } }));
  };

  return (
    <div className="bg-transparent text-slate-800 py-16 px-6">
      <main className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-slate-900 tracking-tight">
          Contact Me
        </h2>

        <p className="text-slate-600 text-center mb-10 max-w-xl mx-auto">
          Interested in a collaboration, have a freelance opportunity, or just want to say hi? 
          Drop me a line!
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/60 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-sm border border-white/40 max-w-2xl mx-auto"
          onMouseEnter={() => handleMascotSpeak("Fill in this form to send a message directly to my inbox!")}
          onMouseLeave={() => handleMascotSpeak(null)}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-slate-700 font-semibold mb-2 text-sm"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="w-full p-3.5 bg-white/70 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition text-sm text-slate-800"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-slate-700 font-semibold mb-2 text-sm"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full p-3.5 bg-white/70 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition text-sm text-slate-800"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-slate-700 font-semibold mb-2 text-sm"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Describe your project, question, or opportunity..."
              className="w-full p-3.5 bg-white/70 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition text-sm text-slate-800"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 hover:scale-[1.01] transition duration-200 shadow-md cursor-pointer text-sm"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-2">
            Or reach out directly:
          </p>

          <a
            href="mailto:jay0812soni@gmail.com"
            onMouseEnter={() => handleMascotSpeak("Click to email me at jay0812soni@gmail.com. I check my mail daily!")}
            onMouseLeave={() => handleMascotSpeak(null)}
            className="text-lg font-bold text-blue-600 hover:text-blue-700 transition"
          >
            jay0812soni@gmail.com
          </a>

          <div className="mt-6 flex justify-center space-x-6">
            <a
              href="https://github.com/JAYU0812"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMascotSpeak("Browse my open-source code and Flutter repositories on GitHub.")}
              onMouseLeave={() => handleMascotSpeak(null)}
              className="text-slate-600 hover:text-slate-900 font-medium text-sm transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/sonijay1908"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMascotSpeak("Check out my LinkedIn connections, endorsements, and experience history.")}
              onMouseLeave={() => handleMascotSpeak(null)}
              className="text-slate-600 hover:text-slate-900 font-medium text-sm transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}