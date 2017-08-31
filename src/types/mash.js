// @flow
import type { MashStep } from './mashStep'
export type Mash = {
  grainTemp: number,
  mashSteps: Array<MashStep>,
  tunTemp?: number,
  spargeTemp?: number,
  equipAdjust?: boolean
}
