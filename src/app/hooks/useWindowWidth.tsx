import { useState, useEffect } from "react";

export function useWindowWidth() {
  const isClient = typeof window !== 'undefined'; // Check if window object is available

  const [width, setWidth] = useState(isClient ? window.innerWidth : 0);

  useEffect(() => {
    if (!isClient) {
      return () => {}; // Return an empty function if it's not in a browser environment
    }

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient]);

  return width;
}
