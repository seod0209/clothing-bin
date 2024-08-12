import { useCallback } from 'react';

export function useMarker() {
  // optimize the map by removing markers that are not displayed on the map

  const showMarker = useCallback((map: naver.maps.Map, marker: naver.maps.Marker) => marker.setMap(map), []);

  const hideMarker = useCallback((marker: naver.maps.Marker) => marker.setMap(null), []);

  const updateMarkers = useCallback(
    (map: naver.maps.Map, markers: naver.maps.Marker[]) => {
      // 마커가 지도에서 벗어나 있는지를 판단하기 위해 현 재 보이는 지도 화면의 좌표 경계를 불러온다.
      const mapBounds = map.getBounds() as naver.maps.LatLngBounds;

      for (let i = 0; i < markers.length; i += 1) {
        const marker = markers[i];
        if (marker) {
          const position = marker.getPosition();

          if (mapBounds.hasLatLng(position)) {
            void showMarker(map, marker);
          } else {
            void hideMarker(marker);
          }
        }
      }
    },
    [showMarker, hideMarker],
  );

  return { updateMarkers };
}
