// @flow
import type { MashStep } from './mashStep'
export type Mash = {
  grainTemp: number, //temp in C
  mashSteps: Array<MashStep> // List of steps
};
