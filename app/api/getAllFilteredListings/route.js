import { NextResponse } from 'next/server';
var dict1={ listingID: 124444,
title: "couch",
price: "2000",
description: "black and leather",
category: "Textbook",
condition: 'Used-Like New',
location: 'East Campus',
email: 'annika@coloradocollege.edu',
phoneValue: '9878907890',
//images: (['http://localhost:3000/api/getAllListings/ticket.jpeg','http://localhost:3000/api/getAllListings/bomb.jpeg','http://localhost:3000/api/getAllListings/ticket.jpeg',null,null]),
images: ["file_0.jpeg", "file_1.jpeg"],
active: "true"};
var dict2={ listingID: 124444,
title: "chem textbook",
price: "25",
description: "gen chem1",
category: "Textbook",
condition: 'Used-Like New',
location: 'East Campus',
email: 'annika@coloradocollege.edu',
phoneValue: '9878907890',
images: ["file_0.jpeg", "file_1.jpeg"],
//images: (['http://localhost:3000/api/getAllListings/ticket.jpeg','http://localhost:3000/api/getAllListings/bomb.jpeg','http://localhost:3000/api/getAllListings/ticket.jpeg',null,null]),
active: "false"}

export async function GET() {
    return NextResponse.json([dict1,dict2]);
  }