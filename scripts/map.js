ymaps.ready(init);

function init(){
    const mediaQueryDesk = window.matchMedia('(min-width: 840px)').matches;
    // Создание карты.
    
    let map = new ymaps.Map("map", {
        center: mediaQueryDesk ? [55.727662, 37.720650] : [55.725823, 37.734362],
        zoom: mediaQueryDesk ? 14 : 13
    });

    let myPlacemark = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [55.725823, 37.734362]
        }
    });

    // map.controls.remove('geolocationControl'); // удаляем геолокацию
    // map.controls.remove('searchControl'); // удаляем поиск
    // map.controls.remove('trafficControl'); // удаляем контроль трафика
    // map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('rulerControl'); // удаляем контрол правил
    map.geoObjects.add(myPlacemark);
}