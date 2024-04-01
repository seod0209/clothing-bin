import { fetchArea } from '@/api/go-data-api';
import { useQuery } from '@tanstack/react-query';
import { MarkerData } from './type';

const useMarkers = () => {
  const markersQuery = useQuery({
    queryKey: ['markers-seoul-yeongdeungpo', 'yeongdeungpo'],
    queryFn: () =>
      fetchArea('Yeongdeungpo', 1, 50)
        .then((page) => {
          const markerArr = page.data.map((address) => new MarkerData(address));
          return markerArr;
        })
        .catch((err) => {
          console.error(err);
          return;
        }),
  });

  return { markers: markersQuery.data };
};

export default useMarkers;
