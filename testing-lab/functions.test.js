const {returnTwo,
      greeting,
      add,
      subtract,
      divide,
      multiply,

} = require('./functions.js')
const { TestWatcher } = require('jest')

test('should return 2', () => {
    expect(returnTwo()).toEqual(2)
})

describe('should return greeting to name inputted', () => {
    test('should return Greeting to name inputted', () => {
        expect(greeting('James')).toBe(`Hello, James`)
    }),
    test('should return Greeting to name inputted', () => {
        expect(greeting('Jill')).toBe('Hello, Jill')
    })
    test('should return string', () => {
        let greetName = greeting('Connor')
        expect(typeof greetName).toBe('string')
    })
})
describe('Math functions', () => {
    test('should return the sum of two numbers', () => {
        expect(add(1,2)).toEqual(3)
    }),
    test('should return the sum of two numbers', () => {
        expect(add(5,9)).toEqual(14)
    })
    test('should return the difference of two numbers', () => {
        expect(subtract(5,1)).toEqual(4)
    })
    test('should return the product of two numbers', () => {
        expect(multiply(5,5)).toEqual(25)
    })
    test('should return the quotient of two numbers', () => {
        expect(divide(25,5)).toEqual(5)
    })

})

