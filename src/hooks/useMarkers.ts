import { useQuery } from '@tanstack/react-query';
import { MarkerData } from '@/lib/map/map-service';
import searchGu from '@/utils/searchGu';
import { AddressDto, SeoulGuType } from '@/app/api/type';
import { useCallback } from 'react';

export function useMarkers(currAddress?: string) {
  const gu: SeoulGuType | null = currAddress ? searchGu(currAddress) : 'Seocho';

  const fetchMarkers = useCallback(async (gu: SeoulGuType) => {
    try {
      const res = await fetch(`/api/area/gu?type=${encodeURIComponent(gu)}`);

      // 응답 상태 코드 확인
      if (!res.ok) {
        switch (res.status) {
          case 400:
            alert(`해당 지역(${gu})의 URL이 설정되어 있지 않습니다.`);
            throw new Error(`HTTP error! status: ${res.status}`);
          case 403:
            alert('API 키가 설정되지 않았습니다. 환경 변수를 확인하세요.');
            throw new Error(`HTTP error! status: ${res.status}`);
          case 404:
            alert('해당지역은 관련정보를 제공하고 있지 않습니다. 해당 구청에 문의 바랍니다.');
            throw new Error(`HTTP error! status: ${res.status}`);
          default:
            throw new Error(`HTTP error! status: ${res.status}`);
        }
      }

      const result: { data: AddressDto[] } = await res.json();

      const markers = result.data.map((a) => new MarkerData(a));
      return markers;
    } catch (err: any) {
      console.error('Fetch error:', err);
      return [];
    }
  }, []);

  const markersQuery = useQuery({
    queryKey: [`markers-seoul-${gu}`], // 단일 키를 사용하여 쿼리의 변경 최소화
    queryFn: () => gu && fetchMarkers(gu),
    staleTime: 1000 * 60 * 2, // 5분간 데이터가 fresh 상태로 유지됨
  });

  return { markers: markersQuery.data, isLoading: markersQuery.isLoading, error: markersQuery.error };
}
