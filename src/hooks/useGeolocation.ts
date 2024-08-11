import { useEffect, useState } from 'react';

interface Coords {
  lat: number; // point.y 위도
  lng: number; // point.x 경도
}

export function useGeolocation() {
  const [location, setLocation] = useState<Coords>({ lat: 37.5063, lng: 127.0093 });
  const [address, setAddress] = useState<string>('서울특별시 서초구');

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

            // XXX: 새로고침했을때에도 기존 address가 유지되도록 해야함.
            if (!address) {
              naver.maps.Service.reverseGeocode(
                { coords: new naver.maps.LatLng(pos.coords.latitude, pos.coords.longitude) },
                (status, res) => {
                  if (status !== naver.maps.Service.Status.OK) {
                    return alert('Somthing wrong');
                  }
                  let item = res.v2.address;

                  setAddress(item.roadAddress ? item.roadAddress : item.jibunAddress);
                },
              );
            }
          }
        },
        (err) => {
          console.error('Error getting location: ', err);
        },
      );
    }
  }, []);

  return { location, address };
}
