import {
  srmToEbc,
  ebcToSrm,
  srmToLovibond,
  lovibondToSrm,
  sgToPlato,
  platoToSG,
  sgToBrix,
  brixToSG,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} from '../utils'

export default {
  mass: {
    metric: {
      toBase: (v) => v,
      fromBase: (v) => v,
      units: {
        mg: {
          ratio: 0.001,
        },
        g: {
          ratio: 1,
        },
        kg: {
          ratio: 1000,
        },
      },
    },
    us: {
      toBase: (v) => v * 453.592,
      fromBase: (v) => v / 453.592,
      units: {
        lb: {
          ratio: 1,
        },
        oz: {
          ratio: 1 / 16,
        },
      },
    },
  },

  volume: {
    metric: {
      toBase: (v) => v,
      fromBase: (v) => v,
      units: {
        l: {
          ratio: 1,
        },
        ml: {
          ratio: 0.001,
        },
      },
    },

    imperial: {
      toBase: (v) => v * 1.136523,
      fromBase: (v) => v / 1.136523,
      units: {
        ifloz: {
          ratio: 1 / 40,
        },
        ipt: {
          ratio: 1 / 2,
        },
        iqt: {
          ratio: 1,
        },
        igal: {
          ratio: 4,
        },
        ibbl: {
          ratio: 144,
        },
      },
    },

    us: {
      toBase: (v) => v * 0.946353,
      fromBase: (v) => v / 0.946353,
      units: {
        tsp: {
          ratio: 1 / 192,
        },
        tbsp: {
          ratio: 1 / 64,
        },
        floz: {
          ratio: 1 / 32,
        },
        cup: {
          ratio: 1 / 4,
        },
        pt: {
          ratio: 1 / 2,
        },
        qt: {
          ratio: 1,
        },
        gal: {
          ratio: 4,
        },
        bbl: {
          ratio: 124,
        },
      },
    },
  },

  color: {
    lovibond: {
      toBase: lovibondToSrm,
      fromBase: srmToLovibond,
      units: {
        Lovi: {
          ratio: 1,
        },
      },
    },

    ebc: {
      toBase: ebcToSrm,
      fromBase: srmToEbc,
      units: {
        EBC: {
          ratio: 1,
        },
      },
    },

    srm: {
      toBase: (v) => v,
      fromBase: (v) => v,
      units: {
        SRM: {
          ratio: 1,
        },
        srm: {
          ratio: 1,
        },
      },
    },
  },

  gravity: {
    sg: {
      toBase: (v) => v,
      fromBase: (v) => v,
      units: {
        sg: {
          ratio: 1,
          precision: 4,
        },
      },
    },

    plato: {
      toBase: platoToSG,
      fromBase: sgToPlato,
      units: {
        plato: {
          ratio: 1,
        },
      },
    },

    brix: {
      toBase: brixToSG,
      fromBase: sgToBrix,
      units: {
        brix: {
          ratio: 1,
        },
      },
    },
  },

  temperature: {
    celsius: {
      toBase: (v) => v,
      fromBase: (v) => v,
      units: {
        C: {
          ratio: 1,
          precision: 0,
        },
      },
    },

    fahrenheit: {
      toBase: fahrenheitToCelsius,
      fromBase: celsiusToFahrenheit,
      units: {
        F: {
          ratio: 1,
          precision: 0,
        },
      },
    },
  },

  time: {
    time: {
      toBase: (v) => v,
      fromBase: (v) => v,
      units: {
        sec: {
          ratio: 1 / 60,
        },
        min: {
          ratio: 1,
        },
        hr: {
          ratio: 60,
        },
        day: {
          ratio: 60 * 24,
        },
        week: {
          ratio: 60 * 24 * 7,
        },
        month: {
          ratio: 60 * 24 * 30,
        },
        year: {
          ratio: 60 * 24 * 365,
        },
      },
    },
  },

  pressure: {
    pressure: {
      toBase: (v) => v,
      fromBase: (v) => v,
      units: {
        kPa: {
          ratio: 1,
        },
        atm: {
          ratio: 101.325,
        },
        bar: {
          ratio: 100,
        },
        psi: {
          ratio: 6.894757,
        },
      },
    },
  },
}
