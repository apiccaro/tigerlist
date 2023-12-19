import { NextResponse } from 'next/server';
const { join } = require('path');
const { writeFile,mkdir } = require('fs/promises');

export async function POST(request){
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

const bytes = await file.arrayBuffer();
const buffer =Buffer.from(bytes)
const publicPath = join(process.cwd(), 'public');
const imagePath = join(publicPath, key);

const filename = file.name;
const path = join(imagePath, filename);
try {
    await mkdir(imagePath, { recursive: true });
  } catch (error) {
    console.error('Error creating directory:', error);
    worked="false"
  }

  try {
    await writeFile(path, buffer);
    console.log('Image written successfully');
  } catch (error) {
    console.error('Error writing image:', error);
    worked="false"
  }
}
  }


  return NextResponse.json(worked);
}