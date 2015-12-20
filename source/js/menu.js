(function() {
  var rowOpen = document.querySelector(".js-rowOpen");
  var toggle = rowOpen.querySelector(".toggle");
  toggle.addEventListener("click",function (event) {
    event.preventDefault();
    rowOpen.classList.toggle("open");
  });
})();
