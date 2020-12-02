nosex=0
nosey=0

function preload(){
    clownnose=loadImage('https://lh3.googleusercontent.com/proxy/wERwT4Gqys9CHY3CBX9I-G1VbAOL5QSJZGmXiHckWlJ0fsZxukbeYuLbF-eNWNZtxhOrIZ6uOvpWDecst1QmrLc5TJMSSKoTXuoQlXz7mbdgRMzdZYgATl2KLWpPToF7RHinpuW-D1RzXxVoC8y-FcppC-wfihBh2LqKkO9_9junZg');
    
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on("pose",getpose);
}

function getpose(results){
if(results.length>0){
    console.log(results);
    console.log("nosex= " + results[0].pose.nose.x);
    console.log("nosey= " + results[0].pose.nose.y);
    nosex=results[0].pose.nose.x-10;
nosey=results[0].pose.nose.y-5;
}
}

function modelloaded(){
    console.log("modelloaded");
   
}

function draw(){
image(  video,0,0,300,300);

image(clownnose,nosex,nosey,30,30);

}

function takesnapshot(){
    save("pic.png");

}


