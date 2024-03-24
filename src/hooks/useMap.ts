import { useEffect, useState } from 'react';

interface Coords {
  lat: number;
  lon: number;
}

export function useMap() {
  const CITY_HALL_COORD = { lat: 37.5666, lon: 126.9782 };

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [myLocation, setMyLocation] = useState<Coords>(CITY_HALL_COORD);
  // manage the map instance as 'state' to display markers in the exposed areas
  const [newMap, setNewMap] = useState<naver.maps.Map | null>(null);

  useEffect(() => {
    // Check current location by using geolocation.
    // If there is no agreement with sharing location, set default location.

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        if (pos) {
          setMyLocation({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          });
        }
      });
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== 'string') {
      // find current location
      let currentPosision = [myLocation.lat, myLocation.lon];

      // map options
      const mapOptions: naver.maps.MapOptions = {
        zoom: 13,
        minZoom: 13,
        maxZoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
        mapDataControl: false,
        scaleControl: false,
      };

      // make Naver map
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosision[0], currentPosision[1]),
        ...mapOptions,
      });

      //  mapRef.current = map;

      setNewMap(map);
      setIsLoading(false);
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(myLocation.lat, myLocation.lon),
        map,
      });
    }
  }, [myLocation]);

  return { isLoading };
}
