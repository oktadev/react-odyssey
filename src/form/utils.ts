import { useRef } from 'react';

export const useAutoId = (id: string | undefined) => {
  const ref = useRef(null);
  if (!ref.current) {
    ref.current = id || `auto-id--${Math.random().toString(36).slice(2)}`;
  }
  return ref.current;
};

export const isMobilish = () => window.matchMedia('(max-width: 800px)').matches;