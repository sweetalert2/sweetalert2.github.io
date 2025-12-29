import Swal from 'sweetalert2'
import './styles.css'

// Store the current marker position
let currentPosition = { lat: 37.7749, lng: -122.4194 }

// Initialize map when modal opens
function initMap(element: HTMLElement) {
  const map = new google.maps.Map(element, {
    center: currentPosition,
    zoom: 12,
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: false,
  })

  // Add a marker
  const marker = new google.maps.Marker({
    position: currentPosition,
    map: map,
    title: 'San Francisco',
  })

  return { map, marker }
}

Swal.fire({
  title: 'Select Location',
  html: '<div id="map"></div>',
  width: 800,
  showConfirmButton: true,
  confirmButtonText: 'Select Location',
  didOpen: () => {
    const mapElement = document.getElementById('map') as HTMLElement
    const { map, marker } = initMap(mapElement)

    // Allow users to click on the map to change marker position
    google.maps.event.addListener(map, 'click', (event: google.maps.MapMouseEvent) => {
      if (event.latLng) {
        marker.setPosition(event.latLng)
        currentPosition = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        }
      }
    })
  },
  preConfirm: () => {
    return currentPosition
  },
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: 'Location Selected!',
      text: `Latitude: ${result.value.lat}, Longitude: ${result.value.lng}`,
      icon: 'success',
    })
  }
})

