const express = require("express");
const path = require("path");
const proxyMiddleware = require("express-http-proxy");
const app = express();
const port = 3001;

const proxy = proxyMiddleware("http://localhost:3000");

let moodData = [
  {
    moods: [
      { mood: 3, time: new Date("April 26, 2020 01:15:00") },
      { mood: 6, time: new Date("April 26, 2020 03:15:00") },
      { mood: 10, time: new Date("April 26, 2020 03:15:00") },
    ],
    date: "4/26/2020",
  },
];

app.use(express.json());

// [http://localhost:3001/api/moods]
app.get("/api/moods", (req, res) => res.json(moodData));

app.post("/api/moods", (req, res) => {
  const data = req.data;
  const moodDateObject = moodData.find(
    (moodObject) => moodObject.date === data.date
  );

  if (moodDateObject) {
    mooodDateObject.moods = [...moodDateObject.moods, ...data.moods];
    return [...moodData];
  } else {
    return [(moodData = [...moodData, data])];
  }
});

app.use("/", proxy);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
