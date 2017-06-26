$.get('http://swapi.co/api/planets').done(function(response){
    var arrayOfItems = response.results;
    console.log(arrayOfItems);
    var domString = "<tr>";
    var listOfTitles = ["name", "diameter", "climate", "terrain", "surface_water", "population"];

    for (var x=0; x < listOfTitles.length; x++) {
        domString += "<th>";
        domString += listOfTitles[x];
        domString += "</th>";
    }
    console.log(domString)
    for (var i=0; i < arrayOfItems.length; i++) {
        domString += "<tr>";

        for (var j=0; j < listOfTitles.length; j++) {
            key = listOfTitles[j];
            domString += "<td>";
            domString += arrayOfItems[i][key]; //.key doesn't work as a variable
            domString += "</td>";
        }
        domString += "</tr>";
    }
    console.log(domString);
    $( "#my-data" ).append(domString);
});
