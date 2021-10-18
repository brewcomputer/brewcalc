import { yeastNeeded, yeastCount, yeastStarterGrow } from "../src/culture";
import { carbonation, calcCalories } from "../src/carbonation";

import { sgToPlato, kpaToPsi } from "../src/utils";

import type { Yeast } from "../src/types/yeast";
import { YeastTypes, YeastForms } from "../src/types/yeast";

declare var test: any;
declare var expect: any;

test("yeastNeeded, yeastCount, yeastStarterGrow", () => {
  const yeast: Yeast = {
    name: "German Ale",
    amount: 0.011,
    attenuation: 0,
    type: YeastTypes.ale,
    form: YeastForms.dry,
    cultureDate: "2017-03-06",
  };

  const batchSize = 20.82;
  const pitchRate = yeast.type === YeastTypes.ale ? 0.75 : 1.5;
  const gravity = 1.04;
  const starterSize = 1;

  expect(yeastNeeded(pitchRate, batchSize, sgToPlato(gravity))).toBeCloseTo(
    156,
    0
  );
  expect(yeastCount({ ...yeast })).toBeCloseTo(88, 1);
  expect(
    yeastCount({ ...yeast, form: YeastForms.liquid, amount: 1 }, "2017-06-14")
  ).toBeCloseTo(30, 1);
  expect(
    yeastCount({ ...yeast, form: YeastForms.liquid, amount: 1 }, "2017-03-06")
  ).toBeCloseTo(100, 1);
  expect(
    yeastCount({ ...yeast, form: YeastForms.slant, amount: 1 })
  ).toBeCloseTo(1000, 1);

  expect(() => {
    yeastCount({ ...yeast, form: YeastForms.culture, amount: 1 });
  }).toThrow();

  expect(
    yeastStarterGrow(88, starterSize, gravity, batchSize).growthRate
  ).toBeCloseTo(1.4, 1);

  expect(
    yeastStarterGrow(88, starterSize, gravity, batchSize).endingCount
  ).toBeCloseTo(248, 0);

  expect(
    yeastStarterGrow(88, starterSize, gravity, batchSize).pitchRate
  ).toBeCloseTo(1191038, 0);

  expect(
    yeastStarterGrow(188, starterSize, gravity, batchSize).growthRate
  ).toBeCloseTo(1.2, 1);

  expect(
    yeastStarterGrow(188, starterSize, gravity, batchSize).endingCount
  ).toBeCloseTo(328, 0);

  expect(
    yeastStarterGrow(188, starterSize, gravity, batchSize).pitchRate
  ).toBeCloseTo(1576504, 0);

  expect(
    yeastStarterGrow(488, starterSize, gravity, batchSize).growthRate
  ).toBeCloseTo(0, 1);

  expect(
    yeastStarterGrow(488, starterSize, gravity, batchSize).endingCount
  ).toBeCloseTo(488, 0);

  expect(
    yeastStarterGrow(488, starterSize, gravity, batchSize).pitchRate
  ).toBeCloseTo(2345417, 0);
});

test("carbonation", () => {
  const carbVolume = 2.4;
  const t = 4.4;
  const batchSize = 18.93;

  expect(carbonation(carbVolume, t, batchSize).kegPressure).toBeCloseTo(
    kpaToPsi(77.15),
    1
  );

  expect(carbonation(carbVolume, t, batchSize).kegSugar).toBeCloseTo(35.7, 0);
  expect(carbonation(carbVolume, t, batchSize).cornSugar).toBeCloseTo(71.4, 0);
  expect(carbonation(carbVolume, t, batchSize).dme).toBeCloseTo(109.82, 0);
});

test("calcCalories", () => {
  expect(calcCalories(1.044, 1.008)).toBeCloseTo(143.874, 3);
});
