import { fetchArea } from '../../go-data-api';
import { NextRequest, NextResponse } from 'next/server';
import { SeoulGuType } from '../../type';

// https://stackoverflow.com/questions/76214029/no-http-methods-exported-in-export-a-named-export-for-each-http-method
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const gu: SeoulGuType = (url.searchParams.get('type') as SeoulGuType) || 'Seocho';

  try {
    const data = await fetchArea(gu, 50);
    return NextResponse.json({ data });
  } catch (err: any) {
    console.log(err);
    return NextResponse.error();
  }
}
