export interface MapService {
  initializeMap(containerId: string, options: any): void;

  setCenter(lat: number, lng: number): void;

  setMarker(lat: number, lng: number, charactor: string): void;

  setMarkers(
    markerData: {
      lat: number;
      lng: number;
      address: string;
    }[],
  ): void;

  setCurrentLocation(lat: number, lng: number): void;

  getMap(): void;

  getMarkers(): void;

  geocode(address: string, callback: (pos: { lat: number; lng: number }) => void): void;

  addZoomListener(callback: () => void): void;

  addDragendListener(callback: () => void): void;

  removeListener(listener: any): void;
}
