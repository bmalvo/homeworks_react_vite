type UseCustomLoggerReturn = [number, (what: string) => void];

import { useState } from "react"

export const useCustomLogger = (prefix: string): UseCustomLoggerReturn => {
    const [logCount, setLogCount] = useState<number>(0);

    const log = (what: string) => {
        console.log(`${prefix} - ${what}`)
        setLogCount(prevCount => prevCount + 1)
    }
    
    return [
        logCount,
        log
]
}
