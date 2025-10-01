const provincesSelect = document.querySelector(".provinces-select");
const citiesSelect = document.querySelector(".cities-select");

const cities = {
  Tehran: ["Shahriar", "Tehran", "Karaj"],
  Tabriz: ["Tabriz", "Jolfa", "Ahr"],
  Fars: ["Shiraz", "Lar", "Marvdasht"],
  Mashhad: ["Mashhad", "Gonabad", "Turbat Jam"],
};

const provinces = Object.keys(cities);

let newOption;
provinces.forEach(function (provice) {
  newOption = document.createElement("option");
  newOption.className = "px-4";
  newOption.value = provice;
  newOption.innerHTML = provice;

  provincesSelect.append(newOption);
});

provincesSelect.addEventListener("change", function () {
  const provice = provincesSelect.value;

  let proviceCities = cities[provice];

  citiesSelect.innerHTML = "";
  let newCityOption;
  proviceCities.forEach(function (city) {
    newCityOption = document.createElement("option");
    newCityOption.className = "px-4";
    newCityOption.value = city;
    newCityOption.innerHTML = city;

    citiesSelect.append(newCityOption);
  });
});
