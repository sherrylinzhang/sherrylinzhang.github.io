mapboxgl.accessToken = 'pk.eyJ1Ijoic2hlcnJ5bGluemhhbmciLCJhIjoiY2pnNnhlcGNzMTI3eDMzczAxZ3Z0dmp2dSJ9.FKDQhS5QEQ-L1WIOhvzvfQ';
var map = new mapboxgl.Map({
    container: 'mymapid', // container id
    style: 'mapbox://styles/sherrylinzhang/cjgh3j3ir00022ro4pkak3drg', 
    // stylesheet location
    pitch: 55,
    center: [98.987252,18.799212],
    zoom: 12.53 // starting zoom
    //image overlay

});
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

//pop up 
map.on('load', function () {
    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                //images that pop up
                "features": 
                [{
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img1.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.999969, 18.788139]
                    }
                }, //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img2.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [99.047241, 18.680073]
                    }
                },
            //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img3.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.976500, 18.750500]
                    }
                },
            //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img4.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.948197, 18.747572]
                    }
                },
                 //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img6.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.990936, 18.765913]
                    }
                },
                 //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img7.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.973032, 18.761621 ]
                    }
                },
                 //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img5.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [99.037961, 18.766377 ]
                    }
                },
                 //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img8.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.990936, 18.765913]
                    }
                },
                 //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img9.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.995034, 18.766056]
                    }
                },
                 //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img10.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.995034, 18.766056]
                    }
                },
                 //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img11.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.995925, 18.754066]
                    }
                },
                 //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img12.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.951454, 18.764938]
                    }
                },
                 //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img13.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.997811, 18.752072]
                    }
                },
                 //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img14.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.987761, 18.787597 ]
                    }
                },
            //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img15.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.987556, 18.787367]
                    }
                },
                     //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img16.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.999969, 18.788139]
                    }
                }, //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img17.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.987096, 18.789782]
                    }
                }, //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img18.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.990936, 18.788992]
                    }
                }, //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img19.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.990936, 18.788992]
                    }
                }, //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img20.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [99.000451, 18.790366]
                    }
                }, //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img21.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.979434, 18.796874]
                    }
                }, //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img22.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.993802, 18.792933]
                    }
                }, //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img23.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.992309, 18.795167]
                    }
                }, //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img24.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [ 98.986612, 18.786798]
                    }
                }, //image 
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<div id='pic'><img src='img/img25.jpg'></div>",
                        "icon": "attraction"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [98.982181, 18.797930]
                    }
                
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });
});