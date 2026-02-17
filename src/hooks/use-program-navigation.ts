import { useNavigate } from "react-router-dom";

/**
 * Custom hook for handling program link navigation with proper scroll behavior
 * Ensures that when program links are clicked, they scroll to the top of the target page
 */
export const useProgramNavigation = () => {
  const navigate = useNavigate();

  const handleProgramClick = (path: string, event?: React.MouseEvent) => {
    console.log('Program link clicked:', path); // Debug log
    
    // Prevent default behavior if it's a click event
    if (event) {
      event.preventDefault();
    }

    // Navigate to the target path
    navigate(path);

    // Force scroll to top after navigation
    setTimeout(() => {
      try {
        console.log('Attempting to scroll to top'); // Debug log
        // Multiple scroll attempts to ensure it works
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        
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
    }, 100); // Give React Router time to complete navigation
  };

  return { handleProgramClick };
};