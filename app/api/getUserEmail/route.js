import { NextResponse } from 'next/server';
import cas from "/app/server/cas.js";
export async function GET() {
  console.log("Trying to use cas.askUserEmail")

  var email = await cas.askUserEmail()
  console.log(email);
  return NextResponse.json(email);
}
