function preload(){
img=loadImage("dog and cat.jpg");
}

function setup(){
canvas=createCanvas(640,320);
canvas.center();
}

function draw(){
image(img,0,0,640,320);
}
