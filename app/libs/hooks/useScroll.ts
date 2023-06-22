import { useCallback, useEffect, useState } from "react";

export const useScroll = () => {
  const [isShowScroll, setIsShowScroll] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const basePosition = 200;

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollHandler = useCallback(() => {
    const scrollPosition = window.scrollY;

    setScrollY(scrollPosition);
    setIsShowScroll(basePosition <= scrollPosition);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return {
    isShowScroll,
    scrollY,
    scrollTop,
  };
};
