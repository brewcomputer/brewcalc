import { recipe as AussieAle } from './data/AussieAle'
import { calcColor, srmToCss } from '../src/color'

describe('Color', () => {
  test('Calc color SRM', () => {
    // http://beersmith.com/blog/2008/04/29/beer-color-understanding-srm-lovibond-and-ebc/
    const colorSRM = calcColor(
      AussieAle.ingredients.fermentable_additions,
      AussieAle.batch_size
    )

    const colorEBCvalue = 1.97 * colorSRM.value

    // 8.6
    expect(colorSRM.value).toBeCloseTo(14.7, 1)
    // 16.8
    expect(colorEBCvalue).toBeCloseTo(29, 1)
  })

  test('Convert color SRM to css string', () => {
    const cssColor = srmToCss(19.5)
    expect(cssColor).toEqual('rgb(156, 21, 0)')
  })
})
