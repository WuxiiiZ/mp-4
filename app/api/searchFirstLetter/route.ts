"use server"
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const apikey = process.env.API_KEY;
    const name = request.nextUrl.searchParams;
    const response = await fetch(`https://www.themealdb.com/api/json/v1/${apikey}/search.php?${name}`);
    const data = await response.json();
    return NextResponse.json(data);
}
