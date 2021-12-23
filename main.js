function setup()
{
    video = createCapture(VIDEO);
    video.size(530, 400);

    canvas = createCanvas(550, 520);
    canvas.position(550, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
    console.log("Posenet is intialized!")
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
function draw()
{
    background('#ffb6c1')
}