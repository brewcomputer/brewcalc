import type { TimingType } from './types/beerjson'

export const use = (
  timing: TimingType = {}
): {
  add_to_boil: boolean
  add_to_mash: boolean
} => ({
  add_to_boil: timing.use === 'add_to_boil',
  add_to_mash: !timing.use || timing.use === 'add_to_mash',
})

export const boilTime = (timing: TimingType = {}): number =>
  timing.use === 'add_to_boil' ? timing.time.value : 0
