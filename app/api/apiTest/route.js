import { NextResponse } from 'next/server';

// export async function GET(request){

//     const req = await request.json()
//     console.log("Using apiTest/route.js to test basic API functionality") //debug print
//     console.log("request content: \n",req)

//     return NextResponse.json('response text')
//     return res.status(200).json({ message: 'Hello from Next.js!' })


// }



export default function handler(req, res) {
    console.log("Using apiTest/route.js to test basic API functionality:")
    console.log(res)
    res.status(200).json({ message: 'Hello from api folder' })
}

