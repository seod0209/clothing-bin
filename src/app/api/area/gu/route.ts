import { fetchArea } from '../../go-data-api';
import { NextResponse } from 'next/server';

// https://velog.io/@devdongwoo/Export-a-named-export-for-each-HTTP-method-instead.-%ED%95%B4%EA%B2%B0%EB%B2%95
export async function GET() {
  const data = await fetchArea('Seocho', 50);

  return NextResponse.json({ data });
}
