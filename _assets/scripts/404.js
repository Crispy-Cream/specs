function typeEffect(ElementArray, speed) {
  var element = document.getElementById(ElementArray.element);

  element.display = "block";

  var text = ElementArray.innerHTML;

  var i = 0;
  var num = parseInt(ElementArray.element);
  var max = elements.length;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
      if (num < max) {
        typeEffect(elements[num], speed);
      }
    }
  }, speed);
}

var elements = [];
var i = 0;
for (i = 0; i < 17; i++) {
  var num = (i + 1).toString();
  var element = document.getElementById(num);
  elements.push({
    element: num,
    innerHTML: element.innerHTML,
  });
  element.innerHTML = "";
}

typeEffect(elements[0], 75);
