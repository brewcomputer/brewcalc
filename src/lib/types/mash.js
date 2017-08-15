// @flow
import type { MashStep } from './mashStep'
export type Mash = {
  grainTemp: number,
  tunTemp: number,
  equipAdjust: boolean,
  mashSteps: Array<MashStep>
};
