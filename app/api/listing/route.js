//const sql = require('mssql');
const useDB = false
//////////////const {getValidRequest,testMethod_access} = require('./access.js'); This line can fuck all the way off. Keeping this here until its stayed this way for many versions. 
//If you see a file with any "require access.js" delete the line and not the file, so it doesnt pop up from other people's branches

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'it finally worked! - GET' });
}