import { NextResponse } from 'next/server';
import Papa from 'papaparse';

export async function POST(request) {
  try {
    // Parse the JSON body from the request
    const { csvText } = await request.json();

    // Parse CSV using Papa Parse
    const parsed = Papa.parse(csvText, {
      header: true,
      dynamicTyping: true,
    });

    // Check for PapaParse errors
    if (parsed.errors.length > 0) {
      return NextResponse.json({ error: parsed.errors }, { status: 400 });
    }

    // If successful, send back the parsed data
    const data = parsed.data;
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// (Optional) If you also want a GET handler to avoid 405 when visiting the route in a browser:
export async function GET() {
  return NextResponse.json(
    { message: 'This endpoint accepts POST requests to parse CSV data' },
    { status: 200 }
  );
}
