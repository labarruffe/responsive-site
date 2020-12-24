var image = { width: 1200, height: 600 };

var target = new Array();
target[0] = { x: 200, y: 250 };
target[1] = { x: 284, y: 10 };
target[2] = { x: 384, y: 188 };

var pointer = new Array();
pointer[0] = $('#pointer1');
pointer[1] = $('#pointer2');
pointer[2] = $('#pointer3');

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
    
    var arrayLength = target.length;

    for (var i = 0; i < arrayLength; i++) {
        pointer[i].css('top', (target[i].y) * scale + yOffset);
        pointer[i].css('left', (target[i].x) * scale + xOffset);
    }
    
    }


//
document.querySelector('.envelope').addEventListener('click', function(){
    if (document.querySelector('.pointer').classList.contains('pointer--open')){
      document.querySelector('.pointer').classList.remove('pointer--open');
      document.querySelector('.pointer').classList.add('pointer--close');
      setTimeout(function(){
        document.querySelector('.pointer').classList.remove('pointer--close');
      }, 600);    
    } else {
      document.querySelector('.pointer').classList.remove('pointer--close');
      document.querySelector('.pointer').classList.add('pointer--open');
    }
  });
  
  document.querySelector('.paper-close').addEventListener('click', function(){   document.querySelector('.pointer').classList.remove('pointer--open');
    document.querySelector('.pointer').classList.add('pointer--close');
    setTimeout(function(){
      document.querySelector('.pointer').classList.remove('pointer--close');
    }, 600);
  });

  //

