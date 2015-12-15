(function () {
  if (!("FormData") in window) {
    return;
  }
  var form = document.querySelector(".form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(form);
    request(data, function (response) {
      console.log(response);
    });
  });

  function request(data, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + (new Date()).getTime());
    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState == 4) {
        fn(xhr.responseText);
      }
    });
    xhr.send(data);
  }
})();
