import { useState } from "react";

const CursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;

    const x = clientX 
    const y = clientY 

    setCursorPosition({ x, y });
  };

  return (
      <div
          onMouseMove={handleMouseMove}
          style={{
              width: '100vw',
              height: '100vh'
          }}>
      <p>
        Cursor position: (x: {cursorPosition.x}, y: {cursorPosition.y})
      </p>
    </div>
  );
};

export { CursorPosition }
