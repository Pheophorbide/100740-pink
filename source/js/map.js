( function () {
  ymaps.ready(init);
  var myMap,
    myPlacemark;

  function init(){
    myMap = new ymaps.Map("map", {
      center: [59.94, 30.32],
      zoom: 15
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

    }, {
      iconLayout: "default#image",
      iconImageHref: "img/map-marker.svg",
      // Размеры метки.
      iconImageSize: [35.983, 35.983],
      iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myPlacemark);
  }
}) ();
