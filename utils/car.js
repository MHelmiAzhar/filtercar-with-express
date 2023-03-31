const fs = require("fs");

const loadCars = () => {
  const fileData = fs.readFileSync("data/cars.json", "utf-8");
  const cars = JSON.parse(fileData);
  return cars;
};

const filterCars = (type, tanggal, capacity) => {
  const cars = loadCars();
  let tgl = new Date(tanggal);
  let tahun = tgl.getFullYear();

  let filter = cars

    .filter((car) => {
      if (type == "true") {
        return car.available === true;
      } else {
        return car.available === false;
      }
    })

    .filter((car) => {
      return car.capacity == capacity;
    })

    .filter((car) => {
      return car.year >= tahun;
    });

  return filter;
};

module.exports = { loadCars, filterCars };
