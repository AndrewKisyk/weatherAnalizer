function initJs() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    document.body.appendChild(script);
}

function setResMessage(){
     document.getElementById('resMessage').innerHTML = "The list for you is prepared!";
}
function getInputPlaces() {
    var input = document.getElementById('inputCity');
    var places = input.value;
    places = places.replace(/,/g, '');
    input.value = "";

    return places.split(" ");
}

//допишу ще вивід погоди і іконок
function addPacesToList(rank, name, icon, temperatureVal, humidityVal, pressureVal, day) {
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
    if (layout.dataset.currentDay !== day.toString()) {
        row.hidden = true;
    }
    row.dataset.day = day;
    row.className = "media tm-media tm-recommended-item";
    numberContainer.className = "top-number-container text-uppercase tm-font-semibold tm-sidebar-item-title";
    number.className = "number-container tm-sidebar-item-title";

    weatherIcon.className = "ml-auto p-3 icon-container tm-sidebar-item-title";
    temperature.className = "p-2 tm-sidebar-item-title";
    humidity.className = "p-2 tm-sidebar-item-title";
    pressure.className = "p-2 tm-sidebar-item-title";
    
    tileContainer.className = "media-body tm-media-body tm-bg-gray ";
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
    setResMessage();
}

function initOnClick() {
    document.getElementById('getResult').addEventListener('click', function () {
        showTop();
    });
}

function setUpDateLabels() {
    var today = new Date();
    //String(today.getDate()).padStart(2, '0');
    var dd =today.getDate();
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    document.getElementById('first_l').innerHTML = String(dd+0).padStart(2, '0') + '/' +mm;
    document.getElementById('second_l').innerHTML = String(dd+1).padStart(2, '0') + '/' +mm;
    document.getElementById('third_l').innerHTML = String(dd+2).padStart(2, '0') + '/' +mm;
    document.getElementById('fourth_l').innerHTML = String(dd+3).padStart(2, '0') + '/' +mm;
    document.getElementById('fiveth_l').innerHTML = String(dd+4).padStart(2, '0') + '/' +mm;
    document.getElementById('sixth_l').innerHTML = String(dd+5).padStart(2, '0') + '/' +mm;
    document.getElementById('seventh_l').innerHTML = String(dd+6).padStart(2, '0') + '/' +mm;
}

$(document).ready(function () {
    //Initialize js
    initJs();

    // Date Picker
    const pickerFrom = datepicker('#inputCheckIn');

    const pickerTo = datepicker('#inputCheckOut');
    setUpDateLabels();
    initOnClick();
    
    // Update the current year in copyright
    $('.tm-current-year').text(new Date().getFullYear());
});

function disDay(day) {
    let ls = document.getElementById('placesList');
    let layout = ls.children;

    ls.dataset.currentDay = day.toString();
    
    for (let i = 0; i < layout.length; ++i) {
        if (layout[i].dataset.day === day.toString()) {
            layout[i].hidden = false;
        }
        else {
            layout[i].hidden = true;
        }
    }
}