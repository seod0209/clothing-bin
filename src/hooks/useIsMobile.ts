import { useMemo } from "react";

import { useWindowSize } from "./useWindowSIze";

const MOBILE_SIZE = 768;

export function useIsMobile() {
  const size = useWindowSize();

  const isMobile = useMemo(() => size < MOBILE_SIZE, [size]);

  return isMobile;
}
