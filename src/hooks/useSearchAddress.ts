import { MapService } from '@/lib/map/map-service';
import { useCallback } from 'react';

export function useSearchAddress(mapService: MapService) {
  const handleAddressMarker = useCallback(
    (address: string) => {
      naver.maps.Service.geocode({ query: address }, (status, res) => {
        if (status === naver.maps.Service.Status.ERROR) {
          void alert('예기치못한 문제가 발생하였습니다. 다시 시도해주세요.');
        }

        if (res.v2.meta.totalCount === 0) {
          void alert('검색결과가 없습니다. 도로명 주소 입력시 건물주소까지 입력해주세요.');
        }

        const item = res.v2.addresses[0]; // 찾은 주소 정보
        if (item) {
          const point = new naver.maps.Point(Number(item.x), Number(item.y)); // 지도에서 이동할 좌표

          // Move the map around the searched address, change the marker location.
          mapService.setCurrentLocation(point.y, point.x);
        }
      });
    },
    [mapService],
  );

  return { handleAddressMarker };
}
