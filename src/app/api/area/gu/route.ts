import { fetchArea } from '../../go-data-api';
import { NextResponse } from 'next/server';

// https://stackoverflow.com/questions/76214029/no-http-methods-exported-in-export-a-named-export-for-each-http-method
export async function GET() {
  const data = await fetchArea('Seocho', 50);

  return NextResponse.json({ data });
}
