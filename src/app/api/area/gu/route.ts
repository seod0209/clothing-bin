import { fetchArea } from '../../go-data-api';
import { NextRequest, NextResponse } from 'next/server';

// https://stackoverflow.com/questions/76214029/no-http-methods-exported-in-export-a-named-export-for-each-http-method
export async function GET(req: NextRequest) {
  console.log('>>', req);
  const data = await fetchArea('Seocho', 50);

  return NextResponse.json({ data });
}
