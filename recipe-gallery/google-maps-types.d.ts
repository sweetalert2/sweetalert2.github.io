// TypeScript declarations for Google Maps API
declare namespace google.maps {
  interface MapOptions {
    center: { lat: number; lng: number }
    zoom: number
    mapTypeControl?: boolean
    streetViewControl?: boolean
    fullscreenControl?: boolean
  }

  interface MarkerOptions {
    position: { lat: number; lng: number }
    map: Map
    title?: string
  }

  class Map {
    constructor(element: HTMLElement, options: MapOptions)
  }

  class Marker {
    constructor(options: MarkerOptions)
    setPosition(position: { lat: number; lng: number } | LatLng | null): void
  }

  interface LatLng {
    lat(): number
    lng(): number
  }

  interface MapMouseEvent {
    latLng: LatLng | null
  }

  namespace event {
    function addListener(
      instance: Map | Marker,
      eventName: string,
      handler: (event: MapMouseEvent) => void
    ): void
  }
}
