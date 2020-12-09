function initJs() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    document.body.appendChild(script);
}

function getInputPlaces() {
    var places = document.getElementById('inputCity').value;
    places = places.replace(/,/g, '');
    return places.split(" ");
}

//допишу ще вивід погоди і іконок
function addPacesToList(rank, name, icon, temperatureVal, humidityVal, pressureVal) {
    console.log(arguments);
    var layout = document.getElementById('placesList');
    var row = document.createElement("p");
    var numberContainer = document.createElement("div");
    var number = document.createElement("div");
    var tileContainer = document.createElement("div");
    var title = document.createElement("h4");
    var temperature = document.createElement("h4");
    var humidity = document.createElement("h4");
    var pressure = document.createElement("h4");
    var weatherIcon = document.createElement("img");

    row.style.order = rank.toString();
    row.className = "media tm-media tm-recommended-item";
    numberContainer.className = "top-number-container text-uppercase tm-font-semibold tm-sidebar-item-title";
    number.className = "number-container";
    weatherIcon.className = "ml-auto p-3 icon-container";
    temperature.className = "p-3";
    humidity.className = "p-3";
    pressure.className = "p-3";
    
    tileContainer.className = "media-body tm-media-body tm-bg-gray";
    title.className = "text-uppercase tm-font-semibold tm-sidebar-item-title";

    number.innerHTML = rank;
    title.innerHTML = name;
    temperature.innerHTML = temperatureVal + '℃';
    humidity.innerHTML = humidityVal + '%'; 
    pressure.innerHTML = pressureVal +'MB';
    weatherIcon.src =  "http://openweathermap.org/img/wn/"+icon+"@2x.png";


    tileContainer.appendChild(title);
    tileContainer.appendChild(weatherIcon);
    tileContainer.appendChild(temperature);
    tileContainer.appendChild(humidity);
    tileContainer.appendChild(pressure);
    numberContainer.appendChild(number);
    row.appendChild(numberContainer);
    row.appendChild(tileContainer);
    //row.appendChild()
    layout.appendChild(row);

}


function showTop() {
    var count = 1;
    getInputPlaces().forEach(el => {getCoords(el, addPacesToList); count++;});
}

function initOnClick() {
    document.getElementById('getResult').addEventListener('click', function () {
        showTop();
    });
}

$(document).ready(function () {
    //Initialize js
    initJs();

    // Date Picker
    const pickerFrom = datepicker('#inputCheckIn');

    const pickerTo = datepicker('#inputCheckOut');
    
    

    initOnClick();
    getCoords('Drohobych');
    // Update the current year in copyright
    $('.tm-current-year').text(new Date().getFullYear());
});

