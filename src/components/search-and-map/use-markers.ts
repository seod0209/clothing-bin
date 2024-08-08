import { fetchArea } from '@/app/api/go-data-api';
import { useQuery } from '@tanstack/react-query';
import { MarkerData } from './type';
import searchGu from '@/utils/searchGu';
import { AddressDto, SeoulGuType } from '@/app/api/type';
import { useCallback } from 'react';

const useMarkers = (currAddress?: string) => {
  const gu: SeoulGuType | null = currAddress ? searchGu(currAddress) : 'Seocho';

  const fetchMarkers = useCallback(async (gu: SeoulGuType) => {
    try {
      const res = await fetch(`/api/area/gu?type=${encodeURIComponent(gu)}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await res.json();

      const markers = result.data.map((a) => new MarkerData(a));
      return markers;
    } catch (err: any) {
      console.error(err);
      return [];
    }
  }, []);

  const markersQuery = useQuery({
    queryKey: [`markers-seoul-${gu}`], // 단일 키를 사용하여 쿼리의 변경 최소화
    queryFn: () => gu && fetchMarkers(gu),
    staleTime: 1000 * 60 * 2, // 5분간 데이터가 fresh 상태로 유지됨
  });

  return { markers: markersQuery.data, isLoading: markersQuery.isLoading, error: markersQuery.error };
};

export default useMarkers;
