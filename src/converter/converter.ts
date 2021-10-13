import definitions from './definitions'

const DEFAULT_PRECISION = 2

const roundValue = (value: number, precision: number): number =>
  +value.toFixed(precision)

/**
 * @param {number} value
 * @param {string} from
 * @param {string} to
 * @param {number} precision
 * @returns {number}
 */
export const convert = (
  value: number,
  from: string,
  to: string,
  precision?: number
): number => {
  if (value == null) {
    throw new Error(`Unable to convert null or undefined!`)
  }

  let origin = null
  let destination = null

  for (const measurableTypeKey in definitions) {
    const measurableType = definitions[measurableTypeKey]
    for (const systemKey in measurableType) {
      const system = measurableType[systemKey]
      if (system.units.hasOwnProperty(from)) {
        origin = { unit: system.units[from], system }
      }

      if (system.units.hasOwnProperty(to)) {
        destination = { unit: system.units[to], system }
      }
    }

    if (origin != null && destination == null) {
      throw new Error(
        `Unable to convert [${measurableTypeKey}] unit [${from}] to [${to}]!`
      )
    }

    if (origin == null && destination != null) {
      throw new Error(
        `Unable to convert [${from}] to [${measurableTypeKey}] unit [${to}]!`
      )
    }

    if (origin != null && destination != null) {
      break
    }
  }

  if (origin == null) {
    throw new Error(`Unit not found [${from}]!`)
  }

  if (destination == null) {
    throw new Error(`Unit not found [${to}]!`)
  }

  const unitPrecision =
    destination.unit.precision != null
      ? destination.unit.precision
      : DEFAULT_PRECISION

  const actualPrecision = precision != null ? precision : unitPrecision

  if (from === to) {
    return roundValue(value, actualPrecision)
  }

  let result = value * origin.unit.ratio

  if (origin.system !== destination.system) {
    result = destination.system.fromBase(origin.system.toBase(result))
  }

  result /= destination.unit.ratio

  return roundValue(result, actualPrecision)
}
