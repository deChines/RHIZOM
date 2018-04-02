var px, py, r, degree;
var minWeight = 1;
var maxWeight = 4;
var currWeight;
var spacing = maxWeight+2;
var sqrtTemp;
var goldenRatio;
var iter = 0;
var imgNum;
var smallChaos = false;
var img;
/*img.src = "https://i.imgur.com/k4pna.jpg"*/

function preload() {
  img = loadImage('https://i.imgur.com/XqOHwnP.jpg');
}

function setup() {
    sqrtTemp =sqrt(5);
    goldenRatio = ((sqrtTemp + 1 ) / 2);
    imgNum = random(4);
    var canvas = createCanvas( 500,500);
    canvas.parent('sketch-holder');
    background(255);
    px = width/2; py = height/2;
}

function draw() {
  for(var i = 34; i > 0; --i){ // for more speed
    degree = (iter * goldenRatio) * 360;
    r = sqrt(iter++) * spacing;
    calcPointPos(width/2, height/2, r, (degree % 360));

    var pix = img.get(px, py);
    currWeight = map(brightness(pix), 255, 0, minWeight, maxWeight);
    strokeWeight(currWeight);
    stroke(0,0,255); // stroke(pix);
    point(px, py);
    print(pix);
    if (px-10 <= 0 || px+10 >= width || py-10 <= 0 || py+10 >= height ) { noLoop(); }
  }
}

function calcPointPos(x, y, r, graden) {
  px = x + cos(radians(graden))*(r/2);
  py = y + sin(radians(graden))*(r/2);
    if(smallChaos){
    px = x + random(maxWeight)+ cos(radians(graden))*(r/2);
    py = y + random(maxWeight)+ sin(radians(graden))*(r/2);
  }
}

function mousePressed(){
	 if (mouseButton == RIGHT){
		smallChaos = !smallChaos;
	  }
	  else if (mouseButton == LEFT){
		  ++imgNum;
		  imgNum %= 4;
		  img = loadImage('https://i.imgur.com/ZZQFGu5.jpg');
	  }
  frameCount = iter = 0;
  background(255);
  loop();  redraw();
}
