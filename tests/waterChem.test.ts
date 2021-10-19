import { calcWaterChemistry } from '../src/waterChem'
import type { Water } from '../src/types/water'
import type { SaltAdditions } from '../src/types/saltAdditions'
import { VolumeType } from '../src/types/beerjson'

test('calcWaterChemistry', () => {
  const batchSize: VolumeType = { value: 20, unit: 'l' }
  const dilution = 0.5
  const sourceWater: Water = {
    name: 'Pilsen (Light Lager)',
    Ca: 7,
    Mg: 3,
    SO4: 5,
    Na: 2,
    Cl: 5,
    HCO3: 25,
  }

  const targetWater: Water = {
    name: 'Dublin (Dry Stout)',
    Ca: 110,
    Mg: 4,
    SO4: 53,
    Na: 12,
    Cl: 19,
    HCO3: 280,
  }

  const saltAdditions: SaltAdditions = {
    CaCO3: 10,
    NaHCO3: 2,
    CaSO4: 2,
    CaCl2: 1,
    MgSO4: 1,
    NaCl: 1,
  }

  const adjustedWater: Water = {
    name: 'adjustedWater',
    Ca: 140,
    Mg: 7,
    SO4: 78,
    Na: 49,
    Cl: 57,
    HCO3: 389,
    alkalinity: 319,
  }
  const dilutedWater: Water = {
    name: 'dilutedWater',
    Ca: 4,
    Mg: 2,
    SO4: 3,
    Na: 1,
    Cl: 3,
    HCO3: 13,
    alkalinity: 10,
  }
  const adjustmentsFromSalts: Water = {
    name: 'adjustmentsFromSalts',
    Ca: 136,
    Mg: 5,
    SO4: 75,
    Na: 48,
    Cl: 54,
    HCO3: 376,
    alkalinity: 308,
  }
  const difference: Water = {
    name: 'difference source water from target',
    Ca: 30,
    Mg: 3,
    SO4: 25,
    Na: 37,
    Cl: 38,
    HCO3: 109,
    alkalinity: 89,
  }
  const sulphateChlorideRatio = 1.368

  expect(
    calcWaterChemistry(
      batchSize,
      dilution,
      sourceWater,
      targetWater,
      saltAdditions
    ).dilutedWater
  ).toMatchObject(dilutedWater)

  expect(
    calcWaterChemistry(
      batchSize,
      dilution,
      sourceWater,
      targetWater,
      saltAdditions
    ).adjustmentsFromSalts
  ).toMatchObject(adjustmentsFromSalts)

  expect(
    calcWaterChemistry(
      batchSize,
      dilution,
      sourceWater,
      targetWater,
      saltAdditions
    ).adjustedWater
  ).toMatchObject(adjustedWater)

  expect(
    calcWaterChemistry(
      batchSize,
      dilution,
      sourceWater,
      targetWater,
      saltAdditions
    ).difference
  ).toMatchObject(difference)

  expect(
    calcWaterChemistry(
      batchSize,
      dilution,
      sourceWater,
      targetWater,
      saltAdditions
    ).sulphateChlorideRatio
  ).toBeCloseTo(sulphateChlorideRatio)
})
