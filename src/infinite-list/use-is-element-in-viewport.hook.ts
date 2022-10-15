import { RefObject, useCallback, useEffect, useState } from "react";

export const useElementInViewport = (element: RefObject<HTMLElement>) => {
  const [initialized, setInitialized] = useState(false);
  const [isElementInViewport, setIsElementInViewport] = useState(false);

  const evaluateElementPosition = useCallback(() => {
    if (element?.current) {
      const isElementCurrentlyInViewport = isInViewport(element.current);
      setIsElementInViewport(isElementCurrentlyInViewport);

      return isElementCurrentlyInViewport;
    }

    return false;
  }, [element?.current, isElementInViewport, setIsElementInViewport]);

  useEffect(() => {
    document.addEventListener("scroll", evaluateElementPosition, {
      passive: true,
    });

    return () => {
      document.removeEventListener("scroll", evaluateElementPosition);
    };
  }, []);

  useEffect(() => {
    if (!initialized && element?.current) {
      setIsElementInViewport(isInViewport(element.current));
      setInitialized(true);
    }
  }, [element?.current]);

  return { isElementInViewport, evaluateElementPosition };
};

const isInViewport = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
