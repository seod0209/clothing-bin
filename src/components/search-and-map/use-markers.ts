import { fetchArea } from '@/api/go-data-api';
import { useQuery } from '@tanstack/react-query';

const useMarkers = () => {
  const markersQuery = useQuery({
    queryKey: ['markers.fetch.seoul-yeongdeungpo', 'yeongdeungpo'],
    queryFn: () =>
      fetchArea('Yeongdeungpo', 1, 10)
        .then((page) => {
          console.log(page.data);
        })
        .catch((err) => {
          console.log(err);
        }),
  });

  return { markersQuery };
};

export default useMarkers;
