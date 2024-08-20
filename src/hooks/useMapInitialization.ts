import { useEffect, useRef } from 'react';

import { MapService } from '@/lib/map/map-service';

interface useMapInitializationProps {
  mapService: MapService;

  options: naver.maps.MapOptions;
}
export function useMapInitialization({ mapService, options }: useMapInitializationProps) {
  const mapRef = useRef<MapService | null>(null);

  useEffect(() => {
    if (mapRef.current === null) {
      mapService.initializeMap('map', options);
      mapRef.current = mapService;
    }

    return () => {
      // Clean up if necessary
      if (mapRef.current) {
        mapRef.current = null;
      }
    };
  }, [mapService, options]);

  return mapRef;
}
