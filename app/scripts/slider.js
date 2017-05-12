/**
 * Created by miguel on 12/05/17.
 */
var Slider = function (params) {
  var obj = {};
  var slidesContainer = new createjs.Container();
  slidesContainer.name = 'slides-container';
  var slides = params.slides;
  var width = params.width;
  var height = params.height;
  var parentContainer = params.parentContainer;
  var currentIndex;

  function initArrows() {
    var rightArrow = new createjs.Text();
    rightArrow.text = '>';
    rightArrow.font = '46px Arial';
    rightArrow.color = '#fff';
    rightArrow.x = width + 10;
    rightArrow.y = height / 2;
    rightArrow.textBaseline = 'middle';

    var leftArrow = new createjs.Text();
    leftArrow.text = '<';
    leftArrow.font = '46px Arial';
    leftArrow.color = '#fff';
    leftArrow.x = -40;
    leftArrow.y = height / 2;
    leftArrow.textBaseline = 'middle';

    var area = new createjs.Shape();
    area.graphics.beginFill('#FFF').drawRect(0,0,46,46);
    leftArrow.hitArea = area;
    rightArrow.hitArea = area;

    parentContainer.addChild(leftArrow);
    parentContainer.addChild(rightArrow);

    leftArrow.addEventListener('click',function () {
      console.log('left click');
    });

    rightArrow.addEventListener('click',function () {

    });
  }

  function initSlides() {
    slides.forEach(function (slide, i) {
      slide.x = i * width;
      slidesContainer.addChild(slide);
    });
    parentContainer.addChild(slidesContainer);
  }

  obj.init = function () {
    currentIndex = 0;
    var maskShape = new createjs.Shape();
    maskShape.graphics.drawRect(0,0, width, height);
    slidesContainer.mask = maskShape;
    initSlides();
    initArrows();

  };

  return obj;
};
