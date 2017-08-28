// @flow
import { mashRecalculate } from '../mash'
import { calculateVolumes } from '../volumes'
import { recipe } from './data/AussieAle.js'
import { equipment } from './data/AussieAle.js'

import type { Mash } from '../types/mash'

declare var test: any;
declare var expect: any;

const mashInfusion: Mash = {
  'grainTemp': 22.2222222,
  'tunTemp': 22.2222222,
  'spargeTemp': 75.6,
  'equipAdjust': false,
  'mashSteps': [
    {
      'name': 'Mash In',
      'endTemp': 68.8888889,
      'infuseAmount': 13.7277157,
      'rampTime': 2,
      'stepTemp': 68.8888889,
      'stepTime': 45,
      'type': 'Infusion'
    },
    {
      'name': 'Mash Out',
      'endTemp': 75.5555556,
      'infuseAmount': 5.4910863,
      'rampTime': 2,
      'stepTemp': 75.5555556,
      'stepTime': 10,
      'type': 'Infusion'
    }
  ]
}

const mashDecoction: Mash = {
  'grainTemp': 22.2222222,
  'tunTemp': 22.2222222,
  'spargeTemp': 75.6,
  'equipAdjust': false,
  'mashSteps': [
    {
      'name': 'Protein Rest',
      'endTemp': 50,
      'infuseAmount': 21.9643451,
      'rampTime': 2,
      'stepTemp': 50,
      'stepTime': 35,
      'type': 'Infusion'
    },
    {
      'name': 'Saccharification',
      'endTemp': 67.7777778,
      'infuseAmount': 0,
      'rampTime': 2,
      'stepTemp': 67.7777778,
      'stepTime': 45,
      'type': 'Decoction'
    },
    {
      'name': 'Mash Out',
      'endTemp': 75.5555556,
      'infuseAmount': 0,
      'rampTime': 10,
      'stepTemp': 75.5555556,
      'stepTime': 10,
      'type': 'Temperature'
    }
  ]
}

const mashTemperature: Mash = {
  'grainTemp': 22.2222222,
  'tunTemp': 22.2222222,
  'spargeTemp': 75.6,
  'equipAdjust': false,
  'mashSteps': [
    {
      'name': 'Saccharification',
      'endTemp': 68.8888889,
      'infuseAmount': 13.7277157,
      'rampTime': 15,
      'stepTemp': 68.8888889,
      'stepTime': 40,
      'type': 'Infusion'
    },
    {
      'name': 'Mash Out',
      'endTemp': 75.5555556,
      'infuseAmount': 0,
      'rampTime': 10,
      'stepTemp': 75.5555556,
      'stepTime': 10,
      'type': 'Temperature'
    }
  ]
}

const mashGrainWeight = calculateVolumes(recipe, equipment).mashGrainWeight

test('mashRecalculateTemperature', () => {
  /*
  0 min - Saccharification (15 min rise, hold 68.9 C for 40 min)

  Add 13.73 l of water at 75.7 C
  55 min - Mash Out (10 min rise, hold 75.6 C for 10 min)

  Heat to 75.6 C over 10 min
  1:15 hours - Mash Complete
  */
  expect(
    mashRecalculate(mashTemperature, equipment, mashGrainWeight)
  ).toEqual([
    {
      'decoctionAmount': 0,
      'infussionTemp': 75.68859465633895,
      'infuseStepAmount': 13.7277157
    },
    {
      'decoctionAmount': undefined,
      'infussionTemp': undefined,
      'infuseStepAmount': 0
    }
  ])
})

test('mashRecalculateInfusion', () => {
  /*
  0 min - Mash In (2 min rise, hold 68.9 C for 45 min)

  Add 13.73 l of water at 75.7 C
  47 min - Mash Out (2 min rise, hold 75.6 C for 10 min)

  Add 5.49 l of water at 94.7 C
  59 min - Mash Complete
  */
  expect(
    mashRecalculate(mashInfusion, equipment, mashGrainWeight)
  ).toEqual([
    {
      'infussionTemp': 75.68859465633895,
      'infuseStepAmount': 13.7277157,
      'decoctionAmount': 0
    },
    {
      'infussionTemp': 94.65068863240779,
      'infuseStepAmount': 5.4910863,
      'decoctionAmount': 0
    }
  ])
})

test('mashRecalculateDecoction', () => {
  /*
  0 min - Protein Rest (2 min rise, hold 50.0 C for 35 min)

  Add 21.96 l of water at 52.5 C
  37 min - Saccharification (2 min rise, hold 67.8 C for 45 min)

  Decoct 9.03 l of mash and boil it
  1:24 hours - Mash Out (10 min rise, hold 75.6 C for 10 min)

  Heat to 75.6 C over 10 min
  1:44 hours - Mash Complete
  */
  expect(
    mashRecalculate(mashDecoction, equipment, mashGrainWeight)
  ).toEqual([
    {
      'decoctionAmount': 0,
      'infussionTemp': 52.52965244163444,
      'infuseStepAmount': 21.9643451
    },
    {
      'decoctionAmount': 9.029806923998366,
      'infussionTemp': 0,
      'infuseStepAmount': 0
    },
    {
      'decoctionAmount': undefined,
      'infussionTemp': undefined,
      'infuseStepAmount': 0
    }
  ])
})

test('mashRecalculateInfusionEquipAdjust', () => {
  /*
  0 min - Saccharification (15 min rise, hold 68.9 C for 40 min)

  Add 13.73 l of water at 78.0 C
  55 min - Mash Out (10 min rise, hold 75.6 C for 10 min)

  Heat to 75.6 C over 10 min
  1:15 hours - Mash Complete
  */
  expect(
    mashRecalculate({ ...mashInfusion, equipAdjust: true }, equipment, mashGrainWeight)
  ).toEqual([
    {
      'infussionTemp': 78.04794013774075,
      'infuseStepAmount': 13.7277157,
      'decoctionAmount': 0
    },
    {
      'infussionTemp': 95.76295059382883,
      'infuseStepAmount': 5.4910863,
      'decoctionAmount': 0
    }
  ])
})

test('mashRecalculateTemperatureEquipAdjust', () => {
  /*
  0 min - Saccharification (15 min rise, hold 68.9 C for 40 min)

  Add 13.73 l of water at 78.0 C
  55 min - Mash Out (10 min rise, hold 75.6 C for 10 min)

  Heat to 75.6 C over 10 min
  1:15 hours - Mash Complete
  */
  expect(
    mashRecalculate({ ...mashTemperature, equipAdjust: true }, equipment, mashGrainWeight)
  ).toEqual([
    {
      'decoctionAmount': 0,
      'infussionTemp': 78.04794013774075,
      'infuseStepAmount': 13.7277157
    },
    {
      'decoctionAmount': undefined,
      'infussionTemp': undefined,
      'infuseStepAmount': 0
    }
  ])
})

test('mashRecalculateDecoctionEquipAdjust', () => {
  /*
  0 min - Protein Rest (2 min rise, hold 50.0 C for 35 min)

  Add 21.96 l of water at 53.8 C
  37 min - Saccharification (2 min rise, hold 67.8 C for 45 min)

  Decoct 9.42 l of mash and boil it
  1:24 hours - Mash Out (10 min rise, hold 75.6 C for 10 min)

  Heat to 75.6 C over 10 min
  1:44 hours - Mash Complete
  */
  expect(
    mashRecalculate({ ...mashDecoction, equipAdjust: true }, equipment, mashGrainWeight)
  ).toEqual([
    {
      'decoctionAmount': 0,
      'infussionTemp': 53.82869540698627,
      'infuseStepAmount': 21.9643451
    },
    {
      'decoctionAmount': 9.416844263343334,
      'infussionTemp': 0,
      'infuseStepAmount': 0
    },
    {
      'decoctionAmount': undefined,
      'infussionTemp': undefined,
      'infuseStepAmount': 0
    }
  ])
})

const mashBIABfullBody = {
  'grainTemp': 22.2,
  'tunTemp': 22.2,
  'equipAdjust': false,
  'spargeTemp': 75.6,
  'mashSteps': [
    {
      'name': 'Saccharification',
      'endTemp': 68.9,
      'infuseAmount': 40.3380929,
      'rampTime': 10,
      'stepTemp': 68.9,
      'stepTime': 60,
      'type': 'Infusion'
    },
    {
      'name': 'Mash Out',
      'endTemp': 75.5555556,
      'infuseAmount': 0,
      'rampTime': 7,
      'stepTemp': 75.5555556,
      'stepTime': 10,
      'type': 'Temperature'
    }
  ]
}

test('mashRecalculateMashBIABfullBody', () => {
  /*
      0 min - Saccharification (10 min rise, hold 68.9 C for 60 min)

      Add 40.34 l of water at 71.2 C
      1:10 hours - Mash Out (7 min rise, hold 75.6 C for 10 min)

      Heat to 75.6 C over 7 min
      1:27 hours - Mash Complete
  */
  expect(
    mashRecalculate(mashBIABfullBody, { ...equipment, BIAB: true }, mashGrainWeight)
  ).toEqual([
    {
      'decoctionAmount': 0,
      'infuseStepAmount': 40.3380929,
      'infussionTemp': 71.21570446879011
    },
    {
      'decoctionAmount': undefined,
      'infuseStepAmount': 0,
      'infussionTemp': undefined
    }
  ])
})
