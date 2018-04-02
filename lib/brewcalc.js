(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("brewcalc", [], factory);
	else if(typeof exports === 'object')
		exports["brewcalc"] = factory();
	else
		root["brewcalc"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// @flow
/*:: import type { Recipe } from './types/recipe'*/
/*:: import type { Equipment } from './types/equipment'*/
var kgToOunces = exports.kgToOunces = function kgToOunces(k /*: number*/) {
  return k * 35.2739619;
};

var kgToPounds = exports.kgToPounds = function kgToPounds(k /*: number*/) {
  return kgToOunces(k) / 16;
};

var poundsTokg = exports.poundsTokg = function poundsTokg(p /*: number*/) {
  return p / 2.204;
};

var litersToOunces = exports.litersToOunces = function litersToOunces(l /*: number*/) {
  return l / 0.0295735;
};

var ouncesToLiters = exports.ouncesToLiters = function ouncesToLiters(o /*: number*/) {
  return o * 0.0295735;
};

var litersToGallons = exports.litersToGallons = function litersToGallons(l /*: number*/) {
  return litersToOunces(l) / 128;
};

var fahrenheitToCelsius = exports.fahrenheitToCelsius = function fahrenheitToCelsius(f /*: number*/) {
  return (f - 32) / 1.8;
};

var celsiusToFahrenheit = exports.celsiusToFahrenheit = function celsiusToFahrenheit(c /*: number*/) {
  return c * 1.8 + 32;
};

var kpaToPsi = exports.kpaToPsi = function kpaToPsi(kpa /*: number*/) {
  return kpa * 0.14503773773020923;
};

var psiTokpa = exports.psiTokpa = function psiTokpa(psi /*: number*/) {
  return psi * 6.894757293168361;
};

var sgToPlato = exports.sgToPlato = function sgToPlato(sg /*: number*/) {
  return -668.962 + 1262.45 * sg - 776.43 * Math.pow(sg, 2) + 182.94 * Math.pow(sg, 3);
};

var platoTosg = exports.platoTosg = function platoTosg(e /*: number*/) {
  return 1 + e / (258.6 - e / 258.2 * 227.1);
};

var srmToEbc = exports.srmToEbc = function srmToEbc(srm /*: number*/) {
  return srm * 1.97;
};

var ebcToSrm = exports.ebcToSrm = function ebcToSrm(ebc /*: number*/) {
  return ebc * 0.508;
};

var srmToLovibond = exports.srmToLovibond = function srmToLovibond(srm /*: number*/) {
  return (srm + 0.76) / 1.3546;
};

var lovibondToSrm = exports.lovibondToSrm = function lovibondToSrm(lovibond /*: number*/) {
  return 1.3546 * lovibond - 0.76;
};

var sum = exports.sum = function sum(array /*: Array<number>*/) {
  return array.reduce(function (pv, cv) {
    return pv + cv;
  }, 0);
};

var scaleIngredients = function scaleIngredients(scaleFactor /*: number*/, ingredients /*: any*/) {
  return ingredients.map(function (i) {
    return _extends({}, i, {
      amount: scaleFactor * i.amount
    });
  });
};

var scaleRecipe = exports.scaleRecipe = function scaleRecipe(r /*: Recipe*/, _ref) {
  var batchSize = _ref.batchSize;

  var scaleFactor /*: number*/ = batchSize / r.batchSize;

  return _extends({}, r, {
    batchSize: batchSize,
    fermentables: scaleIngredients(scaleFactor, r.fermentables),
    hops: scaleIngredients(scaleFactor, r.hops)
  });
};

var capitalize = exports.capitalize = function capitalize(str /*: string*/) /*: string*/ {
  var words /*: Array<string>*/ = str.split(' ');
  var capitalizedWords /*: Array<string>*/ = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(' ');
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow
/*:: export type Fermentable = {
  name: string,
  color: number,
  amount: number,
  yield: number,
  potential: number,
  addAfterBoil?: boolean,
  type: 'Grain' | 'Sugar' | 'Extract' | 'Dry Extract' | 'Adjunct'
}*/
var FermentableTypes = exports.FermentableTypes = {
  grain: 'Grain',
  sugar: 'Sugar',
  extract: 'Extract',
  dryExtract: 'Dry Extract',
  adjunct: 'Adjunct'
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

// Mash type May be “Infusion”, “Temperature” or “Decoction” depending on the type of step.
// Infusion denotes adding hot water, Temperature denotes heating with an outside heat source, and decoction denotes drawing off some mash for boiling.
/*:: export type MashStep = {
  name: string,
  type: 'Infusion' | 'Temperature' | 'Decoction',
  infuseAmount: number,
  stepTemp: number,
  stepTime: number,
  rampTime?: number,
  endTemp?: number
}*/
var MashType = exports.MashType = {
  infusion: 'Infusion',
  temperature: 'Temperature',
  decoction: 'Decoction'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow
/*:: export type Yeast = {
  name: string,
  amount: number,
  attenuation?: number,
  form: 'Liquid' | 'Dry' | 'Slant' | 'Culture',
  type: 'Ale' | 'Lager' | 'Wheat' | 'Wine' | 'Champagne',
  cultureDate?: string
}*/
var YeastTypes = exports.YeastTypes = {
  ale: 'Ale',
  lager: 'Lager',
  wheat: 'Wheat',
  wine: 'Wine',
  champagne: 'Champagne'
};
var YeastForms = exports.YeastForms = {
  liquid: 'Liquid',
  dry: 'Dry',
  slant: 'Slant',
  culture: 'Culture'
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow


// Hop USE May be "Boil", "Dry Hop", "Mash", "First Wort" or "Aroma".
// Note that "Aroma" and "Dry Hop" do not contribute to the bitterness of the beer while the others do.
// Aroma hops are added after the boil and do not contribute substantially to beer bitterness.
/*:: export type Hop = {
  name: string,
  alpha: number,
  amount: number,
  use: 'Boil' | 'Dry Hop' | 'Mash' | 'First Wort' | 'Aroma',
  time: number,
  form?: 'Pellet' | 'Plug' | 'Leaf'
}*/
var HopUse = exports.HopUse = {
  boil: 'Boil',
  dryHop: 'Dry Hop',
  mash: 'Mash',
  firstWort: 'First Wort',
  aroma: 'Aroma'

  // Hop FORM May be "Pellet", "Plug" or "Leaf"
};var HopForms = exports.HopForms = {
  pellet: 'Pellet',
  plug: 'Plug',
  leaf: 'Leaf'
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importFromBeerXml = exports.YeastTypes = exports.YeastForms = exports.MashType = exports.HopUse = exports.HopForms = exports.RecipeTypes = exports.FermentableTypes = exports.calcWaterChemistry = exports.calculateVolumes = exports.scaleRecipe = exports.sum = exports.lovibondToSrm = exports.srmToLovibond = exports.ebcToSrm = exports.srmToEbc = exports.platoTosg = exports.sgToPlato = exports.psiTokpa = exports.kpaToPsi = exports.celsiusToFahrenheit = exports.fahrenheitToCelsius = exports.litersToGallons = exports.ouncesToLiters = exports.litersToOunces = exports.poundsTokg = exports.kgToPounds = exports.kgToOunces = exports.mashRecalculate = exports.bitternessIbuRager = exports.ragerHopIbu = exports.bitternessRatio = exports.bitternessIbuTinseth = exports.calcCalories = exports.carbonation = exports.yeastStarterGrow = exports.yeastCount = exports.yeastNeeded = exports.srmToCss = exports.colorSRM = exports.srmToRgb = exports.estABVrealExtract = exports.estABV = exports.estABW = exports.gravityPoints = exports.boilGravity = exports.finalGravity = exports.originalGravity = exports.calculateRecipeBeerJSON = exports.calculateRecipe = undefined;

var _brewcalc = __webpack_require__(7);

var _hops = __webpack_require__(8);

var _mash = __webpack_require__(9);

var _utils = __webpack_require__(0);

var _volumes = __webpack_require__(10);

var _waterChem = __webpack_require__(11);

var _fermentable = __webpack_require__(1);

var _hop = __webpack_require__(4);

var _mashStep = __webpack_require__(2);

var _recipe = __webpack_require__(12);

var _yeast = __webpack_require__(3);

var _importFromBeerXml = __webpack_require__(13);

// @flow
/*:: import type { Recipe } from './types/recipe'*/
/*:: import type { RecipeBeerJSON } from './types/beerjson'*/


var calculateRecipeBeerJSON = function calculateRecipeBeerJSON(_ref) {
  var batch_size = _ref.batch_size,
      boil_size = _ref.boil_size,
      boil_time = _ref.boil_time,
      ingredients = _ref.ingredients,
      efficiency = _ref.efficiency,
      mash = _ref.mash;

  var batchSize = batch_size ? batch_size.value : null;
  var boilSize = boil_size ? boil_size.value : null;
  var boilTime = boil_time ? boil_time.value : null;
  var brewHouseEff = efficiency ? efficiency.brewhouse / 100 : null;

  var fermentables = null,
      hops = null,
      yeasts = null;

  if (ingredients) {
    var fermentable_bill = ingredients.fermentable_bill,
        hop_bill = ingredients.hop_bill,
        culture_additions = ingredients.culture_additions;


    fermentables = Array.isArray(fermentable_bill) ? // $FlowFixMe
    fermentable_bill.map(function (item) {
      return {
        type: (0, _utils.capitalize)(item.type),
        amount: item.amount.value,
        potential: item.yield * 0.01 * 46 / 1000 + 1,
        color: item.color.value
      };
    }) : null;

    hops = Array.isArray(hop_bill) ? // $FlowFixMe
    hop_bill.map(function (item) {
      return {
        amount: item.amount.value,
        alpha: item.alpha_acid_units / 100,
        form: (0, _utils.capitalize)(item.form),
        time: item.time.value,
        use: (0, _utils.capitalize)(item.use)
      };
    }) : null;

    yeasts = Array.isArray(culture_additions) ? // $FlowFixMe
    culture_additions.map(function (item) {
      return {
        attenuation: item.attenuation / 100
      };
    }) : null;
  }

  var mashSteps = null;
  if (mash && Array.isArray(mash.mash_steps)) {
    mashSteps = {
      // $FlowFixMe
      mashSteps: mash.mash_steps.map(function (item) {
        return {
          type: (0, _utils.capitalize)(item.type),
          infuseAmount: item.infuse_amount.value
        };
      })
    };
  }

  // $FlowFixMe
  return calculateRecipe({
    batchSize: batchSize,
    boilSize: boilSize,
    boilTime: boilTime,
    fermentables: fermentables,
    hops: hops,
    yeasts: yeasts,
    efficiency: brewHouseEff,
    // $FlowFixMe
    mash: mashSteps
  });
};

var calculateRecipe = function calculateRecipe(_ref2) {
  var batchSize = _ref2.batchSize,
      boilSize = _ref2.boilSize,
      boilTime = _ref2.boilTime,
      fermentables = _ref2.fermentables,
      efficiency = _ref2.efficiency,
      yeasts = _ref2.yeasts,
      hops = _ref2.hops,
      mash = _ref2.mash;

  var og = null,
      fg = null,
      ibu = null,
      abv = null,
      colorSRMvalue = null,
      volumes = null;

  if (batchSize && fermentables && efficiency) {
    og = (0, _brewcalc.originalGravity)(batchSize, (0, _brewcalc.gravityPoints)(fermentables, efficiency));

    colorSRMvalue = (0, _brewcalc.colorSRM)(fermentables, batchSize);

    if (yeasts) {
      fg = (0, _brewcalc.finalGravity)(batchSize, (0, _brewcalc.gravityPoints)(fermentables, efficiency, yeasts[0].attenuation));

      abv = (0, _brewcalc.estABVrealExtract)(Number(og.toFixed(3)), Number(fg.toFixed(2)));
      var calories = (0, _brewcalc.calcCalories)(Number(og.toFixed(3)), Number(fg.toFixed(2)));
      var caloriesInOneL = calories / (12 * (0, _utils.ouncesToLiters)(1));
    }

    if (hops && boilSize) {
      var avgBoilGravityPts = (0, _brewcalc.boilGravity)(batchSize, boilSize, og) - 1;
      ibu = (0, _hops.bitternessIbuTinseth)(hops, avgBoilGravityPts, batchSize);
    }
  }

  if (mash && boilTime && fermentables && boilSize) {
    // $FlowFixMe
    volumes = (0, _volumes.calculateVolumes)({ fermentables: fermentables, mash: mash, boilTime: boilTime }, { boilSize: boilSize });
  }

  return {
    stats: {
      og: og && Number(og.toFixed(3)),
      fg: fg && Number(fg.toFixed(3)),
      ibu: ibu && Number(ibu.toFixed(1)),
      color: colorSRMvalue && Number(colorSRMvalue.toFixed(1)),
      abv: abv && Number((abv / 100).toFixed(3))
    },
    volumes: volumes
  };
};

exports.calculateRecipe = calculateRecipe;
exports.calculateRecipeBeerJSON = calculateRecipeBeerJSON;
exports.originalGravity = _brewcalc.originalGravity;
exports.finalGravity = _brewcalc.finalGravity;
exports.boilGravity = _brewcalc.boilGravity;
exports.gravityPoints = _brewcalc.gravityPoints;
exports.estABW = _brewcalc.estABW;
exports.estABV = _brewcalc.estABV;
exports.estABVrealExtract = _brewcalc.estABVrealExtract;
exports.srmToRgb = _brewcalc.srmToRgb;
exports.colorSRM = _brewcalc.colorSRM;
exports.srmToCss = _brewcalc.srmToCss;
exports.yeastNeeded = _brewcalc.yeastNeeded;
exports.yeastCount = _brewcalc.yeastCount;
exports.yeastStarterGrow = _brewcalc.yeastStarterGrow;
exports.carbonation = _brewcalc.carbonation;
exports.calcCalories = _brewcalc.calcCalories;
exports.bitternessIbuTinseth = _hops.bitternessIbuTinseth;
exports.bitternessRatio = _hops.bitternessRatio;
exports.ragerHopIbu = _hops.ragerHopIbu;
exports.bitternessIbuRager = _hops.bitternessIbuRager;
exports.mashRecalculate = _mash.mashRecalculate;
exports.kgToOunces = _utils.kgToOunces;
exports.kgToPounds = _utils.kgToPounds;
exports.poundsTokg = _utils.poundsTokg;
exports.litersToOunces = _utils.litersToOunces;
exports.ouncesToLiters = _utils.ouncesToLiters;
exports.litersToGallons = _utils.litersToGallons;
exports.fahrenheitToCelsius = _utils.fahrenheitToCelsius;
exports.celsiusToFahrenheit = _utils.celsiusToFahrenheit;
exports.kpaToPsi = _utils.kpaToPsi;
exports.psiTokpa = _utils.psiTokpa;
exports.sgToPlato = _utils.sgToPlato;
exports.platoTosg = _utils.platoTosg;
exports.srmToEbc = _utils.srmToEbc;
exports.ebcToSrm = _utils.ebcToSrm;
exports.srmToLovibond = _utils.srmToLovibond;
exports.lovibondToSrm = _utils.lovibondToSrm;
exports.sum = _utils.sum;
exports.scaleRecipe = _utils.scaleRecipe;
exports.calculateVolumes = _volumes.calculateVolumes;
exports.calcWaterChemistry = _waterChem.calcWaterChemistry;
exports.FermentableTypes = _fermentable.FermentableTypes;
exports.RecipeTypes = _recipe.RecipeTypes;
exports.HopForms = _hop.HopForms;
exports.HopUse = _hop.HopUse;
exports.MashType = _mashStep.MashType;
exports.YeastForms = _yeast.YeastForms;
exports.YeastTypes = _yeast.YeastTypes;
exports.importFromBeerXml = _importFromBeerXml.importFromBeerXml;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcCalories = exports.carbonation = exports.yeastStarterGrow = exports.yeastCount = exports.yeastNeeded = exports.srmToCss = exports.colorSRM = exports.srmToRgb = exports.estABVrealExtract = exports.estABV = exports.estABW = exports.gravityPoints = exports.boilGravity = exports.finalGravity = exports.originalGravity = undefined;

var _fermentable = __webpack_require__(1);

var _utils = __webpack_require__(0);

var _yeast = __webpack_require__(3);

/*:: import type { Fermentable } from './types/fermentable'*/ // @flow

/*:: import type { Yeast } from './types/yeast'*/
var originalGravity = exports.originalGravity = function originalGravity(batchSize /*: number*/, ogPts /*: number*/) {
  return 1.0 + ogPts / (0, _utils.litersToGallons)(batchSize);
};

var finalGravity = exports.finalGravity = function finalGravity(batchSize /*: number*/, fgPts /*: number*/) {
  return 1.0 + fgPts / (0, _utils.litersToGallons)(batchSize);
};

var boilGravity = exports.boilGravity = function boilGravity(batchSize /*: number*/, boilSize /*: number*/, og /*: number*/) {
  return 1 + (og - 1) * (0, _utils.litersToGallons)(batchSize) / (0, _utils.litersToGallons)(boilSize);
};

// Sugar provides 46 gravity points per pound, per gallon (PPPG).
// 1 pound = 16 oz (weight/mass)
// 1 gallon = 128 fl oz
// yield and efficiency should be parsed from recipe as percent values
// The maximum potential is approximately 1.046 which would be a pound of pure sugar in a gallon of water.

var fermentableGravityPoints = function fermentableGravityPoints(potential, amount) {
  var efficiency = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return (potential - 1) * (0, _utils.kgToPounds)(amount) * efficiency;
};

var fermentableEfficiency = function fermentableEfficiency(type, equipmentEfficiency) {
  var sugarEfficiency = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return type === _fermentable.FermentableTypes.extract || type === _fermentable.FermentableTypes.sugar || type === _fermentable.FermentableTypes.dryExtract ? sugarEfficiency : equipmentEfficiency;
};

var gravityPoints = exports.gravityPoints = function gravityPoints(fermentables /*: Array<Fermentable>*/, efficiency /*: number*/) {
  var attenutation /*: number*/ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return (0, _utils.sum)(fermentables.map(function (_ref) {
    var type = _ref.type,
        potential = _ref.potential,
        amount = _ref.amount;
    return fermentableGravityPoints(potential, amount, (1 - attenutation) * fermentableEfficiency(type, efficiency));
  }));
};

// http://byo.com/bock/item/408-calculating-alcohol-content-attenuation-extract-and-calories-advanced-homebrewing
// https://www.brewersfriend.com/2011/06/16/alcohol-by-volume-calculator-updated/
// ABW = (OG points - FG points) * 0.105
// ABV = (OG points - FG points) * 0.132
var estABW = exports.estABW = function estABW(ogPts /*: number*/, fgPts /*: number*/) {
  return (ogPts - fgPts) * 0.105;
};
var estABV = exports.estABV = function estABV(ogPts /*: number*/, fgPts /*: number*/) {
  return (ogPts - fgPts) * 0.132;
};

// http://beersmith.com/blog/2010/09/07/apparent-and-real-attenuation-for-beer-brewers-part-1/
var estABVrealExtract = exports.estABVrealExtract = function estABVrealExtract(og /*: number*/, fg /*: number*/) {
  var oe = (0, _utils.sgToPlato)(og);
  var ae = (0, _utils.sgToPlato)(fg);
  var re = 0.1808 * oe + 0.8192 * ae;
  var abw = (oe - re) / (2.0665 - 0.010665 * oe);
  var abv = abw * (fg / 0.79661);

  return abv;
};

// MCU = (weight of grain in lbs)*(color of grain in lovibond) / (volume in gal) SRM = 1.4922 * MCU ^ 0.6859
var mcu2srm = function mcu2srm(mcu) {
  return 1.4922 * Math.pow(mcu, 0.6859);
};

var calcMCU = function calcMCU(_ref2) {
  var amount = _ref2.amount,
      color = _ref2.color;
  return (0, _utils.kgToPounds)(amount) * color;
};

var srmToRgb = exports.srmToRgb = function srmToRgb(srm /*: number*/) {
  return {
    r: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.975, srm)))),
    g: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.88, srm)))),
    b: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.7, srm))))
  };
};
var colorSRM = exports.colorSRM = function colorSRM(fermentables /*: Array<Fermentable>*/, postBoilVolime /*: number*/) {
  return mcu2srm((0, _utils.sum)(fermentables.map(calcMCU)) / (0, _utils.litersToGallons)(postBoilVolime));
};

var srmToCss = exports.srmToCss = function srmToCss(srm /*: number*/) {
  var color = srmToRgb(srm);

  return 'rgb(' + color.r + ', ' + color.g + ', ' + color.b + ')';
};

// https://www.brewersfriend.com/yeast-pitch-rate-and-starter-calculator/

// million cells / ml / degree Plato

// Minimum manufacturer's recommendation: 0.35 (ale only, fresh yeast only)
// Middle of the road Pro Brewer 0.75 (ale)
// Pro Brewer 1.00 (high gravity ale)
// Pro Brewer 1.50 (minimum for lager)
// Pro Brewer 2.0 (high gravity lager)

// cellDensity = billion cells / gram
// Safale K-97	14
// Safale S-04	8
// Safbrew T-58	18
// Safbrew S-33	16
// Saflager S-23	10
// Saflager S-189	9

// A pack/vial contains 100 billion cells at the date of manufacture.
// Liquid yeast viability drops 21% each month, or 0.7% each day, from the date of manufacture.
// The assumption is the yeast viability drops in a linear fashion. In 4.75 months or 143 days, this calculator assumes the yeast is 100% dead (100 / 0.7 = ~143).

// million 10 ^ 6
// billion 10 ^ 9

var yeastNeeded = exports.yeastNeeded = function yeastNeeded(pitchRate /*: number*/, batchSize /*: number*/, e /*: number*/) {
  return pitchRate * (batchSize * 1000) * e / 1000;
};

var viability = function viability(currentDate /*: string*/) {
  var cultureDate /*: string*/ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().toString();
  return 100 - Math.floor((Date.parse(currentDate) - Date.parse(cultureDate)) / 86400000) * 0.7;
};

var yeastCount = exports.yeastCount = function yeastCount(_ref3) {
  var amount = _ref3.amount,
      form = _ref3.form,
      cultureDate = _ref3.cultureDate;
  var currentDate /*: string*/ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().toString();
  var cellDensity /*: number*/ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
  var slurryDensity /*: number*/ = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  switch (form) {
    case _yeast.YeastForms.dry:
      return cellDensity * amount * 1000;
    case _yeast.YeastForms.liquid:
      return 100 * (viability(currentDate, cultureDate) / 100) * amount;
    case _yeast.YeastForms.slant:
      return slurryDensity * amount * 1000;
    default:
      throw new Error('NotImplementedError');
  }
};

var yeastGrowth = function yeastGrowth(ratio) {
  return 2.33 - 0.67 * ratio;
};

var growthRateCurveBraukaiserStir = function growthRateCurveBraukaiserStir(ratio /*: number*/) {
  return ratio < 1.4 ? 1.4 : ratio >= 1.4 && ratio <= 3.5 && yeastGrowth(ratio) > 0 ? yeastGrowth(ratio) : 0;
};

var yeastStarterGrow = exports.yeastStarterGrow = function yeastStarterGrow(startingYeastCount /*: number*/, starterSize /*: number*/, gravity /*: number*/, batchSize /*: number*/) {
  var volumeLevel = (0, _utils.litersToGallons)(starterSize);
  var pointsNeeded = volumeLevel * (gravity - 1) * 1000;
  var poundsDME = pointsNeeded / 42;
  var gramsDME = (0, _utils.poundsTokg)(poundsDME) * 1000;
  var cellsToGramsRatio = startingYeastCount / gramsDME;

  var growthRate = growthRateCurveBraukaiserStir(cellsToGramsRatio);
  var endingCount = gramsDME * growthRate + startingYeastCount;
  var pitchRate = endingCount * 1000 / (0, _utils.sgToPlato)(gravity) / (batchSize / 1000);

  return {
    growthRate: growthRate,
    endingCount: endingCount,
    pitchRate: pitchRate
  };
};

// https://byo.com/yeast/item/164-balancing-your-draft-system-advanced-brewing
var kegPressure = function kegPressure(carbVolume /*: number*/, t /*: number*/) {
  return Math.max(0, -16.6999 - 0.0101059 * t + 0.00116512 * t * t + 0.173354 * t * carbVolume + 4.24267 * carbVolume - 0.0684226 * carbVolume * carbVolume);
};

// http://www.homebrewtalk.com/showthread.php?t=441383
var primingSugar = function primingSugar(carbVolume, t, batchSize) {
  return 15.195 * batchSize * (carbVolume - 3.0378 + 5.0062e-2 * t - 2.6555e-4 * t * t);
};

var normalizeTemp = function normalizeTemp(t /*: number*/) {
  return Math.max(32.0, (0, _utils.celsiusToFahrenheit)(t));
};

var carbonation = exports.carbonation = function carbonation(carbVolume /*: number*/, t /*: number*/, batchSize /*: number*/) {
  var sugar = primingSugar(carbVolume, normalizeTemp(t), (0, _utils.litersToGallons)(batchSize));

  return {
    kegPressure: kegPressure(carbVolume, normalizeTemp(t)),
    kegSugar: sugar * 0.5,
    cornSugar: sugar,
    dme: sugar * 1.538
  };
};

// http://beersmith.com/blog/2011/02/04/counting-calories-in-your-homebrewed-beer/
// Calorie_from_alcohol = 1881.22 * FG * (OG-FG)/(1.775-OG)
// Calories_from_carbs = 3550.0 * FG * ((0.1808 * OG) + (0.8192 * FG) – 1.0004)
// Total calories – just add the Calories_from_alcohol to Calories_from_carbs

var caloriesAlc = function caloriesAlc(og, fg) {
  return 1881.22 * fg * ((og - fg) / (1.775 - og));
};
var caloriesExt = function caloriesExt(og, fg) {
  return 3550.0 * fg * (0.1808 * og + 0.8192 * fg - 1.0004);
};

var calcCalories = exports.calcCalories = function calcCalories(og /*: number*/, fg /*: number*/) {
  return caloriesAlc(og, fg) + caloriesExt(og, fg);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bitternessIbuRager = exports.ragerHopIbu = exports.bitternessRatio = exports.bitternessIbuTinseth = undefined;

var _utils = __webpack_require__(0);

var _hop = __webpack_require__(4);

/*:: import type { Hop } from './types/hop'*/ // @flow

var aromaFactor = function aromaFactor(use) {
  return use === _hop.HopUse.aroma || use === _hop.HopUse.dryHop ? 0 : 1;
};

var ibuUtilization = function ibuUtilization(avgBoilGravityPts /*: number*/, boilTime /*: number*/, pelletFactor /*: number*/) {
  return pelletFactor * 1.65 * Math.pow(0.000125, avgBoilGravityPts) * (1 - Math.pow(Math.E, -0.04 * boilTime)) / 4.15;
};

// Glenn Tinseth developed the following formula to calculate bitterness in IBUs:
// IBU = (U * ozs hops * 7490)/Volume (in gallons) U represents the utilization of the hops (conversion to iso-alpha-acids) based on boil time and wort gravity.
// U = bigness factor * boil time factor

var bitternessIbuTinseth = exports.bitternessIbuTinseth = function bitternessIbuTinseth(hops /*: Array<Hop>*/, avgBoilGravityPts /*: number*/, postBoilVolume /*: number*/) {
  return (0, _utils.sum)(hops.map(function (_ref) {
    var amount = _ref.amount,
        alpha = _ref.alpha,
        form = _ref.form,
        time = _ref.time,
        use = _ref.use;
    return ibuUtilization(avgBoilGravityPts, time, form === _hop.HopForms.pellet ? 1.1 : 1) * (0, _utils.kgToOunces)(amount) * alpha * 7490 / (0, _utils.litersToGallons)(postBoilVolume) * aromaFactor(use);
  }));
};

// The preceived bitterness expressed in a ratio of IBUs to gravity. This is frequently seen expressed as BU/GU.
// The Gravity Units are the decimal portion of the original gravity
var bitternessRatio = exports.bitternessRatio = function bitternessRatio(ibu /*: number*/, gu /*: number*/) {
  return ibu / gu;
};

// rager
var ragerHopGravityAdjustment = function ragerHopGravityAdjustment(sgb) {
  return sgb <= 1.05 ? 0 : (sgb - 1.05) / 0.2;
};
var ragerUtil = function ragerUtil(time) {
  return 18.11 + 13.86 * Math.tanh((time - 31.32) / 18.27);
};

var ragerHopIbuFromWeight = function ragerHopIbuFromWeight(util, alpha, wt, vol, ga, wtFactor) {
  return util * alpha * wt * wtFactor / (vol * (1.0 + ga));
};

var ragerHopIbu = exports.ragerHopIbu = function ragerHopIbu(amount /*: number*/, alpha /*: number*/, time /*: number*/, sg /*: number*/, vol /*: number*/) {
  return time <= 0.0 || amount <= 0.0 || alpha < 0.0 ? 0 : ragerHopIbuFromWeight(ragerUtil(Math.floor(time + 0.5)) * 0.01, alpha, amount, vol, ragerHopGravityAdjustment(sg), 100.0 / 1.34);
};

var bitternessIbuRager = exports.bitternessIbuRager = function bitternessIbuRager(hops /*: Array<Hop>*/, avgBoilGravityPts /*: number*/, postBoilVolume /*: number*/) {
  return (0, _utils.sum)(hops.map(function (_ref2) {
    var amount = _ref2.amount,
        alpha = _ref2.alpha,
        time = _ref2.time,
        use = _ref2.use;
    return ragerHopIbu((0, _utils.kgToOunces)(amount), alpha * 100, time, avgBoilGravityPts, (0, _utils.litersToGallons)(postBoilVolume)) * aromaFactor(use);
  }));
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mashRecalculate = undefined;

var _mashStep = __webpack_require__(2);

// @flow
/*:: import type { Equipment } from './types/equipment'*/
/*:: import type { Mash } from './types/mash'*/


var grainVolume = 0.652; // l/kg
var maltSpecificHeat = 0.38; // Cal/gram-C
var tunDeadspace = 0;
var boilTemp = 100;

var calcTotVolume = function calcTotVolume(grainVolume, mashGrainWeight) {
  var infuseAmount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var startVolume = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return grainVolume * mashGrainWeight + infuseAmount + startVolume;
};

var adjustTunMass = function adjustTunMass(tunVolume, totVolume, tunMass) {
  tunVolume = tunVolume * 0.8;
  return tunVolume > 0 && totVolume < tunVolume ? tunMass * totVolume / tunVolume : tunMass;
};

var decoctVolume = function decoctVolume(targetTemp, startVolume, startTemp, mashGrainWeight, tunMass, tunSpecificHeat, tunVolume, boilTemp) {
  var totVolume = calcTotVolume(grainVolume, mashGrainWeight, startVolume);
  var adjustedTunMass = adjustTunMass(tunVolume, totVolume, tunMass);
  var fraction = (maltSpecificHeat * mashGrainWeight + tunSpecificHeat * adjustedTunMass + startVolume) / (maltSpecificHeat * mashGrainWeight + startVolume) * (targetTemp - startTemp) / (boilTemp - startTemp);

  if (fraction > 1) {
    fraction = 1;
  }
  return totVolume * fraction;
};

var infuseTemp = function infuseTemp(infuseAmount, targetTemp, startVolume, startTemp, mashGrainWeight, tunMass, tunSpecificHeat, tunVolume) {
  if (infuseAmount <= 0) {
    return targetTemp;
  }

  var totVolume = calcTotVolume(grainVolume, mashGrainWeight, infuseAmount, startVolume);
  var adjustedTunMass = adjustTunMass(tunVolume, totVolume, tunMass);

  return targetTemp + (maltSpecificHeat * mashGrainWeight + tunSpecificHeat * adjustedTunMass + startVolume) * (targetTemp - startTemp) / infuseAmount;
};

var mashInTemp = function mashInTemp(infuseAmount, targetTemp, mashGrainWeight, grainTemp, tunMass, tunSpecificHeat, tunVolume, tunTemp) {
  if (infuseAmount === 0) {
    return targetTemp;
  }

  var totVolume = calcTotVolume(grainVolume, mashGrainWeight, infuseAmount);
  var adjustedTunMass = adjustTunMass(tunVolume, totVolume, tunMass);

  return targetTemp + (maltSpecificHeat * mashGrainWeight * (targetTemp - grainTemp) + tunSpecificHeat * adjustedTunMass * (targetTemp - tunTemp)) / infuseAmount;
};

var mashRecalculate = exports.mashRecalculate = function mashRecalculate(_ref, _ref2, mashGrainWeight /*: number*/) {
  var mashSteps = _ref.mashSteps,
      equipAdjust = _ref.equipAdjust,
      grainTemp = _ref.grainTemp,
      _ref$tunTemp = _ref.tunTemp,
      tunTemp = _ref$tunTemp === undefined ? 0 : _ref$tunTemp;
  var _ref2$tunWeight = _ref2.tunWeight,
      tunWeight = _ref2$tunWeight === undefined ? 0 : _ref2$tunWeight,
      _ref2$tunSpecificHeat = _ref2.tunSpecificHeat,
      tunSpecificHeat = _ref2$tunSpecificHeat === undefined ? 0 : _ref2$tunSpecificHeat,
      _ref2$tunVolume = _ref2.tunVolume,
      tunVolume = _ref2$tunVolume === undefined ? 0 : _ref2$tunVolume;

  var tunMass = !equipAdjust ? 0 : tunWeight;
  var calcInfuseStepAmount = function calcInfuseStepAmount(i, infuseAmount) {
    return i === 0 ? infuseAmount + tunDeadspace : infuseAmount;
  };
  var calcTotalInfusedOnStepAmount = function calcTotalInfusedOnStepAmount(i, mashSteps) {
    return mashSteps.slice(0, i).reduce(function (pv, cv, index) {
      return cv.type !== _mashStep.MashType.decoction ? calcInfuseStepAmount(index, cv.infuseAmount) : 0;
    }, 0);
  };

  return mashSteps.map(function (_ref3, i, mashSteps) {
    var name = _ref3.name,
        type = _ref3.type,
        infuseAmount = _ref3.infuseAmount,
        stepTemp = _ref3.stepTemp;

    var infuseStepAmount = calcInfuseStepAmount(i, infuseAmount);
    var totalInfusedOnStepAmount = calcTotalInfusedOnStepAmount(i, mashSteps);

    var result = {};

    switch (type) {
      case _mashStep.MashType.infusion:
        result.infussionTemp = i === 0 ? mashInTemp(infuseStepAmount, stepTemp, mashGrainWeight, grainTemp, tunMass, tunSpecificHeat, tunVolume, tunTemp) : infuseTemp(infuseStepAmount, stepTemp, totalInfusedOnStepAmount, mashSteps[i - 1].stepTemp, mashGrainWeight, tunMass, tunSpecificHeat, tunVolume);
        result.decoctionAmount = 0;
        break;
      case _mashStep.MashType.decoction:
        result.infussionTemp = i === 0 ? mashInTemp(infuseStepAmount, stepTemp, mashGrainWeight, grainTemp, tunMass, tunSpecificHeat, tunVolume, tunTemp) : 0;

        result.decoctionAmount = i === 0 ? 0 : decoctVolume(stepTemp, totalInfusedOnStepAmount, mashSteps[i - 1].stepTemp, mashGrainWeight, tunMass, tunSpecificHeat, tunVolume, boilTemp);
        break;
      default:
        break;
    }

    return {
      infuseStepAmount: infuseStepAmount,
      infussionTemp: result.infussionTemp,
      decoctionAmount: result.decoctionAmount
    };
  });
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateVolumes = undefined;

var _utils = __webpack_require__(0);

var _fermentable = __webpack_require__(1);

var _mashStep = __webpack_require__(2);

/*:: import type { Recipe } from './types/recipe'*/ // @flow

/*:: import type { Equipment } from './types/equipment'*/
var calculateVolumes = exports.calculateVolumes = function calculateVolumes(_ref, _ref2) {
  var fermentables = _ref.fermentables,
      mash = _ref.mash,
      boilTime = _ref.boilTime;
  var boilSize = _ref2.boilSize,
      _ref2$lauterDeadspace = _ref2.lauterDeadspace,
      lauterDeadspace = _ref2$lauterDeadspace === undefined ? 0 : _ref2$lauterDeadspace,
      _ref2$evapRate = _ref2.evapRate,
      evapRate = _ref2$evapRate === undefined ? 0 : _ref2$evapRate,
      _ref2$coolingLossPct = _ref2.coolingLossPct,
      coolingLossPct = _ref2$coolingLossPct === undefined ? 0 : _ref2$coolingLossPct,
      _ref2$trubChillerLoss = _ref2.trubChillerLoss,
      trubChillerLoss = _ref2$trubChillerLoss === undefined ? 0 : _ref2$trubChillerLoss,
      _ref2$topUpKettle = _ref2.topUpKettle,
      topUpKettle = _ref2$topUpKettle === undefined ? 0 : _ref2$topUpKettle,
      BIAB = _ref2.BIAB;

  var starterSize = 0;
  var fermentationLoss = 1.7;

  var mashGrainWeight = (0, _utils.sum)(fermentables.map(function (_ref3) {
    var amount = _ref3.amount,
        type = _ref3.type;
    return type === _fermentable.FermentableTypes.grain ? amount : 0;
  }));
  var grainAbsorbtionRatio = BIAB ? 0.586 : 0.96; // number of ounces of water absorbed per ounce of the grain

  var grainAbsorbtion = (0, _utils.ouncesToLiters)((0, _utils.kgToOunces)(mashGrainWeight) * grainAbsorbtionRatio);

  var totalMashWaterAdds = lauterDeadspace + (0, _utils.sum)(mash.mashSteps.map(function (_ref4) {
    var type = _ref4.type,
        infuseAmount = _ref4.infuseAmount;
    return type !== _mashStep.MashType.decoction ? infuseAmount : 0;
  }));

  // https://byo.com/bock/item/410-calculating-water-usage-advanced-brewing
  // Total mash volume = volume of water + volume of grain
  // Of course first it is necessary to know the volume that the grain displaces when mashed (which is different from its dry volume).
  // Once again this depends on the specifics of the grain bill, but a value of 0.32 quarts per pound (0.67 L/kg) is a reasonable average.
  var mashVolumeNeeded = totalMashWaterAdds + mashGrainWeight * 0.67;

  var waterAvailFromMash = totalMashWaterAdds - grainAbsorbtion;

  var spargeVol = boilSize + grainAbsorbtion - topUpKettle + lauterDeadspace - totalMashWaterAdds;

  var estPreBoilVolume = waterAvailFromMash + (spargeVol - lauterDeadspace);
  var boilOffVolume = estPreBoilVolume * evapRate * (boilTime / 60);
  var postBoilVolume = estPreBoilVolume - boilOffVolume;
  var coolingShrinkage = postBoilVolume * coolingLossPct;

  var estBottlingVol = postBoilVolume - coolingShrinkage - trubChillerLoss - starterSize - fermentationLoss;

  var totalWater = totalMashWaterAdds + spargeVol;

  return {
    totalWater: totalWater,
    // Mashing
    mashGrainWeight: mashGrainWeight,
    grainAbsorbtion: grainAbsorbtion,
    totalMashWaterAdds: totalMashWaterAdds,
    mashVolumeNeeded: mashVolumeNeeded,
    waterAvailFromMash: waterAvailFromMash,
    spargeVol: spargeVol,
    // Boiling
    estPreBoilVolume: estPreBoilVolume,
    boilOffVolume: boilOffVolume,
    postBoilVolume: postBoilVolume,
    coolingShrinkage: coolingShrinkage,
    // Fermenting
    estBottlingVol: estBottlingVol
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcWaterChemistry = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(0);

// @flow
/*:: import type { Water } from './types/water'*/
/*:: import type { SaltAdditions } from './types/saltAdditions'*/


var dilute = function dilute(value /*: number*/, dilution /*: number*/) {
  return Math.round(value * (1 - dilution));
};

var alkalinity = function alkalinity(value /*: number*/) {
  var dilution /*: number*/ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.round(value * (1 - dilution) * (50 / 61));
};

var adjustmentsFromSalts = function adjustmentsFromSalts(batchSize /*: number*/, _ref) {
  var CaCO3 = _ref.CaCO3,
      NaHCO3 = _ref.NaHCO3,
      CaSO4 = _ref.CaSO4,
      CaCl2 = _ref.CaCl2,
      MgSO4 = _ref.MgSO4,
      NaCl = _ref.NaCl;

  var adjCa = 0;
  var adjMg = 0;
  var adjSO4 = 0;
  var adjNa = 0;
  var adjCl = 0;
  var adjHCO3 = 0;

  CaCO3 = CaCO3 / 2;

  if (CaCO3 > 0) {
    adjCa = adjCa + 105 * CaCO3 / batchSize;
    adjHCO3 = adjHCO3 + 321 * CaCO3 / batchSize;
  }
  if (NaHCO3 > 0) {
    adjNa = adjNa + 75 * NaHCO3 / batchSize;
    adjHCO3 = adjHCO3 + 191 * NaHCO3 / batchSize;
  }
  if (CaSO4 > 0) {
    adjCa = adjCa + 61.5 * CaSO4 / batchSize;
    adjSO4 = adjSO4 + 147.4 * CaSO4 / batchSize;
  }
  if (CaCl2 > 0) {
    adjCa = adjCa + 72 * CaCl2 / batchSize;
    adjCl = adjCl + 127 * CaCl2 / batchSize;
  }
  if (MgSO4 > 0) {
    adjMg = adjMg + 26 * MgSO4 / batchSize;
    adjSO4 = adjSO4 + 103 * MgSO4 / batchSize;
  }
  if (NaCl > 0) {
    adjNa = adjNa + 104 * NaCl / batchSize;
    adjCl = adjCl + 160 * NaCl / batchSize;
  }
  return {
    name: 'adjustmentsFromSalts',
    Ca: Math.round(adjCa),
    Mg: Math.round(adjMg),
    SO4: Math.round(adjSO4),
    Na: Math.round(adjNa),
    Cl: Math.round(adjCl),
    HCO3: Math.round(adjHCO3),
    alkalinity: alkalinity(Math.round(adjHCO3))
  };
};

var calcWaterChemistry = exports.calcWaterChemistry = function calcWaterChemistry(batchSize /*: number*/, dilution /*: number*/, source /*: Water*/, target /*: Water*/, salts /*: SaltAdditions*/) {
  var adjustmentsFromSaltsWater /*: Water*/ = adjustmentsFromSalts((0, _utils.litersToGallons)(batchSize), _extends({}, salts));

  var dilutedWater /*: Water*/ = {
    name: 'dilutedWater',
    Ca: dilute(source.Ca, dilution),
    Mg: dilute(source.Mg, dilution),
    SO4: dilute(source.SO4, dilution),
    Na: dilute(source.Na, dilution),
    Cl: dilute(source.Cl, dilution),
    HCO3: dilute(source.HCO3, dilution),
    alkalinity: alkalinity(source.HCO3, dilution)
  };

  var adjustedWater /*: Water*/ = {
    name: 'adjustedWater',
    Ca: dilutedWater.Ca + adjustmentsFromSaltsWater.Ca,
    Mg: dilutedWater.Mg + adjustmentsFromSaltsWater.Mg,
    SO4: dilutedWater.SO4 + adjustmentsFromSaltsWater.SO4,
    Na: dilutedWater.Na + adjustmentsFromSaltsWater.Na,
    Cl: dilutedWater.Cl + adjustmentsFromSaltsWater.Cl,
    HCO3: dilutedWater.HCO3 + adjustmentsFromSaltsWater.HCO3,
    alkalinity: alkalinity(dilutedWater.HCO3 + adjustmentsFromSaltsWater.HCO3)
  };

  var difference /*: Water*/ = {
    name: 'difference source water from target',
    Ca: adjustedWater.Ca - target.Ca,
    Mg: adjustedWater.Mg - target.Mg,
    SO4: adjustedWater.SO4 - target.SO4,
    Na: adjustedWater.Na - target.Na,
    Cl: adjustedWater.Cl - target.Cl,
    HCO3: adjustedWater.HCO3 - target.HCO3,
    alkalinity: alkalinity(adjustedWater.HCO3 - target.HCO3)
  };

  return {
    adjustedWater: adjustedWater,
    dilutedWater: dilutedWater,
    adjustmentsFromSalts: adjustmentsFromSaltsWater,
    difference: difference,
    sulphateChlorideRatio: adjustedWater.SO4 / adjustedWater.Cl
  };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow
/*:: import type { Fermentable } from './fermentable'*/
/*:: import type { Yeast } from './yeast'*/
/*:: import type { Hop } from './hop'*/
/*:: import type { Mash } from './mash'*/
/*:: export type Recipe = {
  name: string,
  brewer: string,
  type: 'Extract' | 'All Grain' | 'Partial Mash',
  batchSize: number,
  boilSize: number,
  boilTime: number,
  efficiency: number,
  hops: Array<Hop>,
  fermentables: Array<Fermentable>,
  yeasts: Array<Yeast>,
  mash: Mash
}*/
var RecipeTypes = exports.RecipeTypes = {
  extract: 'Extract',
  partialMash: 'Partial Mash',
  allGrain: 'All Grain'
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importFromBeerXml = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _pixlXml = __webpack_require__(14);

var XML = _interopRequireWildcard(_pixlXml);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// @flow
/*:: import type { Recipe } from './types/recipe'*/
/*:: import type { Fermentable } from './types/fermentable'*/
/*:: import type { Hop } from './types/hop'*/
/*:: import type { Mash } from './types/mash'*/
/*:: import type { MashStep } from './types/mashStep'*/
/*:: import type { Yeast } from './types/yeast'*/
/*:: import type { Equipment } from './types/equipment'*/


// $FlowFixMe
/*:: import type { Specifications } from './types/specifications'*/


var camelCase = function camelCase(str /*: string*/) {
  return str.length === 0 ? '' : str.length === 1 ? str.toLowerCase() : str.replace(/^[_.\- ]+/, '').toLowerCase().replace(/[_.\- ]+(\w|$)/g, function (m, p1) {
    return p1.toUpperCase();
  });
};

var xmlToCamelCase = function xmlToCamelCase(xml /*: string*/) {
  return xml.replace(/<(?!!)(?!\?)[^>]*>/g, function (str) {
    return camelCase(str.toLowerCase());
  });
};

var parseBool = function parseBool(s /*: any*/) {
  return s === 'TRUE';
};
var isBIAB = function isBIAB(mashName /*: any*/) {
  return mashName.includes('BIAB');
};

// TODO: May be it is not so good idea. But At the moment I can't figure out best practices for rounding operations.
var dirtyRound = function dirtyRound(n /*: number*/) {
  return Math.round(n * 100000000000) / 100000000000;
};

var importFromBeerXml = exports.importFromBeerXml = function importFromBeerXml(xml /*: string*/) {
  try {
    var doc = XML.parse(xmlToCamelCase(xml));
    var fermentableNode = doc.recipe.fermentables.fermentable;
    var fermentables = Array.from(Array.isArray(fermentableNode) ? fermentableNode : [fermentableNode]).map(function (_ref, i, f) {
      var name = _ref.name,
          addAfterBoil = _ref.addAfterBoil,
          amount = _ref.amount,
          color = _ref.color,
          potential = _ref.potential,
          type = _ref.type;

      return {
        name: name,
        addAfterBoil: parseBool(addAfterBoil),
        amount: parseFloat(amount),
        color: parseFloat(color),
        potential: potential !== undefined ? parseFloat(potential) : parseFloat(f[i].yield) * 0.01 * 46 / 1000 + 1,
        yield: parseFloat(f[i].yield),
        type: type
      };
    });

    var hopNode = doc.recipe.hops.hop;
    var hops = Array.from(Array.isArray(hopNode) ? hopNode : [hopNode]).map(function (_ref2) {
      var name = _ref2.name,
          alpha = _ref2.alpha,
          amount = _ref2.amount,
          form = _ref2.form,
          use = _ref2.use,
          time = _ref2.time;

      return {
        name: name,
        alpha: parseFloat(alpha) * 0.01,
        amount: parseFloat(amount),
        form: form,
        use: use,
        time: parseFloat(time)
      };
    });

    var mashStepsNode = doc.recipe.mash.mashSteps.mashStep;
    var mashSteps = Array.from(Array.isArray(mashStepsNode) ? mashStepsNode : [mashStepsNode]).map(function (_ref3) {
      var name = _ref3.name,
          endTemp = _ref3.endTemp,
          infuseAmount = _ref3.infuseAmount,
          rampTime = _ref3.rampTime,
          stepTemp = _ref3.stepTemp,
          stepTime = _ref3.stepTime,
          type = _ref3.type;

      return {
        name: name,
        endTemp: parseFloat(endTemp),
        infuseAmount: parseFloat(infuseAmount),
        rampTime: parseFloat(rampTime),
        stepTemp: parseFloat(stepTemp),
        stepTime: parseFloat(stepTime),
        type: type
      };
    });

    var mash /*: Mash*/ = {
      grainTemp: parseFloat(doc.recipe.mash.grainTemp),
      tunTemp: parseFloat(doc.recipe.mash.tunTemp),
      equipAdjust: parseBool(doc.recipe.mash.equipAdjust),
      spargeTemp: parseFloat(doc.recipe.mash.spargeTemp),
      mashSteps: mashSteps
    };

    var yeastNode = doc.recipe.yeasts.yeast;
    var yeasts /*: Array<Yeast>*/ = [_extends({
      name: yeastNode.name,
      amount: parseFloat(yeastNode.amount)
    }, yeastNode.attenuation !== undefined ? { attenuation: parseFloat(yeastNode.attenuation) * 0.01 } : {}, yeastNode.cultureDate !== undefined ? { cultureDate: yeastNode.cultureDate } : {}, {
      form: yeastNode.form,
      type: yeastNode.type
    })];

    var recipeNode = doc.recipe;
    var recipe /*: Recipe*/ = {
      name: recipeNode.name,
      brewer: recipeNode.brewer,
      batchSize: parseFloat(recipeNode.batchSize),
      boilSize: parseFloat(recipeNode.boilSize),
      boilTime: parseFloat(recipeNode.boilTime),
      efficiency: dirtyRound(parseFloat(recipeNode.efficiency) * 0.01),
      type: recipeNode.type,
      fermentables: fermentables,
      hops: hops,
      mash: mash,
      yeasts: yeasts
    };

    var equipmentNode = doc.recipe.equipment;
    var equipment /*: Equipment | null*/ = equipmentNode !== undefined ? {
      name: equipmentNode.name,
      batchSize: parseFloat(equipmentNode.batchSize),
      boilSize: parseFloat(equipmentNode.boilSize),
      tunWeight: parseFloat(equipmentNode.tunWeight),
      tunVolume: parseFloat(equipmentNode.tunSpecificHeat),
      tunSpecificHeat: parseFloat(equipmentNode.tunSpecificHeat),
      coolingLossPct: parseFloat(equipmentNode.coolingLossPct) * 0.01,
      evapRate: dirtyRound(parseFloat(equipmentNode.evapRate) * 0.01),
      lauterDeadspace: parseFloat(equipmentNode.lauterDeadspace),
      topUpKettle: parseFloat(equipmentNode.topUpKettle),
      trubChillerLoss: parseFloat(equipmentNode.trubChillerLoss),

      // TODO:: may be it is part of mashing steps, not eq
      BIAB: isBIAB(doc.recipe.mash.name)
    } : null;

    var specifications /*: Specifications*/ = {
      og: parseFloat(recipeNode.og),
      fg: parseFloat(recipeNode.fg),
      abv: parseFloat(recipeNode.abv) * 0.01,
      color: parseFloat(recipeNode.estColor),
      ibuMethod: recipeNode.ibuMethod,
      ibu: parseFloat(recipeNode.ibu),
      calories: parseFloat(recipeNode.calories)
    };

    return {
      recipe: recipe,
      equipment: equipment,
      specifications: specifications
    };
  } catch (err) {
    console.log('XML Parser Error: ' + err);
    throw err;
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	JavaScript XML Library
	Plus a bunch of object utility functions
	
	Usage:
		var XML = require('pixl-xml');
		var myxmlstring = '<?xml version="1.0"?><Document>' + 
			'<Simple>Hello</Simple>' + 
			'<Node Key="Value">Content</Node>' + 
			'</Document>';
		
		var tree = XML.parse( myxmlstring, { preserveAttributes: true });
		console.log( tree );
		
		tree.Simple = "Hello2";
		tree.Node._Attribs.Key = "Value2";
		tree.Node._Data = "Content2";
		tree.New = "I added this";
		
		console.log( XML.stringify( tree, 'Document' ) );
	
	Copyright (c) 2004 - 2015 Joseph Huckaby
	Released under the MIT License
	This version is for Node.JS, converted in 2012.
*/

var fs = __webpack_require__(19);
var util = __webpack_require__(20);

var isArray = Array.isArray || util.isArray; // support for older Node.js

var xml_header = '<?xml version="1.0"?>';
var sort_args = null;
var re_valid_tag_name  = /^\w[\w\-\:\.]*$/;

var XML = exports.XML = exports.Parser = function XML(args, opts) {
	// class constructor for XML parser class
	// pass in args hash or text to parse
	if (!args) args = '';
	if (isa_hash(args)) {
		for (var key in args) this[key] = args[key];
	}
	else this.text = args || '';
	
	// options may be 2nd argument as well
	if (opts) {
		for (var key in opts) this[key] = opts[key];
	}
	
	// stringify buffers
	if (this.text instanceof Buffer) {
		this.text = this.text.toString();
	}
	
	if (!this.text.match(/^\s*</)) {
		// try as file path
		var file = this.text;
		this.text = fs.readFileSync(file, { encoding: 'utf8' });
		if (!this.text) throw new Error("File not found: " + file);
	}
	
	this.tree = {};
	this.errors = [];
	this.piNodeList = [];
	this.dtdNodeList = [];
	this.documentNodeName = '';
	
	if (this.lowerCase) {
		this.attribsKey = this.attribsKey.toLowerCase();
		this.dataKey = this.dataKey.toLowerCase();
	}
	
	this.patTag.lastIndex = 0;
	if (this.text) this.parse();
}

XML.prototype.preserveDocumentNode = false;
XML.prototype.preserveAttributes = false;
XML.prototype.preserveWhitespace = false;
XML.prototype.lowerCase = false;
XML.prototype.forceArrays = false;

XML.prototype.patTag = /([^<]*?)<([^>]+)>/g;
XML.prototype.patSpecialTag = /^\s*([\!\?])/;
XML.prototype.patPITag = /^\s*\?/;
XML.prototype.patCommentTag = /^\s*\!--/;
XML.prototype.patDTDTag = /^\s*\!DOCTYPE/;
XML.prototype.patCDATATag = /^\s*\!\s*\[\s*CDATA/;
XML.prototype.patStandardTag = /^\s*(\/?)([\w\-\:\.]+)\s*([\s\S]*)$/;
XML.prototype.patSelfClosing = /\/\s*$/;
XML.prototype.patAttrib = new RegExp("([\\w\\-\\:\\.]+)\\s*=\\s*([\\\"\\'])([^\\2]*?)\\2", "g");
XML.prototype.patPINode = /^\s*\?\s*([\w\-\:]+)\s*(.*)$/;
XML.prototype.patEndComment = /--$/;
XML.prototype.patNextClose = /([^>]*?)>/g;
XML.prototype.patExternalDTDNode = new RegExp("^\\s*\\!DOCTYPE\\s+([\\w\\-\\:]+)\\s+(SYSTEM|PUBLIC)\\s+\\\"([^\\\"]+)\\\"");
XML.prototype.patInlineDTDNode = /^\s*\!DOCTYPE\s+([\w\-\:]+)\s+\[/;
XML.prototype.patEndDTD = /\]$/;
XML.prototype.patDTDNode = /^\s*\!DOCTYPE\s+([\w\-\:]+)\s+\[(.*)\]/;
XML.prototype.patEndCDATA = /\]\]$/;
XML.prototype.patCDATANode = /^\s*\!\s*\[\s*CDATA\s*\[([^]*)\]\]/;

XML.prototype.attribsKey = '_Attribs';
XML.prototype.dataKey = '_Data';

XML.prototype.parse = function(branch, name) {
	// parse text into XML tree, recurse for nested nodes
	if (!branch) branch = this.tree;
	if (!name) name = null;
	var foundClosing = false;
	var matches = null;
	
	// match each tag, plus preceding text
	while ( matches = this.patTag.exec(this.text) ) {
		var before = matches[1];
		var tag = matches[2];
		
		// text leading up to tag = content of parent node
		if (before.match(/\S/)) {
			if (typeof(branch[this.dataKey]) != 'undefined') branch[this.dataKey] += ' '; else branch[this.dataKey] = '';
			branch[this.dataKey] += !this.preserveWhitespace ? trim(decode_entities(before)) : decode_entities(before);
		}
		
		// parse based on tag type
		if (tag.match(this.patSpecialTag)) {
			// special tag
			if (tag.match(this.patPITag)) tag = this.parsePINode(tag);
			else if (tag.match(this.patCommentTag)) tag = this.parseCommentNode(tag);
			else if (tag.match(this.patDTDTag)) tag = this.parseDTDNode(tag);
			else if (tag.match(this.patCDATATag)) {
				tag = this.parseCDATANode(tag);
				if (typeof(branch[this.dataKey]) != 'undefined') branch[this.dataKey] += ' '; else branch[this.dataKey] = '';
				branch[this.dataKey] += !this.preserveWhitespace ? trim(decode_entities(tag)) : decode_entities(tag);
			} // cdata
			else {
				this.throwParseError( "Malformed special tag", tag );
				break;
			} // error
			
			if (tag == null) break;
			continue;
		} // special tag
		else {
			// Tag is standard, so parse name and attributes (if any)
			var matches = tag.match(this.patStandardTag);
			if (!matches) {
				this.throwParseError( "Malformed tag", tag );
				break;
			}
			
			var closing = matches[1];
			var nodeName = this.lowerCase ? matches[2].toLowerCase() : matches[2];
			var attribsRaw = matches[3];
			
			// If this is a closing tag, make sure it matches its opening tag
			if (closing) {
				if (nodeName == (name || '')) {
					foundClosing = 1;
					break;
				}
				else {
					this.throwParseError( "Mismatched closing tag (expected </" + name + ">)", tag );
					break;
				}
			} // closing tag
			else {
				// Not a closing tag, so parse attributes into hash.  If tag
				// is self-closing, no recursive parsing is needed.
				var selfClosing = !!attribsRaw.match(this.patSelfClosing);
				var leaf = {};
				var attribs = leaf;
				
				// preserve attributes means they go into a sub-hash named "_Attribs"
				// the XML composer honors this for restoring the tree back into XML
				if (this.preserveAttributes) {
					leaf[this.attribsKey] = {};
					attribs = leaf[this.attribsKey];
				}
				
				// parse attributes
				this.patAttrib.lastIndex = 0;
				while ( matches = this.patAttrib.exec(attribsRaw) ) {
					var key = this.lowerCase ? matches[1].toLowerCase() : matches[1];
					attribs[ key ] = decode_entities( matches[3] );
				} // foreach attrib
				
				// if no attribs found, but we created the _Attribs subhash, clean it up now
				if (this.preserveAttributes && !num_keys(attribs)) {
					delete leaf[this.attribsKey];
				}
				
				// Recurse for nested nodes
				if (!selfClosing) {
					this.parse( leaf, nodeName );
					if (this.error()) break;
				}
				
				// Compress into simple node if text only
				var num_leaf_keys = num_keys(leaf);
				if ((typeof(leaf[this.dataKey]) != 'undefined') && (num_leaf_keys == 1)) {
					leaf = leaf[this.dataKey];
				}
				else if (!num_leaf_keys) {
					leaf = '';
				}
				
				// Add leaf to parent branch
				if (typeof(branch[nodeName]) != 'undefined') {
					if (isa_array(branch[nodeName])) {
						branch[nodeName].push( leaf );
					}
					else {
						var temp = branch[nodeName];
						branch[nodeName] = [ temp, leaf ];
					}
				}
				else if (this.forceArrays && (branch != this.tree)) {
					branch[nodeName] = [ leaf ];
				}
				else {
					branch[nodeName] = leaf;
				}
				
				if (this.error() || (branch == this.tree)) break;
			} // not closing
		} // standard tag
	} // main reg exp
	
	// Make sure we found the closing tag
	if (name && !foundClosing) {
		this.throwParseError( "Missing closing tag (expected </" + name + ">)", name );
	}
	
	// If we are the master node, finish parsing and setup our doc node
	if (branch == this.tree) {
		if (typeof(this.tree[this.dataKey]) != 'undefined') delete this.tree[this.dataKey];
		
		if (num_keys(this.tree) > 1) {
			this.throwParseError( 'Only one top-level node is allowed in document', first_key(this.tree) );
			return;
		}

		this.documentNodeName = first_key(this.tree);
		if (this.documentNodeName && !this.preserveDocumentNode) {
			this.tree = this.tree[this.documentNodeName];
		}
	}
};

XML.prototype.throwParseError = function(key, tag) {
	// log error and locate current line number in source XML document
	var parsedSource = this.text.substring(0, this.patTag.lastIndex);
	var eolMatch = parsedSource.match(/\n/g);
	var lineNum = (eolMatch ? eolMatch.length : 0) + 1;
	lineNum -= tag.match(/\n/) ? tag.match(/\n/g).length : 0;
	
	this.errors.push({ 
		type: 'Parse',
		key: key,
		text: '<' + tag + '>',
		line: lineNum
	});
	
	// Throw actual error (must wrap parse in try/catch)
	throw new Error( this.getLastError() );
};

XML.prototype.error = function() {
	// return number of errors
	return this.errors.length;
};

XML.prototype.getError = function(error) {
	// get formatted error
	var text = '';
	if (!error) return '';

	text = (error.type || 'General') + ' Error';
	if (error.code) text += ' ' + error.code;
	text += ': ' + error.key;
	
	if (error.line) text += ' on line ' + error.line;
	if (error.text) text += ': ' + error.text;

	return text;
};

XML.prototype.getLastError = function() {
	// Get most recently thrown error in plain text format
	if (!this.error()) return '';
	return this.getError( this.errors[this.errors.length - 1] );
};

XML.prototype.parsePINode = function(tag) {
	// Parse Processor Instruction Node, e.g. <?xml version="1.0"?>
	if (!tag.match(this.patPINode)) {
		this.throwParseError( "Malformed processor instruction", tag );
		return null;
	}
	
	this.piNodeList.push( tag );
	return tag;
};

XML.prototype.parseCommentNode = function(tag) {
	// Parse Comment Node, e.g. <!-- hello -->
	var matches = null;
	this.patNextClose.lastIndex = this.patTag.lastIndex;
	
	while (!tag.match(this.patEndComment)) {
		if (matches = this.patNextClose.exec(this.text)) {
			tag += '>' + matches[1];
		}
		else {
			this.throwParseError( "Unclosed comment tag", tag );
			return null;
		}
	}
	
	this.patTag.lastIndex = this.patNextClose.lastIndex;
	return tag;
};

XML.prototype.parseDTDNode = function(tag) {
	// Parse Document Type Descriptor Node, e.g. <!DOCTYPE ... >
	var matches = null;
	
	if (tag.match(this.patExternalDTDNode)) {
		// tag is external, and thus self-closing
		this.dtdNodeList.push( tag );
	}
	else if (tag.match(this.patInlineDTDNode)) {
		// Tag is inline, so check for nested nodes.
		this.patNextClose.lastIndex = this.patTag.lastIndex;
		
		while (!tag.match(this.patEndDTD)) {
			if (matches = this.patNextClose.exec(this.text)) {
				tag += '>' + matches[1];
			}
			else {
				this.throwParseError( "Unclosed DTD tag", tag );
				return null;
			}
		}
		
		this.patTag.lastIndex = this.patNextClose.lastIndex;
		
		// Make sure complete tag is well-formed, and push onto DTD stack.
		if (tag.match(this.patDTDNode)) {
			this.dtdNodeList.push( tag );
		}
		else {
			this.throwParseError( "Malformed DTD tag", tag );
			return null;
		}
	}
	else {
		this.throwParseError( "Malformed DTD tag", tag );
		return null;
	}
	
	return tag;
};

XML.prototype.parseCDATANode = function(tag) {
	// Parse CDATA Node, e.g. <![CDATA[Brooks & Shields]]>
	var matches = null;
	this.patNextClose.lastIndex = this.patTag.lastIndex;
	
	while (!tag.match(this.patEndCDATA)) {
		if (matches = this.patNextClose.exec(this.text)) {
			tag += '>' + matches[1];
		}
		else {
			this.throwParseError( "Unclosed CDATA tag", tag );
			return null;
		}
	}
	
	this.patTag.lastIndex = this.patNextClose.lastIndex;
	
	if (matches = tag.match(this.patCDATANode)) {
		return matches[1];
	}
	else {
		this.throwParseError( "Malformed CDATA tag", tag );
		return null;
	}
};

XML.prototype.getTree = function() {
	// get reference to parsed XML tree
	return this.tree;
};

XML.prototype.compose = function(indent_string, eol) {
	// compose tree back into XML
	if (typeof(eol) == 'undefined') eol = "\n";
	var tree = this.tree;
	if (this.preserveDocumentNode) tree = tree[this.documentNodeName];
	
	var raw = compose_xml( tree, this.documentNodeName, 0, indent_string, eol );
	var body = raw.replace(/^\s*\<\?.+?\?\>\s*/, '');
	var xml = '';
	
	if (this.piNodeList.length) {
		for (var idx = 0, len = this.piNodeList.length; idx < len; idx++) {
			xml += '<' + this.piNodeList[idx] + '>' + eol;
		}
	}
	else {
		xml += xml_header + eol;
	}
	
	if (this.dtdNodeList.length) {
		for (var idx = 0, len = this.dtdNodeList.length; idx < len; idx++) {
			xml += '<' + this.dtdNodeList[idx] + '>' + eol;
		}
	}
	
	xml += body;
	return xml;
};

//
// Static Utility Functions:
//

var parse_xml = exports.parse = function parse_xml(text, opts) {
	// turn text into XML tree quickly
	if (!opts) opts = {};
	opts.text = text;
	var parser = new XML(opts);
	return parser.error() ? parser.getLastError() : parser.getTree();
};

var trim = exports.trim = function trim(text) {
	// strip whitespace from beginning and end of string
	if (text == null) return '';
	
	if (text && text.replace) {
		text = text.replace(/^\s+/, "");
		text = text.replace(/\s+$/, "");
	}
	
	return text;
};

var encode_entities = exports.encodeEntities = function encode_entities(text) {
	// Simple entitize exports.for = function for composing XML
	if (text == null) return '';
	
	if (text && text.replace) {
		text = text.replace(/\&/g, "&amp;"); // MUST BE FIRST
		text = text.replace(/</g, "&lt;");
		text = text.replace(/>/g, "&gt;");
	}
	
	return text;
};

var encode_attrib_entities = exports.encodeAttribEntities = function encode_attrib_entities(text) {
	// Simple entitize exports.for = function for composing XML attributes
	if (text == null) return '';
	
	if (text && text.replace) {
		text = text.replace(/\&/g, "&amp;"); // MUST BE FIRST
		text = text.replace(/</g, "&lt;");
		text = text.replace(/>/g, "&gt;");
		text = text.replace(/\"/g, "&quot;");
		text = text.replace(/\'/g, "&apos;");
	}
	
	return text;
};

var decode_entities = exports.decodeEntities = function decode_entities(text) {
	// Decode XML entities into raw ASCII
	if (text == null) return '';
	
	if (text && text.replace && text.match(/\&/)) {
		text = text.replace(/\&lt\;/g, "<");
		text = text.replace(/\&gt\;/g, ">");
		text = text.replace(/\&quot\;/g, '"');
		text = text.replace(/\&apos\;/g, "'");
		text = text.replace(/\&amp\;/g, "&"); // MUST BE LAST
	}
	
	return text;
};

var compose_xml = exports.stringify = function compose_xml(node, name, indent, indent_string, eol, sort) {
	// Compose node into XML including attributes
	// Recurse for child nodes
	if (typeof(indent_string) == 'undefined') indent_string = "\t";
	if (typeof(eol) == 'undefined') eol = "\n";
	if (typeof(sort) == 'undefined') sort = true;
	var xml = "";
	
	// If this is the root node, set the indent to 0
	// and setup the XML header (PI node)
	if (!indent) {
		indent = 0;
		xml = xml_header + eol;
		
		if (!name) {
			// no name provided, assume content is wrapped in it
			name = first_key(node);
			node = node[name];
		}
	}
	
	// Setup the indent text
	var indent_text = "";
	for (var k = 0; k < indent; k++) indent_text += indent_string;
	
	if ((typeof(node) == 'object') && (node != null)) {
		// node is object -- now see if it is an array or hash
		if (!node.length) { // what about zero-length array?
			// node is hash
			xml += indent_text + "<" + name;
			
			var num_keys = 0;
			var has_attribs = 0;
			for (var key in node) num_keys++; // there must be a better way...
			
			if (node["_Attribs"]) {
				has_attribs = 1;
				var sorted_keys = sort ? hash_keys_to_array(node["_Attribs"]).sort() : hash_keys_to_array(node["_Attribs"]);
				for (var idx = 0, len = sorted_keys.length; idx < len; idx++) {
					var key = sorted_keys[idx];
					xml += " " + key + "=\"" + encode_attrib_entities(node["_Attribs"][key]) + "\"";
				}
			} // has attribs
			
			if (num_keys > has_attribs) {
				// has child elements
				xml += ">";
				
				if (node["_Data"]) {
					// simple text child node
					xml += encode_entities(node["_Data"]) + "</" + name + ">" + eol;
				} // just text
				else {
					xml += eol;
					
					var sorted_keys = sort ? hash_keys_to_array(node).sort() : hash_keys_to_array(node);
					for (var idx = 0, len = sorted_keys.length; idx < len; idx++) {
						var key = sorted_keys[idx];					
						if ((key != "_Attribs") && key.match(re_valid_tag_name)) {
							// recurse for node, with incremented indent value
							xml += compose_xml( node[key], key, indent + 1, indent_string, eol, sort );
						} // not _Attribs key
					} // foreach key
					
					xml += indent_text + "</" + name + ">" + eol;
				} // real children
			}
			else {
				// no child elements, so self-close
				xml += "/>" + eol;
			}
		} // standard node
		else {
			// node is array
			for (var idx = 0; idx < node.length; idx++) {
				// recurse for node in array with same indent
				xml += compose_xml( node[idx], name, indent, indent_string, eol, sort );
			}
		} // array of nodes
	} // complex node
	else {
		// node is simple string
		xml += indent_text + "<" + name + ">" + encode_entities(node) + "</" + name + ">" + eol;
	} // simple text node
	
	return xml;
};

var always_array = exports.alwaysArray = function always_array(obj, key) {
	// if object is not array, return array containing object
	// if key is passed, work like XMLalwaysarray() instead
	if (key) {
		if ((typeof(obj[key]) != 'object') || (typeof(obj[key].length) == 'undefined')) {
			var temp = obj[key];
			delete obj[key];
			obj[key] = new Array();
			obj[key][0] = temp;
		}
		return null;
	}
	else {
		if ((typeof(obj) != 'object') || (typeof(obj.length) == 'undefined')) { return [ obj ]; }
		else return obj;
	}
};

var hash_keys_to_array = exports.hashKeysToArray = function hash_keys_to_array(hash) {
	// convert hash keys to array (discard values)
	var array = [];
	for (var key in hash) array.push(key);
	return array;
};

var isa_array = exports.isaArray = function isa_array(arg) {
	// determine if arg is an array or is array-like
	return isArray(arg);
};

var isa_hash = exports.isaHash = function isa_hash(arg) {
	// determine if arg is a hash
	return( !!arg && (typeof(arg) == 'object') && !isa_array(arg) );
};

var first_key = exports.firstKey = function first_key(hash) {
	// return first key from hash (unordered)
	for (var key in hash) return key;
	return null; // no keys in hash
};

var num_keys = exports.numKeys = function num_keys(hash) {
	// count the number of keys in a hash
	var count = 0;
	for (var a in hash) count++;
	return count;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15).Buffer))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(16)
var ieee754 = __webpack_require__(17)
var isArray = __webpack_require__(18)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {



/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(22);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(23);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(21)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=brewcalc.js.map