import { useQuery } from '@tanstack/react-query';

import { MarkerData } from '@/lib/map/map-service';
import { AddressDto, SeoulGuType } from '@/app/api/type';
import searchGu from '@/utils/searchGu';

const ERROR_MESSAGES: { [key: number]: string } = {
  400: '해당 지역의 URL이 설정되어 있지 않습니다.',
  403: 'API 키가 설정되지 않았습니다. 환경 변수를 확인하세요.',
  404: '해당지역은 관련정보를 제공하고 있지 않습니다. 해당 구청에 문의 바랍니다.',
};

async function fetchMarkers(guType: SeoulGuType): Promise<MarkerData[]> {
  const res = await fetch(`/api/area/gu?type=${encodeURIComponent(guType)}`);

  if (!res.ok) {
    const message = ERROR_MESSAGES[res.status] || `Unexpected error: ${res.status}`;
    console.error(message);
    throw new Error(message);
  }

  const result: { data: AddressDto[] } = await res.json();
  return result.data.map((a) => new MarkerData(a));
}

export function useMarkers(currAddress?: string) {
  const gu: SeoulGuType | null = currAddress ? searchGu(currAddress) : 'Seocho';

  const markersQuery = useQuery({
    queryKey: [`markers-seoul-${gu}`],
    queryFn: () => (gu ? fetchMarkers(gu) : Promise.resolve([])),
    staleTime: 1000 * 60 * 2, // 2분간 데이터가 fresh 상태로 유지됨
    refetchOnWindowFocus: false, // 윈도우 포커스 시 재요청 방지
  });

  return {
    markers: markersQuery.data,
    isLoading: markersQuery.isLoading,
    error: markersQuery.error,
  };
}
