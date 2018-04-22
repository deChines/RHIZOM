var typeWriters = document.getElementsByClassName("typeWriter");
var speed =80;
var animating = false;

Array.prototype.filter.call(typeWriters, function(typeWriter) {
  typeWriter.animating = false;
  typeWriter.onmouseover=function() {
    animate(typeWriter);
  };
});

function animate(typeWriter) {
  if (typeWriter.animating) {
    return;
  }
  typeWriter.animating = true;
  var text = typeWriter.innerHTML;
  typeWriter.innerHTML = "";
  setTimeout(function() {
    appendChar(typeWriter, text, 0);
  }, speed);
}

function appendChar(typeWriter, text, charPosition) {
  if (charPosition < text.length) {
    typeWriter.innerHTML += text.charAt(charPosition);
    setTimeout(function() {
      appendChar(typeWriter, text, charPosition+1);
    }, speed);
  } else {
    typeWriter.animating = false;
  }
}
