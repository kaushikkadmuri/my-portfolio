// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const scrollPositions = {};

export default function ScrollRestoration() {
  const { pathname } = useLocation();
  const prevPath = useRef(pathname);

  useEffect(() => {
    // Save scroll position for previous path
    scrollPositions[prevPath.current] = window.scrollY;
    // Always scroll to top for home section
    if (pathname === '/' || pathname === '/home') {
      window.scrollTo(0, 0);
    } else {
      // Restore scroll position for other sections
      window.scrollTo(0, scrollPositions[pathname] || 0);
    }
    prevPath.current = pathname;
  }, [pathname]);

  return null;
}