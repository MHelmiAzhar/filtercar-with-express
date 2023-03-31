const express = require("express");
const path = require("path");

const { filterCars } = require("../utils/car");

const app = express();
const PORT = process.env.PORT || 8000;

//gunakan ejs
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/sewa", (req, res) => {
  const filter = filterCars(
    req.query.type,
    req.query.tanggal,
    req.query.capacity
  );
  res.render("sewa", {
    filter,
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404 not found");
});

app.listen(PORT, () => {
  console.log(`Express nyala di http://localhost:${PORT}`);
});
