import { useEffect, useLayoutEffect, useRef, useState } from "react"

export const Foo = () => {

    const ref = useRef<HTMLHeadingElement>(null);
    const [config, setConfig] = useState<{ x: number, y: number, width: number, height: number, active: boolean }>({
        
        x: 0,
        y: 0,
        width: 200,
        height: 100,
        active: false
    });

    useLayoutEffect(() => {

        console.log('useEffect', ref.current);
        if (!ref.current) return;
        // eslint-disable-next-line no-unsafe-optional-chaining
        const { width, height, x, y } = ref.current?.getBoundingClientRect();
        setConfig({width, height, x, y, active: true})
    }, [])
    
    // useLayoutEffect(() => {

    //     console.log('useLayoutEffect');
    // },[])

    return <>
        <h1 ref={ref}>I am a Foo component</h1>
        <div style={{
            
            position: 'absolute',
            left: config.x,
            top: config.y,
            height: config.height,
            width: config.width,
            zIndex: -1,
            background: config.active ? 'rgb(241, 44, 44)' : 'rgb(34, 128, 211)'
        }} />
    </>
}