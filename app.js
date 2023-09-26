const userLocation = "Hobart";
const contentDiv = document.getElementById("content");
const heading = document.querySelector("h1");

class Week {
  constructor() {
    this.maxTemp = [];
  }

  async getData() {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=e67b825795e448ffaf823449232409&q=${userLocation}&days=7`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data;
  }

  async processData() {
    const myData = await this.getData();
    console.log(myData);
  }

  async getMaxTemp() {
    const myData = await this.getData();
    for (let i = 0; i < 7; i++) {
      this.maxTemp.push(myData.forecast.forecastday[i].day.maxtemp_c);
    }
    // console.log(this.maxTemp);
  }

  async getLocation() {
    const myData = await this.getData();
    return myData.location.name;
  }
}

const week = new Week();

class UIHelper {
  constructor() {}

  async renderMaxTemp() {
    await week.getMaxTemp();

    week.maxTemp.forEach((arrayElement) => {
      const maxTempElement = document.createElement("p");
      maxTempElement.textContent = `${arrayElement} °C`;
      contentDiv.appendChild(maxTempElement);
    });
  }

  async renderLocation() {
    heading.textContent = await week.getLocation();
  }
}

const uiHelper = new UIHelper();

uiHelper.renderMaxTemp();
uiHelper.renderLocation();
week.getLocation();
