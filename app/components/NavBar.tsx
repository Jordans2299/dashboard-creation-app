"use client"; 
// Because we'll use React state + events in this component

import { useState } from "react";
import Link from "next/link";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Nav content is flexed: brand + hamburger, then nav links */}
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand or Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Insighter
            </Link>
          </div>

          {/* Hamburger button (mobile) */}
          <div className="flex sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 
                         hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 
                         focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon (Hamburger) */}
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" 
                     viewBox="0 0 24 24" strokeWidth="2" 
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" 
                     viewBox="0 0 24 24" strokeWidth="2" 
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden sm:block">
            <div className="ml-4 flex items-center space-x-5">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="/real-estate" className="text-gray-700 hover:text-gray-900">
                Real Estate KPI
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (shown when hamburger is open) */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className="block rounded px-3 py-2 text-base font-medium text-gray-700 
                         hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/real-estate"
              className="block rounded px-3 py-2 text-base font-medium text-gray-700 
                         hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Real Estate
            </Link>
            <Link
              href="/about"
              className="block rounded px-3 py-2 text-base font-medium text-gray-700 
                         hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
