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
function addPacesToList(name) {
    var layout = document.getElementById('placesList');
    var row = document.createElement("p");
    var titleImg = document.createElement("img");
    var tileContainer = document.createElement("div");
    var title = document.createElement("h4");

    row.className = "media tm-media tm-recommended-item";
    titleImg.className = "image-recomended";
    titleImg.alt = "Image";
    tileContainer.className = "media-body tm-media-body tm-bg-gray";
    title.className = "text-uppercase tm-font-semibold tm-sidebar-item-title";

    title.innerHTML = name;

    tileContainer.appendChild(title);
    row.appendChild(tileContainer);
    //row.appendChild()
    layout.appendChild(row);

}


function showTop() {
    getInputPlaces().forEach(el => addPacesToList(el));
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


        
    getCoords('Drohobych', function(result){
    console.log(result[0].geometry.location.lat());
    });      
    


    // Update the current year in copyright
    $('.tm-current-year').text(new Date().getFullYear());
});

