import { useCallback, useEffect, useRef, useState } from 'react';

import useMarkers from 'src/components/search-and-map/use-markers';

import { useMarker } from './useMarker';
import { useIsMobile } from './useIsMobile';

interface Coords {
  lat: number; // point.x
  lng: number; // point.y
}

export function useMap(currAddress: string) {
  const characters = ['🐶', '🐱', '🐰', '🐻‍❄️', '🐨', '🐯', '🦁', '🐥', '🦄', '🍀'];
  const CITY_HALL_COORD = { lat: 37.5063, lng: 127.0093 };

  const isMobile = useIsMobile();

  const mapRef = useRef<naver.maps.Map | null>(null);
  const markerRef = useRef<naver.maps.Marker | null>(null);
  const markerListRef = useRef<naver.maps.Marker[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [myLocation, setMyLocation] = useState<Coords | null>(null);

  const { markers } = useMarkers(currAddress);

  const { updateMarkers } = useMarker();

  const randomNum = Math.floor(Math.random() * 10);

  useEffect(() => {
    // Check current location by using geolocation.
    // If there is no agreement with sharing location, set default location.

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          if (pos) {
            setMyLocation({
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            });
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          // Handle error (e.g., show a default location or message)
        },
      );
    }
  }, []);
  useEffect(() => {
    const initMap = () => {
      // map options
      const mapOptions: naver.maps.MapOptions = {
        zoom: isMobile ? 16 : 15,
        minZoom: 15,
        maxZoom: 19,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
        mapDataControl: false,
        scaleControl: false,
      };

      // make Naver map
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(CITY_HALL_COORD.lat, CITY_HALL_COORD.lng),
        ...mapOptions,
      });

      markerRef.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(CITY_HALL_COORD.lat, CITY_HALL_COORD.lng),
        map: mapRef.current,
        icon: {
          content: [`<div class="custom_marker" style="font-size:2.5em">${characters[randomNum]}<div/>`].join(''),
          // set marker size
          size: new naver.maps.Size(38, 58),
          // set marker location
          anchor: new naver.maps.Point(19, 58),
        },

        animation: naver.maps.Animation.BOUNCE,
      });

      // custom button html

      setIsLoading(false);
    };
    initMap();

    const zoom = naver.maps.Event.addListener(mapRef.current, 'zoom_changed', () => {
      if (mapRef.current !== null) {
        updateMarkers(mapRef.current, [markerRef.current!, ...markerListRef.current!]);
      }
    });

    const dragend = naver.maps.Event.addListener(mapRef.current, 'dragend', () => {
      if (mapRef.current !== null) {
        updateMarkers(mapRef.current, [markerRef.current!, ...markerListRef.current!]);
      }
    });

    return () => {
      naver.maps.Event.removeListener(zoom);
      naver.maps.Event.removeListener(dragend);
    };
  }, []);

  useEffect(() => {
    if (markers) {
      markerListRef.current = markers.map((marker) => {
        return new naver.maps.Marker({
          position: new naver.maps.LatLng(marker.x, marker.y),
          clickable: true,
          title: marker.address,
          map: mapRef.current!,
        });
      });
    }
  }, [markers]);

  const handleAddressMarker = useCallback((address: string) => {
    naver.maps.Service.geocode({ query: address }, function (status, response) {
      if (status === naver.maps.Service.Status.ERROR) {
        return alert('Something wrong!');
      }

      // 주소를 도로명으로 찾을 때, 건물명까지 입력하지 않으면 응답받지 못한다.
      if (response.v2.meta.totalCount === 0) {
        return alert('No results have been obtained');
      }

      // successful response
      const item = response.v2.addresses[0]; // 찾은 주소 정보
      const point = new naver.maps.Point(Number(item.x), Number(item.y)); // 지도에서 이동할 좌표

      // Move the map around the searched address, change the marker location.
      mapRef.current?.setCenter(point);
      markerRef.current?.setPosition(new naver.maps.LatLng(point.y, point.x));
    });
  }, []);

  const handleCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentLocation = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
        mapRef.current?.setCenter(currentLocation);
        markerRef.current?.setPosition(new naver.maps.LatLng(currentLocation.y, currentLocation.x));
      });
    }
  }, []);

  return { isLoading, myLocation, handleAddressMarker, handleCurrentLocation };
}
