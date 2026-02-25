"use client";

import { useEffect, useState } from "react";

type WindowSize = {
  width: number;
  height: number;
};

const defaultSize: WindowSize = {
  width: 0,
  height: 0,
};

export function useWindowSize(): WindowSize {
  const [size, setSize] = useState<WindowSize>(defaultSize);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
