import { useLayoutEffect, useState } from "react";

export function useWindowSize() {
  const [size, setSize] = useState<number>(0);

  useLayoutEffect(() => {
    const updateSize = () => setSize(window.innerWidth);

    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  });
  return size;
}
