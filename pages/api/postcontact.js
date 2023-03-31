import * as fs from "fs";
export default async function handler(req, res) {
  if (req.method === "POST") {
    let data = await fs.promises.readdir("contactdata");

    fs.promises.writeFile(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body),
      () => {}
    );
    res.status(200).json("I am a Post request");
    // Process a POST request
  } else {
    // Handle any other HTTP method

    res.status(200).json("I am a get request");
    // name, email, description, Phone
  }
}
