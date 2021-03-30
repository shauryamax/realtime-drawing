function setup () {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}
function draw() {
    background('grey')
}

function modelLoaded() {
    console.log('PoseNet is Successfuly loaded ')
}
function gotposes(results) {
    if(results.length > 0)
    {
        console.log(results);
    }
}