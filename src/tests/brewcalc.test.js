import { srmToCss, calcWater, calcEstimatedOG, sum } from "../brewcalc"
import { spitfireRecipe } from "./data/spitfireRecipe"
import { brewhouse } from "./data/brewhouse"

test("srm2css", () => {
  const cssColor = srmToCss(19.5)
  expect(cssColor).toMatchSnapshot()
})

test("calcWater", () => {
  const calcResults = calcWater({
    batchSize: 10,
    ...brewhouse,
    totalGrains: 18
  })

  expect(calcResults).toBeDefined()
  expect(calcResults.totalWater).toBeCloseTo(13.635, 3)
  expect(calcResults.preBoilWaterVol).toBeCloseTo(11.375, 3)
  expect(calcResults.postBoilVol).toBeCloseTo(10.2, 3)
  expect(calcResults.hotPostBoilVol).toBeCloseTo(10.625, 3)
})

test("calcEstimatedOG", () => {
  const totalGrains = sum(
    spitfireRecipe.fermentables.map(
      ({ amount, mashed }) => (mashed ? amount : 0)
    )
  )

  const waterPostBoilVol = calcWater({
    batchSize: spitfireRecipe.batchSize,
    ...brewhouse,
    totalGrains: totalGrains
  }).postBoilVol

  const eOG = calcEstimatedOG({
    fermentables: spitfireRecipe.fermentables,
    waterPostBoilVol: waterPostBoilVol,
    mashEfficiency: spitfireRecipe.mashEfficiency
  })
  expect(eOG).toBeCloseTo(1.05485, 4)
})
