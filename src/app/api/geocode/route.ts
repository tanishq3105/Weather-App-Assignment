import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams;
    const lat = params.get('lat');
    const lon = params.get('lon')
    const res = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${process.env.OPENWEATHER_API_KEY}`)
    const data = await res.json();
    return Response.json(data)
}