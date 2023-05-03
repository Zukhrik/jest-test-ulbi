const validateValueTest = require('./validateValue')

describe("validateValue", () => {
  test('Валидные чисела', () => {
    expect(validateValueTest(0)).toBe(true)
    expect(validateValueTest(50)).toBe(true)
    expect(validateValueTest(100)).toBe(true)
  })
  
  test('Не валидные числа', () => {
    expect(validateValueTest(-1)).toBe(false)
    expect(validateValueTest(101)).toBe(false)
  })
});