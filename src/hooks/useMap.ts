import { useEffect, useMemo } from 'react';

import { NaverMapService } from '@/lib/map/naver-map-service';

import { useIsMobile } from './useIsMobile';
import { useMapInitialization } from './useMapInitialization';
import { useMarker } from './useMarker';
import { useMarkers } from './useMarkers';

export function useMap(searchedAddress: string) {
  const mapService = useMemo(() => new NaverMapService(), []);

  const isMobile = useIsMobile();

  const { updateMarkers } = useMarker();
  const { markers } = useMarkers(searchedAddress);

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
      center: new naver.maps.LatLng(37.5063, 127.0093),
    },
  });

  useEffect(() => {
    if (markers) {
      mapService.setMarkers(markers);
    }
  }, [markers, mapService]);

  useEffect(() => {
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
