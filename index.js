// document.querySelector('.envelope').addEventListener('click', function(){
//   if (document.querySelector('.letter').classList.contains('letter--open')){
//     document.querySelector('.letter').classList.remove('letter--open');
//     document.querySelector('.letter').classList.add('letter--close');
//     setTimeout(function(){
//       document.querySelector('.letter').classList.remove('letter--close');
//     }, 600);    
//   } else {
//     document.querySelector('.letter').classList.remove('letter--close');
//     document.querySelector('.letter').classList.add('letter--open');
//   }
// });

// document.querySelector('.paper-close').addEventListener('click', function(){   document.querySelector('.letter').classList.remove('letter--open');
//   document.querySelector('.letter').classList.add('letter--close');
//   setTimeout(function(){
//     document.querySelector('.letter').classList.remove('letter--close');
//   }, 600);
// });

var image = { width: 1200, height: 600 };
var target = { x: 50, y: 5 };

var pointer = $('#pointer');

$(document).ready(updatePointer);
$(window).resize(updatePointer);

function updatePointer() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    // Get largest dimension increase
    var xScale = windowWidth / image.width;
    var yScale = windowHeight / image.height;
    var scale;
    var yOffset = 0;
    var xOffset = 0;

    if (xScale > yScale) {
        // The image fits perfectly in x axis, stretched in y
        scale = xScale;
        yOffset = (windowHeight - (image.height * scale)) / 2;
    } else {
        // The image fits perfectly in y axis, stretched in x
        scale = yScale;
        xOffset = (windowWidth - (image.width * scale)) / 2;
    }

    pointer.css('top', (target.y) * scale + yOffset);
    pointer.css('left', (target.x) * scale + xOffset);
}