"use server"
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const apikey = process.env.API_KEY;

    //  https://nextjs.org/docs/pages/api-reference/functions/next-request
    //  request.nextUrl.searchParams: /search.php?s=name => { 's': 'name' }
    const name = request.nextUrl.searchParams;
    const response = await fetch(`https://www.themealdb.com/api/json/v1/${apikey}/search.php?${name}`);
    const data = await response.json();

    //  https://nextjs.org/docs/pages/api-reference/functions/next-response#json
    return NextResponse.json(data);
}



