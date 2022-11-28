let curb;
let landfill;
let binR;
let binT;
let truckR;
let truckT;
let again;
let house = true;
let trash = false;
let recycle = false;
let trashbin = true;
let recyclebin = true;
let driveR = 800;
let driveT = 800;
let next = 0;
let tryagain = false;
let yes = false;
let no = false;

function setup() {
  createCanvas(800, 600);
}

function preload() {
  curb = loadImage('assets/curb.png')
  landfill = loadImage('assets/landfill.png')
  binR = loadImage('assets/binR.png')
  binT = loadImage('assets/binT.png')
  truckT = loadImage('assets/truckT.png')
  truckR = loadImage('assets/truckR.png')
  again = loadImage('assets/tryagain.png')
}

function draw() {
  if (house) {
    image(curb,0,0);
  } else { 
      image(landfill,0,0);
    } 

  if (trashbin) {
    image(binT,326,269);
  }
  if (recyclebin) {
    image(binR,221,269)
  }
  
  if (trash) {
    driveT = (driveT - 3);}
  if (driveT < 0) {
    trashbin = false;}
  if (driveT < -688) {
    driveT = 800;
    trash = false;
    next++;}
  image(truckT,driveT,250);

  if (recycle) {
    driveR = (driveR - 3);}
  if (driveR < 0) {
    recyclebin = false;}
  if (driveR < -688) {
    driveR = 800;
    recycle = false;
    next++;}
  image(truckR,driveR,250);

  if (next >= 2) {
    house = false;
    if (driveT < 100 && driveR > 175) {
    driveR = (driveR - 3);}
    if (driveT > 0) {
    driveT = (driveT - 3);}
    if (driveT < 0 && driveR < 175) {
      tryagain = true;
    }
  }

  if (tryagain) {
    image(again,250,86)
  }

  if (yes) {
    house = true;
    trash = false;
    recycle = false;
    trashbin = true;
    recyclebin = true;
    driveR = 800;
    driveT = 800;
    next = 0;
    tryagain = false;
    yes = false;
    no = false;
  }
  if (no) {
    //move to end screen ?
  }
}

function mousePressed() {
  if (collidePointRect(mouseX,mouseY,221,259,96,130)) {
    recycle = true;}
  if (collidePointRect(mouseX,mouseY,326,269,96,130)) {
    trash = true;}
  if (collidePointRect(mouseX,mouseY,270,190,80,30)) {
    yes = true;}
  if (collidePointRect(mouseX,mouseY,450,190,80,30)) {
    no = true;}
}