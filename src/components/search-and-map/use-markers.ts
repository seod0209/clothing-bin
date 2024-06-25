import { fetchArea } from '@/app/api/go-data-api';
import { useQuery } from '@tanstack/react-query';
import { MarkerData } from './type';
import searchGu from '@/utils/searchGu';
import { SeoulGuType } from '@/app/api/type';

const useMarkers = (currAddress?: string) => {
  const gu: SeoulGuType | null = currAddress ? searchGu(currAddress) : 'Seocho';

  // fetchMarkers 함수 정의
  async function fetchMarkers(gu: SeoulGuType) {
    try {
      // const res = await axios.get(`/api/area/gu`);
      // const data: AddressDto[] = await res.data;
      const data = await fetchArea(gu, 50);
      const markerArr = data?.map((address) => new MarkerData(address));
      return markerArr;
    } catch (err) {
      console.error(err);
      return;
    }
  }
  const markersQuery = useQuery({
    queryKey: [`markers-seoul-${gu}`, `${gu}-gu`],
    queryFn: () => gu && fetchMarkers(gu),
  });

  return { markers: markersQuery.data };
};

export default useMarkers;
