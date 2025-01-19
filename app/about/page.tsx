// app/about/page.tsx
"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About <span className="text-indigo-600">Our Company</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Learn more about our mission, our story, and our amazing team.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mt-12">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Mission Card */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="text-sm text-gray-600">
              We aim to empower real estate professionals by delivering fast, 
              accurate insights using cutting-edge data analytics. Our platform 
              makes it simple to visualize property data, track performance, and 
              streamline workflows.
            </p>
          </div>
          {/* Values Card */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              Core Values
            </h2>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
              <li>Customer-Focused Innovation</li>
              <li>Transparency &amp; Integrity</li>
              <li>Data-Driven Decision Making</li>
              <li>Collaboration &amp; Teamwork</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Story / Timeline Section */}
      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Our Story
        </h2>
        <p className="mb-4 text-sm text-gray-600">
          Founded in 2025, we started as a small startup with a big idea: 
          to simplify the way real estate agents handle their data. Since then, 
          we've grown into a passionate team dedicated to delivering insights 
          that truly make a difference.
        </p>
      </section>

      {/* Team Section */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">Meet the Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Example Team Member 1 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="flex items-center space-x-4">
              {/* Replace with real image */}
              <Image
                src="/headshot1.jpg"
                alt="Team member 1"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-md font-semibold text-gray-800">Jordan Stone</h3>
                <p className="text-sm text-indigo-600">CEO &amp; Founder</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Jordan oversees company strategy and product vision, leveraging 
              his background in data analytics and real estate to guide our mission.
            </p>
          </div>

          {/* Example Team Member 2 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="flex items-center space-x-4">
              <Image
                src="/headshot2.jpg"
                alt="Team member 2"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-md font-semibold text-gray-800">John Smith</h3>
                <p className="text-sm text-indigo-600">CTO</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              John leads engineering and R&amp;D, ensuring our platform runs 
              smoothly and stays ahead of the tech curve.
            </p>
          </div>

          {/* Example Team Member 3 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="flex items-center space-x-4">
              <Image
                src="/headshot3.jpg"
                alt="Team member 3"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-md font-semibold text-gray-800">Sarah Lee</h3>
                <p className="text-sm text-indigo-600">Head of Marketing</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Sarah spearheads user outreach and brand strategy, sharing our 
              story with realtors worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="mt-12 rounded-lg bg-indigo-50 p-6">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          Want to Learn More?
        </h2>
        <p className="mb-4 text-sm text-gray-600">
          We're always happy to chat about our platform or discuss partnership 
          opportunities. Get in touch and let’s explore how we can help you 
          succeed in the real estate market.
        </p>
        <a
          href="/contact" 
          className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
