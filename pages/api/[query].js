import fs from "fs/promises";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getApi(req, res);

    default:
      res.status(405).json({ message: "Method not allowed" });
  }
}

async function getApi(req, res) {
  const data = await fs
    .readFile("./api/apiBabilonica.json")
    .then((data) => JSON.parse(data));

  const { query = "" } = req.query,
    queryVali = [
      "historia",
      "locacion",
      "lenguas",
      "periodos",
      "comidas",
      "prendas",
      "edificaciones",
      "relatos",
    ];

  if (!queryVali.includes(query)) {
    return res.status(404).json({
      query,
      data: "No hay datos, unicamentes: ",
      peticiones: queryVali,
    });
  } else {
    return res.status(200).json(data[query]);
  }
}
