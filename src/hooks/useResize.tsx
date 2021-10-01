import { useState, useEffect } from 'react';

export const useResize = () => {
  const [size, setSize] = useState(0);
  useEffect(() => {
    const resize = () => {
      setSize(window.innerWidth);
      console.log(size);
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [size]);

  return size;
};
