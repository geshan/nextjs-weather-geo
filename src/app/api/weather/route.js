import { NextResponse } from 'next/server'
 
export async function GET(req) {
  const url = new URL(req.url);
  const city = url.searchParams.get('city') || 'London';
  const res = await fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': process.env.API_NINJAS_API_KEY,
    },
  })
  const data = await res.json(); 
  data.city = city;
 
  return NextResponse.json({ data });
}
