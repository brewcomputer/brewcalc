// @flow
export type Equipment = {
  name: string,
  batchSize: number,
  boilSize: number,
  tunWeight?: number,
  tunVolume?: number,
  tunSpecificHeat?: number,
  evapRate?: number,
  coolingLossPct?: number,
  trubChillerLoss?: number,
  lauterDeadspace?: number,
  topUpKettle?: number,
  BIAB?: boolean
}
