export const useRandomValue = () => {

    const randomize = () => {

        return Math.round(Math.random() * 100)
    };

    return randomize
};