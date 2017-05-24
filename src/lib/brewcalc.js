export const sum = array => array.reduce((pv, cv) => pv + cv, 0)

export const srmToRgb = srm => ({
  r: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.975, srm)))),
  g: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.88, srm)))),
  b: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.7, srm))))
})

export const srmToCss = srm => {
  const color = srmToRgb(srm)
  return `rgb(${color.r}, ${color.g}, ${color.b})`
}

export const calcWater = ({
  batchSize,
  totalGrains,
  boilTime,
  evapRateGPH,
  coolingLossGal,
  grainAbsPerLb,
  mashTunVol,
  mashTunDeadSpace = 0,
  kettleDeadSpace = 0,
  dissolvedVol = 0,
  hopWaterLoss = 0,
  pumpWaterLoss = 0
}) => {
  const grainAbsLoss = grainAbsPerLb * totalGrains
  const boilOffLoss = evapRateGPH * boilTime / 60

  const intoFermenterVol = batchSize
  const fromKettleVol = intoFermenterVol + pumpWaterLoss
  const postBoilVol = fromKettleVol + hopWaterLoss + kettleDeadSpace
  const hotPostBoilVol = postBoilVol + coolingLossGal
  const preBoilVol = hotPostBoilVol + boilOffLoss
  const preBoilWaterVol = preBoilVol - dissolvedVol
  const totalWater = preBoilWaterVol + grainAbsLoss + mashTunDeadSpace

  return {
    totalWater,
    preBoilWaterVol,
    preBoilVol,
    hotPostBoilVol,
    postBoilVol,
    fromKettleVol
  }
}

export const calcEstimatedOG = ({
  fermentables,
  waterPostBoilVol,
  mashEfficiency
}) => {
  const calcMashYield = ({ amount, potential, mashed }) =>
    amount * (potential - 1) * (mashed ? mashEfficiency : 1)

  const totalGravityPts = sum(fermentables.map(calcMashYield))
  const originalGravity = totalGravityPts / waterPostBoilVol + 1
  return originalGravity
}
