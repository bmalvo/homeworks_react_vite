import { defer } from "react-router-dom"

export const fakeLoader = () => {

    const promise = new Promise(resolve => {
        
        setTimeout(() => {

            resolve('succes')
        }, 5000)
    })

    return defer({dataPromise:promise})
}