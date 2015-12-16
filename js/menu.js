(function() {
  var menuBlock = document.querySelector(".js-mainMenu");
  console.log(menuBlock);
  var toggle = menuBlock.querySelector(".toggle");
  console.log(toggle);

  var toggleOpen = menuBlock.querySelector(".toggle").querySelector(".toggle__burger");
  var toggleClose = menuBlock.querySelector(".toggle").querySelector(".toggle__close");
  var menu = menuBlock.querySelector(".header-menu__menu-inner");

  toggleOpen.onclick = function () {
    menuBlock.classList.toggle("open");
  };
  toggleClose.onclick = function () {
    menuBlock.classList.remove("open");
  };

})();
