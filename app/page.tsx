import React from 'react';

export default function Home() {

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to <span className="text-indigo-600">My Real Estate App</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Easily upload CSV files and generate interactive KPI dashboards for your real estate business.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="/real-estate"
                className="inline-block rounded-md bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Highlights */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-800">Simple CSV Upload</h3>
              <p className="mt-2 text-sm text-gray-600">
                Just drag, drop, or select your CSV files—no complicated setup. 
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-800">Interactive Charts</h3>
              <p className="mt-2 text-sm text-gray-600">
                Visualize data with dynamic charts to spot trends and track performance.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-800">Built for Realtors</h3>
              <p className="mt-2 text-sm text-gray-600">
                Tailored insights for individual agents or teams—get key metrics fast.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
