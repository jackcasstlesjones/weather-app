const userLocation = "Melbourne";

class Week {
  constructor() {
    this.firstDay = [];
    this.secondDay = [];
    this.thirdDay = [];
    this.fourthDay = [];
    this.fifthDay = [];
    this.sixthDay = [];
    this.seventhDay = [];
  }

  async getData() {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=e67b825795e448ffaf823449232409&q=london&days=7`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data;
  }

  pushToDay(day, data) {
    day.push(data);
  }
}

const weekOne = new Week();
const data = weekOne.getData();
console.log(data);

async;

for (let days in weekOne) {
  weekOne.pushToDay(weekOne[days], data);
  //   console.log(weekOne[days]);
}
