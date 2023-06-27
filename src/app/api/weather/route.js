import { NextResponse } from 'next/server'
 
export async function GET(req) {
  const url = new URL(req.headers.get('x-middleware-rewrite'));
  const city = url.searchParams.get('city');
  const country = url.searchParams.get('country');
  const region = url.searchParams.get('region');

  const res = await fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': process.env.API_NINJAS_API_KEY,
    },
  })
  const data = await res.json();
  data.city = city;
  data.country = country;
  data.region = region;
 
  return NextResponse.json({ data });
}
