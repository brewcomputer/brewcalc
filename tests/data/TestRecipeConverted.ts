import { RecipeType } from '../../src/types/beerjson'

const recipe: RecipeType = {
  name: 'BrewcalcTest',
  type: 'all grain',
  author: 'Brewcalc',
  created: '2018-12-25T21:00:00.000Z',
  batch_size: {
    unit: 'gal',
    value: 5,
  },
  boil: {
    pre_boil_size: {
      unit: 'gal',
      value: 6.53,
    },
    boil_time: {
      unit: 'min',
      value: 60,
    },
  },
  efficiency: {
    brewhouse: {
      unit: '%',
      value: 60,
    },
  },
  style: {
    name: 'Blonde Ale',
    category: 'Pale American Ale',
    style_guide: 'BJCP2015',
    type: 'beer',
    style_id: '18A',
    original_gravity: {
      minimum: {
        unit: 'sg',
        value: 1.038,
      },
      maximum: {
        unit: 'sg',
        value: 1.054,
      },
    },
    final_gravity: {
      minimum: {
        unit: 'sg',
        value: 1.008,
      },
      maximum: {
        unit: 'sg',
        value: 1.013,
      },
    },
    international_bitterness_units: {
      minimum: 15,
      maximum: 28,
    },
    color: {
      minimum: {
        unit: 'SRM',
        value: 3,
      },
      maximum: {
        unit: 'SRM',
        value: 6,
      },
    },
    alcohol_by_volume: {
      minimum: 3.8,
      maximum: 5.5,
    },
  },
  ingredients: {
    fermentable_additions: [
      {
        name: 'Pale Malt, Maris Otter',
        type: 'grain',
        color: {
          unit: 'Lovi',
          value: 2.78,
        },
        amount: {
          unit: 'lb',
          value: 9.3,
        },
        origin: 'United Kingdom',
        yield: {
          potential: {
            unit: 'sg',
            value: 1.03795,
          },
        },
      },
      {
        name: 'Caramel/Crystal Malt - 10L',
        type: 'grain',
        color: {
          unit: 'Lovi',
          value: 7.94,
        },
        amount: {
          unit: 'lb',
          value: 0.5,
        },
        origin: 'US',
        yield: {
          potential: {
            unit: 'sg',
            value: 1.0345,
          },
        },
      },
    ],
    hop_additions: [
      {
        name: 'Tradition',
        alpha_acid: {
          unit: '%',
          value: 6,
        },
        origin: 'Germany',
        form: 'pellet',
        beta_acid: {
          unit: '%',
          value: 4.5,
        },
        amount: {
          unit: 'oz',
          value: 1,
        },
        timing: {
          time: {
            unit: 'min',
            value: 60,
          },
          use: 'add_to_boil',
        },
      },
      {
        name: 'Citra',
        alpha_acid: {
          unit: '%',
          value: 12,
        },
        origin: 'U.S.',
        form: 'leaf',
        beta_acid: {
          unit: '%',
          value: 4,
        },
        amount: {
          unit: 'oz',
          value: 0.5,
        },
        timing: {
          time: {
            unit: 'min',
            value: 2880,
          },
          use: 'add_to_fermentation',
        },
      },
    ],
    culture_additions: [
      {
        name: 'US West Coast',
        attenuation: {
          unit: '%',
          value: 81,
        },
        type: 'ale',
        form: 'dry',
        amount: {
          unit: 'l',
          value: 0,
        },
      },
    ],
  },
  mash: {
    name: 'Single Infusion, Full Body',
    grain_temperature: {
      unit: 'C',
      value: 22.2222222,
    },
    notes:
      'Simple single infusion mash for use with most modern well modified grains (about 95% of the time).',
    mash_steps: [
      {
        name: 'Mash In',
        type: 'infusion',
        step_temperature: {
          unit: 'C',
          value: 68.8888889,
        },
        step_time: {
          unit: 'min',
          value: 45,
        },
        ramp_time: {
          unit: 'min',
          value: 2,
        },
        end_temperature: {
          unit: 'C',
          value: 68.8888889,
        },
        amount: {
          unit: 'l',
          value: 11.5928236,
        },
      },
      {
        name: 'Mash Out',
        type: 'infusion',
        step_temperature: {
          unit: 'C',
          value: 75.5555556,
        },
        step_time: {
          unit: 'min',
          value: 10,
        },
        ramp_time: {
          unit: 'min',
          value: 2,
        },
        end_temperature: {
          unit: 'C',
          value: 75.5555556,
        },
        amount: {
          unit: 'l',
          value: 4.6371294,
        },
      },
    ],
  },
}
export default recipe
