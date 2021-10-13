import { recipe as AussieAle } from './data/AussieAle'
import { calcABV } from '../src/abv'

describe('ABV', () => {
  test('Calc ABV', () => {
    const OG = AussieAle.original_gravity
    const FG = AussieAle.final_gravity
    const AussieAleABV = calcABV(OG, FG)

    expect(AussieAleABV.value).toBeCloseTo(4.7, 1)
  })
})
