import { NextResponse } from 'next/server';
const { casHandler } = require('../../server/cas');


/**getUserEmail should use cas to return the email of the user making this api request.
 * Has not yet worked as far as I know
 * 
 * @returns user's email
 */
export async function GET() {
  console.log("Trying to use cas.askUserEmail")

  // get user email from cas
  var casResult = await casHandler(null, null)
  var email = casResult.user
  console.log("User email from getUserEmail: ",email);

  return NextResponse.json(email);
}
