var stage = new createjs.Stage('stage');
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener('tick', update);
/** Set up slides**/
var mainContainer = new createjs.Container();
mainContainer.name = 'main-container';

var squareContainer = new createjs.Container();
squareContainer.name = 'square-container';
var square = new createjs.Shape();
square.graphics.beginFill('red').drawRect(0, 0, 200, 200);
squareContainer.addChild(square);

var circleContainer = new createjs.Container();
circleContainer.name = 'circle-container';
var circle = new createjs.Shape();
circle.graphics.beginFill('green').drawCircle(100,100,100);
circleContainer.addChild(circle);

mainContainer.x = 100;
stage.addChild(mainContainer);

/** END set up slides**/

/** BEGIN slider initialization **/
var slides = [];
slides.push(squareContainer);
slides.push(circleContainer);

var slider = Slider({
  parentContainer: mainContainer,
  slides: slides,
  width: 200,
  height: 200
});

slider.init();
function update() {
  stage.update();
}
