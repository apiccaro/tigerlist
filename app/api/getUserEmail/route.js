import { NextResponse } from 'next/server';
const { casHandler } = require('../../server/cas');

export async function GET() {
  console.log("Trying to use cas.askUserEmail")

  // get user email from cas
  var casResult = await casHandler(req, res)
  var email = casResult.user
  console.log("User email from getUserEmail: ",email);

  return NextResponse.json(email);
}
