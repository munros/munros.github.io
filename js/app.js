app = {

    showMap: function(mapId) {
        return;
        var mymap = L.map(mapId).setView([56.666933, -4.100229], 7);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZ3JhaGFtbSIsImEiOiJjamgyY2oxM2IwMzE5MzNsZm9hbHBlYmN5In0.JGqACEauh8OvrXNRm9tKnA'
        }).addTo(mymap);        
    },

    showList: function(listId) {
        var table = document.createElement('table');
        table.innerHTML =
            "<thead>" +
            "    <tr>" +
            "        <th>Number</th>" +
            "        <th>Name</th>" +
            "        <th>Region</th>" +
            "        <th>Meaning</th>" +
            "        <th>Height (m)</th>" +
            "        <th>Climbed</th>" +
            "        <th>Date</th>" +
            "    </tr>" +
            "</thead>";
            "<tbody>";

        for (var i = 0; i < munros.length; i++) {
            var munro = munros[i];
            table.innerHTML +=
            "    <tr>" +
            "        <td>" + munro.number + "</td>" +
            "        <td>" + munro.name + "</td>" +
            "        <td>" + munro.regionNumber + " - " + munro.regionName + "</td>" +
            "        <td>" + munro.meaning + "</td>" +
            "        <td>" + munro.height + "</td>" +
            "        <td>" + (munro.climbed ? "Yes" : "No") + "</td>" +
            "        <td>" + (munro.date === null ? "" : munro.date) + "</td>" +
            "    </tr>";
        }

        table.innerHTML += "</tbody>"

        document.getElementById(listId).appendChild(table);
    }
}