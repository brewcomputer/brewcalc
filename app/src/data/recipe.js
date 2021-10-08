export const recipe = {
  name: "Aussie Ale",
  version: "1",
  type: "All Grain",
  author: "Steve Nicholls",
  asstBrewer: "",
  batch_size: {
    value: 23.02,
    unit: "l",
  },
  boil: {
    pre_boil_size: {
      value: 37.1203164,
      unit: "l",
    },
    boil_time: { value: 90, unit: "min" },
  },
  efficiency: { brewhouse: { value: 68, unit: "%" } },
  ingredients: {
    fermentable_additions: [
      {
        name: "Pale Malt (2 Row) UK",
        type: "grain",
        amount: { value: 4.4969891, unit: "kg" },
        yield: {
          fine_coarse_difference: { value: 1.5, unit: "%" },
          potential: { value: 1.029992, unit: "sg" },
        },
        color: { value: 4.925, unit: "EBC" },
        origin: "United Kingdom",
        supplier: "",
        notes:
          "Base malt for all English beer styles\r\nLower diastatic power than American 2 Row Pale Malt",
        moisture: {
          value: 4,
          unit: "%",
        },
        diastatic_power: {
          value: 45,
          unit: "Lintner",
        },
        protein: {
          value: 10.1,
          unit: "%",
        },
        max_in_batch: {
          value: 100,
          unit: "%",
        },
        recommend_mash: false,
      },
      {
        name: "Munich Malt - 20L",
        type: "grain",
        amount: { value: 518.8834, unit: "g" },
        yield: {
          fine_coarse_difference: { value: 2.8, unit: "%" },
          potential: { value: 1.0345, unit: "sg" },
        },
        color: { value: 39.4, unit: "EBC" },
        origin: "US",
        supplier: "",
        notes:
          "Malty-sweet flavor characteristic and adds a orange to deep orange color to the beer.\r\nDoes not contribute signficantly to body or head retention.\r\nUse for: Bock, Porter, Marzen, Oktoberfest beers",
        moisture: {
          value: 5,
          unit: "%",
        },
        diastatic_power: {
          value: 25,
          unit: "Lintner",
        },
        protein: {
          value: 13.5,
          unit: "%",
        },
        max_in_batch: {
          value: 80,
          unit: "%",
        },
        recommend_mash: true,
      },
      {
        name: "Caramel/Crystal Malt - 20L",
        type: "grain",
        amount: { value: 0.201788, unit: "kg" },
        yield: {
          fine_coarse_difference: { value: 1.5, unit: "%" },
          potential: { value: 1.0345, unit: "sg" },
        },
        color: { value: 39.4, unit: "EBC" },
        origin: "US",
        supplier: "",
        notes:
          "Adds body, color and improves head retention.\r\nAlso called &#34;Crystal&#34; malt.",
        moisture: {
          value: 4,
          unit: "%",
        },
        diastatic_power: {
          value: 0,
          unit: "Lintner",
        },
        protein: {
          value: 13.2,
          unit: "%",
        },
        max_in_batch: {
          value: 20,
          unit: "%",
        },
        recommend_mash: false,
      },
      {
        name: "Roasted Barley",
        type: "grain",
        amount: { value: 0.046123, unit: "kg" },
        yield: {
          fine_coarse_difference: { value: 1.5, unit: "%" },
          potential: { value: 1.0253, unit: "sg" },
        },
        color: { value: 591.0, unit: "EBC" },
        origin: "US",
        supplier: "",
        notes:
          "Roasted at high temperature to create a burnt, grainy, coffee like flavor.\r\nImparts a red to deep brown color to beer, and very strong roasted flavor.\r\nUse 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor.",
        moisture: {
          value: 5,
          unit: "%",
        },
        diastatic_power: {
          value: 0,
          unit: "Lintner",
        },
        protein: {
          value: 13.2,
          unit: "%",
        },
        max_in_batch: {
          value: 10,
          unit: "%",
        },
        recommend_mash: false,
      },
      {
        name: "Cane (Beet) Sugar",
        type: "sugar",
        amount: { value: 0.2613635, unit: "kg" },
        yield: {
          fine_coarse_difference: { value: 1.5, unit: "%" },
          potential: { value: 1.046, unit: "sg" },
        },
        color: { value: 0, unit: "EBC" },
        origin: "US",
        supplier: "",
        notes:
          "Common household baking sugar.\r\nLightens flavor and body of beer.\r\nCan contribute a cider-like flavor to the beer if not cold-fermented or used in large quantities.",
        moisture: {
          value: 4,
          unit: "%",
        },
        diastatic_power: {
          value: 120,
          unit: "Lintner",
        },
        protein: {
          value: 11.7,
          unit: "%",
        },
        max_in_batch: {
          value: 7,
          unit: "%",
        },
        recommend_mash: false,
      },
    ],
    hop_additions: [
      {
        name: "Pride of Ringwood",
        origin: "Australia",
        alpha_acid: {
          value: 10,
          unit: "%",
        },
        amount: { value: 5.2055, unit: "g" },
        timing: {
          // TODO: first wort???
          use: "add_to_boil",
          time: { value: 60, unit: "min" },
        },
        notes:
          "Use for: General purpose bittering hops for Australian beers\r\nAroma: Moderate citric aroma, clean bittering flavor\r\nSubstitutes: Cluster, Galena",
        type: "Both",
        form: "leaf",
        beta_acid: {
          value: 5.8,
          unit: "%",
        },
        percent_lost: {
          value: 45,
          unit: "%",
        },
      },
      {
        name: "Pride of Ringwood",
        origin: "Australia",
        alpha_acid: {
          value: 10,
          unit: "%",
        },
        amount: { value: 5.2055, unit: "g" },
        timing: {
          use: "add_to_boil",
          time: { value: 45, unit: "min" },
        },
        notes:
          "Use for: General purpose bittering hops for Australian beers\r\nAroma: Moderate citric aroma, clean bittering flavor\r\nSubstitutes: Cluster, Galena",
        type: "bittering",
        form: "pellet",
        beta_acid: {
          value: 5.8,
          unit: "%",
        },
        percent_lost: {
          value: 45,
          unit: "%",
        },
      },
      {
        name: "Pride of Ringwood",
        origin: "Australia",
        alpha_acid: {
          value: 10,
          unit: "%",
        },
        amount: { value: 31.2328, unit: "g" },
        timing: {
          use: "add_to_boil",
          time: { value: 15, unit: "min" },
        },
        notes:
          "Use for: General purpose bittering hops for Australian beers\r\nAroma: Moderate citric aroma, clean bittering flavor\r\nSubstitutes: Cluster, Galena",
        type: "aroma/bittering",
        form: "leaf",
        beta_acid: {
          value: 5.8,
          unit: "%",
        },
        percent_lost: {
          value: 45,
          unit: "%",
        },
      },
      {
        name: "Pride of Ringwood",
        origin: "Australia",
        alpha_acid: {
          value: 10,
          unit: "%",
        },
        amount: { value: 15.6818, unit: "g" },
        timing: {
          use: "add_to_boil",
          time: { value: 0, unit: "min" },
        },
        notes:
          "Use for: General purpose bittering hops for Australian beers\r\nAroma: Moderate citric aroma, clean bittering flavor\r\nSubstitutes: Cluster, Galena",
        type: "bittering",
        form: "leaf",
        beta_acid: {
          value: 5.8,
          unit: "%",
        },
        percent_lost: {
          value: 45,
          unit: "%",
        },
      },
    ],
    culture_additions: [
      {
        name: "American Ale",
        type: "ale",
        form: "liquid",
        amount: {
          value: 0.125048,
          unit: "ml",
        },
        producer: "Wyeast Labs",
        productId: "1056",
        temperature_range: {
          minimum: {
            value: 15.5555556,
            unit: "C",
          },
          maximum: {
            value: 22.2222222,
            unit: "C",
          },
        },
        flocculation: "medium",
        attenuation: { value: 75, unit: "%" },
        notes:
          "Soft, smooth, clean finish.  Very well balanced.  Very versitile -- works well with many ale styles.",
        best_for:
          "American Pale Ale, Scottish Ale, Porters, Sweet Stout, Barley Wine, Alt",
        max_reuse: 5,
        times_cultured: 0,
        addToSecondary: false,
        cultureDate: "18 Jun 2003",
      },
    ],
  },
  style: {
    name: "Australian Ale",
    category: "beer",
    category_number: 1,
    style_letter: "A",
    style_guide: "",
    type: "Ale",
    original_gravity: {
      minimum: {
        value: 1.035,
        unit: "sg",
      },
      maximum: {
        value: 1.06,
        unit: "sg",
      },
    },
    final_gravity: {
      minimum: {
        value: 1.008,
        unit: "sg",
      },
      maximum: {
        value: 1.015,
        unit: "sg",
      },
    },
    international_bitterness_units: {
      minimum: {
        value: 10,
        unit: "IBUs",
      },
      maximum: {
        value: 30,
        unit: "IBUs",
      },
    },
    color: {
      minimum: {
        value: 3.94,
        unit: "EBC",
      },
      maximum: {
        value: 19.7,
        unit: "EBC",
      },
    },
    carbonation: {
      minimum: {
        value: 2.2,
        unit: "vols",
      },
      maximum: {
        value: 2.8,
        unit: "vols",
      },
    },
    alcohol_by_volume: {
      minimum: {
        value: 2,
        unit: "%",
      },
      maximum: {
        value: 5,
        unit: "%",
      },
    },
    notes: "Medium malt with slight grain dryness",
    ingredients: "Pride of Ringwood hops.",
    examples: "Cooper's Pale Ale",
  },
  mash: {
    name: "Single Infusion, Medium Body",
    grain_temperature: {
      value: 22.22,
      unit: "C",
    },
    notes:
      "Simple single infusion mash for use with most modern well modified grains (about 95% of the time).",
    ph: "5.4000000",
    mash_steps: [
      {
        name: "Mash In",
        type: "infusion",
        infuse_temperature: {
          value: 74.1,
          unit: "C",
        },
        amount: {
          value: 16.76,
          //value: 13.7276426,
          unit: "l",
        },
        step_time: {
          value: 60,
          unit: "min",
        },
        step_temperature: {
          value: 66.67,
          unit: "C",
        },
      },
      {
        name: "Mash Out",
        type: "infusion",
        infuse_temperature: {
          value: 98.5,
          unit: "C",
        },
        amount: {
          value: 7.6874799,
          unit: "l",
        },
        step_time: {
          value: 10,
          unit: "min",
        },
        step_temperature: {
          value: 75.55,
          unit: "C",
        },
      },
      {
        name: "Sparge",
        type: "sparge",
        step_temperature: {
          value: 75.5555556,
          unit: "C",
        },
        step_time: {
          value: 10,
          unit: "min",
        },
      },
    ],
  },
  notes:
    "FWH the first  hop addition.\r\nAllow last addition to sit for 5 minutes to release aroma.",
  tasteNotes:
    "Very similar to Australian beers in the 60&#39;s.  Pride of Ringwood is the traditional hop used for a very large number of Australian beers. Although not considered a typical flavour hop it works very well as a single hopped beer.  Aim for 50 - 100 ppm of C",
  tasteRating: "41.0000000",
  og: 1.044,
  fg: 1.008,
  carbonation: "2.4000000",
  fermentationStages: "2",
  primaryAge: "4.0000000",
  primaryTemp: "19.4444444",
  secondaryAge: "10.0000000",
  secondaryTemp: "19.4444444",
  tertiaryAge: "7.0000000",
  age: "30.0000000",
  ageTemp: "18.3333333",
  carbonationUsed: "Bottle with 133.96 g Corn Sugar",
  forcedCarbonation: true,
  primingSugarName: "Corn Sugar",
  primingSugarEquiv: "1.0000000",
  kegPrimingFactor: "0.5000000",
  carbonationTemp: "21.1111111",
  displayCarbTemp: "21.1 C",
  date: "14 May 2011",
  estOg: "1.044 SG",
  estFg: "1.008 SG",
  estColor: "16.8 EBC",
  ibu: "28.0 IBUs",
  ibuMethod: "Tinseth",
  estAbv: "4.7 %",
  abv: "4.7 %",
  actualEfficiency: "68.0 %",
  calories: "405.4 kcal/l",
  displayBatchSize: "23.02 l",
  displayBoilSize: "37.12 l",
  displayOg: "1.044 SG",
  displayFg: "1.008 SG",
  displayPrimaryTemp: "19.4 C",
  displaySecondaryTemp: "19.4 C",
  displayTertiaryTemp: "18.3 C",
  displayAgeTemp: "18.3 C",
};
