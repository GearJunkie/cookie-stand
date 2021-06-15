"use strict";

const storeHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

const storeArray = [Seattle, Tokyo, Dubai, Paris, Lima];

function custPerHr (minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}

function avgCookieHour(avgCookie, custPerHr) {
  return Math.floor(avgCookie * custPerHr);
}

function renderSales(store){
  const DivElem = document.createElement("article");
  dailySalesDivElem.appendChild(articleElem);
  const h2E1em = document.createElement("h2");
  h2E1Elem.textContent = dailySales.store;
}


const dailySalesDivElem = document.getElementById("dailySales");


const Seattle = {
  customers: 0,
  minCust: 23,
  maxCust: 65,
  hrSales: [],
  avgCookiePerSale: 6.3,
  cookieOfHour: 0,
  customerPerHr: function () {
    this.customers = custPerHr(this.minCust, this.maxCust);
  },
  averageCookieHour: function () {
    this.cookieOfHour = avgCookieHour(this.avgCookiePerSale, this.customers);
  },
  salesByTheHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.customerPerHr();
      this.averageCookieHour();
      this.hrSales.push(this.cookieOfHour);
    }
  }
}

Seattle.salesByTheHour();
console.log(Seattle);

const Tokyo = {
  customers: 0,
  minCust: 3,
  maxCust: 24,
  hrSales: [],
  avgCookiePerSale: 1.2,
  cookieOfHour: 0,
  customerPerHr: function () {
    this.customers = custPerHr(this.minCust, this.maxCust);
  },
  averageCookieHour: function () {
    this.cookieOfHour = avgCookieHour(this.avgCookiePerSale, this.customers);
  },
  salesByTheHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.customerPerHr();
      this.averageCookieHour();
      this.hrSales.push(this.cookieOfHour);
    }
  }
}

Tokyo.salesByTheHour();
console.log(Tokyo);

const Dubai = {
  customers: 0,
  minCust: 11,
  maxCust: 38,
  hrSales: [],
  avgCookiePerSale: 3.7,
  cookieOfHour: 0,
  customerPerHr: function () {
    this.customers = custPerHr(this.minCust, this.maxCust);
  },
  averageCookieHour: function () {
    this.cookieOfHour = avgCookieHour(this.avgCookiePerSale, this.customers);
  },
  salesByTheHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.customerPerHr();
      this.averageCookieHour();
      this.hrSales.push(this.cookieOfHour);
    }
  }
}

Dubai.salesByTheHour();
console.log(Dubai);

const Paris = {
  customers: 0,
  minCust: 20,
  maxCust: 38,
  hrSales: [],
  avgCookiePerSale: 2.3,
  cookieOfHour: 0,
  customerPerHr: function () {
    this.customers = custPerHr(this.minCust, this.maxCust);
  },
  averageCookieHour: function () {
    this.cookieOfHour = avgCookieHour(this.avgCookiePerSale, this.customers);
  },
  salesByTheHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.customerPerHr();
      this.averageCookieHour();
      this.hrSales.push(this.cookieOfHour);
    }
  }
}

Paris.salesByTheHour();
console.log(Paris);

const Lima = {
  customers: 0,
  minCust: 2,
  maxCust: 16,
  hrSales: [],
  avgCookiePerSale: 4.6,
  cookieOfHour: 0,
  customerPerHr: function () {
    this.customers = custPerHr(this.minCust, this.maxCust);
  },
  averageCookieHour: function () {
    this.cookieOfHour = avgCookieHour(this.avgCookiePerSale, this.customers);
  },
  salesByTheHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.customerPerHr();
      this.averageCookieHour();
      this.hrSales.push(this.cookieOfHour);
    }
  }
}

Lima.salesByTheHour();
console.log(Lima);






