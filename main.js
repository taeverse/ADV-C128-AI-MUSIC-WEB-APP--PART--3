songharry = "";
songpeter = "";
song = "";

function preload() {
    songharry = loadSound("music.mp3");
    songpeter = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("PoseNet is initialized")
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
}