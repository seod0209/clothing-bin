import { useCallback, useEffect, useRef, useState } from 'react';
import { useMarker } from './useMarker';
import useMarkers from 'src/components/search-and-map/use-markers';

interface Coords {
  lon: number; // point.x
  lat: number; // point.y
}

export function useMap() {
  const CITY_HALL_COORD = { lat: 37.5666, lon: 126.9782 };
  const mapRef = useRef<naver.maps.Map | null>(null);
  const markerRef = useRef<naver.maps.Marker | null>(null);
  const markersRef = useRef<naver.maps.Marker[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [myLocation, setMyLocation] = useState<Coords>(CITY_HALL_COORD);

  const { markers } = useMarkers();
  const { updateMarkers } = useMarker();

  // manage the map instance as 'state' to display markers in the exposed areas
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
    const initMap = () => {
      if (typeof myLocation !== 'string') {
        // find current location
        let currentPosision = [myLocation.lat, myLocation.lon];

        // map options
        const mapOptions: naver.maps.MapOptions = {
          zoom: 17,
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
          center: new naver.maps.LatLng(currentPosision[0], currentPosision[1]),
          ...mapOptions,
        });

        markerRef.current = new naver.maps.Marker({
          position: new naver.maps.LatLng(myLocation.lat, myLocation.lon),
          map: mapRef.current,
        });
      }

      setIsLoading(false);
    };
    initMap();

    const zoom = naver.maps.Event.addListener(mapRef.current, 'zoom_changed', () => {
      if (mapRef.current !== null) {
        updateMarkers(mapRef.current, [markerRef.current!, ...markersRef.current!]);
      }
    });

    const dragend = naver.maps.Event.addListener(mapRef.current, 'dragend', () => {
      if (mapRef.current !== null) {
        updateMarkers(mapRef.current, [markerRef.current!, ...markersRef.current!]);
      }
    });

    return () => {
      initMap();
      naver.maps.Event.removeListener(zoom);
      naver.maps.Event.removeListener(dragend);
    };
  }, [myLocation]);

  useEffect(() => {
    if (markers) {
      markersRef.current = markers.map((marker) => {
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

      // 검색한 주소를 중심으로 지도 움직이기, marker 위치 변경.
      mapRef.current?.setCenter(point);
      markerRef.current?.setPosition(new naver.maps.LatLng(point.y, point.x));
    });
  }, []);

  return { mapRef, isLoading, handleAddressMarker };
}
