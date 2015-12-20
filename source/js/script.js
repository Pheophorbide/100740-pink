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

  var elements = document.querySelectorAll(".form-container__control--btn");
  for (var i = 0; i < elements.length; i++) {
    initNumberField(elements[i]);
  }


  function initNumberField(parent) {
    var input = parent.querySelector(".form-container__btn-item").querySelector("input");
    var minus = parent.querySelector(".form-container__btn--minus");
    var plus = parent.querySelector(".form-container__btn--plus");

    minus.addEventListener("click", function () {
      changeNumber("minus");
    });

    plus.addEventListener("click", function () {
      changeNumber("plus");
    });

    function changeNumber(operation) {
      var value = parseDaysValue(input.value);
      if (operation == "plus" && value < 100500) {
        input.value = (value + 1) + " " + declOfNum((value + 1), input.getAttribute("data-decl").split(","));

      } else if (operation == "minus" && value > 0) {
        input.value = (value - 1) + " " + declOfNum((value - 1), input.getAttribute("data-decl").split(","));
      }
    }
  }

  function parseDaysValue(daysCount) {
    return parseInt(daysCount.replace(/\D/g, ''));
  }

  function declOfNum(number, titles) {
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }
})();
