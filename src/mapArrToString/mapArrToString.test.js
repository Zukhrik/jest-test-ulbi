const mapArrToStringTest = require('./mapArrToString')

describe("mapArrToString", function() {
  test('Массив чисел в строку', () => {
    expect(mapArrToStringTest([1,2,3])).toEqual(['1', '2', '3'])
  })
  test('Массив чисел в строку', () => {
    expect(mapArrToStringTest([1,2,3, 'qwe', undefined, null])).toEqual(['1', '2', '3'])
  })
  test('Массив чисел в строку', () => {
    expect(mapArrToStringTest([])).toEqual([])
  })
  test('Массив чисел в строку', () => {
    expect(mapArrToStringTest([1,2,3])).not.toEqual([1,2,3])
  })
});