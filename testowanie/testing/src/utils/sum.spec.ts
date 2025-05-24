import { sum } from "./sum"

describe('sum', () => {

    it('should return correct result for 2 + 2', () => {

        expect(sum(2, 2)).toBe(4)
    })

    it('should retur correct result for add -2 to 2', () => {

        expect(sum(-2, 2)).toBe(0)
    })
});