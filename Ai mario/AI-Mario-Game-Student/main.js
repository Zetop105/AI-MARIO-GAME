function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav")
	mario_coin=loadSound("coin.wav")
	mario_kick=loadSound("kick.wav")
	mario_die=loadSound("mariodie.wav")
	mario_gameover=loadSound("gameover.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);

	video= createCapture("VIDEO")
	video.size(800,400)
	video.parent("game_console")

	poseNet=ml5.poseNet(video, modelloaded)
	poseNet.on("pose", gotPoses)
}

function modelloaded(){
	console.log("model is loaded")
}

function draw() {
	game()
}

function gotPoses(results){
	if(results.length>0){
		noseX=results[0].pose.nose.x
		noseY=results[0].pose.nose.y
		console.log("noseX="+noseX+"noseY="+noseY)
	}
}






