const userLocation = "Melbourne";

async function getData() {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=e67b825795e448ffaf823449232409&q=${userLocation}&days=7`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data;
}

async function processData() {
  const myData = await getData();
  console.log(myData);
}

processData();
