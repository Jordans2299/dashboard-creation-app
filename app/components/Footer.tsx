"use client"; 

// app/components/Footer.tsx (optional separate component)
export default function Footer() {
    return (
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-gray-500 sm:text-left">
              &copy; 2025 Insighter Inc. All rights reserved.
            </p>
  
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-500" aria-label="Twitter">
                {/* Example Twitter icon (heroicons) */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M...." />
                </svg>
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-gray-500" aria-label="GitHub">
                {/* Example GitHub icon */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M...." />
                </svg>
              </a>
              {/* Add more social icons / links as needed */}
            </div>
          </div>
        </div>
      </footer>
    );
  }
  