(function() {
  var rowOpen = document.querySelector(".js-rowOpen");
  var menuBlock = rowOpen.querySelector(".js-mainMenu");
  var toggle = menuBlock.querySelector(".toggle");
  
  var toggleOpen = menuBlock.querySelector(".toggle").querySelector(".toggle__burger");
  var toggleClose = menuBlock.querySelector(".toggle").querySelector(".toggle__close");

  toggleOpen.onclick = function () {
    /*menuBlock.classList.toggle("open");*/
    rowOpen.classList.toggle("open");
  };
  toggleClose.onclick = function () {
    rowOpen.classList.remove("open");
  };

})();
