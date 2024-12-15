/* eslint-disable @typescript-eslint/no-unsafe-function-type */

let elements: string[] = ['Stefka'];
const subscribers = new Set<Function>();

export const dataStore = {

    getElements: () => {

        return elements;
    },

    subscribe: (callback: Function) => {

        subscribers.add(callback);
        return () => {

            subscribers.delete(callback)
        }
    },

    addNewElement: (title: string) => {
        console.log(title)
        elements = [...elements, title];

        subscribers.forEach(callback => callback())
    }
} 