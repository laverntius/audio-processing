var song;
var button;
var skipButton;
var volumeSlider;
var rateSlider;
var panSlider;
var amp, volume, size;



function preload(){
  song = loadSound("music/jacksonbreit.mp3")
}

function setup() {
  createCanvas(600, 400);
 
  song.play();
  
  button = createButton("Jackson Breit- Play ");
  button.mousePressed(togglePlaying);
  button.position(20, height-4);
  
  skipButton = createButton("Skip");
  skipButton.mousePressed(skip);
  skipButton.position(40, height-4)
  
  volumeSlider = createSlider(0, 1, 0.5, 0.05)
  volumeSlider.position(20, height-8)
  
  rateSlider = createSlider(0.5, 1.5, 1, 0.05)
  rateSlider.position(40, height-8)
  
  panSlider = createSlider(-1, 1 0 0.05)
  panSlider.position(80,  height-8)
  
  
  amp = new p5.Amplitude(); 
}

function draw() {
   background(0, 0, song.currentTime()*8;
  
  volume = amp.getLevel();
  size = map(volumeSlider.value());
  
  song.setVolume(volumeSlider.value());
  song.rate(rateSlider.value());
  song.pan(panSlider.value());
  
  fill(255);
  rect(width/2, height/2, size, size);
  
}

function togglePlaying(){
  if(song.isPlaying()){
    song.pause();
    button.html("Play");
  }
  else{
    song.play();
    button.html("Pause");
  }
}

function skip(){
  if(song.isPlaying());{
  song.jump(song.currentTime());
  }
}

function showSquare(){
  fill(255);
  rect(width/2, height/2, volume, volume);
}