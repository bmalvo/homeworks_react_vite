import { useEffect, useState } from "react";

export const useRandomColor = (type: 'light' | 'dark') => {
    const [color, setColor] = useState<string | null>(null);
    useEffect(() => {
        const hue = Math.round(Math.random() * 360);
        const saturation = Math.round(Math.random() * 100);

        const treshold = 25;

        const lightness = type === 'dark'
            ? Math.round(Math.random() * treshold)
            : Math.round(Math.random() * (100 - treshold)) + treshold;
        
        setColor(`hsl(${hue}, ${saturation}%, ${lightness}%)`)
    }, [])

    return color
};
