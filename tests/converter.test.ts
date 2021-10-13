import { convert } from '../src'

describe('Converter', () => {
  test('convert inside the system', () => {
    expect(convert(1000, 'ml', 'l')).toBeCloseTo(1, 0)
    expect(convert(1, 'hr', 'min')).toBeCloseTo(60, 0)
  })

  test('convert from one system to another', () => {
    expect(convert(1, 'kg', 'lb')).toBeCloseTo(2.2)
    expect(convert(1, 'l', 'qt')).toBeCloseTo(1.06)
  })

  test('convert gravity', () => {
    expect(convert(5.0, 'plato', 'sg')).toBeCloseTo(1.02)
    expect(convert(12.5, 'plato', 'sg')).toBeCloseTo(1.05)
    expect(convert(35, 'plato', 'sg')).toBeCloseTo(1.154)

    expect(convert(1.008, 'sg', 'plato')).toBeCloseTo(2, 1)
    expect(convert(1.034, 'sg', 'plato')).toBeCloseTo(8.5, 1)
    expect(convert(1.149, 'sg', 'plato')).toBeCloseTo(34, 1)
  })

  test('convert temperature', () => {
    expect(convert(50, 'C', 'F')).toBeCloseTo(122)
    expect(convert(122, 'F', 'C')).toBeCloseTo(50)
  })

  test('convert volumes', () => {
    expect(convert(10, 'l', 'igal')).toBeCloseTo(2.2, 1)
    expect(convert(10, 'l', 'gal')).toBeCloseTo(2.6, 1)
    expect(convert(10, 'l', 'ifloz')).toBeCloseTo(351.95, 2)
  })

  test('convert pressure', () => {
    expect(convert(10, 'psi', 'kPa')).toBeCloseTo(68.9, 1)
    expect(convert(10, 'bar', 'atm')).toBeCloseTo(9.9, 1)
  })

  test('convert temperature to mass: error', () => {
    expect(() => convert(50, 'C', 'kg')).toThrow()
  })
})
