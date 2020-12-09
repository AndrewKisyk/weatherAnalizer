//TODO реалізувати отримання погоди

function loadWeather(lat, lon){
    let apiKey = "7925cd67e40e4e3dcdc04d6a4ce8d992";
    let exlude = "current,minutely,hourly";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exlude}&appid=${apiKey}&units=metric`;

    console.log(data);
    return data;
}

function getCoords(place){
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: place }, (results, status) => {
        if (status === "OK") {   
            console.log(results[0].geometry.location.lat()); //широта
            console.log(results[0].geometry.location.lng()); //довгота
            var coords = results[0].geometry.location;
        } else {
            alert("Geocode was not successful for the following reason: " + status);
            var coords = null;
        }
    });

    return coords;
}

function parseWeather(place) {
    let coords = getCoords(place);

    let data = loadWeather(coords.lat(), coords.lng());
    
    return data;
}