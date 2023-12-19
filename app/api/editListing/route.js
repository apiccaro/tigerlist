import { NextResponse } from 'next/server';
export async function PUT(request){
const listing= await request.json()
console.log("listing what"+listing)
return  NextResponse.json("true")
}