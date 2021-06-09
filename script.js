//background code start
let dots = [];
let dotAmount = 150;
let canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  for (let i = 0; i < dotAmount; i++) {
    let dot = {
      x: random(0, windowWidth),
      y: random(0, windowHeight),
      size: 10,
      xSpeed: random(-2, 2),
      ySpeed: random(-2, 2),
    };

    dots.push(dot);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#243626");
  for (let i = 0; i < dots.length; i++) {

    dots.forEach((element) => {
      let dis = dist(dots[i].x, dots[i].y, element.x, element.y);
      if (dis < 100) {
        stroke("#3d5c40");
        line(dots[i].x, dots[i].y, element.x, element.y);
      }
    });

    noStroke();
    fill("#27b334");
    ellipse(dots[i].x, dots[i].y, dots[i].size);

    if (dots[i].x <= 0 || dots[i].x >= windowWidth) dots[i].xSpeed *= -1;
    if (dots[i].y <= 0 || dots[i].y >= windowHeight) dots[i].ySpeed *= -1;
    dots[i].x += dots[i].xSpeed;
    dots[i].y += dots[i].ySpeed;

    
  }
}
//background code end

//time code start
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function convertHours(hour) {
  if (hour > 12) {
    let newHour = hour - 12;
    return { hour: newHour, part: "PM" };
  } else {
    return { hour: hour, part: "AM" };
  }
}
function fixMinutes(minutes){
  if(minutes<10){
    let newMinutes = `0${minutes}`
    return newMinutes
  }
  else {return minutes}
}
function getTime() {
  console.log('getting time')
  var time = new Date();
  let hour = convertHours(time.getHours());
  let minute = fixMinutes(time.getMinutes());
  let day = days[time.getDay()];
  let year = time.getFullYear();
  let month = months[time.getMonth()]
  let monthDay = time.getUTCDate()
  console.log()
  $('div#timeSection').empty()
  $('div#timeSection').append(`${day} ${month} ${monthDay} ${year} ${hour.hour}:${minute} ${hour.part}`)
}
//time code end

//run of page load
$(function(){
  getTime()
  setInterval(function(){ getTime() }, 1000);
})
