import { NextResponse } from 'next/server';
export async function DELETE(request){
    const email= await request.json()
    console.log(id)
    return  NextResponse.json(id)
    }