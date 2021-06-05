let myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [59.938635, 30.323118],
        zoom: 17
    });

    const myPlacemark = new ymaps.Placemark(
      [59.938635, 30.323118],
      {
        hintContent: 'ул. Большая Конюшенная, д. 19/8',
      });

      myMap.geoObjects.add(myPlacemark);
}
