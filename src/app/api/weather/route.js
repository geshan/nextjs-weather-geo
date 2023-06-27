import { NextResponse } from 'next/server'
 
export async function GET(req) {
  console.log(`req:`, req.geo);
  const city = req.geo.city || 'Sydney';

  const res = await fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': process.env.API_NINJAS_API_KEY,
    },
  })
  const data = await res.json()
 
  return NextResponse.json({ data });
}
