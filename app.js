"use strict";

const storeHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

// const seattle = new Sales("Seattle", 23, 65, 6.3);
// const tokyo = new Sales("Tokyo", 3, 24, 1.2);
// const dubai = new Sales("Dubai", 11, 38, 3.7);
// const paris = new Sales("Paris", 20, 38, 2.3);
// const lima = new Sales("Lima", 2, 16, 4.6,);
// const storeArray = [seattle, tokyo, dubai, paris, lima];


// const Seattle = {
  //   customers: 0,
  //   minCust: 23,
  //   maxCust: 65,
  //   hrSales: [],
  //   avgCookiePerSale: 6.3,
  //   cookiesPerHour: 0,
  //   customerPerHr: function () {
  //     this.customers = custPerHr(this.minCust, this.maxCust);
  //   },
  //   averageCookiePerHr: function () {
  //     this.cookiesPerHour = avgCookiePerHr(this.avgCookiePerSale, this.customers);
  //   },
  //   salesByTheHour: function () {
  //     for (let i = 0; i < storeHours.length; i++) {
  //       this.customerPerHr();
  //       this.averageCookiePerHr();
  //       this.hrSales.push(this.cookiesPerHour);
  //     }
  //   },
  // }
  // Seattle.salesByTheHour();
  // console.log(Seattle);
        
          
const dailySalesDivElem = document.getElementById("daily sales");
          
// -----------------Constructor Function------------------------ //
          
function Sales(locationName, minCust, maxCust, avgCookiePerSale) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.hrSales = [];
  this.salesArray.push(this);
  console.log("this", this);
}
//---------------------------------------------------------------------------------//
Sales.prototype.salesArray = [];

// Sales.prototype.getCookieSales = function() {
//   for (let i = 0; i < storeHours.length; i++) {
//     const randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     const cookieSales = (randomCust * Math.floor(this.avgCookiePerSale));
//     this.hrSales.push(cookieSales);
//   }
// }

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


// // Sales.prototype.renderSales = function() {
  
// }

document.getElementById("daily sales")
  const tableElem = document.createElement("table");
  dailySalesDivElem.appendChild(tableElem);

function renderHours() {
  const tableHeader = document.createElement("thead");
  tableElem.appendChild(tableHeader);
  const row1 = document.createElement("tr");
  tableHeader.appendChild(row1);

  for (let i = 0; i < storeHours.length; i++) {
    const headerCell = document.createElement("th");
    headerCell.textContent = storeHours[i];
    row1.appendChild(headerCell);
  }
}
  
Sales.prototype.renderData = function() {
  const storeRow = document.createElement("tr");
  tableElem.appendChild(storeRow);
  const storeColumn = document.createElement("col");
  storeColumn.textContent = this.locationName;
  storeRow.appendChild(storeColumn);

  for (let i = 0; i < storeHours.length; i++) {
    const dataCell = document.createElement("td");
    dataCell.textContent = this.hrSales[i];
    storeRow.appendChild(dataCell);
  }
}
  
function renderAllStores() {
  for (let i = 0; i < Sales.prototype.salesArray.length; i++) {
    let currentStore = Sales.prototype.salesArray[i];
    currentStore.custPerHr();
    currentStore.avgCookiePerHr();
    currentStore.salesByTheHour();
    // currentStore.getCookieSales();
    currentStore.renderData();
  }
}

const seattle = new Sales("Seattle", 23, 65, 6.3);
const tokyo = new Sales("Tokyo", 3, 24, 1.2);
const dubai = new Sales("Dubai", 11, 38, 3.7);
const paris = new Sales("Paris", 20, 38, 2.3);
const lima = new Sales("Lima", 2, 16, 4.6,);
// const storeArray = [seattle, tokyo, dubai, paris, lima];


renderHours();
renderAllStores();
  // Sales.prototype.renderSales();
  
  
