import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure we scroll to top for all navigation scenarios
    // First immediate scroll to prevent any visual jump
    window.scrollTo(0, 0);

    // Then smooth scroll to top with a small delay to ensure proper execution
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
