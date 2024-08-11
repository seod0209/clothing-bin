import { NextRequest, NextResponse } from 'next/server';
import { ApiError } from 'next/dist/server/api-utils';

import { fetchArea } from '../../fetch-area';
import { SeoulGuType } from '../../type';

// https://stackoverflow.com/questions/76214029/no-http-methods-exported-in-export-a-named-export-for-each-http-method
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const gu: SeoulGuType = (url.searchParams.get('type') as SeoulGuType) || 'Seocho';

  try {
    const data = await fetchArea(gu, 50);

    return NextResponse.json({ data });
  } catch (err: any) {
    if (err instanceof ApiError) {
      return NextResponse.json({ error: err.message }, { status: err.statusCode });
    }
    console.error('Server error:', err);
    return NextResponse.json({ error: '서버 오류가 발생했습니다' }, { status: 500 });
  }
}
