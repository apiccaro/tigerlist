import { NextResponse } from 'next/server';
const user={email:"a_piccaro@coloradocollege.edu",}
export async function POST(request) {
  const user= await request.json()
  console.log(user)
  return NextResponse.json({
    user: {
      name: "a_piccaro@coloradocollege.edu",
      isAutoFlagged: true,
    },
  });
}