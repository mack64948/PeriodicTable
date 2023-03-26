import {convertTemp} from "../utils/helper_functions.jsx"

/**
 * tests for the 'converTemp' helper function
 */
test('converts a temperature in degrees C to the same temperature in degrees K', () => {
    expect(convertTemp('C',0.00,'K')).toBe(273.15)
})

test('converts a temperature in degrees C to the same temperature in degrees F', () => {
    expect(convertTemp('C',25,'F')).toBe(77)
})

test('converts a temperature in degrees F to the same temperature in degrees C', () => {
    expect(convertTemp('F',77,'C')).toBe(25)
})

test('converts a temperature in degrees F to the same temperature in degrees K', () => {
    expect(convertTemp('F',32,'K')).toBe(273.15)
})

test('converts a temperature in degrees K to the same temperature in degrees F', () => {
    expect(convertTemp('K',273.15,'C')).toBe(0)

})

test('converts a temperature in degrees K to the same temperature in degrees C', () => {
        expect(convertTemp('K',273.15,'C')).toBe(0)
})