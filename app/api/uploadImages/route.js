//This would have been great to konw about before the last week of the project. 
//I had nothing to do with it but trust that the video sufficiently explains whatever the code does.
//https://www.youtube.com/watch?v=-_bhH4MLq1Y


import { NextResponse } from 'next/server';
const { join, extname } = require('path');
const { writeFile,mkdir } = require('fs/promises');

/** Appears to take a request object holding image data and store it somewhere locally. 
 * 
 * At a glance im not sure it handles the request properly
 * @param {*} request - request object from fetch
 * @returns new file path of stored image(s)
 */
export async function POST(request){

var imageNames=[]
var worked="true";
const images= await request.formData();
const key=images.get("key");
console.log(key);
for (let i = 0; i < 5; i++) {
    console.log(i);
  const fileKey = "file_" + i;
  console.log(fileKey);
  const file = images.get(fileKey);
console.log(file)
if(file!=null){
    
//Get image data
const bytes = await file.arrayBuffer();
const buffer =Buffer.from(bytes)
const publicPath = join(process.cwd(), 'public');
const imagePath = join(publicPath, key);

const fileExtension = extname(file.name);
const filename = `${fileKey}${fileExtension}`;
imageNames.push(filename)

//put that image data somewhere
const path = join(imagePath, filename);
try {
    await mkdir(imagePath, { recursive: true });
  } catch (error) {
    worked="false"
  }

  try {
    await writeFile(path, buffer);
  } catch (error) {
    worked="false"
  }
}
  }
  console.log(imageNames);
  return NextResponse.json(imageNames);
}