# Real Estate KPI Dashboard (Next.js 13 + Tailwind)

A simple MVP for uploading CSV files and visualizing real estate KPIs in a clean UI. Built with Next.js 13 (App Router), Tailwind CSS, and Chart.js via react-chartjs-2. Ideal for validating early-stage ideas and gathering user feedback.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running Locally](#running-locally)

---

## Overview

This MVP application allows a real estate agent—or any user with CSV data—to upload their file, quickly preview the contents, and generate a bar chart for key metrics (e.g., price, rooms, days on market, etc.). It also includes an “About” page and basic navigation (header, footer) to demonstrate a more polished UI.

---

## Features

1. **CSV Upload**: Paste CSV text or upload a `.csv` file directly.
2. **Instant Parsing**: Uses [Papa Parse](https://www.papaparse.com/) to process data client-side.
3. **Data Preview**: Shows up to a set number of rows (to prevent huge tables).
4. **Dynamic Charting**: Select a column to display as a bar chart (via Chart.js).
5. **Responsive UI**: Styled with Tailwind CSS for a modern, consistent look.
6. **Navigation & Layout**: Global header, footer, hero sections for a professional feel.
7. **About Page**: Example “company” overview with mission, story, and team sections.

---

## Tech Stack

- **[Next.js 13 (App Router)](https://nextjs.org/docs/app)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Papa Parse](https://www.papaparse.com/)** for CSV parsing
- **[react-chartjs-2](https://react-chartjs-2.js.org/) + [Chart.js](https://www.chartjs.org/)**
- **ESLint & Prettier** for code linting and formatting

---

## Getting Started

### Installation

1. **Clone** the repo:
   ```bash
   git clone https://github.com/Jordans2299/dashboard-creation-app.git
   cd csv-dashboard-poc

2. Install dependencies:
    ```npm install
    # or
    yarn install

### Running Locally

1. Development server:
    ``` bash
    Copy
    npm run dev
    # or
    yarn dev

2. Open http://localhost:3000 in your browser to see the app.