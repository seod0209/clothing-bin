import { useEffect, useMemo } from 'react';

import { NaverMapService } from '@/lib/map/naver-map-service';

import { useMapInitialization } from './useMapInitialization';
import { useMarker } from './useMarker';
import { useMarkers } from './useMarkers';

export function useMap(searchedAddress: string, onMapLoaded: () => void) {
  const mapService = useMemo(() => new NaverMapService(), []);

  const { updateMarkers } = useMarker();
  const { markers } = useMarkers(searchedAddress);

  // options 객체 메모이제이션
  const options = useMemo(
    () => ({
      zoom: 16,
      minZoom: 15,
      maxZoom: 19,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
      mapDataControl: false,
      scaleControl: false,
      center: new naver.maps.LatLng(37.5063, 127.0093),
    }),
    [],
  );

  const mapRef = useMapInitialization({
    mapService,
    options,
  });

  useEffect(() => {
    if (mapService.getMap()) {
      onMapLoaded(); // Notify that the map has loaded
    }
  }, [mapService, onMapLoaded]);

  useEffect(() => {
    if (markers) {
      mapService.setMarkers(markers);
    }
  }, [markers, mapService]);

  useEffect(() => {
    console.log(searchedAddress);
    if (searchedAddress) {
      mapService.geocode(searchedAddress, (pos) => {
        mapService.setCurrentLocation(pos.lat, pos.lng);
      });
    }
  }, [searchedAddress, mapService]);

  useEffect(() => {
    const map = mapService.getMap();
    if (!map) return;

    const zoom = mapService.addZoomListener(() => {
      if (mapRef.current) {
        void updateMarkers(map, mapService.getMarkers());
      }
    });

    const drag = mapService.addDragendListener(() => {
      if (mapRef.current) {
        void updateMarkers(map, mapService.getMarkers());
      }
    });
    return () => {
      mapService.removeListener(zoom);
      mapService.removeListener(drag);
    };
  }, [mapRef, mapService, updateMarkers]);

  return { mapRef };
}
