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

import { NextResponse } from 'next/server';
import { Client } from 'pg';

export async function GET() {
    const client = new Client({
        user: 'your_username',
        host: 'your_host',
        database: 'your_database',
        password: 'your_password',
        port: 5432, // Default PostgreSQL port
    });

    try {
        await client.connect();
        const result = await client.query('SELECT * FROM your_table');
        const listings = result.rows;

        return NextResponse.json(listings);
    } finally {
        await client.end();
    }
}

export async function GET() {
    return NextResponse.json([dict1,dict2]);
  }


