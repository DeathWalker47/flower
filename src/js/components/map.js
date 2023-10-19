
const breadcrumbCurrent = document.querySelector('.breadcrumbs-list__link--current')

if(breadcrumbCurrent) {
  breadcrumbCurrent.textContent = document.title
}

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: [56.14339919772827,47.25118528420461],
        zoom: 15
    });
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
          type: "Point", // тип геометрии - точка
          coordinates: [56.14339919772827,47.25118528420461] // координаты точки
      }
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
}


