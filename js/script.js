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
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent("change", false, true);
      input.dispatchEvent(evt);
    });

    plus.addEventListener("click", function () {
      changeNumber("plus");
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent("change", false, true);
      input.dispatchEvent(evt);
    });



      function changeNumber(operation) {
      var value = convertInputValueToNumber(input.value);
      if (operation == "plus" && value < 100500) {
        input.value = (value + 1) + " " + declOfNum((value + 1), input.getAttribute("data-decl").split(","));

      } else if (operation == "minus" && value > 0) {
        input.value = (value - 1) + " " + declOfNum((value - 1), input.getAttribute("data-decl").split(","));
      }
    }
  }

  function convertInputValueToNumber(daysCount) {
    return parseInt(daysCount.replace(/\D/g, ''));
  }

  function declOfNum(number, titles) {
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  function addFellowContainer () {
    var fellowInner = document.querySelector(".js-fellowInner");
    var count = document.querySelectorAll('.js-fellowItemContainer').length + 1;
    var div = document.createElement("div");
    div.classList.add("js-fellowItemContainer");
    div.innerHTML = getFellowItemHTML(count);
    fellowInner.appendChild(div);
  }

  function removeLastFellowContainer () {
    var lastFellowContainer = document.querySelector(".js-fellowItemContainer:last-child");
    lastFellowContainer.remove();
  }

  function getFellowItemHTML (indexNumber) {
    console.log(document.querySelector("#fellow-template"));

    var template = document.querySelector("#fellow-template").innerHTML;
    return Mustache.render(template, {
      "indexNumber":indexNumber
    });
  }

  window.onload = function() {
    var inputFellow = document.querySelector(".js-fellow");
    var inputValue = convertInputValueToNumber(inputFellow.value);

    for (var i= 0; i < inputValue; i++) {
      addFellowContainer();
    }

    inputFellow.addEventListener("change", function(event){
      var currentValue = convertInputValueToNumber(event.target.value);
      var currentContainerCount = document.querySelectorAll(".js-fellowItemContainer").length;
      console.log(currentValue, currentContainerCount);
      if (currentContainerCount < currentValue) {
        addFellowContainer();
      } else if (currentContainerCount > currentValue) {
        removeLastFellowContainer();
      }
  });
  };

})();
