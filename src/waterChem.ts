import type { Water } from './types/water'
import type { SaltAdditions } from './types/saltAdditions'

import { litersToGallons } from './utils'

const dilute = (value: number, dilution: number) =>
  Math.round(value * (1 - dilution))

const alkalinity = (value: number, dilution: number = 0) =>
  Math.round(value * (1 - dilution) * (50 / 61))

const adjustmentsFromSalts = (
  batchSize: number,
  { CaCO3, NaHCO3, CaSO4, CaCl2, MgSO4, NaCl }: SaltAdditions
) => {
  let adjCa = 0
  let adjMg = 0
  let adjSO4 = 0
  let adjNa = 0
  let adjCl = 0
  let adjHCO3 = 0

  CaCO3 = CaCO3 / 2

  if (CaCO3 > 0) {
    adjCa = adjCa + (105 * CaCO3) / batchSize
    adjHCO3 = adjHCO3 + (321 * CaCO3) / batchSize
  }
  if (NaHCO3 > 0) {
    adjNa = adjNa + (75 * NaHCO3) / batchSize
    adjHCO3 = adjHCO3 + (191 * NaHCO3) / batchSize
  }
  if (CaSO4 > 0) {
    adjCa = adjCa + (61.5 * CaSO4) / batchSize
    adjSO4 = adjSO4 + (147.4 * CaSO4) / batchSize
  }
  if (CaCl2 > 0) {
    adjCa = adjCa + (72 * CaCl2) / batchSize
    adjCl = adjCl + (127 * CaCl2) / batchSize
  }
  if (MgSO4 > 0) {
    adjMg = adjMg + (26 * MgSO4) / batchSize
    adjSO4 = adjSO4 + (103 * MgSO4) / batchSize
  }
  if (NaCl > 0) {
    adjNa = adjNa + (104 * NaCl) / batchSize
    adjCl = adjCl + (160 * NaCl) / batchSize
  }
  return {
    name: 'adjustmentsFromSalts',
    Ca: Math.round(adjCa),
    Mg: Math.round(adjMg),
    SO4: Math.round(adjSO4),
    Na: Math.round(adjNa),
    Cl: Math.round(adjCl),
    HCO3: Math.round(adjHCO3),
    alkalinity: alkalinity(Math.round(adjHCO3)),
  }
}

export const calcWaterChemistry = (
  batchSize: number,
  dilution: number,
  source: Water,
  target: Water,
  salts: SaltAdditions
) => {
  const adjustmentsFromSaltsWater: Water = adjustmentsFromSalts(
    litersToGallons(batchSize),
    {
      ...salts,
    }
  )

  const dilutedWater: Water = {
    name: 'dilutedWater',
    Ca: dilute(source.Ca, dilution),
    Mg: dilute(source.Mg, dilution),
    SO4: dilute(source.SO4, dilution),
    Na: dilute(source.Na, dilution),
    Cl: dilute(source.Cl, dilution),
    HCO3: dilute(source.HCO3, dilution),
    alkalinity: alkalinity(source.HCO3, dilution),
  }

  const adjustedWater: Water = {
    name: 'adjustedWater',
    Ca: dilutedWater.Ca + adjustmentsFromSaltsWater.Ca,
    Mg: dilutedWater.Mg + adjustmentsFromSaltsWater.Mg,
    SO4: dilutedWater.SO4 + adjustmentsFromSaltsWater.SO4,
    Na: dilutedWater.Na + adjustmentsFromSaltsWater.Na,
    Cl: dilutedWater.Cl + adjustmentsFromSaltsWater.Cl,
    HCO3: dilutedWater.HCO3 + adjustmentsFromSaltsWater.HCO3,
    alkalinity: alkalinity(dilutedWater.HCO3 + adjustmentsFromSaltsWater.HCO3),
  }

  const difference: Water = {
    name: 'difference source water from target',
    Ca: adjustedWater.Ca - target.Ca,
    Mg: adjustedWater.Mg - target.Mg,
    SO4: adjustedWater.SO4 - target.SO4,
    Na: adjustedWater.Na - target.Na,
    Cl: adjustedWater.Cl - target.Cl,
    HCO3: adjustedWater.HCO3 - target.HCO3,
    alkalinity: alkalinity(adjustedWater.HCO3 - target.HCO3),
  }

  return {
    adjustedWater: adjustedWater,
    dilutedWater: dilutedWater,
    adjustmentsFromSalts: adjustmentsFromSaltsWater,
    difference: difference,
    sulphateChlorideRatio: adjustedWater.SO4 / adjustedWater.Cl,
  }
}
