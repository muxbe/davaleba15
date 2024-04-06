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
