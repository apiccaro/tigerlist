import { NextResponse } from 'next/server';
export async function PUT(request){
const listing= await request.json()
console.log(listing)
return  NextResponse.json(listing)
}