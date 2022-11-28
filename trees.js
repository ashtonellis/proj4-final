let field;
let imgtrunk1;
let imgtrunk2;
let sapling;
let truck;
let again;
let trunk = 0;
let trunk1 = true;
let trunk2 = true;
let trunk3 = true;
let trunk4 = true;
let trunk5 = true;
let trunk6 = true;
let sapling1 = false;
let sapling2 = false;
let sapling3 = false;
let sapling4 = false;
let sapling5 = false;
let sapling6 = false;
let move = false;
let tree = 0;
let drive = 900;
let tryagain = false;
let yes = false;
let no = false;

function setup() {
  createCanvas(800, 600);
}

function preload() {
  field = loadImage("assets/field.png");
  imgtrunk1 = loadImage("assets/trunk1.png");
  imgtrunk2 = loadImage("assets/trunk2.png");
  sapling = loadImage("assets/sapling.png");
  truck = loadImage("assets/truck.png");
  again = loadImage("assets/tryagain.png");
}

function draw() {
  image(field,0,0);
  if (yes) {tryagain = false};
  if (no) {
    //move to next scene
  }

  if (trunk1) {image(imgtrunk1,42,460);}
  if (trunk2) {image(imgtrunk1,342,296);}
  if (trunk3) {image(imgtrunk1,546,236);}
  if (trunk4) {image(imgtrunk2,86,272);}
  if (trunk5) {image(imgtrunk2,242,436);}
  if (trunk6) {image(imgtrunk2,570,392);}

  if (sapling1) {image(sapling,78,356);}
  if (sapling2) {image(sapling,378,194);}
  if (sapling3) {image(sapling,584,138);}
  if (sapling4) {image(sapling,130,136);}
  if (sapling5) {image(sapling,284,302);}
  if (sapling6) {image(sapling,620,256);}

  
  image(truck,drive,208);
  if (tree >= 6) {drive = (drive - 2);}
  if (drive <= -650) {tree = 0; tryagain = true; drive = 900; yes = false; no = false;}

  if (drive <= -168) {sapling1 = false, trunk1 = true;}
  if (drive <= 132) {sapling2 = false, trunk2 = true;}
  if (drive <= 336) {sapling3 = false; trunk3 = true;}
  if (drive <= -124) {sapling4 = false; trunk4 = true;}
  if (drive <= 32) {sapling5 = false, trunk5 = true;}
  if (drive <= 360) {sapling6 = false, trunk6 = true;}
  if (tryagain) {image(again,250,86);}

  

}

 function mousePressed() {
  if (collidePointRect(mouseX,mouseY,42,460,150,50)) {trunk1 = false; trunk++;}
  if (collidePointRect(mouseX,mouseY,342,296,150,50)) {trunk2 = false; trunk++;}
  if (collidePointRect(mouseX,mouseY,546,236,150,50)) {trunk3 = false;trunk++}
  if (collidePointRect(mouseX,mouseY,86,272,175,30)) {trunk4 = false; trunk++}
  if (collidePointRect(mouseX,mouseY,242,436,175,30)) {trunk5 = false; trunk++}
  if (collidePointRect(mouseX,mouseY,570,392,175,85)) {trunk6 = false; trunk++}

  if (trunk >=6) {
  if (collidePointRect(mouseX,mouseY,62,522,102,33)) {sapling1 = true; tree++;}
  if (collidePointRect(mouseX,mouseY,354,362,117,35)) {sapling2 = true; tree++;}
  if (collidePointRect(mouseX,mouseY,564,294,102,37)) {sapling3 = true; tree++;}
  if (collidePointRect(mouseX,mouseY,110,310,116,33)) {sapling4 = true; tree++;}
  if (collidePointRect(mouseX,mouseY,254,472,137,40)) {sapling5 = true; tree++;}
  if (collidePointRect(mouseX,mouseY,588,432,128,36)) {sapling6 = true; tree++;}
  }
  if (tryagain) {
    if (collidePointRect(mouseX,mouseY,270,190,80,30)) {yes = true;console.log('yes')}
    if (collidePointRect(mouseX,mouseY,450,190,80,30)) {no = true;}
  }
}

 //want to add text about amount of trees torn down yearly