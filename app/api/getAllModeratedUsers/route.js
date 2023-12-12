import { NextResponse } from 'next/server';

var modUsers=["a_piccaro@coloradocollege.edu","j_moran@coloradocollege.edu","j_dresser@coloradocollege.edu","l_flanagan@coloradocollege.edu"];
export async function GET() {
    return NextResponse.json({ title: (modUsers)});
  }


