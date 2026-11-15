import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface ScrollToTopProps {
  behavior?: ScrollBehavior;
}

export function ScrollToTop({ behavior = 'instant' }: ScrollToTopProps) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.replace('#', ''));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, behavior]);

  return null;
}

export default ScrollToTop;
