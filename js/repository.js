//TODO реалізувати отримання погоди

function loadWeather(lat, lon, output, place, callback = parseWeather){
    let apiKey = "7925cd67e40e4e3dcdc04d6a4ce8d992";
    let exlude = "current,minutely,hourly";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exlude}&appid=${apiKey}&units=metric`;

    let data = fetch(url).then(response => response.json()).then(res => callback(res, output, place));
}

function getCoords(place, output=addPacesToList, callback = loadWeather){
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: place }, (results, status) => {
        if (status === "OK") {   
            console.log(results[0].geometry.location.lat()); //широта
            console.log(results[0].geometry.location.lng()); //довгота
            let coords = results[0].geometry.location;
            callback(coords.lat(), coords.lng(), output, place);
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}


function parseWeather(data, output, name) {
    // var myjson = JSON.stringify(data["daily"], null, 2);
    // console.log(myjson);
    days = data["daily"]
    day = JSON.stringify(data["daily"], null, 2);
    console.log(day.pressure)
    let fomula = (feels_like, rain, snow, wind_speed, clouds) => (1000-((Math.abs(feels_like-22) + Math.sqrt(100*((rain + snow))/24) + Math.pow(wind_speed/12, 2))*10 + clouds));

    // get ranks for current place
    // weather = [];
    ranks = [];
    for (let day = 0; day < 7; day++) {
        ranks[day] = Math.floor(fomula(
            days[day]["feels_like"]["day"],
            days[day]["rain"] ? days[day]["rain"] : 0,
            days[day]["snow"] ? days[day]["snow"] : 0,
            days[day]["wind_speed"],
            days[day]["clouds"]));

    output(ranks[0], name, days[0], days[0]["temp"], days[0]["humidity"], days["pressure"]);
        // weather[day] = [
        //     days[day]["feels_like"]["day"],
        //     days[day]["rain"] ? days[day]["rain"] : 0,
        //     days[day]["snow"] ? days[day]["snow"] : 0,
        //     days[day]["wind_speed"],
        //     days[day]["clouds"]
        // ]
    }

    // console.log("feels_like | rain | snow | wind_speed | clouds");
    // for (let day = 0; day < 7; day++ ) {
    //     console.log(ranks[day], weather[day]);
    // }

    // get already ranked places


    // display in different order
    
}