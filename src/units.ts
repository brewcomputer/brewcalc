import { convert } from './converter/converter'

type Measurable = {
  value: number
  unit: string
}

export const convertMeasurableValue = (
  measurable: Measurable,
  unit: string,
  precision: number = 4
) => {
  return convert(measurable.value, measurable.unit, unit, precision)
}
