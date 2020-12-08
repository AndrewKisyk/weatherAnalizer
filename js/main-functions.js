function processPlaces() {
    let places = document.forms.namedItem("places-list").elements;
    let placesList = []

    for (let i = 0; i < places.length; ++i) {
        placesList[i] = places[i].value;
    }

    alert(placesList)
}

function addInputField(id) {
    let next = document.getElementById("inp-"+id.slice(4));
    
    if (next !== null) {

    }
}