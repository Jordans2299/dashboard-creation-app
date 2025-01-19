"use client" // Because we'll do client-side CSV parsing and charting
import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Papa from 'papaparse';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';


export default function RealEstatePage() {
  const [csvText, setCsvText] = useState('');
  const [uploadedData, setUploadedData] = useState([]);
  const [columnToChart, setColumnToChart] = useState('');

    // Handle user selecting a file
    const handleFileChange = async (
      e: React.ChangeEvent<HTMLInputElement>
    ): Promise<void> => {
      const file = e.target.files?.[0];
      if (!file) return;
  
      try {
        // 1) Read file content as text
        const reader = new FileReader();
        reader.onload = (evt) => {
          const text = evt.target?.result;
          // 2) Parse CSV
          const parsed = Papa.parse(text, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
          });
  
          if (parsed.errors.length > 0) {
            console.error("CSV parsing errors:", parsed.errors);
            return;
          }
  
          // 3) Save parsed data to state
          setUploadedData(parsed.data);
        };
        reader.readAsText(file);
      } catch (err) {
        console.error("Error reading file:", err);
      }
    };

  const handleUpload = async () => {
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ csvText }),
      });
      const result = await response.json();
      if (result.data) {
        setUploadedData(result.data);
      } else {
        console.error('Error parsing CSV:', result);
      }
    } catch (err) {
      console.error('Upload error:', err);
    }
  };

  // For a quick chart, let's assume the user chooses a numeric column to visualize:
  const getChartData = () => {
    if (!uploadedData.length || !columnToChart) return null;

    // We'll map over the data to create labels and numeric values
    const labels = uploadedData.map((row, idx) => `Row ${idx + 1}`);
    const values = uploadedData.map((row) => row[columnToChart] || 0);

    return {
      labels,
      datasets: [
        {
          label: columnToChart,
          data: values,
          backgroundColor: 'rgba(75,192,192,0.6)',
        },
      ],
    };
  };

  const chartData = getChartData();
  const max_table_rows = 10

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title */}
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        CSV to KPI Dashboard
      </h1>

      {/* Upload Section: Text area + button + file input */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2">
        {/* Text area card */}
        <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
          <h2 className="mb-2 text-sm font-semibold text-gray-700">
            Paste CSV Data
          </h2>
          <textarea
            rows={10}
            className="w-full rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            value={csvText}
            onChange={(e) => setCsvText(e.target.value)}
            placeholder="Paste CSV content here"
          />
          <button
            onClick={handleUpload}
            className="mt-2 inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Upload CSV
          </button>
        </div>

        {/* File upload card */}
        <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
          <h2 className="mb-2 text-sm font-semibold text-gray-700">
            Or Upload CSV File
          </h2>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-indigo-600 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-indigo-700 focus:outline-none"
          />
          {/* 
            Tailwind's custom file input styling works by prepending the file: classes 
            to style the "Choose File" button. The text box is standard. 
          */}
        </div>
      </div>

      {/* Data Preview & Chart */}
      {uploadedData.length > 0 && (
        <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Data Preview
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm text-gray-700">
              <thead className="bg-gray-100 text-left text-xs uppercase tracking-wider text-gray-600">
                <tr>
                  {Object.keys(uploadedData[0]).map((colKey) => (
                    <th key={colKey} className="py-2 px-3">
                      {colKey}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {uploadedData.slice(0, max_table_rows).map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    {Object.keys(row).map((colKey) => (
                      <td key={colKey} className="py-2 px-3">
                        {String(row[colKey])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center space-x-2">
            <label
              htmlFor="column-select"
              className="block text-sm font-medium text-gray-700"
            >
              Choose a column to chart:
            </label>
            <select
              id="column-select"
              value={columnToChart}
              onChange={(e) => setColumnToChart(e.target.value)}
              className="rounded-md border border-gray-300 bg-white py-1 px-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="">-- Select --</option>
              {Object.keys(uploadedData[0]).map((colKey) => (
                <option key={colKey} value={colKey}>
                  {colKey}
                </option>
              ))}
            </select>
          </div>

          {/* Chart Section */}
          {chartData && (
            <div className="mt-6 w-full max-w-3xl">
              <Bar data={chartData} />
            </div>
          )}
        </div>
      )}
    </div>
  );

//   return (
//     <div style={{ padding: '1rem' }}>
//       <h1>CSV to Dashboard Prototype</h1>
      
//       <textarea
//         rows={10}
//         cols={50}
//         value={csvText}
//         onChange={(e) => setCsvText(e.target.value)}
//         placeholder="Paste CSV content here"
//       />
//       <br />
//       <button onClick={handleUpload}>Upload CSV</button>

//       {/* Option B: File Upload (client-side parse) */}
//       <div style={{ marginTop: "1rem" }}>
//         <input
//           type="file"
//           accept=".csv"
//           onChange={handleFileChange}
//         />
//       </div>

//       {uploadedData.length > 0 && (
//         <div style={{ marginTop: '1rem' }}>
//           <h2>Data Preview</h2>
//           <table border={1} cellPadding="5">
//             <thead>
//               <tr>
//                 {Object.keys(uploadedData[0]).map((colKey) => (
//                   <th key={colKey}>{colKey}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {uploadedData.slice(0, max_table_rows).map((row, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {Object.keys(row).map((colKey) => (
//                     <td key={colKey}>{row[colKey]}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div style={{ marginTop: '1rem' }}>
//             <label htmlFor="column-select">Choose a column to chart:</label>
//             <select
//               id="column-select"
//               value={columnToChart}
//               onChange={(e) => setColumnToChart(e.target.value)}
//             >
//               <option value="">-- Select --</option>
//               {Object.keys(uploadedData[0]).map((colKey) => (
//                 <option key={colKey} value={colKey}>
//                   {colKey}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {chartData && (
//             <div style={{ width: '600px', height: '400px', marginTop: '1rem' }}>
//               <Bar data={chartData} />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
}
