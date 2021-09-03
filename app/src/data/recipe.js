export const recipe = {
  name: "Aussie Ale",
  version: "1",
  type: "All Grain",
  brewer: "Steve Nicholls",
  asstBrewer: "",
  batch_size: {
    value: 23.02,
    unit: "l"
  },
  boil: {
    pre_boil_size: {
      value: 37.1203164,
      unit: "l"
    },
    boil_time: { value: 90, unit: "min" }
  },
  efficiency: { brewhouse: { value: 68, unit: "%" } },
  ingredients: {
    fermentable_additions: [
      {
        name: "Pale Malt (2 Row) UK",
        type: "grain",
        amount: { value: 4.4969891, unit: "kg" },
        yield: { potential: { value: 1.029992, unit: "sg" } },
        color: { value: 4.925, unit: "EBC" },
        origin: "United Kingdom",
        supplier: "",
        notes:
          "Base malt for all English beer styles\r\nLower diastatic power than American 2 Row Pale Malt",
        coarseFineDiff: "1.5000000",
        moisture: "4.0000000",
        diastaticPower: "45.0000000",
        protein: "10.1000000",
        maxInBatch: "100.0000000",
        recommendMash: false,
        ibuGalPerLb: "0.0000000",
        displayAmount: "4.50 kg",
        inventory: "3.90 kg",
        displayColor: "4.9 EBC",
        extractSubstitute: ""
      },
      {
        name: "Munich Malt - 20L",
        type: "grain",
        amount: { value: 518.8834, unit: "g" },
        yield: { potential: { value: 1.0345, unit: "sg" } },
        color: { value: 39.4, unit: "EBC" },
        origin: "US",
        supplier: "",
        notes:
          "Malty-sweet flavor characteristic and adds a orange to deep orange color to the beer.\r\nDoes not contribute signficantly to body or head retention.\r\nUse for: Bock, Porter, Marzen, Oktoberfest beers",
        coarseFineDiff: "2.8000000",
        moisture: "5.0000000",
        diastaticPower: "25.0000000",
        protein: "13.5000000",
        maxInBatch: "80.0000000",
        recommendMash: true,
        ibuGalPerLb: "0.0000000",
        displayAmount: "0.52 kg",
        inventory: "0.45 kg",
        displayColor: "39.4 EBC",
        extractSubstitute: "Amber Liquid Extract"
      },
      {
        name: "Caramel/Crystal Malt - 20L",
        type: "grain",
        amount: { value: 0.201788, unit: "kg" },
        yield: { potential: { value: 1.0345, unit: "sg" } },
        color: { value: 39.4, unit: "EBC" },
        origin: "US",
        supplier: "",
        notes:
          "Adds body, color and improves head retention.\r\nAlso called &#34;Crystal&#34; malt.",
        coarseFineDiff: "1.5000000",
        moisture: "4.0000000",
        diastaticPower: "0.0000000",
        protein: "13.2000000",
        maxInBatch: "20.0000000",
        recommendMash: false,
        ibuGalPerLb: "0.0000000",
        displayAmount: "0.20 kg",
        inventory: "0.17 kg",
        displayColor: "39.4 EBC",
        extractSubstitute: ""
      },
      {
        name: "Roasted Barley",
        type: "grain",
        amount: { value: 0.046123, unit: "kg" },
        yield: { potential: { value: 1.0253, unit: "sg" } },
        color: { value: 591.0, unit: "EBC" },
        addAfterBoil: false,
        origin: "US",
        supplier: "",
        notes:
          "Roasted at high temperature to create a burnt, grainy, coffee like flavor.\r\nImparts a red to deep brown color to beer, and very strong roasted flavor.\r\nUse 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor.",
        coarseFineDiff: "1.5000000",
        moisture: "5.0000000",
        diastaticPower: "0.0000000",
        protein: "13.2000000",
        maxInBatch: "10.0000000",
        recommendMash: false,
        ibuGalPerLb: "0.0000000",
        displayAmount: "0.05 kg",
        inventory: "0.04 kg",
        displayColor: "591.0 EBC",
        extractSubstitute: ""
      },
      {
        name: "Cane (Beet) Sugar",
        type: "sugar",
        amount: { value: 0.2613635, unit: "kg" },
        yield: { potential: { value: 1.046, unit: "sg" } },
        color: { value: 0, unit: "EBC" },
        origin: "US",
        supplier: "",
        notes:
          "Common household baking sugar.\r\nLightens flavor and body of beer.\r\nCan contribute a cider-like flavor to the beer if not cold-fermented or used in large quantities.",
        coarseFineDiff: "1.5000000",
        moisture: "4.0000000",
        diastaticPower: "120.0000000",
        protein: "11.7000000",
        maxInBatch: "7.0000000",
        recommendMash: false,
        ibuGalPerLb: "0.0000000",
        displayAmount: "0.26 kg",
        inventory: "0.25 kg",
        displayColor: "0.0 EBC",
        extractSubstitute: ""
      }
    ],
    hop_additions: [
      {
        name: "Pride of Ringwood",
        origin: "Australia",
        alpha_acid: {
          value: 10,
          unit: "%"
        },
        amount: { value: 5.2055, unit: "g" },
        timing: {
          // TODO: first wort???
          use: "add_to_boil",
          time: { value: 60, unit: "min" }
        },
        notes:
          "Use for: General purpose bittering hops for Australian beers\r\nAroma: Moderate citric aroma, clean bittering flavor\r\nSubstitutes: Cluster, Galena",
        type: "Both",
        form: "Leaf",
        beta: "5.8000000",
        hsi: "45.0000000",
        displayAmount: "5.21 g",
        inventory: "5.00 g",
        displayTime: "60.0 min"
      },
      {
        name: "Pride of Ringwood",
        origin: "Australia",
        alpha_acid: {
          value: 10,
          unit: "%"
        },
        amount: { value: 5.2055, unit: "g" },
        timing: {
          use: "add_to_boil",
          time: { value: 45, unit: "min" }
        },
        notes:
          "Use for: General purpose bittering hops for Australian beers\r\nAroma: Moderate citric aroma, clean bittering flavor\r\nSubstitutes: Cluster, Galena",
        type: "Bittering",
        form: "Pellet",
        beta: "5.8000000",
        hsi: "45.0000000",
        displayAmount: "5.21 g",
        inventory: "5.00 g",
        displayTime: "45.0 min"
      },
      {
        name: "Pride of Ringwood",
        origin: "Australia",
        alpha_acid: {
          value: 10,
          unit: "%"
        },
        amount: { value: 31.2328, unit: "g" },
        timing: {
          use: "add_to_boil",
          time: { value: 15, unit: "min" }
        },
        notes:
          "Use for: General purpose bittering hops for Australian beers\r\nAroma: Moderate citric aroma, clean bittering flavor\r\nSubstitutes: Cluster, Galena",
        type: "Both",
        form: "Leaf",
        beta: "5.8000000",
        hsi: "45.0000000",
        displayAmount: "31.23 g",
        inventory: "30.00 g",
        displayTime: "15.0 min"
      },
      {
        name: "Pride of Ringwood",
        origin: "Australia",
        alpha_acid: {
          value: 10,
          unit: "%"
        },
        amount: { value: 15.6818, unit: "g" },
        timing: {
          use: "add_to_boil",
          time: { value: 0, unit: "min" }
        },
        notes:
          "Use for: General purpose bittering hops for Australian beers\r\nAroma: Moderate citric aroma, clean bittering flavor\r\nSubstitutes: Cluster, Galena",
        type: "Bittering",
        form: "Leaf",
        beta: "5.8000000",
        hsi: "45.0000000",
        displayAmount: "15.68 g",
        inventory: "15.00 g",
        displayTime: "0.0 min"
      }
    ],
    culture_additions: [
      {
        name: "American Ale",
        type: "ale",
        form: "liquid",
        amount: 0.125048,
        amountIsWeight: false,
        laboratory: "Wyeast Labs",
        productId: "1056",
        minTemperature: "15.5555556",
        maxTemperature: "22.2222222",
        flocculation: "Medium",
        attenuation: { value: 75, unit: "%" },
        notes:
          "Soft, smooth, clean finish.  Very well balanced.  Very versitile -- works well with many ale styles.",
        bestFor:
          "American Pale Ale, Scottish Ale, Porters, Sweet Stout, Barley Wine, Alt",
        maxReuse: "5",
        timesCultured: "0",
        addToSecondary: false,
        displayAmount: "125.05 ml",
        dispMinTemp: "15.6 C",
        dispMaxTemp: "22.2 C",
        inventory: "0.0 pkg",
        cultureDate: "18 Jun 2003"
      }
    ]
  },
  style: {
    name: "Australian Ale",
    category: "Ale",
    categoryNumber: "1",
    styleLetter: "A",
    styleGuide: "",
    type: "Ale",
    ogMin: "1.0350000",
    ogMax: "1.0600000",
    fgMin: "1.0080000",
    fgMax: "1.0150000",
    ibuMin: "10.0000000",
    ibuMax: "30.0000000",
    colorMin: "3.9400000",
    colorMax: "19.7000000",
    carbMin: "2.2000000",
    carbMax: "2.8000000",
    abvMax: "5.0000000",
    abvMin: "2.0000000",
    notes: "Medium malt with slight grain dryness",
    profile: "",
    ingredients: "Pride of Ringwood hops.",
    examples: "Cooper&#39;s Pale Ale",
    displayOgMin: "1.035 SG",
    displayOgMax: "1.060 SG",
    displayFgMin: "1.008 SG",
    displayFgMax: "1.015 SG",
    displayColorMin: "3.9 EBC",
    displayColorMax: "19.7 EBC",
    ogRange: "1.035-1.060 SG",
    fgRange: "1.008-1.015 SG",
    ibuRange: "10.0-30.0 IBUs",
    carbRange: "2.20-2.80 Vols",
    colorRange: "3.9-19.7 EBC",
    abvRange: "2.00-5.00 %"
  },

  mash: {
    name: "Single Infusion, Medium Body",
    grain_temperature: {
      value: 22.22,
      unit: "C"
    },
    spargeTemp: 75.5555556,
    ph: "5.4000000",
    tunWeight: "144.0000000",
    tunSpecificHeat: "0.3000000",
    equipAdjust: true,
    notes:
      "Simple single infusion mash for use with most modern well modified grains (about 95% of the time).",
    displayGrainTemp: "22.2 C",
    displayTunTemp: "22.2 C",
    displaySpargeTemp: "75.6 C",
    displayTunWeight: "4.08 kg",
    mash_steps: [
      {
        name: "Mash In",
        type: "infusion",
        infuse_temperature: {
          value: 74.1,
          unit: "C"
        },
        amount: {
          value: 16.76,
          //value: 13.7276426,
          unit: "l"
        },
        step_time: {
          value: 60,
          unit: "min"
        },
        step_temperature: {
          value: 66.67,
          unit: "C"
        }
      },
      {
        name: "Mash Out",
        type: "infusion",
        infuse_temperature: {
          value: 98.5,
          unit: "C"
        },
        amount: {
          value: 7.6874799,
          unit: "l"
        },
        step_time: {
          value: 10,
          unit: "min"
        },
        step_temperature: {
          value: 75.55,
          unit: "C"
        }
      }
    ]
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
  displayAgeTemp: "18.3 C"
};
