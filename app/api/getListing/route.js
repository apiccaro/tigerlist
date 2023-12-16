import { NextResponse } from 'next/server';
export async function POST(request){
const listing= await request.json()
console.log(listing);
  return NextResponse.json({ title: "couch",
    price: "2000",
    description: "black and leather",
    category: "Textbook",
    condition: 'Used-Like New',
    location: 'East Campus',
    email: 'annika@coloradocollege.edu',
    phoneValue: '9878907890',
    images: (['ticket.jpeg','bomb.jpeg','ticket.jpeg',null,null]),
    active: "true"});
}
