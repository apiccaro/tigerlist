import { NextResponse } from 'next/server';
import cas from "/app/server/cas.js";
export async function GET() {
  var email = cas.askUserEmail
  console.log(email);
  return NextResponse.json(email);
}
