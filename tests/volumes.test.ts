import {
  calcBoilVolumes,
  calcMashVolumes,
  calcMashGrainWeight,
  convertMeasurableValue,
} from '../src'
import { recipe as AussieAle } from './data/AussieAle'
import { equipment as AussieAleEquipment } from './data/AussieAle'

describe('Volumes', () => {
  const equipment = {
    mash_tun: AussieAleEquipment.equipment_items[0],
    brew_kettle: AussieAleEquipment.equipment_items[1],
  }

  test('Calc pre boil volume', () => {
    const { pre_boil_size } = calcBoilVolumes(
      AussieAle.batch_size,
      AussieAle.boil,
      equipment
    )
    expect(convertMeasurableValue(pre_boil_size, 'l')).toBeCloseTo(37.12, 1)
  })

  test('Calc mash water volume, sparge volume, total volume', () => {
    const mashGrainWeight = calcMashGrainWeight(
      AussieAle.ingredients.fermentable_additions
    )
    const { pre_boil_size } = calcBoilVolumes(
      AussieAle.batch_size,
      AussieAle.boil,
      equipment
    )
    const { mash_volume, sparge_volume, total_volume } = calcMashVolumes(
      pre_boil_size,
      AussieAle.mash.mash_steps,
      mashGrainWeight,
      equipment
    )

    expect(convertMeasurableValue(mash_volume, 'l')).toBeCloseTo(24.45, 1)

    expect(convertMeasurableValue(sparge_volume, 'l')).toBeCloseTo(20.97, 1)

    expect(convertMeasurableValue(total_volume, 'l')).toBeCloseTo(45.42, 1)
  })

  /*test('mashGrainWeight', () => {
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
    expect(
      calculateVolumes(AussieAle, AussieAleEquipment).spargeVol
    ).toBeCloseTo(20.97, 1)
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
  })*/
})
