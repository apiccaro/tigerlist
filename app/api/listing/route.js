//const sql = require('mssql');
const useDB = false
const {getValidRequest,testMethod_access} = require('./access.js');


import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'it finally worked! - GET' });
}