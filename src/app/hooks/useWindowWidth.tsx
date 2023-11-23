import { useState, useEffect } from "react";

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.addEventListener("resize", handleResize);
    });
  
    return width;
  }