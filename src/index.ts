import { yeastCount, yeastNeeded, yeastStarterGrow } from "./culture";
import { calcCalories, carbonation } from "./carbonation";

import {
  bitternessIbuRager,
  bitternessIbuTinseth,
  bitternessRatio,
} from "./hops";

import { isNotEmptyArray, roundMeasurable } from "./utils";

import { convertMeasurableValue } from "./units";
import { convert } from "./converter/converter";

import {
  calcMashGrainWeight,
  recalculateMashSteps,
  updateSpargeVolume,
} from "./mash";
import { calcBoilVolumes, calcMashVolumes } from "./volumes";
import { calcWaterChemistry } from "./waterChem";

import type {
  RecipeType,
  MashProcedureType,
  EquipmentItemType,
  GravityType,
  ColorType,
  PercentType,
  BitternessType,
  CultureAdditionType,
  VolumeType,
  BoilProcedureType,
} from "./types/beerjson";

import {
  calcOriginalGravity,
  calcFinalGravity,
  calcBoilGravity,
} from "./gravity";
import { srmToCss, srmToRgb, calcColor } from "./color";
import { calcABV } from "./abv";

type Stats = {
  original_gravity: GravityType;
  final_gravity: GravityType;
  alcohol_by_volume: PercentType;
  ibu_estimate: BitternessType;
  color_estimate: ColorType;
};

type Volumes = {
  sparge_volume?: VolumeType;
  mash_volume?: VolumeType;
  total_volume?: VolumeType;
};

const calculateRecipeBeerJSON = (
  recipe: RecipeType,
  mash: MashProcedureType,
  equipment: {
    hlt?: EquipmentItemType;
    mash_tun?: EquipmentItemType;
    brew_kettle?: EquipmentItemType;
    fermenter?: EquipmentItemType;
  }
): {
  stats: Stats;
  mash: MashProcedureType;
  boil: BoilProcedureType;
  volumes: Volumes;
} => {
  const { batch_size, boil, efficiency, ingredients } = recipe;

  const { fermentable_additions, hop_additions, culture_additions } =
    ingredients;

  let original_gravity: GravityType = {
    unit: "sg",
    value: null,
  };
  let final_gravity: GravityType = {
    unit: "sg",
    value: null,
  };
  let color: ColorType = {
    unit: "SRM",
    value: null,
  };
  let ibu: BitternessType = {
    unit: "IBUs",
    value: null,
  };
  let abv: PercentType = {
    unit: "%",
    value: null,
  };
  let volumes = null;
  let calculatedMash = null;
  let calculatedBoil = null;

  if (isNotEmptyArray(fermentable_additions)) {
    original_gravity = calcOriginalGravity(
      batch_size,
      fermentable_additions,
      efficiency
    );

    const defaultCultureAddition: CultureAdditionType = {
      name: "Default Culture",
      type: "ale",
      form: "liquid",
      attenuation: { value: 75, unit: "%" },
    };

    final_gravity = calcFinalGravity(
      batch_size,
      fermentable_additions,
      efficiency,
      isNotEmptyArray(culture_additions)
        ? culture_additions
        : [defaultCultureAddition]
    );

    abv = calcABV(original_gravity, final_gravity);

    const { pre_boil_size } = calcBoilVolumes(batch_size, boil, equipment);
    volumes = {
      pre_boil_size,
    };

    if (mash) {
      const mashGrainWeight = calcMashGrainWeight(fermentable_additions);

      const mashSteps = recalculateMashSteps(
        mash.mash_steps,
        mash.grain_temperature,
        mashGrainWeight
      );

      const { sparge_volume, mash_volume, total_volume } = calcMashVolumes(
        pre_boil_size,
        mashSteps,
        mashGrainWeight,
        equipment
      );

      volumes = {
        ...volumes,
        sparge_volume,
        mash_volume,
        total_volume,
      };

      calculatedMash = {
        ...mash,
        mash_steps: updateSpargeVolume(mashSteps, sparge_volume),
      };
    }

    if (boil) {
      calculatedBoil = { ...boil, pre_boil_size };
    }

    color = calcColor(fermentable_additions, batch_size);

    if (isNotEmptyArray(hop_additions)) {
      const boilGravity = calcBoilGravity(
        batch_size,
        pre_boil_size,
        original_gravity
      );
      ibu = bitternessIbuTinseth(hop_additions, boilGravity, batch_size);
    }
  }

  return {
    stats: {
      original_gravity: roundMeasurable(original_gravity, 3),
      final_gravity: roundMeasurable(final_gravity, 3),
      alcohol_by_volume: roundMeasurable(abv, 1),
      ibu_estimate: roundMeasurable(ibu, 1),
      color_estimate: roundMeasurable(color, 1),
    },
    volumes,
    mash: calculatedMash,
    boil: calculatedBoil,
  };
};

export {
  convert,
  convertMeasurableValue,
  calcOriginalGravity,
  calcFinalGravity,
  calcBoilGravity,
  calcColor,
  srmToCss,
  srmToRgb,
  calcABV,
  bitternessIbuRager,
  bitternessIbuTinseth,
  bitternessRatio,
  calculateRecipeBeerJSON,
  calcBoilVolumes,
  calcMashVolumes,
  calcMashGrainWeight,
  recalculateMashSteps,
  //TODO: use beerJSON
  calcCalories,
  carbonation,
  yeastCount,
  yeastNeeded,
  yeastStarterGrow,
};
