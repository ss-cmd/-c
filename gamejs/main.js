
let mgr;

let font;
var fontfile = "data/Krungthep.otf";
var fontfile2 = 'data/Hind-Medium.ttf';
var fontfile3 = 'data/mono.otf';

//sound array
let mySounds = [];
let mySound1;
let mySound2;
let mySound3;
let mySound4;
let mySound5;
let mySound6;
let mySound7;

//


function preload() {
  font = loadFont(fontfile);
  font2 = loadFont(fontfile2);
  font3 = loadFont(fontfile3);
  // mySound0 = loadSound('../00-redline.mp3');
  mySound0 = loadSound('00intro.mp3');
  mySound1 = loadSound('relax.mp3');
  mySound2 = loadSound('2stage2.mp3');
  mySound3 = loadSound('stage3.mp3');
  mySound4 = loadSound('backgroundsound.mp3');
  mySound5 = loadSound('bass.mp3');
  mySound6 = loadSound('countdown.mp3');
  mySound7 = loadSound('warning.mp3');
  mySound8 = loadSound('last.mp3');
  mySound9 = loadSound('typing.mp3');
  mySound10 = loadSound('citywalk.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background('#faf5ed');
  textFont(font);
  //create sound array
  //sound
  mySounds = [mySound1, mySound2, mySound3, mySound4, mySound5, mySound6,mySound7,mySound8, mySound9, mySound10];
  mgr = new SceneManager();
  //mgr.showScene(intro);
  mgr.showScene(stageA);
}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Render loop that draws shapes with p5
function draw() {
  mgr.draw();
}

//text styles
function sText() {
  textAlign(CENTER, TOP);
  fill(255);
  noStroke();
  textSize(30);
  textLeading(40);
  textFont(font);
}

function bText() {
  textAlign(CENTER, TOP);
  fill(255);
  noStroke();
  textSize(70);
  textLeading(80);
  textFont(font);
}

function sTitle() {
  //textAlign(LEFT, TOP);
  fill(255);
  noStroke();
  textSize(18);
  textLeading(24);
  textFont(font2);
}

function mTitle() {
  textAlign(CENTER, TOP);
  fill(255);
  noStroke();
  textSize(40);
  textLeading(65);
  textFont(font2);

}

function bTitle() {
  textAlign(CENTER, TOP);
  fill(255);
  noStroke();
  textSize(60);
  textLeading(74);
  textFont(font3);

}

function rText() {
  textAlign(LEFT, TOP);
  fill(153, 153, 153);
  noStroke();
  textFont(font3);
  textSize(18);
  textLeading(24);

}

function xsText() {
  textAlign(LEFT, TOP);
  fill(153, 153, 153);
  noStroke();
  textFont(font3);
  textSize(18);
  textLeading(24);
}

function h1Text() {
  textAlign(CENTER, TOP);
  fill(255);
  noStroke();
  textFont(font3);
  textSize(100);
  textLeading(100);
}

function numText() {
  textAlign(LEFT, TOP);
  fill(255);
  noStroke();
  textFont(font3);
  textSize(54);
  textLeading(60);
}


  //globly check every 



