function preload() {

  }
  function setup(){
    canvas = createCanvas(500,380);
    canvas.center();
    
  video = createCapture(VIDEO);
  video.size(700, 600);
  video.hide();
  
}



function draw(){
    image(video,0,0,500,380);
}
  
  
