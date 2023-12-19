import { NextResponse } from 'next/server';
const { join, extname } = require('path');
const { writeFile,mkdir } = require('fs/promises');
//https://www.youtube.com/watch?v=-_bhH4MLq1Y

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

const fileExtension = extname(file.name);
const filename = `${fileKey}${fileExtension}`;
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
  return NextResponse.json(worked);
}