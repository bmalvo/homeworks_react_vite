import { useState } from "react";

const CursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {

    setCursorPosition({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY
    });
  };

  return (
      <div
          onMouseMove={handleMouseMove}
          style={{
              width: '20vw',
              height: '20vh',
              border: '1px solid green'
          }}>
      <p>
        Cursor position: (x: {cursorPosition.x}, y: {cursorPosition.y})
      </p>
    </div>
  );
};

export { CursorPosition }
