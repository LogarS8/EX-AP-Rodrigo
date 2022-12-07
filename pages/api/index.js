import fs from "fs/promises";

export default async function handler(req, res) {
  const data = await fs
    .readFile("./api/apiBabilonica.json")
    .then((data) => JSON.parse(data));

  return res.status(200).json(data);
}
