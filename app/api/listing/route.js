//const sql = require('mssql');
//i dont see why we need this but i dont wanna delete a route.js in the api folder. I deleted the "require access.js" so that better not come back from the dead again
const useDB = false

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'it finally worked! - GET' });
}