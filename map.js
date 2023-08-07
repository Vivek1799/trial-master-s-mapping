window.mapboxgl.accessToken = 'pk.eyJ1Ijoidml2ZWsxNzk5IiwiYSI6ImNsa25nYnhuYjFwYzgza3A0Z3V5eGJxZzcifQ.WnGURd6SXkFv0sBM0uzQ1Q';

window.map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-41.6032207, 60.47202399999999], // Greenland approximate center
    zoom: 4,
    antialias: true, // This makes the map look smoother and cleaner
    bearing: -17.6, 
    pitch: 45,
});

window.mines = [
    { 
        // name: "Mine1", 
        coordinates: [-45.023, 72.343], 
        description: "From compiled satellite measurements over time, researchers have estimated that Greenland has lost around 116 billion tons of ice per year since 1990. This has fueled unexplored opportunities for rare earth mining, as investors are looking to capitalize on the melting ice. ",
        zoom: 2, 
        bearing: 5,
        pitch: 2
    },
    { 
        // name: "Mine2", 
        coordinates: [-45.957, 60.974], 
        description: "Kvanefjeld mine in southern Greenland contains substantial uranium and rare earth deposits. Operated by Greenland Minerals, it has prompted debate over uranium's radioactive hazards. Nearby Narsaq residents fear the mine could harm fishing and sheep grazing. Currrently, the company is in a legal battle with the Greenlandic government over the company's right to mine the metals.",
        zoom: 10, 
        bearing: 0,
        pitch: 0,
        subMarkers: [
            {
                name: "Zone 3",


                coordinates: [-45.870820, 60.970970],
                description: "This is a description for SubMarker1",
            },
            {
                name: "Zone 2",
                coordinates: [-45.918200, 60.940600],
                description: "This is a description for SubMarker2",
            },
            {
                name: "Kvanefjeld Mine",
                coordinates: [-45.998900, 60.972670],
                description: "This is a description for SubMarker3",
            },
            {   
                name: "Narsaq Town",
                coordinates: [-46.049550, 60.913660],
                description: "This is a description for SubMarker4",
            },
        ]
    },
    { 
        // name: "Mine2b", 
        coordinates: [-46.049550, 60.913660], 
        description: "The mine is located just 10km from the town of Narsaq. Initial plan included to store the tailings in an artificial lake, but this was later proposed to be shipped to China. However, any type of mining might result in the contamination of the surrounding environment.",
        zoom: 10.5, 
        bearing: 45,
        pitch: 17
    },
    { 
        // name: "Mine3", 
        coordinates: [-45.841850, 60.866580], 
        description: "Just down south, the Kringlerne mine is operated by Tanbreez Mining Greenland. Deemed safe from radioactive hazards, geologists predict could become a major rare earth source. The company announced that it will ship its ore by 2024. ",
        zoom: 10.5, 
        bearing: 9,
        pitch: 10 
    },
    { 
        // name: "Mine3b", 
        coordinates: [-45.841850, 60.866580], 
        description: "The remote Kringlerne mine on the Nuussuaq Peninsula has a key advantage in its proximity to deep water shipping channels. Unlike many mining projects that require long overland transport, Kringlerne sits only a few kilometers fromdeep fjords and bays opening directly into the Labrador Sea. Operators Tanbreez plan to transport the rare earth ores directly from the mine site by barge out to ocean-going vessels. This will allow cost-effective shipping to refineries and processors abroad.",
        zoom: 7.5, 
        bearing: 50,
        pitch: 10 
    },

    { 
        // name: "Mine4", 
        coordinates: [-51.271000, 66.533000], 
        description: "On Greenland's southwest coast, the Sarfartoq carbonatite complex contains a diversity of rare earth mineral deposits that have drawn mining interest. Australian firm Hudson Resources is developing a neodymium mine at the site, aimed at extracting rare earths useful for powerful magnets in renewable energy technologies. Situated near fjords that feed into the Labrador Sea, Sarfartoq will require strict controls to prevent runoff or leakage from mining waste during operations. As one of the more advanced rare earth mining projects in Greenland, its success or failure in balancing economic gains and environmental protection will shape the sector's future. Nearby communities like Sarfannguit will be monitoring the Sarfartoq mine closely as it moves from exploration to production to export shipping through their fishing grounds.  ",
        zoom: 9, 
        bearing: 9,
        pitch: 10 
    },

    { 
        // name: "Mine5", 
        coordinates: [-54.501068, 70.091404], 
        description: "The remote Kummelaseerneq fjord system near Maniitsoq has attracted interest from Kobold Metals, backed by billionaires including Bill Gates. Early prospecting indicates potential for nickel, copper and platinum deposits in this undeveloped area along Greenland's west coast. Local Greenlanders have raised concerns about potential impacts on fisheries and tourism from industrializing this area, which is known for its scenic beauty and natural resources. Kobold has emphasized sustainable practices but acknowledges mining would inevitably alter the landscape. With further exploration needed, the project's supporters point to job creation while critics urge caution in opening the region to mining without thorough environmental review.",
        zoom: 7, 
        bearing: 9,
        pitch: 10 
    },

    { 
        // name: "Mine6", 
        coordinates: [-24.270750, 71.954230], 
        description: "Finally, north of the Arctic Circle, the Malmbjerg molybdenum deposit has been studied as a large potential new source for Molybdenum. Located inland near Mesters Vig, environmental assessments found limited biodiversity impacts, but financial viability remains uncertain. As Greenland weighs each mining proposal, thorough reviews and local engagement will shape decisions on opening its mineral wealth.",
        zoom: 9, 
        bearing: 9,
        pitch: 10 
    },

    { 
        name: "Mine7", 
        coordinates: [-42.039, 69.911], 
        description: "As Greenland seeks to expand its economy beyond fishing into mining, it faces challenging decisions about opening its vast and pristine interior to industrial development. The nation's wealth of rare earth elements could provide a new revenue stream if tapped carefully and sustainably. Each potential mining site brings a mix of economic opportunity and ecological risk that must be weighed thoroughly. ",
        zoom: 2, 
        bearing: 9,
        pitch: 10 
    }, 
];

// Add controls to the map
map.addControl(new mapboxgl.NavigationControl()); 

// Add scale to the map
var scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
});
map.addControl(scale);

// Add geolocation control to the map
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));


window.mines.forEach(function(mine) {
    if(mine.subMarkers) {
        mine.subMarkers.forEach(function(subMarker) {
            new mapboxgl.Marker({ color: 'orange' }) // Changed color here
            .setLngLat(subMarker.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('<h3 style="color: white;">' + subMarker.name + '</h3><p>' + subMarker.description + '</p>'))
            .addTo(window.map);
        });
    } else {
        new mapboxgl.Marker({ color: 'white' }) // And here
        .setLngLat(mine.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('<h3 style="color: white;"> Description</h3><p>' + mine.description + '</p>'))
        .addTo(window.map);
    }
});



window.map.on('load', function () {
    window.mines.forEach(function(mine) {
        if(mine.subMarkers) {
            mine.subMarkers.forEach(function(subMarker, index) {
                // Add a data source for every marker
                window.map.addSource(`source-${mine.name}-${index}`, {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'properties': {
                            'description': subMarker.description,
                            'icon': 'monument',
                            'title': subMarker.name
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': subMarker.coordinates
                        }
                    }
                });
                
                // Add layer for marker
                window.map.addLayer({
                    'id': `marker-${mine.name}-${index}`,
                    'type': 'symbol',
                    'source': `source-${mine.name}-${index}`,
                    'layout': {
                        'icon-image': '{icon}-15',
                        'text-field': ['get', 'title'],
                        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                        'text-offset': [0, 0.6],
                        'text-anchor': 'top'
                    }
                });
            });
        }
    });
});






window.clusters = [
    { // Cluster 1
        coordinates: [
            [-45.764, 72.855], // Top left corner
            [-44.764, 72.855], // Top right corner
            [-44.764, 71.855], // Bottom right corner
            [-45.764, 71.855]  // Bottom left corner
        ]
    },
    { // Cluster 2
        coordinates: [
            [-46.764, 73.855], // Top left corner
            [-45.764, 73.855], // Top right corner
            [-45.764, 72.855], // Bottom right corner
            [-46.764, 72.855]  // Bottom left corner
        ]
    }
]

//first line 
window.map.on('load', function () {
    window.clusters.forEach(function(cluster, index) {
        window.map.addSource(`cluster-${index}`, {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [cluster.coordinates]
                }
            }
        });

        window.map.addLayer({
            'id': `cluster-${index}`,
            'type': 'fill',
            'source': `cluster-${index}`,
            'layout': {},
            'paint': {
                'fill-color': 'white', // Change the color of the squares here
                'fill-opacity': 1
            }
        });
    });
});




console.log('map.js loaded');
console.log('map:', window.map);
console.log('mines:', window.mines);

window.map.on('load', function () {
    window.map.addSource('line', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [-45.841850, 60.866580], // coordinates of kringlne mine
                    [-46.049550, 60.913660]  // coordinates of Narsaq town
                ]
            }
        }
    });

    window.map.addLayer({
        'id': 'line-layer',
        'type': 'line',
        'source': 'line',
        'layout': {},
        'paint': {
            'line-color': 'white',
            'line-width': 5,
            'line-dasharray': [1, 1] ,// Change the dash pattern here
            'line-opacity': 0.7,
        }
    });

    // Add a GeoJSON source containing the start and end coordinates of the line.
window.map.addSource('route', {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
            'type': 'LineString',
            'coordinates': [
                [-45.998900, 60.972670], // Coordinates for Kringlerne mine
                [-46.049550, 60.913660]  // Coordinates for Narsaq town
            ]
        }
    }
});

// Add a new layer to render the line from the source.
window.map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {},
    'paint': {
        'line-color': 'white',
        'line-width': 5,
        'line-dasharray': [1, 1] ,// Change the dash pattern here
        'line-opacity': 0.7,
    }
});

});



