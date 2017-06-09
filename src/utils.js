// @flow
export const kgToOunces = (k: number) => k * 35.2739619

export const kgToPounds = (k: number) => kgToOunces(k) / 16

export const litersToOunces = (l: number) => l / 0.0295735

export const ouncesToLiters = (o: number) => o * 0.0295735

export const litersToGallons = (l: number) => litersToOunces(l) / 128

export const sum = (array: Array<number>) =>
  array.reduce((pv, cv) => pv + cv, 0)
