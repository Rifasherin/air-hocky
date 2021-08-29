var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";
var playermallet= createSprite(200,352,70,10);
playermallet.shapeColor = "black";
var computermallet = createSprite(190,48,70,10);
computermallet.shapeColor = "black";
var playergoal = createSprite(200,372,100,20);
playergoal.shapeColor = "yellow";
var computergoal1 = createSprite(200,28,100,20);
computergoal1.shapeColor = "yellow";
var gameState = "gameState=serve";
var computerScore = 0;
var playerScore = 0;
var reset;

function draw() {
 
  background("gold");
text(computerScore, 4, 178);
text(playerScore, 4, 234);
 if (keyDown("R")  &&  gameState === "end"){
   gameState = "serve";
   computerScore = 0;
   playerScore = 0;
 }
      

  if (gameState === "serve") {
    text("Press Space to Serve",150,180);
  }
   

  
   //AI for the computer paddle
  computermallet.x = striker.x;
  
  //draw line at the centre
  for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  if (keyDown("left")) {
    playermallet.x = playermallet.x-10;
  }
   if (keyDown("right")) {
    playermallet.x = playermallet.x+10;
  }
   if (keyDown("up")) {
    (playermallet.y>25);
    playermallet.y = playermallet.y-10;
  }
   if (keyDown("down")) {
    (playermallet.y<120);
    playermallet.y = playermallet.y+10;
  }
  
  
  createEdgeSprites();


  striker.bounceOff(playermallet);
  striker.bounceOff(computermallet);
  
  
 
  if (keyDown("space") && gameState === "serve") {
    gameState="serve"();
    gameState = "play";
    }
 

   
  if (striker.isTouching(computergoal1)) {
  playerScore = playerScore +1
   
      gameState = "serve";
    reset();
    
  } 
  
    if (striker.isTouching(playergoal)) {
  computerScore = computerScore + 1
    
      gameState = "serve";
    reset();
    }
   
  
  if (playerScore === 5 || computerScore === 5  ) {
  gameState = "end";
  text("Game Over", 158, 180);
  text("Press R to Restart",160,192) }
  drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
