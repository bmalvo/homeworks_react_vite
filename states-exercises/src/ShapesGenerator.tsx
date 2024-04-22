import { useEffect, useState } from "react";

type SingleBox = {
    size: number;
    x: number;
    y: number;
    rotation: number;
    color: string;
    borderRadius: number;
}

export const ShapesGenerator = () => {
    const [boxes, setBoxes] = useState<SingleBox[]>([]);

    const addBox = () => {
        const x = Math.round(Math.random() * 500);
        const y = Math.round(Math.random() * 500);
        const size = Math.round(Math.random() * 100);
        const rotation = Math.round(Math.random() * 360);
        const borderRadius = Math.round(Math.random() * 50);
        const r = Math.round(Math.random() * 255);
        const g = Math.round(Math.random() * 255);
        const b = Math.round(Math.random() * 255);

        const newBox: SingleBox = {
            x,
            y,
            size,
            rotation,
            borderRadius,
            color: `rgb(${r}, ${g}, ${b})`
        }

        setBoxes(prevBoxes => [...prevBoxes, newBox]);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            addBox()
        }, 1000)
        
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            <div style={{
                position: 'relative',
                width: 1000,
                height: 1000
            }}>
                {boxes.map((box, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: box.color,
                            width: box.size,
                            height: box.size,
                            borderRadius: `${box.borderRadius}%`,
                            position: 'absolute',
                            top: box.y,
                            left: box.x,
                            transform: `translate(-50%) rotate(${box.rotation}deg)`,
                            transformOrigin: '50%'
                        }}/>)
                )}
            </div>
        </>
    )
}
