import { NextResponse } from 'next/server';
import cas from "/app/server/cas.js";
export async function GET() {
  return NextResponse.json(cas.testUserEmail);
}
