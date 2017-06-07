export const recipe = {
  name: 'Muddy Pig Oatmeal Stout',
  version: '1',
  type: 'Extract',
  brewer: 'Brian Smith',
  asstBrewer: '',
  batchSize: 18.9300000,
  boilSize: 14.8100000,
  boilTime: 45.0000000,
  efficiency: 0.75,
  hops: [
    {
      name: 'Cluster',
      version: '1',
      origin: 'US',
      alpha: 0.07,
      amount: 0.0283495,
      use: 'Boil',
      time: 45.0000000,
      notes: 'Use for: General purpose bittering hop\nAroma: Sharp aroma and sharp flavor\nSubstitutes: Eroica, Galena',
      type: 'Bittering',
      form: 'Pellet',
      beta: '4.8000000',
      hsi: '10.0000000',
      displayAmount: '1.00 oz',
      inventory: '1.00 oz',
      displayTime: '45.0 min'
    },
    {
      name: 'Williamette',
      version: '1',
      origin: 'US',
      alpha: 0.048000000,
      amount: 0.0283495,
      use: 'Boil',
      time: 45.0000000,
      notes: 'Use for: Finishing American and British Ales\nAroma: Mild, grassy, floral, slightly spicy\nSubstitutes: Fuggles, E.K. Goldings\nExamples: Sierra Nevada Porter, Ballard Bitter',
      type: 'Aroma',
      form: 'Pellet',
      beta: '3.5000000',
      hsi: '40.0000000',
      displayAmount: '1.00 oz',
      inventory: '1.00 oz',
      displayTime: '45.0 min'
    },
    {
      name: 'Williamette',
      version: '1',
      origin: 'US',
      alpha: 0.048000000,
      amount: 0.0283495,
      use: 'Boil',
      time: 6.0000000,
      notes: 'Use for: Finishing American and British Ales\nAroma: Mild, grassy, floral, slightly spicy\nSubstitutes: Fuggles, E.K. Goldings\nExamples: Sierra Nevada Porter, Ballard Bitter',
      type: 'Aroma',
      form: 'Pellet',
      beta: '3.5000000',
      hsi: '40.0000000',
      displayAmount: '1.00 oz',
      inventory: '1.00 oz',
      displayTime: '6.0 min'
    }
  ],
  fermentables: [
    {
      name: 'Caramel/Crystal Malt - 60L',
      version: '1',
      type: 'Grain',
      amount: 0.4535920,
      yield: 0.74,
      color: '60.0000000',
      addAfterBoil: false,
      origin: 'US',
      supplier: '',
      notes: 'Adds body, color and improves head retention.\nAlso called &#34;Crystal&#34; malt.',
      coarseFineDiff: '1.5000000',
      moisture: '4.0000000',
      diastaticPower: '0.0000000',
      protein: '13.2000000',
      maxInBatch: '20.0000000',
      recommendMash: false,
      ibuGalPerLb: '0.0000000',
      displayAmount: '1 lbs',
      inventory: '1 lbs',
      potential: 1.0340400,
      displayColor: '60.0 SRM',
      extractSubstitute: ''
    },
    {
      name: 'Roasted Barley',
      version: '1',
      type: 'Grain',
      amount: 0.2267960,
      yield: 0.55,
      color: '300.0000000',
      addAfterBoil: false,
      origin: 'US',
      supplier: '',
      notes: 'Roasted at high temperature to create a burnt, grainy, coffee like flavor.\nImparts a red to deep brown color to beer, and very strong roasted flavor.\nUse 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor.',
      coarseFineDiff: '1.5000000',
      moisture: '5.0000000',
      diastaticPower: '0.0000000',
      protein: '13.2000000',
      maxInBatch: '10.0000000',
      recommendMash: false,
      ibuGalPerLb: '0.0000000',
      displayAmount: '8.0 oz',
      inventory: '8.0 oz',
      potential: 1.0253000,
      displayColor: '300.0 SRM',
      extractSubstitute: ''
    },
    {
      name: 'Amber Dry Extract',
      version: '1',
      type: 'Dry Extract',
      amount: 0.9071840,
      yield: 0.95,
      color: '12.5000000',
      addAfterBoil: false,
      origin: 'US',
      supplier: '',
      notes: 'Amber colored dry malt extract, for general purpose use.\nUse in any medium to dark colored beer.\nExamples: Ales, Marzens, Amber Ale, India Pale Ale',
      coarseFineDiff: '1.5000000',
      moisture: '4.0000000',
      diastaticPower: '120.0000000',
      protein: '11.7000000',
      maxInBatch: '100.0000000',
      recommendMash: false,
      ibuGalPerLb: '0.0000000',
      displayAmount: '2 lbs',
      inventory: '2 lbs',
      potential: 1.0437000,
      displayColor: '12.5 SRM',
      extractSubstitute: ''
    },
    {
      name: 'Dark Liquid Extract',
      version: '1',
      type: 'Extract',
      amount: 2.7669112,
      yield: 0.78,
      color: '17.5000000',
      addAfterBoil: false,
      origin: 'US',
      supplier: '',
      notes: 'Unhopped dark liquid extract.\nUse as a base malt for any dark beer.\nExamples: Porter, Brown ale, Bock, Oktoberfest, Stouts',
      coarseFineDiff: '1.5000000',
      moisture: '4.0000000',
      diastaticPower: '120.0000000',
      protein: '11.7000000',
      maxInBatch: '100.0000000',
      recommendMash: false,
      ibuGalPerLb: '0.0000000',
      displayAmount: '6 lbs 1.6 oz',
      inventory: '6 lbs 9.6 oz',
      potential: 1.0358800,
      displayColor: '17.5 SRM',
      extractSubstitute: ''
    }
  ],
  miscs: [
    {
      name: 'Oats',
      version: '1',
      type: 'Other',
      use: 'Boil',
      amount: 0.453592,
      time: 0.00,
      amountIsWeight: true,
      useFor: 'mouth-feel',
      notes: 'pre-boil only',
      displayAmount: '1.00 lb',
      inventory: '0.00 lb',
      displayTime: '0.0 mins',
      batchSize: '5.00 gal'
    }
  ],
  yeasts: [
    {
      name: 'Edme Ale Yeast',
      version: '1',
      type: 'Ale',
      form: 'Dry',
      amount: 0.0250096,
      amountIsWeight: false,
      laboratory: 'Edme',
      productId: '-',
      minTemperature: '16.6666667',
      maxTemperature: '22.2222222',
      flocculation: 'Medium',
      attenuation: 0.75,
      notes: 'Quick starting dry yeast with a good reputation. Produces some fruity ester. Highly attentive, so it will likely produce a slightly dry taste.',
      bestFor: 'Ales requiring high attenuation.',
      maxReuse: '5',
      timesCultured: '0',
      addToSecondary: false,
      displayAmount: '25.01 ml',
      dispMinTemp: '62.0 F',
      dispMaxTemp: '72.0 F',
      inventory: '0.0 pkg',
      cultureDate: '14 Jun 2003'
    }
  ],
  style: {
    name: 'Oatmeal Stout',
    version: '1',
    category: 'Stout',
    categoryNumber: '13',
    styleLetter: 'C',
    styleGuide: 'BJCP 2008',
    type: 'Ale',
    ogMin: '1.0480000',
    ogMax: '1.0650000',
    fgMin: '1.0100000',
    fgMax: '1.0180000',
    ibuMin: '25.0000000',
    ibuMax: '40.0000000',
    colorMin: '22.0000000',
    colorMax: '40.0000000',
    carbMin: '1.9000000',
    carbMax: '2.5000000',
    abvMax: '5.9000000',
    abvMin: '4.2000000',
    notes: 'A very dark, full-bodied, roasty, malty ale with a complementary oatmeal flavor. An English seasonal variant of sweet stout that is usually less sweet than the original, and relies on oatmeal for body and complexity rather than lactose for body and sweetness. Generally between sweet and dry stouts in sweetness. Variations exist, from fairly sweet to quite dry. The level of bitterness also varies, as does the oatmeal impression. Light use of oatmeal may give a certain silkiness of body and richness of flavor, while heavy use of oatmeal can be fairly intense in flavor with an almost oily mouthfeel. When judging, allow for differences in interpretation.',
    profile: 'Aroma: Mild roasted grain aromas, often with a coffee-like character. A light sweetness can imply a coffee-and-cream impression. Fruitiness should be low to medium. Diacetyl medium-low to none. Hop aroma low to none (UK varieties most common). A light oatmeal aroma is optional.\nAppearance: Medium brown to black in color. Thick, creamy, persistent tan- to brown-colored head. Can be opaque (if not, it should be clear).\nFlavor: Medium sweet to medium dry palate, with the complexity of oats and dark roasted grains present. Oats can add a nutty, grainy or earthy flavor. Dark grains can combine with malt sweetness to give the impression of milk chocolate or coffee with cream. Medium hop bitterness with the balance toward malt. Diacetyl medium-low to none. Hop flavor medium-low to none.\nMouthfeel: Medium-full to full body, smooth, silky, sometimes an almost oily slickness from the oatmeal. Creamy. Medium to medium-high carbonation.',
    ingredients: 'Pale, caramel and dark roasted malts and grains. Oatmeal (5-10%+) used to enhance fullness of body and complexity of flavor. Hops primarily for bittering.  Ale yeast.  Water source should have some carbonate hardness.',
    examples: 'Samuel Smith Oatmeal Stout, Young&#39;s Oatmeal Stout, McAuslan Oatmeal Stout, Maclay&#8217;s Oat Malt Stout, Broughton Kinmount Willie Oatmeal Stout, Anderson Valley Barney Flats Oatmeal Stout, Tr&#246;egs Oatmeal Stout, New Holland The Poet, Goose Island Oatmeal Stout, Wolaver&#8217;s Oatmeal Stout',
    displayOgMin: '1.048 SG',
    displayOgMax: '1.065 SG',
    displayFgMin: '1.010 SG',
    displayFgMax: '1.018 SG',
    displayColorMin: '22.0 SRM',
    displayColorMax: '40.0 SRM',
    ogRange: '1.048-1.065 SG',
    fgRange: '1.010-1.018 SG',
    ibuRange: '25.0-40.0 IBUs',
    carbRange: '1.90-2.50 Vols',
    colorRange: '22.0-40.0 SRM',
    abvRange: '4.20-5.90 %'
  },
  equipment: {
    name: 'Brew Pot  (5 Gallon)',
    version: '1',
    efficiency: 0.15,
    boilSize: 14.8100000,
    batchSize: 18.9300000,
    tunVolume: '18.9300000',
    tunWeight: '2.2679600',
    tunSpecificHeat: '0.1200000',
    topUpWater: '6.6200000',
    trubChillerLoss: '0.9500000',
    evapRate: 0.091481443,
    boilTime: '45.0000000',
    calcBoilVolume: true,
    lauterDeadspace: '0.9500000',
    topUpKettle: 0.0000000,
    hopUtilization: '100.0000000',
    coolingLossPct: '4.0000000',
    notes: 'Simple Brew Pot with a 5 Gallon Capacity - leaving a workable boil volume of around 4.25 gal.  Used for extract or partial mash brewing.',
    displayBoilSize: '3.91 gal',
    displayBatchSize: '5.00 gal',
    displayTunVolume: '5.00 gal',
    displayTunWeight: '5 lbs',
    displayTopUpWater: '1.75 gal',
    displayTrubChillerLoss: '0.25 gal',
    displayLauterDeadspace: '0.25 gal',
    displayTopUpKettle: '0.00 gal'
  },
  mash: {
    name: 'My Mash',
    version: '1',
    grainTemp: '22.2222222',
    tunTemp: '22.2222222',
    spargeTemp: '75.5555556',
    ph: '5.4000000',
    tunWeight: '80.0000000',
    tunSpecificHeat: '0.1200000',
    equipAdjust: false,
    notes: '',
    displayGrainTemp: '72.0 F',
    displayTunTemp: '72.0 F',
    displaySpargeTemp: '168.0 F',
    displayTunWeight: '5 lbs'
  },
  notes: 'Entered in Montgomery County Fair...finished middle of the pack.',
  tasteNotes: 'This was perhaps the best stout I&#39;ve ever made.  Unfortunately, it can&#39;t be made exactly again because Edme changed the yeast strain after I made this one.  Good memories tho&#39;.',
  tasteRating: '50.0000000',
  og: 1.0630000,
  fg: 1.0150000,
  carbonation: '2.4000000',
  fermentationStages: '2',
  primaryAge: '4.0000000',
  primaryTemp: '19.4444444',
  secondaryAge: '10.0000000',
  secondaryTemp: '19.4444444',
  tertiaryAge: '7.0000000',
  age: '30.0000000',
  ageTemp: '18.3333333',
  carbonationUsed: 'Bottle with 4.20 oz Corn Sugar',
  forcedCarbonation: true,
  primingSugarName: 'Corn Sugar',
  primingSugarEquiv: '1.0000000',
  kegPrimingFactor: '0.5000000',
  carbonationTemp: '21.1111111',
  displayCarbTemp: '70.0 F',
  date: '14 May 2011',
  estOg: '1.060 SG',
  estFg: '1.015 SG',
  estColor: '26.2 SRM',
  ibu: '31.7 IBUs',
  ibuMethod: 'Tinseth',
  estAbv: '5.9 %',
  abv: '6.3 %',
  actualEfficiency: '0.0 %',
  calories: '212.6 kcal/12oz',
  displayBatchSize: '5.00 gal',
  displayBoilSize: '3.91 gal',
  displayOg: '1.063 SG',
  displayFg: '1.015 SG',
  displayPrimaryTemp: '67.0 F',
  displaySecondaryTemp: '67.0 F',
  displayTertiaryTemp: '65.0 F',
  displayAgeTemp: '65.0 F'
}
