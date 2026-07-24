import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white/40 backdrop-blur-md border-t border-white/20 py-8 text-center text-slate-500 text-sm mt-auto print:hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2026 Soni Jaykumar Hasmukh. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/JAYU0812"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sonijay1908"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jay0812soni@gmail.com"
            className="hover:text-blue-600 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
