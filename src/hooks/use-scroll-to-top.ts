import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to scroll to top of page on route changes
 * Ensures proper scrolling behavior for all navigation
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('Route changed to:', pathname); // Debug log
    console.log('Current scroll position:', window.scrollY); // Debug log
    
    // More aggressive scroll to top implementation
    const scrollToTop = () => {
      try {
        // Force immediate scroll to absolute top
        window.scrollTo({ 
          top: 0, 
          left: 0, 
          behavior: 'auto' 
        });
        
        // Additional safeguard scrolls
        setTimeout(() => {
          window.scrollTo(0, 0);
          console.log('Scroll position after first attempt:', window.scrollY); // Debug log
        }, 10);
        
        setTimeout(() => {
          if (window.scrollY > 1) {
            window.scrollTo(0, 0);
            console.log('Final scroll position:', window.scrollY); // Debug log
          }
        }, 50);
      } catch (error) {
        // Fallback for older browsers
        try {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        } catch (fallbackError) {
          console.warn('Scroll to top failed:', fallbackError);
        }
      }
    };

    // Execute scroll to top
    scrollToTop();

    // Cleanup scroll behavior
    return () => {
      // Ensure we don't leave any scroll behavior issues
    };
  }, [pathname]);
};