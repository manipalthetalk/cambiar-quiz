import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import mcache from "memory-cache";

const app = express();
const port = process.env.PORT ?? 5000;

const serverUrl = "https://cambiar-quiz.vercel.app";
const allowedOrigins = ["http://localhost:5000", serverUrl];
const options = {
  origin: allowedOrigins,
};

const initData = () => {
  fs.readFile("./_files/questions.json", "utf8", (err, data) => {
    mcache.put("questions", data);
  });
};

app.use(cors(options));
app.use(bodyParser.json());

app.route("/api/questions").get(async (req, res) => {
  let data = mcache.get("questions");

  if (data === undefined) {
    initData();
    data = mcache.get("questions");
  }

  res.status(200).send(data);
});

initData();
app.listen(port, () => {
  console.log("Listening on http://localhost:5000/");
});
