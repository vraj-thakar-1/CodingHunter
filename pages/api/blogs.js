// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata"); // list of all files of directories(blogdata)
  let myFile; // each file
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const ele = data[i];
    console.log(ele);

    myFile = await fs.promises.readFile(`blogdata/${ele}`, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  res.status(200).json(allBlogs);
}
