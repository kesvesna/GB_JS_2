const calculator = require('../src/calculator');

const add = calculator.add;
const minus = calculator.minus;
const division = calculator.division;
const multiplication = calculator.multiplication;


describe('Function add()',() => {
    it('Return 5 then (3,2)', () => {
        expect(add(3,2)).toBe(5);
    })
    it('Return 9 then (4,5)', () => {
        expect(add(4,5)).toBe(9);
    })
})

describe('Function minus()',() => {
    it('Return 4 then (8,4)', () => {
        expect(minus(8,4)).toBe(4);
    })
    it('Return 1 then (3,2)', () => {
        expect(minus(3,2)).toBe(1);
    })
})

describe('Function division()',() => {
    it('Return 2 then (6,3)', () => {
        expect(division(6,3)).toBe(2);
    })
    it('Return 3 then (27,9)', () => {
        expect(division(27,9)).toBe(3);
    })
})

describe('Function multiplication()',() => {
    it('Return 6 then (3,2)', () => {
        expect(multiplication(3,2)).toBe(6);
    })
    it('Return 20 then (4,5)', () => {
        expect(multiplication(4,5)).toBe(20);
    })
})