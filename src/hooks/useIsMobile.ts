import { useMemo } from 'react';

import { useWindowSize } from './useWindowSize';

const MOBILE_SIZE = 768;

export function useIsMobile() {
  const size = useWindowSize();

  const isMobile = useMemo(() => {
    if (size === 0) {
      return;
    }

    return size < MOBILE_SIZE;
  }, [size]);

  return isMobile;
}
