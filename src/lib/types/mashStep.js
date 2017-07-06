// @flow
export type MashStep = {
  name: string,
  type: "Infusion" | "Temperature" | "Decoction",
  infuseAmount: number,
  stepTemp: number,
  stepTime: number,
  rampTime: number,
  endTemp: number
};
//Mash type May be “Infusion”, “Temperature” or “Decoction” depending on the type of step.
//Infusion denotes adding hot water, Temperature denotes heating with an outside heat source, and decoction denotes drawing off some mash for boiling.
export const MashType = {
  infusion: 'Infusion',
  temperature: 'Temperature',
  decoction: 'Decoction'
}
