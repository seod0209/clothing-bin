import { MapService, MarkerData } from './map-service';

const charactors = ['🐶', '🐱', '🐰', '🐻‍❄️', '🐨', '🐯', '🦁', '🐥', '🦄', '🍀'];

export class NaverMapService implements MapService {
  private map: naver.maps.Map | null = null;

  private currMarker: naver.maps.Marker | null = null;

  private markers: naver.maps.Marker[] = [];

  private markerCharacter: string = '';

  initializeMap(containerId: string, options: naver.maps.MapOptions): void {
    this.map = new naver.maps.Map(containerId, options);

    this.markerCharacter = charactors[Math.floor(Math.random() * charactors.length)];
  }

  setCenter(lat: number, lng: number): void {
    if (this.map) {
      this.map.setCenter(new naver.maps.LatLng(lat, lng));
    }
  }

  setMarker(lat: number, lng: number): void {
    if (this.map) {
      if (this.currMarker) {
        // remove existing marker
        this.currMarker.setMap(null);
      }

      this.currMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lng),
        map: this.map,
        icon: {
          content: `<div class="custom_marker" style="font-size:2.5em">${this.markerCharacter}<div/>`,

          size: new naver.maps.Size(38, 58), // set marker size

          anchor: new naver.maps.Point(19, 58), // set marker location
        },
        animation: naver.maps.Animation.BOUNCE,
      });
    }
  }

  setMarkers(markerData: MarkerData[]) {
    // clear previous markers
    this.markers.forEach((marker) => marker.setMap(null));
    this.markers = [];

    this.markers = markerData.map((data) => {
      return new naver.maps.Marker({
        position: new naver.maps.LatLng(data.lat, data.lng),
        clickable: true,
        title: data.address,
        map: this.map!,
      });
    });
  }

  setCurrentLocation(lat: number, lng: number) {
    this.setCenter(lat, lng);
    this.setMarker(lat, lng);
  }

  getMap() {
    return this.map;
  }

  getMarkers() {
    return this.markers;
  }

  geocode(address: string, callback: (pos: { lat: number; lng: number }) => void) {
    naver.maps.Service.geocode({ query: address }, (status, res) => {
      if (status === naver.maps.Service.Status.ERROR || res.v2.meta.totalCount) {
        console.error('Error in geocode:', status);
        return;
      }

      const item = res.v2.addresses[0];
      const lat = Number(item.y);
      const lng = Number(item.x);

      callback({ lat, lng });
    });
  }

  addZoomListener(callback: () => void): void {
    if (this.map) {
      naver.maps.Event.addListener(this.map, 'zoom_changed', callback);
    }
  }

  addDragendListener(callback: () => void): void {
    if (this.map) {
      naver.maps.Event.addListener(this.map, 'dragend', callback);
    }
  }

  removeListener(listener: any): void {
    naver.maps.Event.removeListener(listener);
  }
}
