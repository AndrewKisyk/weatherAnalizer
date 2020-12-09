//TODO реалізувати отримання погоди

function loadWeather(lat, lon, callback = parseWeather){
    let apiKey = "7925cd67e40e4e3dcdc04d6a4ce8d992";
    let exlude = "current,minutely,hourly";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exlude}&appid=${apiKey}&units=metric`;

    let data = fetch(url).then(response => response.json()).then(res => callback(res));
}

function getCoords(place, callback = loadWeather){
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: place }, (results, status) => {
        if (status === "OK") {   
            console.log(results[0].geometry.location.lat()); //широта
            console.log(results[0].geometry.location.lng()); //довгота
            let coords = results[0].geometry.location;
            callback(coords.lat(), coords.lng());
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}


function parseWeather(data) {
    // var myjson = JSON.stringify(data, null, 2);
    console.log(data["daily"][0]);
}