import { useEffect, useRef } from 'react';

import { MapService } from '@/lib/map/map-service';

interface useMapInitializationProps {
  mapService: MapService;

  options: naver.maps.MapOptions;
}
export function useMapInitialization({ mapService, options }: useMapInitializationProps) {
  const mapRef = useRef<MapService | null>(null);

  useEffect(() => {
    mapService.initializeMap('map', options);
    mapRef.current = mapService;
  }, [mapService, options]);

  return mapRef;
}
