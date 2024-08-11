import { useEffect, useState } from 'react';

interface Coords {
  lat: number; // point.y 위도
  lng: number; // point.x 경도
}

export function useGeolocation() {
  const [location, setLocation] = useState<Coords | null>(null);

  // Check current location by using geolocation.
  // If there is no agreement with sharing location, set default location.

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          if (pos) {
            setLocation({
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            });
          }
        },
        (err) => {
          console.error('Error getting location: ', err);
        },
      );
    }
  }, []);

  return location;
}
