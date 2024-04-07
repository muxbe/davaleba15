for (i = 0; i <= 20; i++) {
  console.log(i);
}
let b = 0;
while (b <= 30) {
  console.log(b);
  b++;
}
let c = 0;
do {
  c++;
  console.log(c);
} while (c < 40);

let arrayAgeList = [1, 2, 5, 7, 8, 10, 23, 24, 26];

function even(list) {
  for (let i of list) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
let currentDate = new Date();
let day = currentDate.getDay();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();
let time = currentDate.getHours();
let monthday = currentDate.getDate();
let minut = currentDate.getMinutes();
let second = currentDate.getSeconds();
switch (month) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
    break;
}
console.log(
  year + "/" + month + "/" + monthday + "/" + time + ":" + minut + ":" + second
);
switch (day) {
  case 0:
    day = "Sunday";
    console.log("today is ", day);
    break;
  case 1:
    day = "monday";
    console.log("today is ", day);
    break;
  case 2:
    day = "tuesday";
    console.log("today is ", day);
    break;
  case 3:
    day = "wednesday";
    console.log("today is ", day);
    break;
  case 4:
    day = "Thursday";
    console.log("today is ", day);
    break;
  case 5:
    day = "Friday";
    console.log("today is ", day);
    break;
  case 6:
    day = "Saturday";
    console.log("today is ", day);
    break;
}
let price = 100;
let delivery = 20;

let city = "batumi";
switch (city) {
  case "tbilisi":
    delivery = 0;
    console.log("free delivery");
    break;
  case "batumi":
  case "kutaisi":
  case "rustavi":
    delivery = 10;
    console.log("half price for delivery");
    break;
  default:
    delivery = 30;
    console.log("from your region delivery is very hard");
}
let totalSum = 200;
switch (totalSum) {
  case 0:
    totalSum = 0;
    delivery = 0;
    console.log("total sum-", totalSum);
    break;
  case 100:
    totalSum = 100;
    console.log(totalSum);
    break;
  case 200:
    i = 5 / 200;
    i *= 100;
    totalSum -= i;
    console.log(totalSum, "GEL", " save 5%");
    break;
  case 300:
    i = 10 / 300;
    i *= 100;
    totalSum -= i;
    console.log(totalSum, "GEL", "save 10%");
    break;
}

let totalprice = totalSum + delivery;
console.log("total price-", totalprice, "GEL");
