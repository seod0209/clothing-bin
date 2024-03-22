import { useEffect, useRef, useState } from 'react';

export function useMap() {
  // const mapRef = useRef<HTMLElement | null | any>(null);

  const [myLocation, setMyLocation] = useState<{ lat: number; lon: number } | string>('');
  // manage the map instance as 'state' to display markers in the exposed areas
  const [newMap, setNewMap] = useState<naver.maps.Map | null>(null);

  useEffect(() => {
    // Check current location by using geolocation.
    // If there is no agreement with sharing location, set default location.

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setMyLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      });
    } else {
      window.alert('현재 위치를 알 수 없어 기본위치로 지정합니다.');
      setMyLocation({ lat: 37.4862618, lon: 127.1222903 });
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

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(myLocation.lat, myLocation.lon),
        map,
      });
    }
  }, [myLocation]);

  return { myLocation, newMap };
}
