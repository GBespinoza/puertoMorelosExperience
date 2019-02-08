
   function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: {lat: 21.1650015, lng: -86.8234055},
            styles: [
            {elementType: 'geometry', stylers: [{color: '#c4c4c4'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#9b9b9b'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#5f5f5f'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6a6a6a'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#797878'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#d8d8d8'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6a6a6a'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#e5e5e5'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#d6d6d6'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#cbcbcb'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#e0e0e0'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#bcbcbc'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#a3a3a3'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#bcbec1'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#4f4f4f'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#989898'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#5f5f5f'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#5f5f5f'}]
            }
          ]
        });

        var image = 'http://hostyourgeek.com/ptoMorelos/img/contacto/Googmp.svg';
        var beachMarker = new google.maps.Marker({
          position: {lat: 21.1650015, lng: -86.8234055},
          map: map,
          icon: image
        });
      }