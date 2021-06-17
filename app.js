"use strict";

const storeHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

// -----------------Constructor Function------------------------ //
          
function Sales(locationName, minCust, maxCust, avgCookiePerSale) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.hourlySales = [];
  this.salesArray.push(this);
  console.log("this", this);
}
//-------------------Constructor End---------------------------------------------//
//-------"Master Array"-----------//
Sales.prototype.salesArray = [];


Sales.prototype.custPerHr = function() {
  this.customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
}

Sales.prototype.avgCookiePerHr = function() {
  this.cookiesPerHr = Math.floor(this.avgCookiePerSale * this.customers);
}

Sales.prototype.salesByTheHour = function() {
  for (let i = 0; i < storeHours.length; i++) {
    this.custPerHr();
    this.avgCookiePerHr();
    this.hourlySales.push(this.cookiesPerHr);
  }
}

const dailysalesDivElem = document.getElementById("daily sales");
const tableElem = document.createElement("table");
dailysalesDivElem.appendChild(tableElem);


function renderHeader() {
  const tableHeader = document.createElement("thead");
  tableElem.appendChild(tableHeader);
  const row1 = document.createElement("tr");
  tableHeader.appendChild(row1);
  const locationCell = document.createElement("th");
  locationCell.textContent = ("Location");
  row1.appendChild(locationCell);

  for (let i = 0; i < storeHours.length; i++) {
    const headerCell = document.createElement("th");
    headerCell.textContent = storeHours[i];
    row1.appendChild(headerCell);
  }
}
  
Sales.prototype.renderData = function() {
  const locationRow = document.createElement("tr");
  tableElem.appendChild(locationRow);
  const locationCell = document.createElement("th");
  locationCell.textContent = this.locationName;
  locationRow.appendChild(locationCell);
  
  let dailyTotal = 0;
  
  for (let i = 0; i < storeHours.length; i++) {
    dailyTotal += this.hourlySales[i];
    const dataCell = document.createElement("td");
    dataCell.textContent = this.hourlySales[i];
    locationRow.appendChild(dataCell);
  }
  let dailyTotalSales = document.createElement("th");
  dailyTotalSales.textContent = dailyTotal;
  locationRow.appendChild(dailyTotalSales);
}
  
function renderAllStores() {
  for (let i = 0; i < Sales.prototype.salesArray.length; i++) {
    let currentStore = Sales.prototype.salesArray[i];
    currentStore.custPerHr();
    currentStore.avgCookiePerHr();
    currentStore.salesByTheHour();
    currentStore.renderData();
  }
}

const seattle = new Sales("Seattle", 23, 65, 6.3);
const tokyo = new Sales("Tokyo", 3, 24, 1.2);
const dubai = new Sales("Dubai", 11, 38, 3.7);
const paris = new Sales("Paris", 20, 38, 2.3);
const lima = new Sales("Lima", 2, 16, 4.6,);
const storeArray = [seattle, tokyo, dubai, paris, lima];

function renderFooter() {
  const tableFooter = document.createElement("tfoot");
  tableElem.appendChild(tableFooter);
  const totalCell = document.createElement("th");
  totalCell.textContent = ("Hourly Totals");
  tableFooter.appendChild(totalCell);

  let grandTotal = 0;

  for (let i = 0; i < storeHours.length; i++) {
    let hourlyTotal = 0
    for (let j = 0; j < Sales.prototype.salesArray.length; j++) {
      hourlyTotal += Sales.prototype.salesArray[j].hourlySales[i];
    }
    let storeHourTotal = document.createElement("th");
    storeHourTotal.textContent = hourlyTotal;
    tableFooter.appendChild(storeHourTotal);
    grandTotal += hourlyTotal;
  }
  let grandTotalSales = document.createElement("th");
  grandTotalSales.textContent = grandTotal;
  tableFooter.appendChild(grandTotalSales);
}


renderHeader();
renderAllStores();
renderFooter();