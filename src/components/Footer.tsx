"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">LocalGuide</h3>
          <p className="text-sm">
            Travel like a local. Discover authentic experiences, guided by the
            people who know their cities best.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/explore" className="hover:text-white">
                Explore Tours
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-white">
                Become a Guide
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-white">
                Login
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Connect</h4>
          <div className="flex gap-4 text-xl">
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Twitter"
            >
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} LocalGuide — All rights reserved.
      </div>
    </footer>
  );
}
