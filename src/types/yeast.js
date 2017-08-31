// @flow
export type Yeast = {
  name: string,
  amount: number,
  attenuation?: number,
  form: 'Liquid' | 'Dry' | 'Slant' | 'Culture',
  type: 'Ale' | 'Lager' | 'Wheat' | 'Wine' | 'Champagne',
  cultureDate?: string
}

export const YeastTypes = {
  ale: 'Ale',
  lager: 'Lager',
  wheat: 'Wheat',
  wine: 'Wine',
  champagne: 'Champagne'
}
export const YeastForms = {
  liquid: 'Liquid',
  dry: 'Dry',
  slant: 'Slant',
  culture: 'Culture'
}
