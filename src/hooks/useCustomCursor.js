import { useEffect, useRef } from 'react';

const useCustomCursor = (containerRef) => {
  const cursorRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Create a div to act as the custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    container.appendChild(cursor);
    cursorRef.current = cursor;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const rect = container.getBoundingClientRect();

      // Calculate the position relative to the container
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Position the custom cursor
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      cursor.style.visibility = 'visible';
    };

    const handleMouseLeave = () => {
      cursor.style.visibility = 'hidden'; // Hide the cursor when leaving the container
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeChild(cursor);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef]);

  return cursorRef;
};

export default useCustomCursor;
