"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg">
          LocalGuide
        </Link>

        {/* Right Side */}
        <div className="flex gap-4 items-center relative">
          {/* Always visible */}
          <Link href="/explore">Explore Tours</Link>
          <Link href="/register" className="hidden sm:inline">
            Become a Guide
          </Link>

          {/* Loading state */}
          {loading ? (
            <span className="text-gray-500 text-sm">Checking...</span>
          ) : user ? (
            <div className="relative" ref={dropdownRef}>
              {/* Dropdown button */}
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="px-3 py-1 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium flex items-center gap-1"
              >
                Hi, {user.name}
                <span className="text-sm">▼</span>
              </button>

              {/* Dropdown menu */}
              {open && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-md rounded-md border py-2 animate-fadeIn z-50">
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </Link>

                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Profile
                  </Link>

                  <button
                    onClick={() => {
                      setOpen(false);
                      logout().then(() => router.push("/"));
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="px-3 py-1 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
