"use strict";

const storeHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// console.log(storeHours);



function custPerHr (minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}

function avgCookiePerHr(avgCookiePerSale, custPerHr) {
  return Math.floor(avgCookiePerSale * custPerHr);
}


const Seattle = {
  customers: 0,
  minCust: 23,
  maxCust: 65,
  hrSales: [],
  avgCookiePerSale: 6.3,
  cookiesPerHour: 0,
  customerPerHr: function () {
    this.customers = custPerHr(this.minCust, this.maxCust);
  },
  averageCookiePerHr: function () {
    this.cookiesPerHour = avgCookiePerHr(this.avgCookiePerSale, this.customers);
  },
  salesByTheHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.customerPerHr();
      this.averageCookiePerHr();
      this.hrSales.push(this.cookiesPerHour);
    }
  },
}
Seattle.salesByTheHour();
console.log(Seattle);


const Tokyo = {
  customers: 0,
  minCust: 3,
  maxCust: 24,
  hrSales: [],
  avgCookiePerSale: 1.2,
  cookiesPerHour: 0,
  customerPerHr: function () {
    this.customers = custPerHr(this.minCust, this.maxCust);
  },
  averageCookiePerHr: function () {
    this.cookiesPerHour = avgCookiePerHr(this.avgCookiePerSale, this.customers);
  },
  salesByTheHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.customerPerHr();
      this.averageCookiePerHr();
      this.hrSales.push(this.cookiesPerHour);
    }
  },
}
Tokyo.salesByTheHour();
console.log(Tokyo);


const Dubai = {
  customers: 0,
  minCust: 11,
  maxCust: 38,
  hrSales: [],
  avgCookiePerSale: 3.7,
  cookiesPerHour: 0,
  customerPerHr: function () {
    this.customers = custPerHr(this.minCust, this.maxCust);
  },
  averageCookiePerHr: function () {
    this.cookiesPerHour = avgCookiePerHr(this.avgCookiePerSale, this.customers);
  },
  salesByTheHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.customerPerHr();
      this.averageCookiePerHr();
      this.hrSales.push(this.cookiesPerHour);
    }
  },
}
Dubai.salesByTheHour();
console.log(Dubai);


const Paris = {
  customers: 0,
  minCust: 20,
  maxCust: 38,
  hrSales: [],
  avgCookiePerSale: 2.3,
  cookiesPerHour: 0,
  customerPerHr: function () {
    this.customers = custPerHr(this.minCust, this.maxCust);
  },
  averageCookiePerHr: function () {
    this.cookiesPerHour = avgCookiePerHr(this.avgCookiePerSale, this.customers);
  },
  salesByTheHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.customerPerHr();
      this.averageCookiePerHr();
      this.hrSales.push(this.cookiesPerHour);
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
  cookiesPerHour: 0,
  customerPerHr: function () {
    this.customers = custPerHr(this.minCust, this.maxCust);
  },
  averageCookiePerHr: function () {
    this.cookiesPerHour = avgCookiePerHr(this.avgCookiePerSale, this.customers);
  },
  salesByTheHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.customerPerHr();
      this.averageCookiePerHr();
      this.hrSales.push(this.cookiesPerHour);
    }
  }
}
Lima.salesByTheHour();
console.log(Lima);

const storeArray = [Seattle, Tokyo, Dubai, Paris, Lima];
console.log(storeArray);


const dailySalesDivElem = document.getElementById("dailySales");


// function renderSales(sales) {
//   const articleElem = document.createElement("article");
//   dailySalesDivElem.appendChild(articleElem);
//   const ulElem = document.createElement("ul");
//   articleElem.appendChild(ulElem);
//   for (let i = 0; i < sales.hrSales.length; i++) {
//     const liElem = document.createElement("li");
//     liElem.textContent = `${storeHours[i]}: ${sales.hrSales[i]}`
//     ulElem.appendChild(liElem)
//   }
// }
// // renderSales(Lima);
// console.log(Lima.hrSales);

// for (let i = 0; i < storeArray.length; i++) {
//   let currentStore = storeArray[i];
//   // currentStore.salesByTheHour();
//   renderSales(currentStore);
// }

// -----------------Constructor Function------------------------ //

function Sales(locationName, minCust, maxCust, avgCookiePerSale) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hrSales = [];
  this.avgCookiePerSale = avgCookiePerSale;
  this.salesArray.push(this);
}

Sales.prototype.salesArray = [];

Sales.prototype.custPerHr = function() {
  this.customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
}

Sales.prototype.avgCookiePerHr = function() {
  this.cookiesPerHour = Math.floor(this.avgCookiePerSale * this.customers);
}

Sales.prototype.salesByTheHour = function() {
  for (let i = 0; i < storeHours.length; i++) {
    this.custPerHr();
    this.avgCookiePerHr();
    this.hrSales.push(this.cookiesPerHour);
  }
}

Sales.prototype.renderSales = function() {

  }

// Sales.prototype.renderSales();

function renderAllSales() {
  for (let i = 0; i < Sales.prototype.salesArray.lenght; i++) {
  let currentSales = Sales.prototype.salesArray[i];
  currentSales.custPerHr();
  currentSales.avgCookiePerHr();
  currentSales.salesByTheHour();
  }
}

const seattle = new Sales("Seattle", 23, 65, 6.3);
const tokyo = new Sales("Tokyo", 3, 24, 1.2);
const dubai = new Sales("Dubai", 11, 38, 2.3);
const paris = new Sales("Paris", 20, 38, 2.3);

seattle.salesByTheHour();