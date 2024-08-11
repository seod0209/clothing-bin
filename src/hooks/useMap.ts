import { useCallback, useEffect } from 'react';

import { NaverMapService } from '@/lib/map/naver-map-service';

import { useIsMobile } from './useIsMobile';
import { useGeolocation } from './useGeolocation';
import { useMapInitialization } from './useMapInitialization';
import { useMarker } from './useMarker';
import useMarkers from './useMarkers';

export function useMap(currAddress?: string) {
  const mapService = new NaverMapService();

  const isMobile = useIsMobile();
  const { lat, lng } = useGeolocation() || { lat: 37.5063, lng: 127.0093 };
  const { updateMarkers } = useMarker();

  const mapRef = useMapInitialization({
    mapService,
    options: {
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
    },
  });

  useEffect(() => {
    if (lat && lng) {
      mapService.setCurrentLocation(lat, lng);
    }
  }, [lat, lng, mapService]);

  useEffect(() => {
    const map = mapService.getMap();
    if (!map) return;

    const zoom = mapService.addZoomListener(() => {
      if (mapRef.current) {
        updateMarkers(map, mapService.getMarkers());
      }
    });

    const drag = mapService.addDragendListener(() => {
      if (mapRef.current) {
        updateMarkers(map, mapService.getMarkers());
      }
    });
    return () => {
      mapService.removeListener(zoom);
      mapService.removeListener(drag);
    };
  }, [mapService, updateMarkers]);

  useEffect(() => {
    if (currAddress) {
      const { markers } = useMarkers(currAddress);
      if (markers) {
        mapService.setMarkers(markers);
      }

      mapService.geocode(currAddress, (pos) => {
        mapService.setCurrentLocation(pos.lat, pos.lng);
      });
    }
  }, [currAddress, mapService]);

  const handleCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        mapService.setCurrentLocation(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [mapService]);

  return { mapRef, handleCurrentLocation };
}
