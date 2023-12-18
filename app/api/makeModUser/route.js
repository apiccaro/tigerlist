import { NextResponse } from 'next/server';
export async function PUT(request){
const email= await request.json()
console.log(email)
return  NextResponse.json(email)
}