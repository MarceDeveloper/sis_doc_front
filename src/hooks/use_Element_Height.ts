import React, { useEffect, useRef, useState } from 'react';

export const use_ElementHeight = () => {
  const [elementHeight, setElementHeight] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const height = elementRef.current.clientHeight;
      setElementHeight(height);
    }
  }, []);

  return { elementRef, elementHeight };
}