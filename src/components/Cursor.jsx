import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only render the custom cursor on devices with a fine pointer (mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
      
      const moveCursor = (e) => {
        setPosition({ x: e.clientX + 5, y: e.clientY + 5 });
      };

      const handleMouseOver = (e) => {
        if (e.target.closest('.interactive')) setIsHovered(true);
      };

      const handleMouseOut = (e) => {
        if (e.target.closest('.interactive')) setIsHovered(false);
      };

      window.addEventListener('mousemove', moveCursor);
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);

      // Cleanup listeners on unmount
      return () => {
        window.removeEventListener('mousemove', moveCursor);
        document.removeEventListener('mouseover', handleMouseOver);
        document.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`custom-cursor ${isHovered ? 'hovered' : ''}`} 
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}