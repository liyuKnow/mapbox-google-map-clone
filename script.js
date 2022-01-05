mapboxgl.accessToken = 'pk.eyJ1Ijoia2lkdXN0IiwiYSI6ImNreHl5c3YxMDJsNWMycm1wdmQ3YjhpeW8ifQ.89WuFamuuemjDsTs3ME_Gw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
});

function successLocation(position) {
    let center = [position.coords.longitude, position.coords.latitude];
    setupMap(center);
}

function errorLocation() {
    setupMap([38.757759, 8.980603]);
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: center, // starting position [lng, lat]
        zoom: 15 // starting zoom
    });

    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat(center)
        .addTo(map);

    const nav = new mapboxgl.NavigationControl();

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving'
    });


    map.addControl(nav, 'top-left');
    map.addControl(directions, 'bottom-left');
}

