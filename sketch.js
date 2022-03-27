
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)


}

function draw() {
  background(255,255,255);  
  drawSprites();
  translate(200,200); 
  hr=hour();
  mn=minute();
  sc=second();
  scAngle = map(sc,0,60,0,360)
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  mnAngle = map(mn,0,60,0,360)
  rotate(mnAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,80,0);
  pop();
  push();
  hrAngle = map(hr%12,0,60,0,360)
  rotate(hrAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,70,0);
  pop();
  
}