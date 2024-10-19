function setup () {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(300, 300);
  rotate(270);
  strokeWeight(8);
  noFill();
  
  hrArc('white');
  minArc('aqua');
  secArc('#ff4dc8');
  dot('red');
  number();
  circle(0,0,400)
}

function secArc(col) {
  let sec = second();
  stroke(col);
  let secAng= map(sec, 0, 60, 0, 360);
  //arc(0, 0, 400, 400, 0, secAng);
  push();
  rotate(secAng);
  stroke(col);
  line(0,0,175,0);
  pop();
}

function minArc(col) {
  let min = minute();
  stroke(col);
  let minAng = map(min, 0, 60, 0, 360);
  //arc(0, 0, 380, 380, 0, minAng);
  push();
  rotate(minAng);
  stroke(col);
  line(0,0,125,0);
  pop();
}

function hrArc(col) {
  let hr = hour();
  stroke(col);
  let hrAng = map(hr % 12, 0, 12, 0, 360);
 // arc(0, 0, 360, 360, 0, hrAng);
  push();
  rotate(hrAng);
  stroke(col);
  line(0,0,75,0);
  pop();
}

function dot(col) {
  stroke(col);
  point(0, 0)
}

function number(){
  rotate(90);
  strokeWeight(2);
  stroke(255);
  textSize(40);
  text('3',150,10);
  text('9',-150,10);
  text('12',-20,-150);
  text('6',-10,150)
}
