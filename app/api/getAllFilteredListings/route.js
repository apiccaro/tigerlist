import { NextResponse } from 'next/server';
var dict1={ title: "couch",
price: "2000",
description: "black and leather",
category: "Textbook",
condition: 'Used-Like New',
location: 'East Campus',
email: 'annika@coloradocollege.edu',
phoneValue: '9878907890',
images: (['ticket.jpeg','bomb.jpeg','ticket.jpeg',null,null]),
active: "true"};
var dict2={ title: "chem textbook",
price: "25",
description: "gen chem1",
category: "Textbook",
condition: 'Used-Like New',
location: 'East Campus',
email: 'annika@coloradocollege.edu',
phoneValue: '9878907890',
images: (['ticket.jpeg','bomb.jpeg','ticket.jpeg',null,null]),
active: "false"}

export async function GET() {
    return NextResponse.json({dict1,dict2});
  }