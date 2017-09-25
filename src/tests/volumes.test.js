// @flow
import { calculateVolumes } from '../volumes'
import { recipe as AussieAle } from './data/AussieAle.js'
import { equipment as AussieAleEquipment } from './data/AussieAle.js'

declare var test: any
declare var expect: any

test('mashGrainWeight', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).mashGrainWeight
  ).toBeCloseTo(5.26, 2)
})
test('grainAbsorbtion', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).grainAbsorbtion
  ).toBeCloseTo(5.27, 2)
})

test('totalMashWaterAdds', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).totalMashWaterAdds
  ).toBeCloseTo(24.45, 2)
})

test('mashVolumeNeeded', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).mashVolumeNeeded
  ).toBeCloseTo(27.97, 2)
})

test('waterAvailFromMash', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).waterAvailFromMash
  ).toBeCloseTo(19.17, 2)
})

test('spargeVol', () => {
  expect(calculateVolumes(AussieAle, AussieAleEquipment).spargeVol).toBeCloseTo(
    20.97,
    1
  )
})

test('estPreBoilVolume', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).estPreBoilVolume
  ).toBeCloseTo(37.12, 2)
})

test('boilOffVolume', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).boilOffVolume
  ).toBeCloseTo(10.18, 2)
})

test('postBoilVolume', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).postBoilVolume
  ).toBeCloseTo(26.94, 2)
})

test('coolingShrinkage', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).coolingShrinkage
  ).toBeCloseTo(1.08, 2)
})

test('estBottlingVol', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).estBottlingVol
  ).toBeCloseTo(21.32, 2)
})

test('totalWater', () => {
  expect(
    calculateVolumes(AussieAle, AussieAleEquipment).totalWater
  ).toBeCloseTo(45.42, 2)
})
