// @flow
export const kilosToOunces = (k: number) => {
  return k * 35.2739619
}

export const kilosToPounds = (k: number) => {
  return kilosToOunces(k) / 16
}

const litersToOunces = l => {
  return l / 0.0295735
}

export const ouncesToLiters = (o: number) => {
  return o * 0.0295735
}

export const litersToGallons = (l: number) => {
  return litersToOunces(l) / 128
}

export const sum = (array: Array<number>) =>
  array.reduce((pv, cv) => pv + cv, 0)

export const options = () => {
  const grainAbsorb = 0.13
  const mashTunDeadSpace = 3.03
  const trubLossPercent = 0
  return {
    grainAbsorb,
    mashTunDeadSpace,
    trubLossPercent
  }
}
