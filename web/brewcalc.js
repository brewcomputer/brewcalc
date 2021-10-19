(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["brewcalc"] = factory();
	else
		root["brewcalc"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/abv.ts":
/*!********************!*\
  !*** ./src/abv.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.calcABV = exports.estABV = exports.estABW = void 0;
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const units_1 = __webpack_require__(/*! ./units */ "./src/units.ts");
// http://byo.com/bock/item/408-calculating-alcohol-content-attenuation-extract-and-calories-advanced-homebrewing
// https://www.brewersfriend.com/2011/06/16/alcohol-by-volume-calculator-updated/
// ABW = (OG points - FG points) * 0.105
// ABV = (OG points - FG points) * 0.132
const estABW = (ogPts, fgPts) => (ogPts - fgPts) * 0.105;
exports.estABW = estABW;
const estABV = (ogPts, fgPts) => (ogPts - fgPts) * 0.132;
exports.estABV = estABV;
// http://beersmith.com/blog/2010/09/07/apparent-and-real-attenuation-for-beer-brewers-part-1/
const estABVrealExtract = (og, fg) => {
    const oe = utils_1.sgToPlato(og);
    const ae = utils_1.sgToPlato(fg);
    const re = 0.1808 * oe + 0.8192 * ae;
    const abw = (oe - re) / (2.0665 - 0.010665 * oe);
    const abv = abw * (fg / 0.79661);
    return abv;
};
const calcABV = (og, fg) => {
    return {
        value: estABVrealExtract(units_1.convertMeasurableValue(og, 'sg'), units_1.convertMeasurableValue(fg, 'sg')),
        unit: '%',
    };
};
exports.calcABV = calcABV;


/***/ }),

/***/ "./src/carbonation.ts":
/*!****************************!*\
  !*** ./src/carbonation.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.calcCalories = exports.carbonation = void 0;
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
// https://byo.com/yeast/item/164-balancing-your-draft-system-advanced-brewing
const kegPressure = (carbVolume, t) => Math.max(0, -16.6999 -
    0.0101059 * t +
    0.00116512 * t * t +
    0.173354 * t * carbVolume +
    4.24267 * carbVolume -
    0.0684226 * carbVolume * carbVolume);
// http://www.homebrewtalk.com/showthread.php?t=441383
const primingSugar = (carbVolume, t, batchSize) => 15.195 *
    batchSize *
    (carbVolume - 3.0378 + 5.0062e-2 * t - 2.6555e-4 * t * t);
const normalizeTemp = (t) => Math.max(32.0, utils_1.celsiusToFahrenheit(t));
const carbonation = (carbVolume, t, batchSize) => {
    const sugar = primingSugar(carbVolume, normalizeTemp(t), utils_1.litersToGallons(batchSize));
    return {
        kegPressure: kegPressure(carbVolume, normalizeTemp(t)),
        kegSugar: sugar * 0.5,
        cornSugar: sugar,
        dme: sugar * 1.538,
    };
};
exports.carbonation = carbonation;
// http://beersmith.com/blog/2011/02/04/counting-calories-in-your-homebrewed-beer/
// Calorie_from_alcohol = 1881.22 * FG * (OG-FG)/(1.775-OG)
// Calories_from_carbs = 3550.0 * FG * ((0.1808 * OG) + (0.8192 * FG) – 1.0004)
// Total calories – just add the Calories_from_alcohol to Calories_from_carbs
const caloriesAlc = (og, fg) => 1881.22 * fg * ((og - fg) / (1.775 - og));
const caloriesExt = (og, fg) => 3550.0 * fg * (0.1808 * og + 0.8192 * fg - 1.0004);
const calcCalories = (og, fg) => caloriesAlc(og, fg) + caloriesExt(og, fg);
exports.calcCalories = calcCalories;


/***/ }),

/***/ "./src/color.ts":
/*!**********************!*\
  !*** ./src/color.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.srmToCss = exports.srmToRgb = exports.calcColor = void 0;
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const units_1 = __webpack_require__(/*! ./units */ "./src/units.ts");
// MCU = (weight of grain in lbs)*(color of grain in lovibond) / (volume in gal) SRM = 1.4922 * MCU ^ 0.6859
const mcu2srm = (mcu) => 1.4922 * Math.pow(mcu, 0.6859);
const calcMCU = (amount, color) => color > 0.56 ? amount * color : 0;
const calcColor = (fermentables, postBoilVolume) => {
    const fermentablesMCU = fermentables.map((fermentable) => {
        return calcMCU(units_1.convertMeasurableValue(fermentable.amount, 'lb'), units_1.convertMeasurableValue(fermentable.color, 'Lovi'));
    });
    const colorSRM = mcu2srm(utils_1.sum(fermentablesMCU) / units_1.convertMeasurableValue(postBoilVolume, 'gal'));
    return {
        unit: 'SRM',
        value: colorSRM,
    };
};
exports.calcColor = calcColor;
const srmToRgb = (srm) => ({
    r: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.975, srm)))),
    g: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.88, srm)))),
    b: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.7, srm)))),
});
exports.srmToRgb = srmToRgb;
const srmToCss = (srm) => {
    const color = exports.srmToRgb(srm);
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
};
exports.srmToCss = srmToCss;


/***/ }),

/***/ "./src/converter/converter.ts":
/*!************************************!*\
  !*** ./src/converter/converter.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const definitions_1 = __webpack_require__(/*! ./definitions */ "./src/converter/definitions.ts");
const DEFAULT_PRECISION = 2;
const roundValue = (value, precision) => +value.toFixed(precision);
/**
 * @param {number} value
 * @param {string} from
 * @param {string} to
 * @param {number} precision
 * @returns {number}
 */
const convert = (value, from, to, precision) => {
    if (value == null) {
        throw new Error(`Unable to convert null or undefined!`);
    }
    let origin = null;
    let destination = null;
    for (const measurableTypeKey in definitions_1.default) {
        const measurableType = definitions_1.default[measurableTypeKey];
        for (const systemKey in measurableType) {
            const system = measurableType[systemKey];
            if (system.units.hasOwnProperty(from)) {
                origin = { unit: system.units[from], system };
            }
            if (system.units.hasOwnProperty(to)) {
                destination = { unit: system.units[to], system };
            }
        }
        if (origin != null && destination == null) {
            throw new Error(`Unable to convert [${measurableTypeKey}] unit [${from}] to [${to}]!`);
        }
        if (origin == null && destination != null) {
            throw new Error(`Unable to convert [${from}] to [${measurableTypeKey}] unit [${to}]!`);
        }
        if (origin != null && destination != null) {
            break;
        }
    }
    if (origin == null) {
        throw new Error(`Unit not found [${from}]!`);
    }
    if (destination == null) {
        throw new Error(`Unit not found [${to}]!`);
    }
    const unitPrecision = destination.unit.precision != null
        ? destination.unit.precision
        : DEFAULT_PRECISION;
    const actualPrecision = precision != null ? precision : unitPrecision;
    if (from === to) {
        return roundValue(value, actualPrecision);
    }
    let result = value * origin.unit.ratio;
    if (origin.system !== destination.system) {
        result = destination.system.fromBase(origin.system.toBase(result));
    }
    result /= destination.unit.ratio;
    return roundValue(result, actualPrecision);
};
exports.convert = convert;


/***/ }),

/***/ "./src/converter/definitions.ts":
/*!**************************************!*\
  !*** ./src/converter/definitions.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
exports.default = {
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
            toBase: utils_1.lovibondToSrm,
            fromBase: utils_1.srmToLovibond,
            units: {
                Lovi: {
                    ratio: 1,
                },
            },
        },
        ebc: {
            toBase: utils_1.ebcToSrm,
            fromBase: utils_1.srmToEbc,
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
            toBase: utils_1.platoToSG,
            fromBase: utils_1.sgToPlato,
            units: {
                plato: {
                    ratio: 1,
                },
            },
        },
        brix: {
            toBase: utils_1.brixToSG,
            fromBase: utils_1.sgToBrix,
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
            toBase: utils_1.fahrenheitToCelsius,
            fromBase: utils_1.celsiusToFahrenheit,
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
};


/***/ }),

/***/ "./src/culture.ts":
/*!************************!*\
  !*** ./src/culture.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.yeastStarterGrow = exports.yeastCount = exports.yeastNeeded = void 0;
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const yeast_1 = __webpack_require__(/*! ./types/yeast */ "./src/types/yeast.ts");
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
const yeastNeeded = (pitchRate, batchSize, e) => (pitchRate * (batchSize * 1000) * e) / 1000;
exports.yeastNeeded = yeastNeeded;
const viability = (currentDate, cultureDate = new Date().toString()) => 100 -
    Math.floor((Date.parse(currentDate) - Date.parse(cultureDate)) / 86400000) *
        0.7;
const yeastCount = ({ amount, form, cultureDate }, currentDate = new Date().toString(), cellDensity = 8, 
// billion cells / ml
slurryDensity = 1) => {
    switch (form) {
        case yeast_1.YeastForms.dry:
            return cellDensity * amount * 1000;
        case yeast_1.YeastForms.liquid:
            return 100 * (viability(currentDate, cultureDate) / 100) * amount;
        case yeast_1.YeastForms.slant:
            return slurryDensity * amount * 1000;
        default:
            throw new Error("NotImplementedError");
    }
};
exports.yeastCount = yeastCount;
const yeastGrowth = (ratio) => 2.33 - 0.67 * ratio;
const growthRateCurveBraukaiserStir = (ratio) => ratio < 1.4
    ? 1.4
    : ratio >= 1.4 && ratio <= 3.5 && yeastGrowth(ratio) > 0
        ? yeastGrowth(ratio)
        : 0;
const yeastStarterGrow = (startingYeastCount, starterSize, gravity, batchSize) => {
    const volumeLevel = utils_1.litersToGallons(starterSize);
    const pointsNeeded = volumeLevel * (gravity - 1) * 1000;
    const poundsDME = pointsNeeded / 42;
    const gramsDME = utils_1.poundsTokg(poundsDME) * 1000;
    const cellsToGramsRatio = startingYeastCount / gramsDME;
    const growthRate = growthRateCurveBraukaiserStir(cellsToGramsRatio);
    const endingCount = gramsDME * growthRate + startingYeastCount;
    const pitchRate = (endingCount * 1000) / utils_1.sgToPlato(gravity) / (batchSize / 1000);
    return {
        growthRate: growthRate,
        endingCount: endingCount,
        pitchRate: pitchRate,
    };
};
exports.yeastStarterGrow = yeastStarterGrow;


/***/ }),

/***/ "./src/gravity.ts":
/*!************************!*\
  !*** ./src/gravity.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.calcBoilGravity = exports.calcFinalGravity = exports.calcOriginalGravity = exports.calcTotalGravityPoints = void 0;
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const units_1 = __webpack_require__(/*! ./units */ "./src/units.ts");
// Sugar provides 46 gravity points per pound, per gallon (PPPG).
// 1 pound = 16 oz (weight/mass)
// 1 gallon = 128 fl oz
// yield and efficiency should be parsed from recipe as percent values
// The maximum potential is approximately 1.046 which would be a pound of pure sugar in a gallon of water.
const yieldToPotential = (fermentableYield) => ({
    value: (fermentableYield.value * 0.01 * 46) / 1000 + 1,
    unit: 'sg',
});
const calcFermentableEfficiency = (type, equipmentEfficiency, sugarEfficiency = 1) => type === 'extract' || type === 'sugar' || type === 'dry extract'
    ? sugarEfficiency
    : equipmentEfficiency;
const calcFermentablePotential = (fermentableYield) => {
    if (fermentableYield.potential != null) {
        return fermentableYield.potential;
    }
    if (fermentableYield.fine_grind != null) {
        return yieldToPotential(fermentableYield.fine_grind);
    }
    if (fermentableYield.coarse_grind != null) {
        return yieldToPotential(fermentableYield.coarse_grind);
    }
    return { value: 0, unit: 'sg' };
};
const calcFermentableGravityPoints = (fermentable, brewhouseEfficiency = { value: 100, unit: '%' }, attenuation = { value: 0, unit: '%' }) => {
    const amountValue = units_1.convertMeasurableValue(fermentable.amount, 'lb');
    const potentialValue = units_1.convertMeasurableValue(calcFermentablePotential(fermentable.yield), 'sg');
    const efficiencyValue = (1 - attenuation.value / 100) *
        calcFermentableEfficiency(fermentable.type, brewhouseEfficiency.value / 100);
    return (potentialValue - 1) * amountValue * efficiencyValue;
};
const calcTotalGravityPoints = (fermentables, efficiency, attenuation) => utils_1.sum(fermentables.map((fermentable) => calcFermentableGravityPoints(fermentable, efficiency.brewhouse, attenuation)));
exports.calcTotalGravityPoints = calcTotalGravityPoints;
const calcGravity = (batchSize, gravityPoints) => {
    return 1.0 + gravityPoints / units_1.convertMeasurableValue(batchSize, 'gal');
};
const boilGravity = (batchSizeInGallons, boilSizeInGallons, ogInSG) => 1 + ((ogInSG - 1) * batchSizeInGallons) / boilSizeInGallons;
const calcOriginalGravity = (batchSize, fermentables, efficiency) => {
    const ogValue = calcGravity(batchSize, exports.calcTotalGravityPoints(fermentables, efficiency));
    return {
        unit: 'sg',
        value: ogValue,
    };
};
exports.calcOriginalGravity = calcOriginalGravity;
const calcFinalGravity = (batchSize, fermentables, efficiency, cultures) => {
    const fgValue = calcGravity(batchSize, exports.calcTotalGravityPoints(fermentables, efficiency, cultures[0].attenuation));
    return {
        unit: 'sg',
        value: fgValue,
    };
};
exports.calcFinalGravity = calcFinalGravity;
const calcBoilGravity = (batchSize, boilSize, OG) => {
    return {
        unit: 'sg',
        value: boilGravity(units_1.convertMeasurableValue(batchSize, 'gal'), units_1.convertMeasurableValue(boilSize, 'gal'), units_1.convertMeasurableValue(OG, 'sg')),
    };
};
exports.calcBoilGravity = calcBoilGravity;


/***/ }),

/***/ "./src/hops.ts":
/*!*********************!*\
  !*** ./src/hops.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bitternessIbuRager = exports.bitternessRatio = exports.bitternessIbuTinseth = void 0;
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const units_1 = __webpack_require__(/*! ./units */ "./src/units.ts");
const timing_1 = __webpack_require__(/*! ./timing */ "./src/timing.ts");
const alphaAcidUnits = (amountInOz, alphaAcid) => amountInOz * alphaAcid;
const gravityFactor = (boilGravityValue) => 1.65 * Math.pow(0.000125, boilGravityValue - 1);
const timeFactor = (boilTimeInMin) => (1 - Math.exp(-0.04 * boilTimeInMin)) / 4.15;
const pelletFactor = (form = '') => form === 'pellet' ? 1.1 : 1;
const ibuUtilization = (hopForm = '', boilGravityValue, boilTimeInMin = 0) => pelletFactor(hopForm) *
    gravityFactor(boilGravityValue) *
    timeFactor(boilTimeInMin);
// Glenn Tinseth developed the following formula to calculate bitterness in IBUs:
// IBU = (U * ozs hops * 7490)/Volume (in gallons) U represents the utilization of the hops (conversion to iso-alpha-acids) based on boil time and wort gravity.
// U = bigness factor * boil time factor
// http://www.howtobrew.com/book/section-1/hops/hop-bittering-calculations
const bitternessIbuTinseth = (hops, boilGravity, postBoilVolume) => {
    const bitterness = utils_1.sum(hops.map(({ amount, alpha_acid, form, timing }) => {
        // TODO: research needed
        if (!timing_1.use(timing).add_to_boil) {
            return 0;
        }
        const AAU = alphaAcidUnits(units_1.convertMeasurableValue(amount, 'oz'), alpha_acid.value);
        const U = ibuUtilization(form, units_1.convertMeasurableValue(boilGravity, 'sg'), timing_1.boilTime(timing));
        return (U * AAU * 74.89) / units_1.convertMeasurableValue(postBoilVolume, 'gal');
    }));
    return {
        value: bitterness,
        unit: 'IBUs',
    };
};
exports.bitternessIbuTinseth = bitternessIbuTinseth;
// The preceived bitterness expressed in a ratio of IBUs to gravity. This is frequently seen expressed as BU/GU.
// The Gravity Units are the decimal portion of the original gravity
// http://beersmith.com/blog/2009/09/26/balancing-your-beer-with-the-bitterness-ratio/
const bitternessRatio = (ibu, gu) => ibu / gu;
exports.bitternessRatio = bitternessRatio;
// rager
const ragerHopGravityAdjustment = (sgb) => sgb <= 1.05 ? 0 : (sgb - 1.05) / 0.2;
const ragerUtil = (time) => 18.11 + 13.86 * Math.tanh((time - 31.32) / 18.27);
const ragerHopIbu = (hop, boilGravity, postBoilVolume) => {
    if (!timing_1.use(hop.timing).add_to_boil) {
        return 0;
    }
    const U = (ragerUtil(Math.floor(timing_1.boilTime(hop.timing) + 0.5)) *
        pelletFactor(hop.form)) /
        100;
    const AAU = alphaAcidUnits(hop.amount.value, hop.alpha_acid.value);
    return ((U * AAU * 74.89) /
        postBoilVolume.value /
        (1.0 + ragerHopGravityAdjustment(boilGravity.value)));
};
const bitternessIbuRager = (hops, boilGravity, postBoilVolume) => {
    const bitterness = utils_1.sum(hops.map((hop) => ragerHopIbu(hop, boilGravity, postBoilVolume)));
    return {
        value: bitterness,
        unit: 'IBUs',
    };
};
exports.bitternessIbuRager = bitternessIbuRager;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.yeastStarterGrow = exports.yeastNeeded = exports.yeastCount = exports.carbonation = exports.calcCalories = exports.recalculateMashSteps = exports.calcMashGrainWeight = exports.calcMashVolumes = exports.calcBoilVolumes = exports.calculateRecipeBeerJSON = exports.bitternessRatio = exports.bitternessIbuTinseth = exports.bitternessIbuRager = exports.calcABV = exports.srmToRgb = exports.srmToCss = exports.calcColor = exports.calcBoilGravity = exports.calcFinalGravity = exports.calcOriginalGravity = exports.convertMeasurableValue = exports.convert = void 0;
const culture_1 = __webpack_require__(/*! ./culture */ "./src/culture.ts");
Object.defineProperty(exports, "yeastCount", { enumerable: true, get: function () { return culture_1.yeastCount; } });
Object.defineProperty(exports, "yeastNeeded", { enumerable: true, get: function () { return culture_1.yeastNeeded; } });
Object.defineProperty(exports, "yeastStarterGrow", { enumerable: true, get: function () { return culture_1.yeastStarterGrow; } });
const carbonation_1 = __webpack_require__(/*! ./carbonation */ "./src/carbonation.ts");
Object.defineProperty(exports, "calcCalories", { enumerable: true, get: function () { return carbonation_1.calcCalories; } });
Object.defineProperty(exports, "carbonation", { enumerable: true, get: function () { return carbonation_1.carbonation; } });
const hops_1 = __webpack_require__(/*! ./hops */ "./src/hops.ts");
Object.defineProperty(exports, "bitternessIbuRager", { enumerable: true, get: function () { return hops_1.bitternessIbuRager; } });
Object.defineProperty(exports, "bitternessIbuTinseth", { enumerable: true, get: function () { return hops_1.bitternessIbuTinseth; } });
Object.defineProperty(exports, "bitternessRatio", { enumerable: true, get: function () { return hops_1.bitternessRatio; } });
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const units_1 = __webpack_require__(/*! ./units */ "./src/units.ts");
Object.defineProperty(exports, "convertMeasurableValue", { enumerable: true, get: function () { return units_1.convertMeasurableValue; } });
const converter_1 = __webpack_require__(/*! ./converter/converter */ "./src/converter/converter.ts");
Object.defineProperty(exports, "convert", { enumerable: true, get: function () { return converter_1.convert; } });
const mash_1 = __webpack_require__(/*! ./mash */ "./src/mash.ts");
Object.defineProperty(exports, "calcMashGrainWeight", { enumerable: true, get: function () { return mash_1.calcMashGrainWeight; } });
Object.defineProperty(exports, "recalculateMashSteps", { enumerable: true, get: function () { return mash_1.recalculateMashSteps; } });
const volumes_1 = __webpack_require__(/*! ./volumes */ "./src/volumes.ts");
Object.defineProperty(exports, "calcBoilVolumes", { enumerable: true, get: function () { return volumes_1.calcBoilVolumes; } });
Object.defineProperty(exports, "calcMashVolumes", { enumerable: true, get: function () { return volumes_1.calcMashVolumes; } });
const gravity_1 = __webpack_require__(/*! ./gravity */ "./src/gravity.ts");
Object.defineProperty(exports, "calcOriginalGravity", { enumerable: true, get: function () { return gravity_1.calcOriginalGravity; } });
Object.defineProperty(exports, "calcFinalGravity", { enumerable: true, get: function () { return gravity_1.calcFinalGravity; } });
Object.defineProperty(exports, "calcBoilGravity", { enumerable: true, get: function () { return gravity_1.calcBoilGravity; } });
const color_1 = __webpack_require__(/*! ./color */ "./src/color.ts");
Object.defineProperty(exports, "srmToCss", { enumerable: true, get: function () { return color_1.srmToCss; } });
Object.defineProperty(exports, "srmToRgb", { enumerable: true, get: function () { return color_1.srmToRgb; } });
Object.defineProperty(exports, "calcColor", { enumerable: true, get: function () { return color_1.calcColor; } });
const abv_1 = __webpack_require__(/*! ./abv */ "./src/abv.ts");
Object.defineProperty(exports, "calcABV", { enumerable: true, get: function () { return abv_1.calcABV; } });
const calculateRecipeBeerJSON = (recipe, mash, equipment) => {
    const { batch_size, boil, efficiency, ingredients } = recipe;
    const { fermentable_additions, hop_additions, culture_additions } = ingredients;
    let original_gravity = {
        unit: "sg",
        value: null,
    };
    let final_gravity = {
        unit: "sg",
        value: null,
    };
    let color = {
        unit: "SRM",
        value: null,
    };
    let ibu = {
        unit: "IBUs",
        value: null,
    };
    let abv = {
        unit: "%",
        value: null,
    };
    let volumes = null;
    let calculatedMash = null;
    let calculatedBoil = null;
    if (utils_1.isNotEmptyArray(fermentable_additions)) {
        original_gravity = gravity_1.calcOriginalGravity(batch_size, fermentable_additions, efficiency);
        const defaultCultureAddition = {
            name: "Default Culture",
            type: "ale",
            form: "liquid",
            attenuation: { value: 75, unit: "%" },
        };
        final_gravity = gravity_1.calcFinalGravity(batch_size, fermentable_additions, efficiency, utils_1.isNotEmptyArray(culture_additions)
            ? culture_additions
            : [defaultCultureAddition]);
        abv = abv_1.calcABV(original_gravity, final_gravity);
        const { pre_boil_size } = volumes_1.calcBoilVolumes(batch_size, boil, equipment);
        volumes = {
            pre_boil_size,
        };
        if (mash) {
            const mashGrainWeight = mash_1.calcMashGrainWeight(fermentable_additions);
            const mashSteps = mash_1.recalculateMashSteps(mash.mash_steps, mash.grain_temperature, mashGrainWeight);
            const { sparge_volume, mash_volume, total_volume } = volumes_1.calcMashVolumes(pre_boil_size, mashSteps, mashGrainWeight, equipment);
            volumes = Object.assign(Object.assign({}, volumes), { sparge_volume,
                mash_volume,
                total_volume });
            calculatedMash = Object.assign(Object.assign({}, mash), { mash_steps: mash_1.updateSpargeVolume(mashSteps, sparge_volume) });
        }
        if (boil) {
            calculatedBoil = Object.assign(Object.assign({}, boil), { pre_boil_size });
        }
        color = color_1.calcColor(fermentable_additions, batch_size);
        if (utils_1.isNotEmptyArray(hop_additions)) {
            const boilGravity = gravity_1.calcBoilGravity(batch_size, pre_boil_size, original_gravity);
            ibu = hops_1.bitternessIbuTinseth(hop_additions, boilGravity, batch_size);
        }
    }
    return {
        stats: {
            original_gravity: utils_1.roundMeasurable(original_gravity, 3),
            final_gravity: utils_1.roundMeasurable(final_gravity, 3),
            alcohol_by_volume: utils_1.roundMeasurable(abv, 1),
            ibu_estimate: utils_1.roundMeasurable(ibu, 1),
            color_estimate: utils_1.roundMeasurable(color, 1),
        },
        volumes,
        mash: calculatedMash,
        boil: calculatedBoil,
    };
};
exports.calculateRecipeBeerJSON = calculateRecipeBeerJSON;


/***/ }),

/***/ "./src/mash.ts":
/*!*********************!*\
  !*** ./src/mash.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSpargeVolume = exports.calcMashGrainWeight = exports.recalculateMashSteps = void 0;
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const units_1 = __webpack_require__(/*! ./units */ "./src/units.ts");
const timing_1 = __webpack_require__(/*! ./timing */ "./src/timing.ts");
const grainVolume = 0.652; // l/kg
const boilingTemp = 100;
const maltSpecificHeat = 0.38; // Cal/gram-C
const initialWaterGrainRatio = 2.5; // l/kg
const adjustTunMass = (tunVolume, totVolume, tunMass) => {
    tunVolume = tunVolume * 0.8;
    return tunVolume > 0 && totVolume < tunVolume
        ? (tunMass * totVolume) / tunVolume
        : tunMass;
};
const calcDecoctionStep = (startTemp, targetTemp, startVolume, mashGrainWeight, tunMass = 0, tunSpecificHeat = 0, tunVolume = 0) => {
    const totVolume = grainVolume * mashGrainWeight + startVolume;
    const adjustedTunMass = adjustTunMass(tunVolume, totVolume, tunMass);
    let fraction = (((maltSpecificHeat * mashGrainWeight +
        tunSpecificHeat * adjustedTunMass +
        startVolume) /
        (maltSpecificHeat * mashGrainWeight + startVolume)) *
        (targetTemp - startTemp)) /
        (boilingTemp - startTemp);
    if (fraction > 1) {
        fraction = 1;
    }
    return { amount: { value: totVolume * fraction, unit: 'l' } };
};
const calcInfusionStep = (startTemp, stepTemp, startVolume, index, mashGrainWeight) => {
    const infuseTemp = index > 0
        ? boilingTemp
        : (maltSpecificHeat * (stepTemp - startTemp)) / initialWaterGrainRatio +
            stepTemp;
    const infuseAmount = ((mashGrainWeight * maltSpecificHeat + startVolume) *
        (stepTemp - startTemp)) /
        (infuseTemp - stepTemp);
    return {
        infuse_temperature: {
            unit: 'C',
            value: infuseTemp,
        },
        amount: {
            unit: 'l',
            value: infuseAmount,
        },
    };
};
function recalculateMashSteps(mash_steps, grain_temperature, mashGrainWeight) {
    let startVolume = 0;
    let startTemp = grain_temperature.value;
    const grainWeightValue = units_1.convertMeasurableValue(mashGrainWeight, 'kg');
    return mash_steps.map((step, index) => {
        const stepTemp = utils_1.getMeasurableValue(step.step_temperature);
        switch (step.type) {
            case 'decoction': {
                const { amount } = calcDecoctionStep(startTemp, stepTemp, startVolume, grainWeightValue);
                return Object.assign(Object.assign({}, step), { amount });
            }
            case 'infusion': {
                const { amount, infuse_temperature } = calcInfusionStep(startTemp, stepTemp, startVolume, index, grainWeightValue);
                startVolume += amount.value;
                startTemp = stepTemp;
                return Object.assign(Object.assign({}, step), { infuse_temperature,
                    amount });
            }
            default:
                return step;
        }
    });
}
exports.recalculateMashSteps = recalculateMashSteps;
const calcMashGrainWeight = (fermentables) => {
    const value = utils_1.sum(fermentables.map(({ timing, type, amount }) => type === 'grain' && timing_1.use(timing).add_to_mash
        ? units_1.convertMeasurableValue(amount, 'lb')
        : 0));
    return {
        value,
        unit: 'lb',
    };
};
exports.calcMashGrainWeight = calcMashGrainWeight;
function updateSpargeVolume(mash_steps, spargeVolume) {
    return mash_steps.map((step) => {
        if (step.type === 'sparge') {
            return Object.assign(Object.assign({}, step), { amount: spargeVolume });
        }
        return step;
    });
}
exports.updateSpargeVolume = updateSpargeVolume;


/***/ }),

/***/ "./src/timing.ts":
/*!***********************!*\
  !*** ./src/timing.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.boilTime = exports.use = void 0;
const use = (timing = {}) => ({
    add_to_boil: timing.use === 'add_to_boil',
    add_to_mash: !timing.use || timing.use === 'add_to_mash',
});
exports.use = use;
const boilTime = (timing = {}) => timing.use === 'add_to_boil' ? timing.time.value : 0;
exports.boilTime = boilTime;


/***/ }),

/***/ "./src/types/yeast.ts":
/*!****************************!*\
  !*** ./src/types/yeast.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.YeastForms = exports.YeastTypes = void 0;
exports.YeastTypes = {
    ale: 'Ale',
    lager: 'Lager',
    wheat: 'Wheat',
    wine: 'Wine',
    champagne: 'Champagne',
};
exports.YeastForms = {
    liquid: 'Liquid',
    dry: 'Dry',
    slant: 'Slant',
    culture: 'Culture',
};


/***/ }),

/***/ "./src/units.ts":
/*!**********************!*\
  !*** ./src/units.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMeasurableValue = void 0;
const converter_1 = __webpack_require__(/*! ./converter/converter */ "./src/converter/converter.ts");
const convertMeasurableValue = (measurable, unit, precision = 4) => {
    return converter_1.convert(measurable.value, measurable.unit, unit, precision);
};
exports.convertMeasurableValue = convertMeasurableValue;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.roundMeasurable = exports.getMeasurableValue = exports.isMeasurable = exports.isObject = exports.round = exports.isNotEmptyArray = exports.capitalize = exports.sum = exports.lovibondToSrm = exports.srmToLovibond = exports.ebcToSrm = exports.srmToEbc = exports.sgToBrix = exports.brixToSG = exports.platoToSG = exports.sgToPlato = exports.psiTokpa = exports.kpaToPsi = exports.celsiusToFahrenheit = exports.fahrenheitToCelsius = exports.gallonsToLiters = exports.litersToGallons = exports.ouncesToLiters = exports.litersToOunces = exports.poundsTokg = exports.kgToPounds = exports.kgToOunces = void 0;
const kgToOunces = (k) => k * 35.2739619;
exports.kgToOunces = kgToOunces;
const kgToPounds = (k) => exports.kgToOunces(k) / 16;
exports.kgToPounds = kgToPounds;
const poundsTokg = (p) => p / 2.204;
exports.poundsTokg = poundsTokg;
const litersToOunces = (l) => l / 0.0295735;
exports.litersToOunces = litersToOunces;
const ouncesToLiters = (o) => o * 0.0295735;
exports.ouncesToLiters = ouncesToLiters;
const litersToGallons = (l) => exports.litersToOunces(l) / 128;
exports.litersToGallons = litersToGallons;
const gallonsToLiters = (g) => exports.ouncesToLiters(g * 128);
exports.gallonsToLiters = gallonsToLiters;
const fahrenheitToCelsius = (f) => (f - 32) / 1.8;
exports.fahrenheitToCelsius = fahrenheitToCelsius;
const celsiusToFahrenheit = (c) => c * 1.8 + 32;
exports.celsiusToFahrenheit = celsiusToFahrenheit;
const kpaToPsi = (kpa) => kpa * 0.14503773773020923;
exports.kpaToPsi = kpaToPsi;
const psiTokpa = (psi) => psi * 6.894757293168361;
exports.psiTokpa = psiTokpa;
const sgToPlato = (sg) => -616.868 +
    1111.14 * sg -
    630.272 * Math.pow(sg, 2) +
    135.997 * Math.pow(sg, 3);
exports.sgToPlato = sgToPlato;
const platoToSG = (e) => 1 + e / (258.6 - (e / 258.2) * 227.1);
exports.platoToSG = platoToSG;
const brixToSG = (brix) => brix / (258.6 - (brix / 258.2) * 227.1) + 1;
exports.brixToSG = brixToSG;
const sgToBrix = (sg) => -669.5622 +
    1262.7749 * sg -
    775.6821 * Math.pow(sg, 2) +
    182.4601 * Math.pow(sg, 3);
exports.sgToBrix = sgToBrix;
const srmToEbc = (srm) => srm * 1.97;
exports.srmToEbc = srmToEbc;
const ebcToSrm = (ebc) => ebc * 0.508;
exports.ebcToSrm = ebcToSrm;
const srmToLovibond = (srm) => (srm + 0.76) / 1.3546;
exports.srmToLovibond = srmToLovibond;
const lovibondToSrm = (lovibond) => 1.3546 * lovibond - 0.76;
exports.lovibondToSrm = lovibondToSrm;
const sum = (array) => array.reduce((pv, cv) => pv + cv, 0);
exports.sum = sum;
const scaleIngredients = (scaleFactor, ingredients) => ingredients.map((i) => {
    return Object.assign(Object.assign({}, i), { amount: scaleFactor * i.amount });
});
const capitalize = (str) => {
    const words = str.split(' ');
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
};
exports.capitalize = capitalize;
const isNotEmptyArray = (arr) => {
    if (Array.isArray(arr)) {
        return arr.length > 0;
    }
    return false;
};
exports.isNotEmptyArray = isNotEmptyArray;
function round(number, precision = 0) {
    if (typeof number === 'number') {
        return Number(number.toFixed(precision));
    }
    return null;
}
exports.round = round;
function isObject(object) {
    return object != null && typeof object === 'object';
}
exports.isObject = isObject;
function isMeasurable(object) {
    return (isObject(object) &&
        object.hasOwnProperty('value') &&
        object.hasOwnProperty('unit'));
}
exports.isMeasurable = isMeasurable;
function getMeasurableValue(measurable) {
    if (isMeasurable(measurable)) {
        return measurable.value;
    }
    return null;
}
exports.getMeasurableValue = getMeasurableValue;
const roundMeasurable = (m, precision) => {
    return {
        unit: m.unit,
        value: round(m.value, precision),
    };
};
exports.roundMeasurable = roundMeasurable;


/***/ }),

/***/ "./src/volumes.ts":
/*!************************!*\
  !*** ./src/volumes.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.calcBoilVolumes = exports.calcMashVolumes = void 0;
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const units_1 = __webpack_require__(/*! ./units */ "./src/units.ts");
const defaultBoil = {
    pre_boil_size: {
        value: 0,
        unit: "gal",
    },
    boil_time: {
        value: 0,
        unit: "min",
    },
};
const coolingShrinkageRate = 0.04;
const convertToGallons = (volume) => units_1.convertMeasurableValue(volume, "gal");
// 0.96 - number of fl. ounces of water absorbed per ounce of the grain
// 128 fl. ounces in gallon, 16 ounces in pound
const grainAbsorptionRatio = (0.96 / 128) * 16;
const calcGrainAbsorption = (grainWeight) => {
    const value = units_1.convertMeasurableValue(grainWeight, "lb") * grainAbsorptionRatio;
    return {
        value,
        unit: "gal",
    };
};
const calcMashWaterVolume = (mash_steps = []) => {
    const value = utils_1.sum(mash_steps.map(({ type, amount }) => type === "infusion" ? convertToGallons(amount) : 0));
    return {
        value,
        unit: "gal",
    };
};
const calcMashVolumes = (pre_boil_size, mashSteps, mashGrainWeight, equipment) => {
    const mashWaterVolume = calcMashWaterVolume(mashSteps);
    const grainAbsorption = calcGrainAbsorption(mashGrainWeight);
    const mashLoss = equipment.mash_tun != null ? convertToGallons(equipment.mash_tun.loss) : 0;
    const spargeVolumeValue = convertToGallons(pre_boil_size) +
        grainAbsorption.value -
        mashWaterVolume.value +
        mashLoss;
    const spargeVolume = {
        value: spargeVolumeValue,
        unit: "gal",
    };
    const totalVolume = {
        value: mashWaterVolume.value + spargeVolume.value,
        unit: "gal",
    };
    return {
        mash_volume: mashWaterVolume,
        sparge_volume: spargeVolume,
        total_volume: totalVolume,
    };
};
exports.calcMashVolumes = calcMashVolumes;
const calcBoilVolumes = (batch_size, boil = defaultBoil, equipment) => {
    const boilProfile = boil || defaultBoil;
    const postBoilVolume = convertToGallons(batch_size);
    let boilLoss = 0;
    let boilRate = 0;
    if (equipment != null && equipment.brew_kettle != null) {
        boilLoss = convertToGallons(equipment.brew_kettle.loss);
        boilRate = convertToGallons(equipment.brew_kettle.boil_rate_per_hour);
    }
    const boilOffVolume = (boilRate * boilProfile.boil_time.value) / 60;
    const coolingShrinkage = postBoilVolume * coolingShrinkageRate;
    const preBoilVolume = postBoilVolume + boilOffVolume + boilLoss + coolingShrinkage;
    return {
        pre_boil_size: {
            value: preBoilVolume,
            unit: "gal",
        },
    };
};
exports.calcBoilVolumes = calcBoilVolumes;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmV3Y2FsYy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYnJld2NhbGMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnJld2NhbGMvLi9zcmMvYWJ2LnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL2NhcmJvbmF0aW9uLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL2NvbG9yLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL2NvbnZlcnRlci9jb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vYnJld2NhbGMvLi9zcmMvY29udmVydGVyL2RlZmluaXRpb25zLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL2N1bHR1cmUudHMiLCJ3ZWJwYWNrOi8vYnJld2NhbGMvLi9zcmMvZ3Jhdml0eS50cyIsIndlYnBhY2s6Ly9icmV3Y2FsYy8uL3NyYy9ob3BzLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL21hc2gudHMiLCJ3ZWJwYWNrOi8vYnJld2NhbGMvLi9zcmMvdGltaW5nLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL3R5cGVzL3llYXN0LnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL3VuaXRzLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL3ZvbHVtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEscUVBQW1DO0FBQ25DLHFFQUFnRDtBQUdoRCxpSEFBaUg7QUFDakgsaUZBQWlGO0FBQ2pGLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDakMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLO0FBQWxFLGNBQU0sVUFBNEQ7QUFDeEUsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLO0FBQWxFLGNBQU0sVUFBNEQ7QUFFL0UsOEZBQThGO0FBQzlGLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBVSxFQUFVLEVBQUU7SUFDM0QsTUFBTSxFQUFFLEdBQUcsaUJBQVMsQ0FBQyxFQUFFLENBQUM7SUFDeEIsTUFBTSxFQUFFLEdBQUcsaUJBQVMsQ0FBQyxFQUFFLENBQUM7SUFDeEIsTUFBTSxFQUFFLEdBQUcsTUFBTSxHQUFHLEVBQUUsR0FBRyxNQUFNLEdBQUcsRUFBRTtJQUNwQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2hELE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7SUFFaEMsT0FBTyxHQUFHO0FBQ1osQ0FBQztBQUVNLE1BQU0sT0FBTyxHQUFHLENBQUMsRUFBZSxFQUFFLEVBQWUsRUFBZSxFQUFFO0lBQ3ZFLE9BQU87UUFDTCxLQUFLLEVBQUUsaUJBQWlCLENBQ3RCLDhCQUFzQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFDaEMsOEJBQXNCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUNqQztRQUNELElBQUksRUFBRSxHQUFHO0tBQ1Y7QUFDSCxDQUFDO0FBUlksZUFBTyxXQVFuQjs7Ozs7Ozs7Ozs7Ozs7OztBQzlCRCxxRUFBK0Q7QUFFL0QsOEVBQThFO0FBRTlFLE1BQU0sV0FBVyxHQUFHLENBQUMsVUFBa0IsRUFBRSxDQUFTLEVBQUUsRUFBRSxDQUNwRCxJQUFJLENBQUMsR0FBRyxDQUNOLENBQUMsRUFDRCxDQUFDLE9BQU87SUFDTixTQUFTLEdBQUcsQ0FBQztJQUNiLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUNsQixRQUFRLEdBQUcsQ0FBQyxHQUFHLFVBQVU7SUFDekIsT0FBTyxHQUFHLFVBQVU7SUFDcEIsU0FBUyxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQ3RDLENBQUM7QUFFSixzREFBc0Q7QUFDdEQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQ2hELE1BQU07SUFDTixTQUFTO0lBQ1QsQ0FBQyxVQUFVLEdBQUcsTUFBTSxHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUU1RCxNQUFNLGFBQWEsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsMkJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVyRSxNQUFNLFdBQVcsR0FBRyxDQUN6QixVQUFrQixFQUNsQixDQUFTLEVBQ1QsU0FBaUIsRUFDakIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FDeEIsVUFBVSxFQUNWLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDaEIsdUJBQWUsQ0FBQyxTQUFTLENBQUMsQ0FDM0IsQ0FBQztJQUVGLE9BQU87UUFDTCxXQUFXLEVBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsUUFBUSxFQUFFLEtBQUssR0FBRyxHQUFHO1FBQ3JCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLEdBQUcsRUFBRSxLQUFLLEdBQUcsS0FBSztLQUNuQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBakJXLG1CQUFXLGVBaUJ0QjtBQUVGLGtGQUFrRjtBQUNsRiwyREFBMkQ7QUFDM0QsK0VBQStFO0FBQy9FLDZFQUE2RTtBQUU3RSxNQUFNLFdBQVcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFFLE1BQU0sV0FBVyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQzdCLE1BQU0sR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7QUFFOUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQUUsQ0FDckQsV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRC9CLG9CQUFZLGdCQUNtQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3BENUMscUVBQTZCO0FBQzdCLHFFQUFnRDtBQU9oRCw0R0FBNEc7QUFDNUcsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFXLEVBQVUsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7QUFFdkUsTUFBTSxPQUFPLEdBQUcsQ0FBQyxNQUFjLEVBQUUsS0FBYSxFQUFVLEVBQUUsQ0FDeEQsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU1QixNQUFNLFNBQVMsR0FBRyxDQUN2QixZQUE0QyxFQUM1QyxjQUEwQixFQUNmLEVBQUU7SUFDYixNQUFNLGVBQWUsR0FBYSxZQUFZLENBQUMsR0FBRyxDQUNoRCxDQUFDLFdBQW9DLEVBQUUsRUFBRTtRQUN2QyxPQUFPLE9BQU8sQ0FDWiw4QkFBc0IsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUNoRCw4QkFBc0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUNsRDtJQUNILENBQUMsQ0FDRjtJQUVELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FDdEIsV0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLDhCQUFzQixDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FDckU7SUFFRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUs7UUFDWCxLQUFLLEVBQUUsUUFBUTtLQUNoQjtBQUNILENBQUM7QUFyQlksaUJBQVMsYUFxQnJCO0FBRU0sTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFXLEVBQXVDLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3BFLENBQUM7QUFKVyxnQkFBUSxZQUluQjtBQUVLLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBVyxFQUFVLEVBQUU7SUFDOUMsTUFBTSxLQUFLLEdBQUcsZ0JBQVEsQ0FBQyxHQUFHLENBQUM7SUFFM0IsT0FBTyxPQUFPLEtBQUssQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxHQUFHO0FBQ2xELENBQUM7QUFKWSxnQkFBUSxZQUlwQjs7Ozs7Ozs7Ozs7Ozs7OztBQy9DRCxpR0FBdUM7QUFFdkMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDO0FBRTNCLE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBYSxFQUFFLFNBQWlCLEVBQVUsRUFBRSxDQUM5RCxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBRTNCOzs7Ozs7R0FNRztBQUNJLE1BQU0sT0FBTyxHQUFHLENBQ3JCLEtBQWEsRUFDYixJQUFZLEVBQ1osRUFBVSxFQUNWLFNBQWtCLEVBQ1YsRUFBRTtJQUNWLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDO0tBQ3hEO0lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSTtJQUNqQixJQUFJLFdBQVcsR0FBRyxJQUFJO0lBRXRCLEtBQUssTUFBTSxpQkFBaUIsSUFBSSxxQkFBVyxFQUFFO1FBQzNDLE1BQU0sY0FBYyxHQUFHLHFCQUFXLENBQUMsaUJBQWlCLENBQUM7UUFDckQsS0FBSyxNQUFNLFNBQVMsSUFBSSxjQUFjLEVBQUU7WUFDdEMsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQztZQUN4QyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNyQyxNQUFNLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUU7YUFDOUM7WUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNuQyxXQUFXLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUU7YUFDakQ7U0FDRjtRQUVELElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFO1lBQ3pDLE1BQU0sSUFBSSxLQUFLLENBQ2Isc0JBQXNCLGlCQUFpQixXQUFXLElBQUksU0FBUyxFQUFFLElBQUksQ0FDdEU7U0FDRjtRQUVELElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFO1lBQ3pDLE1BQU0sSUFBSSxLQUFLLENBQ2Isc0JBQXNCLElBQUksU0FBUyxpQkFBaUIsV0FBVyxFQUFFLElBQUksQ0FDdEU7U0FDRjtRQUVELElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFO1lBQ3pDLE1BQUs7U0FDTjtLQUNGO0lBRUQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDO0tBQzdDO0lBRUQsSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFO1FBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDO0tBQzNDO0lBRUQsTUFBTSxhQUFhLEdBQ2pCLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUk7UUFDaEMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUztRQUM1QixDQUFDLENBQUMsaUJBQWlCO0lBRXZCLE1BQU0sZUFBZSxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYTtJQUVyRSxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7UUFDZixPQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDO0tBQzFDO0lBRUQsSUFBSSxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztJQUV0QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDLE1BQU0sRUFBRTtRQUN4QyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbkU7SUFFRCxNQUFNLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLO0lBRWhDLE9BQU8sVUFBVSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUM7QUFDNUMsQ0FBQztBQXZFWSxlQUFPLFdBdUVuQjs7Ozs7Ozs7Ozs7Ozs7O0FDckZELHNFQVdpQjtBQUVqQixrQkFBZTtJQUNiLElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRTtZQUNOLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEIsS0FBSyxFQUFFO2dCQUNMLEVBQUUsRUFBRTtvQkFDRixLQUFLLEVBQUUsS0FBSztpQkFDYjtnQkFDRCxDQUFDLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLENBQUM7aUJBQ1Q7Z0JBQ0QsRUFBRSxFQUFFO29CQUNGLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRjtRQUNELEVBQUUsRUFBRTtZQUNGLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE9BQU87WUFDMUIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsT0FBTztZQUM1QixLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxFQUFFO29CQUNGLEtBQUssRUFBRSxDQUFDO2lCQUNUO2dCQUNELEVBQUUsRUFBRTtvQkFDRixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUU7aUJBQ2Q7YUFDRjtTQUNGO0tBQ0Y7SUFFRCxNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUU7WUFDTixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssRUFBRTtnQkFDTCxDQUFDLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLENBQUM7aUJBQ1Q7Z0JBQ0QsRUFBRSxFQUFFO29CQUNGLEtBQUssRUFBRSxLQUFLO2lCQUNiO2FBQ0Y7U0FDRjtRQUVELFFBQVEsRUFBRTtZQUNSLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVE7WUFDM0IsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUTtZQUM3QixLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFO29CQUNMLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRTtpQkFDZDtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDO2lCQUNiO2dCQUNELEdBQUcsRUFBRTtvQkFDSCxLQUFLLEVBQUUsQ0FBQztpQkFDVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLENBQUM7aUJBQ1Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxHQUFHO2lCQUNYO2FBQ0Y7U0FDRjtRQUVELEVBQUUsRUFBRTtZQUNGLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVE7WUFDM0IsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUTtZQUM3QixLQUFLLEVBQUU7Z0JBQ0wsR0FBRyxFQUFFO29CQUNILEtBQUssRUFBRSxDQUFDLEdBQUcsR0FBRztpQkFDZjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFO2lCQUNkO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUU7aUJBQ2Q7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQztpQkFDYjtnQkFDRCxFQUFFLEVBQUU7b0JBQ0YsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDO2lCQUNiO2dCQUNELEVBQUUsRUFBRTtvQkFDRixLQUFLLEVBQUUsQ0FBQztpQkFDVDtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsS0FBSyxFQUFFLENBQUM7aUJBQ1Q7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILEtBQUssRUFBRSxHQUFHO2lCQUNYO2FBQ0Y7U0FDRjtLQUNGO0lBRUQsS0FBSyxFQUFFO1FBQ0wsUUFBUSxFQUFFO1lBQ1IsTUFBTSxFQUFFLHFCQUFhO1lBQ3JCLFFBQVEsRUFBRSxxQkFBYTtZQUN2QixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxDQUFDO2lCQUNUO2FBQ0Y7U0FDRjtRQUVELEdBQUcsRUFBRTtZQUNILE1BQU0sRUFBRSxnQkFBUTtZQUNoQixRQUFRLEVBQUUsZ0JBQVE7WUFDbEIsS0FBSyxFQUFFO2dCQUNMLEdBQUcsRUFBRTtvQkFDSCxLQUFLLEVBQUUsQ0FBQztpQkFDVDthQUNGO1NBQ0Y7UUFFRCxHQUFHLEVBQUU7WUFDSCxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssRUFBRTtnQkFDTCxHQUFHLEVBQUU7b0JBQ0gsS0FBSyxFQUFFLENBQUM7aUJBQ1Q7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILEtBQUssRUFBRSxDQUFDO2lCQUNUO2FBQ0Y7U0FDRjtLQUNGO0lBRUQsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFO1lBQ0YsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsQixLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxFQUFFO29CQUNGLEtBQUssRUFBRSxDQUFDO29CQUNSLFNBQVMsRUFBRSxDQUFDO2lCQUNiO2FBQ0Y7U0FDRjtRQUVELEtBQUssRUFBRTtZQUNMLE1BQU0sRUFBRSxpQkFBUztZQUNqQixRQUFRLEVBQUUsaUJBQVM7WUFDbkIsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRTtvQkFDTCxLQUFLLEVBQUUsQ0FBQztpQkFDVDthQUNGO1NBQ0Y7UUFFRCxJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsZ0JBQVE7WUFDaEIsUUFBUSxFQUFFLGdCQUFRO1lBQ2xCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLENBQUM7aUJBQ1Q7YUFDRjtTQUNGO0tBQ0Y7SUFFRCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUU7WUFDUCxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssRUFBRTtnQkFDTCxDQUFDLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLENBQUM7b0JBQ1IsU0FBUyxFQUFFLENBQUM7aUJBQ2I7YUFDRjtTQUNGO1FBRUQsVUFBVSxFQUFFO1lBQ1YsTUFBTSxFQUFFLDJCQUFtQjtZQUMzQixRQUFRLEVBQUUsMkJBQW1CO1lBQzdCLEtBQUssRUFBRTtnQkFDTCxDQUFDLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLENBQUM7b0JBQ1IsU0FBUyxFQUFFLENBQUM7aUJBQ2I7YUFDRjtTQUNGO0tBQ0Y7SUFFRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssRUFBRTtnQkFDTCxHQUFHLEVBQUU7b0JBQ0gsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFO2lCQUNkO2dCQUNELEdBQUcsRUFBRTtvQkFDSCxLQUFLLEVBQUUsQ0FBQztpQkFDVDtnQkFDRCxFQUFFLEVBQUU7b0JBQ0YsS0FBSyxFQUFFLEVBQUU7aUJBQ1Y7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRTtpQkFDZjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztpQkFDbkI7Z0JBQ0QsS0FBSyxFQUFFO29CQUNMLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7aUJBQ3BCO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHO2lCQUNyQjthQUNGO1NBQ0Y7S0FDRjtJQUVELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRTtZQUNSLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEIsS0FBSyxFQUFFO2dCQUNMLEdBQUcsRUFBRTtvQkFDSCxLQUFLLEVBQUUsQ0FBQztpQkFDVDtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsS0FBSyxFQUFFLE9BQU87aUJBQ2Y7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILEtBQUssRUFBRSxHQUFHO2lCQUNYO2dCQUNELEdBQUcsRUFBRTtvQkFDSCxLQUFLLEVBQUUsUUFBUTtpQkFDaEI7YUFDRjtTQUNGO0tBQ0Y7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7OztBQzlQRCxxRUFBaUU7QUFFakUsaUZBQTJDO0FBRTNDLHlFQUF5RTtBQUV6RSxvQ0FBb0M7QUFFcEMsMkVBQTJFO0FBQzNFLDJDQUEyQztBQUMzQyxxQ0FBcUM7QUFDckMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUV0QyxxQ0FBcUM7QUFDckMsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFFbkIscUVBQXFFO0FBQ3JFLCtGQUErRjtBQUMvRixrS0FBa0s7QUFFbEssaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUVWLE1BQU0sV0FBVyxHQUFHLENBQUMsU0FBaUIsRUFBRSxTQUFpQixFQUFFLENBQVMsRUFBRSxFQUFFLENBQzdFLENBQUMsU0FBUyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztBQURqQyxtQkFBVyxlQUNzQjtBQUU5QyxNQUFNLFNBQVMsR0FBRyxDQUNoQixXQUFtQixFQUNuQixjQUFzQixJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUMzQyxFQUFFLENBQ0YsR0FBRztJQUNILElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDeEUsR0FBRyxDQUFDO0FBRUQsTUFBTSxVQUFVLEdBQUcsQ0FDeEIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBUyxFQUNwQyxjQUFzQixJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUMzQyxjQUFzQixDQUFDO0FBQ3ZCLHFCQUFxQjtBQUNyQixnQkFBd0IsQ0FBQyxFQUN6QixFQUFFO0lBQ0YsUUFBUSxJQUFJLEVBQUU7UUFDWixLQUFLLGtCQUFVLENBQUMsR0FBRztZQUNqQixPQUFPLFdBQVcsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLEtBQUssa0JBQVUsQ0FBQyxNQUFNO1lBQ3BCLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDcEUsS0FBSyxrQkFBVSxDQUFDLEtBQUs7WUFDbkIsT0FBTyxhQUFhLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN2QztZQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztLQUMxQztBQUNILENBQUMsQ0FBQztBQWpCVyxrQkFBVSxjQWlCckI7QUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7QUFFbkQsTUFBTSw2QkFBNkIsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQ3RELEtBQUssR0FBRyxHQUFHO0lBQ1QsQ0FBQyxDQUFDLEdBQUc7SUFDTCxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFRCxNQUFNLGdCQUFnQixHQUFHLENBQzlCLGtCQUEwQixFQUMxQixXQUFtQixFQUNuQixPQUFlLEVBQ2YsU0FBaUIsRUFDakIsRUFBRTtJQUNGLE1BQU0sV0FBVyxHQUFHLHVCQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsTUFBTSxZQUFZLEdBQUcsV0FBVyxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUN4RCxNQUFNLFNBQVMsR0FBRyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sUUFBUSxHQUFHLGtCQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzlDLE1BQU0saUJBQWlCLEdBQUcsa0JBQWtCLEdBQUcsUUFBUSxDQUFDO0lBRXhELE1BQU0sVUFBVSxHQUFHLDZCQUE2QixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEUsTUFBTSxXQUFXLEdBQUcsUUFBUSxHQUFHLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztJQUMvRCxNQUFNLFNBQVMsR0FDYixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxpQkFBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRWpFLE9BQU87UUFDTCxVQUFVLEVBQUUsVUFBVTtRQUN0QixXQUFXLEVBQUUsV0FBVztRQUN4QixTQUFTLEVBQUUsU0FBUztLQUNyQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBdEJXLHdCQUFnQixvQkFzQjNCOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUZGLHFFQUE2QjtBQVU3QixxRUFBZ0Q7QUFFaEQsaUVBQWlFO0FBQ2pFLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkIsc0VBQXNFO0FBQ3RFLDBHQUEwRztBQUUxRyxNQUFNLGdCQUFnQixHQUFHLENBQUMsZ0JBQTZCLEVBQWUsRUFBRSxDQUFDLENBQUM7SUFDeEUsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQztJQUN0RCxJQUFJLEVBQUUsSUFBSTtDQUNYLENBQUM7QUFFRixNQUFNLHlCQUF5QixHQUFHLENBQ2hDLElBQVksRUFDWixtQkFBMkIsRUFDM0IsZUFBZSxHQUFHLENBQUMsRUFDbkIsRUFBRSxDQUNGLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssYUFBYTtJQUM5RCxDQUFDLENBQUMsZUFBZTtJQUNqQixDQUFDLENBQUMsbUJBQW1CO0FBRXpCLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxnQkFBMkIsRUFBZSxFQUFFO0lBQzVFLElBQUksZ0JBQWdCLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtRQUN0QyxPQUFPLGdCQUFnQixDQUFDLFNBQVM7S0FDbEM7SUFDRCxJQUFJLGdCQUFnQixDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7UUFDdkMsT0FBTyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7S0FDckQ7SUFDRCxJQUFJLGdCQUFnQixDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7UUFDekMsT0FBTyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7S0FDdkQ7SUFDRCxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ2pDLENBQUM7QUFFRCxNQUFNLDRCQUE0QixHQUFHLENBQ25DLFdBQW9DLEVBQ3BDLHNCQUFtQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUM1RCxjQUEyQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUNsRCxFQUFFO0lBQ0YsTUFBTSxXQUFXLEdBQUcsOEJBQXNCLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7SUFDcEUsTUFBTSxjQUFjLEdBQUcsOEJBQXNCLENBQzNDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFDM0MsSUFBSSxDQUNMO0lBRUQsTUFBTSxlQUFlLEdBQ25CLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQzdCLHlCQUF5QixDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUU5RSxPQUFPLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBRyxlQUFlO0FBQzdELENBQUM7QUFFTSxNQUFNLHNCQUFzQixHQUFHLENBQ3BDLFlBQTRDLEVBQzVDLFVBQTBCLEVBQzFCLFdBQXlCLEVBQ3pCLEVBQUUsQ0FDRixXQUFHLENBQ0QsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQW9DLEVBQUUsRUFBRSxDQUN4RCw0QkFBNEIsQ0FDMUIsV0FBVyxFQUNYLFVBQVUsQ0FBQyxTQUFTLEVBQ3BCLFdBQVcsQ0FDWixDQUNGLENBQ0Y7QUFiVSw4QkFBc0IsMEJBYWhDO0FBRUgsTUFBTSxXQUFXLEdBQUcsQ0FBQyxTQUFxQixFQUFFLGFBQXFCLEVBQVUsRUFBRTtJQUMzRSxPQUFPLEdBQUcsR0FBRyxhQUFhLEdBQUcsOEJBQXNCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztBQUN2RSxDQUFDO0FBRUQsTUFBTSxXQUFXLEdBQUcsQ0FDbEIsa0JBQTBCLEVBQzFCLGlCQUF5QixFQUN6QixNQUFjLEVBQ04sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLEdBQUcsaUJBQWlCO0FBRWpFLE1BQU0sbUJBQW1CLEdBQUcsQ0FDakMsU0FBcUIsRUFDckIsWUFBNEMsRUFDNUMsVUFBMEIsRUFDYixFQUFFO0lBQ2YsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUN6QixTQUFTLEVBQ1QsOEJBQXNCLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUNqRDtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxPQUFPO0tBQ2Y7QUFDSCxDQUFDO0FBYlksMkJBQW1CLHVCQWEvQjtBQUVNLE1BQU0sZ0JBQWdCLEdBQUcsQ0FDOUIsU0FBcUIsRUFDckIsWUFBNEMsRUFDNUMsVUFBMEIsRUFDMUIsUUFBb0MsRUFDdkIsRUFBRTtJQUNmLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FDekIsU0FBUyxFQUNULDhCQUFzQixDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUMxRTtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxPQUFPO0tBQ2Y7QUFDSCxDQUFDO0FBZFksd0JBQWdCLG9CQWM1QjtBQUVNLE1BQU0sZUFBZSxHQUFHLENBQzdCLFNBQXFCLEVBQ3JCLFFBQW9CLEVBQ3BCLEVBQWUsRUFDRixFQUFFO0lBQ2YsT0FBTztRQUNMLElBQUksRUFBRSxJQUFJO1FBQ1YsS0FBSyxFQUFFLFdBQVcsQ0FDaEIsOEJBQXNCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUN4Qyw4QkFBc0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQ3ZDLDhCQUFzQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FDakM7S0FDRjtBQUNILENBQUM7QUFiWSx1QkFBZSxtQkFhM0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSUQscUVBQTZCO0FBQzdCLHFFQUFnRDtBQUNoRCx3RUFBd0M7QUFReEMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxVQUFrQixFQUFFLFNBQWlCLEVBQVUsRUFBRSxDQUN2RSxVQUFVLEdBQUcsU0FBUztBQUV4QixNQUFNLGFBQWEsR0FBRyxDQUFDLGdCQUF3QixFQUFVLEVBQUUsQ0FDekQsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQUVqRCxNQUFNLFVBQVUsR0FBRyxDQUFDLGFBQXFCLEVBQVUsRUFBRSxDQUNuRCxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDLEdBQUcsSUFBSTtBQUU5QyxNQUFNLFlBQVksR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFVLEVBQUUsQ0FDakQsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTdCLE1BQU0sY0FBYyxHQUFHLENBQ3JCLFVBQWtCLEVBQUUsRUFDcEIsZ0JBQXdCLEVBQ3hCLGdCQUF3QixDQUFDLEVBQ3pCLEVBQUUsQ0FDRixZQUFZLENBQUMsT0FBTyxDQUFDO0lBQ3JCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixVQUFVLENBQUMsYUFBYSxDQUFDO0FBRTNCLGlGQUFpRjtBQUNqRixnS0FBZ0s7QUFDaEssd0NBQXdDO0FBRXhDLDBFQUEwRTtBQUVuRSxNQUFNLG9CQUFvQixHQUFHLENBQ2xDLElBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLGNBQTBCLEVBQ1YsRUFBRTtJQUNsQixNQUFNLFVBQVUsR0FBRyxXQUFHLENBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFDaEQsd0JBQXdCO1FBRXhCLElBQUksQ0FBQyxZQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFO1lBQzVCLE9BQU8sQ0FBQztTQUNUO1FBRUQsTUFBTSxHQUFHLEdBQUcsY0FBYyxDQUN4Qiw4QkFBc0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQ3BDLFVBQVUsQ0FBQyxLQUFLLENBQ2pCO1FBQ0QsTUFBTSxDQUFDLEdBQUcsY0FBYyxDQUN0QixJQUFJLEVBQ0osOEJBQXNCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUN6QyxpQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUNqQjtRQUVELE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLDhCQUFzQixDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUM7SUFDMUUsQ0FBQyxDQUFDLENBQ0g7SUFFRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLFVBQVU7UUFDakIsSUFBSSxFQUFFLE1BQU07S0FDYjtBQUNILENBQUM7QUEvQlksNEJBQW9CLHdCQStCaEM7QUFFRCxnSEFBZ0g7QUFDaEgsb0VBQW9FO0FBQ3BFLHNGQUFzRjtBQUMvRSxNQUFNLGVBQWUsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFO0FBQXZELHVCQUFlLG1CQUF3QztBQUVwRSxRQUFRO0FBQ1IsTUFBTSx5QkFBeUIsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ3hDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRztBQUN0QyxNQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUU3RSxNQUFNLFdBQVcsR0FBRyxDQUNsQixHQUFvQixFQUNwQixXQUF3QixFQUN4QixjQUEwQixFQUNsQixFQUFFO0lBQ1YsSUFBSSxDQUFDLFlBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFO1FBQ2hDLE9BQU8sQ0FBQztLQUNUO0lBRUQsTUFBTSxDQUFDLEdBQ0wsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNoRCxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLEdBQUc7SUFDTCxNQUFNLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFFbEUsT0FBTyxDQUNMLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBYyxDQUFDLEtBQUs7UUFDcEIsQ0FBQyxHQUFHLEdBQUcseUJBQXlCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ3JEO0FBQ0gsQ0FBQztBQUVNLE1BQU0sa0JBQWtCLEdBQUcsQ0FDaEMsSUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIsY0FBMEIsRUFDVixFQUFFO0lBQ2xCLE1BQU0sVUFBVSxHQUFHLFdBQUcsQ0FDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQW9CLEVBQUUsRUFBRSxDQUNoQyxXQUFXLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FDOUMsQ0FDRjtJQUVELE9BQU87UUFDTCxLQUFLLEVBQUUsVUFBVTtRQUNqQixJQUFJLEVBQUUsTUFBTTtLQUNiO0FBQ0gsQ0FBQztBQWZZLDBCQUFrQixzQkFlOUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySEQsMkVBQXNFO0FBbU5wRSwyRkFuTk8sb0JBQVUsT0FtTlA7QUFDViw0RkFwTm1CLHFCQUFXLE9Bb05uQjtBQUNYLGlHQXJOZ0MsMEJBQWdCLE9BcU5oQztBQXBObEIsdUZBQTBEO0FBZ054RCw2RkFoTk8sMEJBQVksT0FnTlA7QUFDWiw0RkFqTnFCLHlCQUFXLE9BaU5yQjtBQS9NYixrRUFJZ0I7QUFpTWQsbUdBcE1BLHlCQUFrQixPQW9NQTtBQUNsQixxR0FwTUEsMkJBQW9CLE9Bb01BO0FBQ3BCLGdHQXBNQSxzQkFBZSxPQW9NQTtBQWpNakIscUVBQTJEO0FBRTNELHFFQUFpRDtBQXFML0MsdUdBckxPLDhCQUFzQixPQXFMUDtBQXBMeEIscUdBQWdEO0FBbUw5Qyx3RkFuTE8sbUJBQU8sT0FtTFA7QUFqTFQsa0VBSWdCO0FBNExkLG9HQS9MQSwwQkFBbUIsT0ErTEE7QUFDbkIscUdBL0xBLDJCQUFvQixPQStMQTtBQTVMdEIsMkVBQTZEO0FBeUwzRCxnR0F6TE8seUJBQWUsT0F5TFA7QUFDZixnR0ExTHdCLHlCQUFlLE9BMEx4QjtBQTFLakIsMkVBSW1CO0FBMEpqQixvR0E3SkEsNkJBQW1CLE9BNkpBO0FBQ25CLGlHQTdKQSwwQkFBZ0IsT0E2SkE7QUFDaEIsZ0dBN0pBLHlCQUFlLE9BNkpBO0FBM0pqQixxRUFBd0Q7QUE2SnRELHlGQTdKTyxnQkFBUSxPQTZKUDtBQUNSLHlGQTlKaUIsZ0JBQVEsT0E4SmpCO0FBRlIsMEZBNUoyQixpQkFBUyxPQTRKM0I7QUEzSlgsK0RBQWdDO0FBOEo5Qix3RkE5Sk8sYUFBTyxPQThKUDtBQTlJVCxNQUFNLHVCQUF1QixHQUFHLENBQzlCLE1BQWtCLEVBQ2xCLElBQXVCLEVBQ3ZCLFNBS0MsRUFNRCxFQUFFO0lBQ0YsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUU3RCxNQUFNLEVBQUUscUJBQXFCLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLEdBQy9ELFdBQVcsQ0FBQztJQUVkLElBQUksZ0JBQWdCLEdBQWdCO1FBQ2xDLElBQUksRUFBRSxJQUFJO1FBQ1YsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDO0lBQ0YsSUFBSSxhQUFhLEdBQWdCO1FBQy9CLElBQUksRUFBRSxJQUFJO1FBQ1YsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDO0lBQ0YsSUFBSSxLQUFLLEdBQWM7UUFDckIsSUFBSSxFQUFFLEtBQUs7UUFDWCxLQUFLLEVBQUUsSUFBSTtLQUNaLENBQUM7SUFDRixJQUFJLEdBQUcsR0FBbUI7UUFDeEIsSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsSUFBSTtLQUNaLENBQUM7SUFDRixJQUFJLEdBQUcsR0FBZ0I7UUFDckIsSUFBSSxFQUFFLEdBQUc7UUFDVCxLQUFLLEVBQUUsSUFBSTtLQUNaLENBQUM7SUFDRixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDbkIsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzFCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQztJQUUxQixJQUFJLHVCQUFlLENBQUMscUJBQXFCLENBQUMsRUFBRTtRQUMxQyxnQkFBZ0IsR0FBRyw2QkFBbUIsQ0FDcEMsVUFBVSxFQUNWLHFCQUFxQixFQUNyQixVQUFVLENBQ1gsQ0FBQztRQUVGLE1BQU0sc0JBQXNCLEdBQXdCO1lBQ2xELElBQUksRUFBRSxpQkFBaUI7WUFDdkIsSUFBSSxFQUFFLEtBQUs7WUFDWCxJQUFJLEVBQUUsUUFBUTtZQUNkLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtTQUN0QyxDQUFDO1FBRUYsYUFBYSxHQUFHLDBCQUFnQixDQUM5QixVQUFVLEVBQ1YscUJBQXFCLEVBQ3JCLFVBQVUsRUFDVix1QkFBZSxDQUFDLGlCQUFpQixDQUFDO1lBQ2hDLENBQUMsQ0FBQyxpQkFBaUI7WUFDbkIsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FDN0IsQ0FBQztRQUVGLEdBQUcsR0FBRyxhQUFPLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFL0MsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLHlCQUFlLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN2RSxPQUFPLEdBQUc7WUFDUixhQUFhO1NBQ2QsQ0FBQztRQUVGLElBQUksSUFBSSxFQUFFO1lBQ1IsTUFBTSxlQUFlLEdBQUcsMEJBQW1CLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUVuRSxNQUFNLFNBQVMsR0FBRywyQkFBb0IsQ0FDcEMsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsaUJBQWlCLEVBQ3RCLGVBQWUsQ0FDaEIsQ0FBQztZQUVGLE1BQU0sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxHQUFHLHlCQUFlLENBQ2xFLGFBQWEsRUFDYixTQUFTLEVBQ1QsZUFBZSxFQUNmLFNBQVMsQ0FDVixDQUFDO1lBRUYsT0FBTyxtQ0FDRixPQUFPLEtBQ1YsYUFBYTtnQkFDYixXQUFXO2dCQUNYLFlBQVksR0FDYixDQUFDO1lBRUYsY0FBYyxtQ0FDVCxJQUFJLEtBQ1AsVUFBVSxFQUFFLHlCQUFrQixDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsR0FDekQsQ0FBQztTQUNIO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDUixjQUFjLG1DQUFRLElBQUksS0FBRSxhQUFhLEdBQUUsQ0FBQztTQUM3QztRQUVELEtBQUssR0FBRyxpQkFBUyxDQUFDLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXJELElBQUksdUJBQWUsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNsQyxNQUFNLFdBQVcsR0FBRyx5QkFBZSxDQUNqQyxVQUFVLEVBQ1YsYUFBYSxFQUNiLGdCQUFnQixDQUNqQixDQUFDO1lBQ0YsR0FBRyxHQUFHLDJCQUFvQixDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDcEU7S0FDRjtJQUVELE9BQU87UUFDTCxLQUFLLEVBQUU7WUFDTCxnQkFBZ0IsRUFBRSx1QkFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztZQUN0RCxhQUFhLEVBQUUsdUJBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ2hELGlCQUFpQixFQUFFLHVCQUFlLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMxQyxZQUFZLEVBQUUsdUJBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLGNBQWMsRUFBRSx1QkFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPO1FBQ1AsSUFBSSxFQUFFLGNBQWM7UUFDcEIsSUFBSSxFQUFFLGNBQWM7S0FDckIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWVBLDBEQUF1Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ3BNekIscUVBQWlEO0FBQ2pELHFFQUFnRDtBQUNoRCx3RUFBOEI7QUFFOUIsTUFBTSxXQUFXLEdBQUcsS0FBSyxFQUFDLE9BQU87QUFDakMsTUFBTSxXQUFXLEdBQUcsR0FBRztBQUN2QixNQUFNLGdCQUFnQixHQUFHLElBQUksRUFBQyxhQUFhO0FBQzNDLE1BQU0sc0JBQXNCLEdBQUcsR0FBRyxFQUFDLE9BQU87QUFFMUMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ3RELFNBQVMsR0FBRyxTQUFTLEdBQUcsR0FBRztJQUMzQixPQUFPLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxHQUFHLFNBQVM7UUFDM0MsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVM7UUFDbkMsQ0FBQyxDQUFDLE9BQU87QUFDYixDQUFDO0FBRUQsTUFBTSxpQkFBaUIsR0FBRyxDQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxlQUFlLEVBQ2YsT0FBTyxHQUFHLENBQUMsRUFDWCxlQUFlLEdBQUcsQ0FBQyxFQUNuQixTQUFTLEdBQUcsQ0FBQyxFQUNXLEVBQUU7SUFDMUIsTUFBTSxTQUFTLEdBQUcsV0FBVyxHQUFHLGVBQWUsR0FBRyxXQUFXO0lBQzdELE1BQU0sZUFBZSxHQUFHLGFBQWEsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQztJQUNwRSxJQUFJLFFBQVEsR0FDVixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlO1FBQ25DLGVBQWUsR0FBRyxlQUFlO1FBQ2pDLFdBQVcsQ0FBQztRQUNaLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxHQUFHLFdBQVcsQ0FBQyxDQUFDO1FBQ25ELENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUUzQixJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7UUFDaEIsUUFBUSxHQUFHLENBQUM7S0FDYjtJQUNELE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxHQUFHLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7QUFDL0QsQ0FBQztBQUVELE1BQU0sZ0JBQWdCLEdBQUcsQ0FDdkIsU0FBUyxFQUNULFFBQVEsRUFDUixXQUFXLEVBQ1gsS0FBSyxFQUNMLGVBQWUsRUFJZixFQUFFO0lBQ0YsTUFBTSxVQUFVLEdBQ2QsS0FBSyxHQUFHLENBQUM7UUFDUCxDQUFDLENBQUMsV0FBVztRQUNiLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsc0JBQXNCO1lBQ3BFLFFBQVE7SUFDZCxNQUFNLFlBQVksR0FDaEIsQ0FBQyxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7UUFDakQsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDekIsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBRXpCLE9BQU87UUFDTCxrQkFBa0IsRUFBRTtZQUNsQixJQUFJLEVBQUUsR0FBRztZQUNULEtBQUssRUFBRSxVQUFVO1NBQ2xCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLEdBQUc7WUFDVCxLQUFLLEVBQUUsWUFBWTtTQUNwQjtLQUNGO0FBQ0gsQ0FBQztBQUVELFNBQWdCLG9CQUFvQixDQUNsQyxVQUErQixFQUMvQixpQkFBa0MsRUFDbEMsZUFBeUI7SUFFekIsSUFBSSxXQUFXLEdBQUcsQ0FBQztJQUNuQixJQUFJLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLO0lBRXZDLE1BQU0sZ0JBQWdCLEdBQUcsOEJBQXNCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQztJQUV0RSxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFrQixFQUFFLEtBQWEsRUFBZ0IsRUFBRTtRQUN4RSxNQUFNLFFBQVEsR0FBRywwQkFBa0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFMUQsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssV0FBVyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxpQkFBaUIsQ0FDbEMsU0FBUyxFQUNULFFBQVEsRUFDUixXQUFXLEVBQ1gsZ0JBQWdCLENBQ2pCO2dCQUVELHVDQUNLLElBQUksS0FDUCxNQUFNLElBQ1A7YUFDRjtZQUNELEtBQUssVUFBVSxDQUFDLENBQUM7Z0JBQ2YsTUFBTSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxHQUFHLGdCQUFnQixDQUNyRCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFdBQVcsRUFDWCxLQUFLLEVBQ0wsZ0JBQWdCLENBQ2pCO2dCQUVELFdBQVcsSUFBSSxNQUFNLENBQUMsS0FBSztnQkFDM0IsU0FBUyxHQUFHLFFBQVE7Z0JBRXBCLHVDQUNLLElBQUksS0FDUCxrQkFBa0I7b0JBQ2xCLE1BQU0sSUFDUDthQUNGO1lBQ0Q7Z0JBQ0UsT0FBTyxJQUFJO1NBQ2Q7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDO0FBakRELG9EQWlEQztBQUVNLE1BQU0sbUJBQW1CLEdBQUcsQ0FDakMsWUFBNEMsRUFDbEMsRUFBRTtJQUNaLE1BQU0sS0FBSyxHQUFHLFdBQUcsQ0FDZixZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBMkIsRUFBRSxFQUFFLENBQ3JFLElBQUksS0FBSyxPQUFPLElBQUksWUFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVc7UUFDekMsQ0FBQyxDQUFDLDhCQUFzQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUMsQ0FDTixDQUNGO0lBQ0QsT0FBTztRQUNMLEtBQUs7UUFDTCxJQUFJLEVBQUUsSUFBSTtLQUNYO0FBQ0gsQ0FBQztBQWRZLDJCQUFtQix1QkFjL0I7QUFFRCxTQUFnQixrQkFBa0IsQ0FDaEMsVUFBK0IsRUFDL0IsWUFBd0I7SUFFeEIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUMxQix1Q0FBWSxJQUFJLEtBQUUsTUFBTSxFQUFFLFlBQVksSUFBRTtTQUN6QztRQUNELE9BQU8sSUFBSTtJQUNiLENBQUMsQ0FBQztBQUNKLENBQUM7QUFWRCxnREFVQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNKTSxNQUFNLEdBQUcsR0FBRyxDQUNqQixTQUFxQixFQUFFLEVBSXZCLEVBQUUsQ0FBQyxDQUFDO0lBQ0osV0FBVyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEtBQUssYUFBYTtJQUN6QyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssYUFBYTtDQUN6RCxDQUFDO0FBUlcsV0FBRyxPQVFkO0FBRUssTUFBTSxRQUFRLEdBQUcsQ0FBQyxTQUFxQixFQUFFLEVBQVUsRUFBRSxDQUMxRCxNQUFNLENBQUMsR0FBRyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFEekMsZ0JBQVEsWUFDaUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKekMsa0JBQVUsR0FBRztJQUN4QixHQUFHLEVBQUUsS0FBSztJQUNWLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUUsTUFBTTtJQUNaLFNBQVMsRUFBRSxXQUFXO0NBQ3ZCO0FBQ1ksa0JBQVUsR0FBRztJQUN4QixNQUFNLEVBQUUsUUFBUTtJQUNoQixHQUFHLEVBQUUsS0FBSztJQUNWLEtBQUssRUFBRSxPQUFPO0lBQ2QsT0FBTyxFQUFFLFNBQVM7Q0FDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkQscUdBQStDO0FBT3hDLE1BQU0sc0JBQXNCLEdBQUcsQ0FDcEMsVUFBc0IsRUFDdEIsSUFBWSxFQUNaLFlBQW9CLENBQUMsRUFDckIsRUFBRTtJQUNGLE9BQU8sbUJBQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQztBQUNwRSxDQUFDO0FBTlksOEJBQXNCLDBCQU1sQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JNLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsVUFBVTtBQUExQyxrQkFBVSxjQUFnQztBQUVoRCxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO0FBQTlDLGtCQUFVLGNBQW9DO0FBRXBELE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSztBQUFyQyxrQkFBVSxjQUEyQjtBQUUzQyxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVM7QUFBN0Msc0JBQWMsa0JBQStCO0FBRW5ELE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUztBQUE3QyxzQkFBYyxrQkFBK0I7QUFFbkQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLHNCQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztBQUF4RCx1QkFBZSxtQkFBeUM7QUFFOUQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLHNCQUFjLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUF4RCx1QkFBZSxtQkFBeUM7QUFFOUQsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUFuRCwyQkFBbUIsdUJBQWdDO0FBRXpELE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRTtBQUFqRCwyQkFBbUIsdUJBQThCO0FBRXZELE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsbUJBQW1CO0FBQXJELGdCQUFRLFlBQTZDO0FBRTNELE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsaUJBQWlCO0FBQW5ELGdCQUFRLFlBQTJDO0FBRXpELE1BQU0sU0FBUyxHQUFHLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FDdEMsQ0FBQyxPQUFPO0lBQ1IsT0FBTyxHQUFHLEVBQUU7SUFDWixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFKZCxpQkFBUyxhQUlLO0FBRXBCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUFoRSxpQkFBUyxhQUF1RDtBQUV0RSxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFLENBQ3ZDLElBQUksR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBRGhDLGdCQUFRLFlBQ3dCO0FBRXRDLE1BQU0sUUFBUSxHQUFHLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FDckMsQ0FBQyxRQUFRO0lBQ1QsU0FBUyxHQUFHLEVBQUU7SUFDZCxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFKZixnQkFBUSxZQUlPO0FBRXJCLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSTtBQUF0QyxnQkFBUSxZQUE4QjtBQUU1QyxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEtBQUs7QUFBdkMsZ0JBQVEsWUFBK0I7QUFFN0MsTUFBTSxhQUFhLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLE1BQU07QUFBdEQscUJBQWEsaUJBQXlDO0FBRTVELE1BQU0sYUFBYSxHQUFHLENBQUMsUUFBZ0IsRUFBRSxFQUFFLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyxJQUFJO0FBQTlELHFCQUFhLGlCQUFpRDtBQUVwRSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQW9CLEVBQVUsRUFBRSxDQUNsRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFEekIsV0FBRyxPQUNzQjtBQUV0QyxNQUFNLGdCQUFnQixHQUFHLENBQUMsV0FBbUIsRUFBRSxXQUFnQixFQUFFLEVBQUUsQ0FDakUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3BCLHVDQUNLLENBQUMsS0FDSixNQUFNLEVBQUUsV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQy9CO0FBQ0gsQ0FBQyxDQUFDO0FBRUcsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFXLEVBQVUsRUFBRTtJQUNoRCxNQUFNLEtBQUssR0FBa0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0MsTUFBTSxnQkFBZ0IsR0FBa0IsS0FBSyxDQUFDLEdBQUcsQ0FDL0MsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDdkQ7SUFDRCxPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDbkMsQ0FBQztBQU5ZLGtCQUFVLGNBTXRCO0FBRU0sTUFBTSxlQUFlLEdBQUcsQ0FBQyxHQUFlLEVBQVcsRUFBRTtJQUMxRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDdEIsT0FBTyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUM7S0FDdEI7SUFDRCxPQUFPLEtBQUs7QUFDZCxDQUFDO0FBTFksdUJBQWUsbUJBSzNCO0FBRUQsU0FBZ0IsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLEdBQUcsQ0FBQztJQUN6QyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtRQUM5QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3pDO0lBQ0QsT0FBTyxJQUFJO0FBQ2IsQ0FBQztBQUxELHNCQUtDO0FBRUQsU0FBZ0IsUUFBUSxDQUFDLE1BQU07SUFDN0IsT0FBTyxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVE7QUFDckQsQ0FBQztBQUZELDRCQUVDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLE1BQU07SUFDakMsT0FBTyxDQUNMLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDaEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFDOUIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FDOUI7QUFDSCxDQUFDO0FBTkQsb0NBTUM7QUFFRCxTQUFnQixrQkFBa0IsQ0FBQyxVQUFVO0lBQzNDLElBQUksWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQzVCLE9BQU8sVUFBVSxDQUFDLEtBQUs7S0FDeEI7SUFDRCxPQUFPLElBQUk7QUFDYixDQUFDO0FBTEQsZ0RBS0M7QUFFTSxNQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRTtJQUM5QyxPQUFPO1FBQ0wsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO1FBQ1osS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQztLQUNqQztBQUNILENBQUM7QUFMWSx1QkFBZSxtQkFLM0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0QscUVBQThCO0FBUTlCLHFFQUFpRDtBQUVqRCxNQUFNLFdBQVcsR0FBc0I7SUFDckMsYUFBYSxFQUFFO1FBQ2IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsS0FBSztLQUNaO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsS0FBSztLQUNaO0NBQ0YsQ0FBQztBQUVGLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDO0FBRWxDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxNQUFrQixFQUFFLEVBQUUsQ0FDOUMsOEJBQXNCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRXhDLHVFQUF1RTtBQUN2RSwrQ0FBK0M7QUFDL0MsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFL0MsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLFdBQXFCLEVBQWMsRUFBRTtJQUNoRSxNQUFNLEtBQUssR0FDVCw4QkFBc0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsb0JBQW9CLENBQUM7SUFDbkUsT0FBTztRQUNMLEtBQUs7UUFDTCxJQUFJLEVBQUUsS0FBSztLQUNaLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLG1CQUFtQixHQUFHLENBQzFCLGFBQWtDLEVBQUUsRUFDeEIsRUFBRTtJQUNkLE1BQU0sS0FBSyxHQUFHLFdBQUcsQ0FDZixVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFnQixFQUFFLEVBQUUsQ0FDaEQsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDbkQsQ0FDRixDQUFDO0lBQ0YsT0FBTztRQUNMLEtBQUs7UUFDTCxJQUFJLEVBQUUsS0FBSztLQUNaLENBQUM7QUFDSixDQUFDLENBQUM7QUFFSyxNQUFNLGVBQWUsR0FBRyxDQUM3QixhQUF5QixFQUN6QixTQUE4QixFQUM5QixlQUF5QixFQUN6QixTQUtDLEVBS0QsRUFBRTtJQUNGLE1BQU0sZUFBZSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXZELE1BQU0sZUFBZSxHQUFHLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRTdELE1BQU0sUUFBUSxHQUNaLFNBQVMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFN0UsTUFBTSxpQkFBaUIsR0FDckIsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQy9CLGVBQWUsQ0FBQyxLQUFLO1FBQ3JCLGVBQWUsQ0FBQyxLQUFLO1FBQ3JCLFFBQVEsQ0FBQztJQUVYLE1BQU0sWUFBWSxHQUFlO1FBQy9CLEtBQUssRUFBRSxpQkFBaUI7UUFDeEIsSUFBSSxFQUFFLEtBQUs7S0FDWixDQUFDO0lBRUYsTUFBTSxXQUFXLEdBQWU7UUFDOUIsS0FBSyxFQUFFLGVBQWUsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUs7UUFDakQsSUFBSSxFQUFFLEtBQUs7S0FDWixDQUFDO0lBRUYsT0FBTztRQUNMLFdBQVcsRUFBRSxlQUFlO1FBQzVCLGFBQWEsRUFBRSxZQUFZO1FBQzNCLFlBQVksRUFBRSxXQUFXO0tBQzFCLENBQUM7QUFDSixDQUFDLENBQUM7QUEzQ1csdUJBQWUsbUJBMkMxQjtBQUVLLE1BQU0sZUFBZSxHQUFHLENBQzdCLFVBQXNCLEVBQ3RCLE9BQTBCLFdBQVcsRUFDckMsU0FLQyxFQUM4QixFQUFFO0lBQ2pDLE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxXQUFXLENBQUM7SUFFeEMsTUFBTSxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFcEQsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNqQixJQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUU7UUFDdEQsUUFBUSxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsUUFBUSxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUN2RTtJQUVELE1BQU0sYUFBYSxHQUFHLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3BFLE1BQU0sZ0JBQWdCLEdBQUcsY0FBYyxHQUFHLG9CQUFvQixDQUFDO0lBQy9ELE1BQU0sYUFBYSxHQUNqQixjQUFjLEdBQUcsYUFBYSxHQUFHLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQUUvRCxPQUFPO1FBQ0wsYUFBYSxFQUFFO1lBQ2IsS0FBSyxFQUFFLGFBQWE7WUFDcEIsSUFBSSxFQUFFLEtBQUs7U0FDWjtLQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFoQ1csdUJBQWUsbUJBZ0MxQiIsImZpbGUiOiJicmV3Y2FsYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJyZXdjYWxjXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJyZXdjYWxjXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IHNnVG9QbGF0byB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgeyBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlIH0gZnJvbSAnLi91bml0cydcbmltcG9ydCB7IEdyYXZpdHlUeXBlLCBQZXJjZW50VHlwZSB9IGZyb20gJy4vdHlwZXMvYmVlcmpzb24nXG5cbi8vIGh0dHA6Ly9ieW8uY29tL2JvY2svaXRlbS80MDgtY2FsY3VsYXRpbmctYWxjb2hvbC1jb250ZW50LWF0dGVudWF0aW9uLWV4dHJhY3QtYW5kLWNhbG9yaWVzLWFkdmFuY2VkLWhvbWVicmV3aW5nXG4vLyBodHRwczovL3d3dy5icmV3ZXJzZnJpZW5kLmNvbS8yMDExLzA2LzE2L2FsY29ob2wtYnktdm9sdW1lLWNhbGN1bGF0b3ItdXBkYXRlZC9cbi8vIEFCVyA9IChPRyBwb2ludHMgLSBGRyBwb2ludHMpICogMC4xMDVcbi8vIEFCViA9IChPRyBwb2ludHMgLSBGRyBwb2ludHMpICogMC4xMzJcbmV4cG9ydCBjb25zdCBlc3RBQlcgPSAob2dQdHM6IG51bWJlciwgZmdQdHM6IG51bWJlcikgPT4gKG9nUHRzIC0gZmdQdHMpICogMC4xMDVcbmV4cG9ydCBjb25zdCBlc3RBQlYgPSAob2dQdHM6IG51bWJlciwgZmdQdHM6IG51bWJlcikgPT4gKG9nUHRzIC0gZmdQdHMpICogMC4xMzJcblxuLy8gaHR0cDovL2JlZXJzbWl0aC5jb20vYmxvZy8yMDEwLzA5LzA3L2FwcGFyZW50LWFuZC1yZWFsLWF0dGVudWF0aW9uLWZvci1iZWVyLWJyZXdlcnMtcGFydC0xL1xuY29uc3QgZXN0QUJWcmVhbEV4dHJhY3QgPSAob2c6IG51bWJlciwgZmc6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIGNvbnN0IG9lID0gc2dUb1BsYXRvKG9nKVxuICBjb25zdCBhZSA9IHNnVG9QbGF0byhmZylcbiAgY29uc3QgcmUgPSAwLjE4MDggKiBvZSArIDAuODE5MiAqIGFlXG4gIGNvbnN0IGFidyA9IChvZSAtIHJlKSAvICgyLjA2NjUgLSAwLjAxMDY2NSAqIG9lKVxuICBjb25zdCBhYnYgPSBhYncgKiAoZmcgLyAwLjc5NjYxKVxuXG4gIHJldHVybiBhYnZcbn1cblxuZXhwb3J0IGNvbnN0IGNhbGNBQlYgPSAob2c6IEdyYXZpdHlUeXBlLCBmZzogR3Jhdml0eVR5cGUpOiBQZXJjZW50VHlwZSA9PiB7XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGVzdEFCVnJlYWxFeHRyYWN0KFxuICAgICAgY29udmVydE1lYXN1cmFibGVWYWx1ZShvZywgJ3NnJyksXG4gICAgICBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKGZnLCAnc2cnKVxuICAgICksXG4gICAgdW5pdDogJyUnLFxuICB9XG59XG4iLCJpbXBvcnQgeyBjZWxzaXVzVG9GYWhyZW5oZWl0LCBsaXRlcnNUb0dhbGxvbnMgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG4vLyBodHRwczovL2J5by5jb20veWVhc3QvaXRlbS8xNjQtYmFsYW5jaW5nLXlvdXItZHJhZnQtc3lzdGVtLWFkdmFuY2VkLWJyZXdpbmdcblxuY29uc3Qga2VnUHJlc3N1cmUgPSAoY2FyYlZvbHVtZTogbnVtYmVyLCB0OiBudW1iZXIpID0+XG4gIE1hdGgubWF4KFxuICAgIDAsXG4gICAgLTE2LjY5OTkgLVxuICAgICAgMC4wMTAxMDU5ICogdCArXG4gICAgICAwLjAwMTE2NTEyICogdCAqIHQgK1xuICAgICAgMC4xNzMzNTQgKiB0ICogY2FyYlZvbHVtZSArXG4gICAgICA0LjI0MjY3ICogY2FyYlZvbHVtZSAtXG4gICAgICAwLjA2ODQyMjYgKiBjYXJiVm9sdW1lICogY2FyYlZvbHVtZVxuICApO1xuXG4vLyBodHRwOi8vd3d3LmhvbWVicmV3dGFsay5jb20vc2hvd3RocmVhZC5waHA/dD00NDEzODNcbmNvbnN0IHByaW1pbmdTdWdhciA9IChjYXJiVm9sdW1lLCB0LCBiYXRjaFNpemUpID0+XG4gIDE1LjE5NSAqXG4gIGJhdGNoU2l6ZSAqXG4gIChjYXJiVm9sdW1lIC0gMy4wMzc4ICsgNS4wMDYyZS0yICogdCAtIDIuNjU1NWUtNCAqIHQgKiB0KTtcblxuY29uc3Qgbm9ybWFsaXplVGVtcCA9ICh0OiBudW1iZXIpID0+IE1hdGgubWF4KDMyLjAsIGNlbHNpdXNUb0ZhaHJlbmhlaXQodCkpO1xuXG5leHBvcnQgY29uc3QgY2FyYm9uYXRpb24gPSAoXG4gIGNhcmJWb2x1bWU6IG51bWJlcixcbiAgdDogbnVtYmVyLFxuICBiYXRjaFNpemU6IG51bWJlclxuKSA9PiB7XG4gIGNvbnN0IHN1Z2FyID0gcHJpbWluZ1N1Z2FyKFxuICAgIGNhcmJWb2x1bWUsXG4gICAgbm9ybWFsaXplVGVtcCh0KSxcbiAgICBsaXRlcnNUb0dhbGxvbnMoYmF0Y2hTaXplKVxuICApO1xuXG4gIHJldHVybiB7XG4gICAga2VnUHJlc3N1cmU6IGtlZ1ByZXNzdXJlKGNhcmJWb2x1bWUsIG5vcm1hbGl6ZVRlbXAodCkpLFxuICAgIGtlZ1N1Z2FyOiBzdWdhciAqIDAuNSxcbiAgICBjb3JuU3VnYXI6IHN1Z2FyLFxuICAgIGRtZTogc3VnYXIgKiAxLjUzOCxcbiAgfTtcbn07XG5cbi8vIGh0dHA6Ly9iZWVyc21pdGguY29tL2Jsb2cvMjAxMS8wMi8wNC9jb3VudGluZy1jYWxvcmllcy1pbi15b3VyLWhvbWVicmV3ZWQtYmVlci9cbi8vIENhbG9yaWVfZnJvbV9hbGNvaG9sID0gMTg4MS4yMiAqIEZHICogKE9HLUZHKS8oMS43NzUtT0cpXG4vLyBDYWxvcmllc19mcm9tX2NhcmJzID0gMzU1MC4wICogRkcgKiAoKDAuMTgwOCAqIE9HKSArICgwLjgxOTIgKiBGRykg4oCTIDEuMDAwNClcbi8vIFRvdGFsIGNhbG9yaWVzIOKAkyBqdXN0IGFkZCB0aGUgQ2Fsb3JpZXNfZnJvbV9hbGNvaG9sIHRvIENhbG9yaWVzX2Zyb21fY2FyYnNcblxuY29uc3QgY2Fsb3JpZXNBbGMgPSAob2csIGZnKSA9PiAxODgxLjIyICogZmcgKiAoKG9nIC0gZmcpIC8gKDEuNzc1IC0gb2cpKTtcbmNvbnN0IGNhbG9yaWVzRXh0ID0gKG9nLCBmZykgPT5cbiAgMzU1MC4wICogZmcgKiAoMC4xODA4ICogb2cgKyAwLjgxOTIgKiBmZyAtIDEuMDAwNCk7XG5cbmV4cG9ydCBjb25zdCBjYWxjQ2Fsb3JpZXMgPSAob2c6IG51bWJlciwgZmc6IG51bWJlcikgPT5cbiAgY2Fsb3JpZXNBbGMob2csIGZnKSArIGNhbG9yaWVzRXh0KG9nLCBmZyk7XG4iLCJpbXBvcnQgeyBzdW0gfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHsgY29udmVydE1lYXN1cmFibGVWYWx1ZSB9IGZyb20gJy4vdW5pdHMnXG5pbXBvcnQge1xuICBWb2x1bWVUeXBlLFxuICBDb2xvclR5cGUsXG4gIEZlcm1lbnRhYmxlQWRkaXRpb25UeXBlLFxufSBmcm9tICcuL3R5cGVzL2JlZXJqc29uJ1xuXG4vLyBNQ1UgPSAod2VpZ2h0IG9mIGdyYWluIGluIGxicykqKGNvbG9yIG9mIGdyYWluIGluIGxvdmlib25kKSAvICh2b2x1bWUgaW4gZ2FsKSBTUk0gPSAxLjQ5MjIgKiBNQ1UgXiAwLjY4NTlcbmNvbnN0IG1jdTJzcm0gPSAobWN1OiBudW1iZXIpOiBudW1iZXIgPT4gMS40OTIyICogTWF0aC5wb3cobWN1LCAwLjY4NTkpXG5cbmNvbnN0IGNhbGNNQ1UgPSAoYW1vdW50OiBudW1iZXIsIGNvbG9yOiBudW1iZXIpOiBudW1iZXIgPT5cbiAgY29sb3IgPiAwLjU2ID8gYW1vdW50ICogY29sb3IgOiAwXG5cbmV4cG9ydCBjb25zdCBjYWxjQ29sb3IgPSAoXG4gIGZlcm1lbnRhYmxlczogQXJyYXk8RmVybWVudGFibGVBZGRpdGlvblR5cGU+LFxuICBwb3N0Qm9pbFZvbHVtZTogVm9sdW1lVHlwZVxuKTogQ29sb3JUeXBlID0+IHtcbiAgY29uc3QgZmVybWVudGFibGVzTUNVOiBudW1iZXJbXSA9IGZlcm1lbnRhYmxlcy5tYXAoXG4gICAgKGZlcm1lbnRhYmxlOiBGZXJtZW50YWJsZUFkZGl0aW9uVHlwZSkgPT4ge1xuICAgICAgcmV0dXJuIGNhbGNNQ1UoXG4gICAgICAgIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoZmVybWVudGFibGUuYW1vdW50LCAnbGInKSxcbiAgICAgICAgY29udmVydE1lYXN1cmFibGVWYWx1ZShmZXJtZW50YWJsZS5jb2xvciwgJ0xvdmknKVxuICAgICAgKVxuICAgIH1cbiAgKVxuXG4gIGNvbnN0IGNvbG9yU1JNID0gbWN1MnNybShcbiAgICBzdW0oZmVybWVudGFibGVzTUNVKSAvIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUocG9zdEJvaWxWb2x1bWUsICdnYWwnKVxuICApXG5cbiAgcmV0dXJuIHtcbiAgICB1bml0OiAnU1JNJyxcbiAgICB2YWx1ZTogY29sb3JTUk0sXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNybVRvUmdiID0gKHNybTogbnVtYmVyKTogeyByOiBudW1iZXI7IGc6IG51bWJlcjsgYjogbnVtYmVyIH0gPT4gKHtcbiAgcjogTWF0aC5yb3VuZChNYXRoLm1pbigyNTUsIE1hdGgubWF4KDAsIDI1NSAqIE1hdGgucG93KDAuOTc1LCBzcm0pKSkpLFxuICBnOiBNYXRoLnJvdW5kKE1hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgMjU1ICogTWF0aC5wb3coMC44OCwgc3JtKSkpKSxcbiAgYjogTWF0aC5yb3VuZChNYXRoLm1pbigyNTUsIE1hdGgubWF4KDAsIDI1NSAqIE1hdGgucG93KDAuNywgc3JtKSkpKSxcbn0pXG5cbmV4cG9ydCBjb25zdCBzcm1Ub0NzcyA9IChzcm06IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGNvbG9yID0gc3JtVG9SZ2Ioc3JtKVxuXG4gIHJldHVybiBgcmdiKCR7Y29sb3Iucn0sICR7Y29sb3IuZ30sICR7Y29sb3IuYn0pYFxufVxuIiwiaW1wb3J0IGRlZmluaXRpb25zIGZyb20gJy4vZGVmaW5pdGlvbnMnXG5cbmNvbnN0IERFRkFVTFRfUFJFQ0lTSU9OID0gMlxuXG5jb25zdCByb3VuZFZhbHVlID0gKHZhbHVlOiBudW1iZXIsIHByZWNpc2lvbjogbnVtYmVyKTogbnVtYmVyID0+XG4gICt2YWx1ZS50b0ZpeGVkKHByZWNpc2lvbilcblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBmcm9tXG4gKiBAcGFyYW0ge3N0cmluZ30gdG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBwcmVjaXNpb25cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBjb252ZXJ0ID0gKFxuICB2YWx1ZTogbnVtYmVyLFxuICBmcm9tOiBzdHJpbmcsXG4gIHRvOiBzdHJpbmcsXG4gIHByZWNpc2lvbj86IG51bWJlclxuKTogbnVtYmVyID0+IHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjb252ZXJ0IG51bGwgb3IgdW5kZWZpbmVkIWApXG4gIH1cblxuICBsZXQgb3JpZ2luID0gbnVsbFxuICBsZXQgZGVzdGluYXRpb24gPSBudWxsXG5cbiAgZm9yIChjb25zdCBtZWFzdXJhYmxlVHlwZUtleSBpbiBkZWZpbml0aW9ucykge1xuICAgIGNvbnN0IG1lYXN1cmFibGVUeXBlID0gZGVmaW5pdGlvbnNbbWVhc3VyYWJsZVR5cGVLZXldXG4gICAgZm9yIChjb25zdCBzeXN0ZW1LZXkgaW4gbWVhc3VyYWJsZVR5cGUpIHtcbiAgICAgIGNvbnN0IHN5c3RlbSA9IG1lYXN1cmFibGVUeXBlW3N5c3RlbUtleV1cbiAgICAgIGlmIChzeXN0ZW0udW5pdHMuaGFzT3duUHJvcGVydHkoZnJvbSkpIHtcbiAgICAgICAgb3JpZ2luID0geyB1bml0OiBzeXN0ZW0udW5pdHNbZnJvbV0sIHN5c3RlbSB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzeXN0ZW0udW5pdHMuaGFzT3duUHJvcGVydHkodG8pKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uID0geyB1bml0OiBzeXN0ZW0udW5pdHNbdG9dLCBzeXN0ZW0gfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcmlnaW4gIT0gbnVsbCAmJiBkZXN0aW5hdGlvbiA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbmFibGUgdG8gY29udmVydCBbJHttZWFzdXJhYmxlVHlwZUtleX1dIHVuaXQgWyR7ZnJvbX1dIHRvIFske3RvfV0hYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChvcmlnaW4gPT0gbnVsbCAmJiBkZXN0aW5hdGlvbiAhPSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbmFibGUgdG8gY29udmVydCBbJHtmcm9tfV0gdG8gWyR7bWVhc3VyYWJsZVR5cGVLZXl9XSB1bml0IFske3RvfV0hYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChvcmlnaW4gIT0gbnVsbCAmJiBkZXN0aW5hdGlvbiAhPSBudWxsKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmIChvcmlnaW4gPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5pdCBub3QgZm91bmQgWyR7ZnJvbX1dIWApXG4gIH1cblxuICBpZiAoZGVzdGluYXRpb24gPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5pdCBub3QgZm91bmQgWyR7dG99XSFgKVxuICB9XG5cbiAgY29uc3QgdW5pdFByZWNpc2lvbiA9XG4gICAgZGVzdGluYXRpb24udW5pdC5wcmVjaXNpb24gIT0gbnVsbFxuICAgICAgPyBkZXN0aW5hdGlvbi51bml0LnByZWNpc2lvblxuICAgICAgOiBERUZBVUxUX1BSRUNJU0lPTlxuXG4gIGNvbnN0IGFjdHVhbFByZWNpc2lvbiA9IHByZWNpc2lvbiAhPSBudWxsID8gcHJlY2lzaW9uIDogdW5pdFByZWNpc2lvblxuXG4gIGlmIChmcm9tID09PSB0bykge1xuICAgIHJldHVybiByb3VuZFZhbHVlKHZhbHVlLCBhY3R1YWxQcmVjaXNpb24pXG4gIH1cblxuICBsZXQgcmVzdWx0ID0gdmFsdWUgKiBvcmlnaW4udW5pdC5yYXRpb1xuXG4gIGlmIChvcmlnaW4uc3lzdGVtICE9PSBkZXN0aW5hdGlvbi5zeXN0ZW0pIHtcbiAgICByZXN1bHQgPSBkZXN0aW5hdGlvbi5zeXN0ZW0uZnJvbUJhc2Uob3JpZ2luLnN5c3RlbS50b0Jhc2UocmVzdWx0KSlcbiAgfVxuXG4gIHJlc3VsdCAvPSBkZXN0aW5hdGlvbi51bml0LnJhdGlvXG5cbiAgcmV0dXJuIHJvdW5kVmFsdWUocmVzdWx0LCBhY3R1YWxQcmVjaXNpb24pXG59XG4iLCJpbXBvcnQge1xuICBzcm1Ub0ViYyxcbiAgZWJjVG9Tcm0sXG4gIHNybVRvTG92aWJvbmQsXG4gIGxvdmlib25kVG9Tcm0sXG4gIHNnVG9QbGF0byxcbiAgcGxhdG9Ub1NHLFxuICBzZ1RvQnJpeCxcbiAgYnJpeFRvU0csXG4gIGZhaHJlbmhlaXRUb0NlbHNpdXMsXG4gIGNlbHNpdXNUb0ZhaHJlbmhlaXQsXG59IGZyb20gJy4uL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1hc3M6IHtcbiAgICBtZXRyaWM6IHtcbiAgICAgIHRvQmFzZTogKHYpID0+IHYsXG4gICAgICBmcm9tQmFzZTogKHYpID0+IHYsXG4gICAgICB1bml0czoge1xuICAgICAgICBtZzoge1xuICAgICAgICAgIHJhdGlvOiAwLjAwMSxcbiAgICAgICAgfSxcbiAgICAgICAgZzoge1xuICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICB9LFxuICAgICAgICBrZzoge1xuICAgICAgICAgIHJhdGlvOiAxMDAwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHVzOiB7XG4gICAgICB0b0Jhc2U6ICh2KSA9PiB2ICogNDUzLjU5MixcbiAgICAgIGZyb21CYXNlOiAodikgPT4gdiAvIDQ1My41OTIsXG4gICAgICB1bml0czoge1xuICAgICAgICBsYjoge1xuICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICB9LFxuICAgICAgICBvejoge1xuICAgICAgICAgIHJhdGlvOiAxIC8gMTYsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgdm9sdW1lOiB7XG4gICAgbWV0cmljOiB7XG4gICAgICB0b0Jhc2U6ICh2KSA9PiB2LFxuICAgICAgZnJvbUJhc2U6ICh2KSA9PiB2LFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgbDoge1xuICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICB9LFxuICAgICAgICBtbDoge1xuICAgICAgICAgIHJhdGlvOiAwLjAwMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGltcGVyaWFsOiB7XG4gICAgICB0b0Jhc2U6ICh2KSA9PiB2ICogMS4xMzY1MjMsXG4gICAgICBmcm9tQmFzZTogKHYpID0+IHYgLyAxLjEzNjUyMyxcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIGlmbG96OiB7XG4gICAgICAgICAgcmF0aW86IDEgLyA0MCxcbiAgICAgICAgfSxcbiAgICAgICAgaXB0OiB7XG4gICAgICAgICAgcmF0aW86IDEgLyAyLFxuICAgICAgICB9LFxuICAgICAgICBpcXQ6IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgfSxcbiAgICAgICAgaWdhbDoge1xuICAgICAgICAgIHJhdGlvOiA0LFxuICAgICAgICB9LFxuICAgICAgICBpYmJsOiB7XG4gICAgICAgICAgcmF0aW86IDE0NCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHVzOiB7XG4gICAgICB0b0Jhc2U6ICh2KSA9PiB2ICogMC45NDYzNTMsXG4gICAgICBmcm9tQmFzZTogKHYpID0+IHYgLyAwLjk0NjM1MyxcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIHRzcDoge1xuICAgICAgICAgIHJhdGlvOiAxIC8gMTkyLFxuICAgICAgICB9LFxuICAgICAgICB0YnNwOiB7XG4gICAgICAgICAgcmF0aW86IDEgLyA2NCxcbiAgICAgICAgfSxcbiAgICAgICAgZmxvejoge1xuICAgICAgICAgIHJhdGlvOiAxIC8gMzIsXG4gICAgICAgIH0sXG4gICAgICAgIGN1cDoge1xuICAgICAgICAgIHJhdGlvOiAxIC8gNCxcbiAgICAgICAgfSxcbiAgICAgICAgcHQ6IHtcbiAgICAgICAgICByYXRpbzogMSAvIDIsXG4gICAgICAgIH0sXG4gICAgICAgIHF0OiB7XG4gICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgIH0sXG4gICAgICAgIGdhbDoge1xuICAgICAgICAgIHJhdGlvOiA0LFxuICAgICAgICB9LFxuICAgICAgICBiYmw6IHtcbiAgICAgICAgICByYXRpbzogMTI0LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGNvbG9yOiB7XG4gICAgbG92aWJvbmQ6IHtcbiAgICAgIHRvQmFzZTogbG92aWJvbmRUb1NybSxcbiAgICAgIGZyb21CYXNlOiBzcm1Ub0xvdmlib25kLFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgTG92aToge1xuICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgZWJjOiB7XG4gICAgICB0b0Jhc2U6IGViY1RvU3JtLFxuICAgICAgZnJvbUJhc2U6IHNybVRvRWJjLFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgRUJDOiB7XG4gICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBzcm06IHtcbiAgICAgIHRvQmFzZTogKHYpID0+IHYsXG4gICAgICBmcm9tQmFzZTogKHYpID0+IHYsXG4gICAgICB1bml0czoge1xuICAgICAgICBTUk06IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgfSxcbiAgICAgICAgc3JtOiB7XG4gICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgZ3Jhdml0eToge1xuICAgIHNnOiB7XG4gICAgICB0b0Jhc2U6ICh2KSA9PiB2LFxuICAgICAgZnJvbUJhc2U6ICh2KSA9PiB2LFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgc2c6IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgICBwcmVjaXNpb246IDQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBwbGF0bzoge1xuICAgICAgdG9CYXNlOiBwbGF0b1RvU0csXG4gICAgICBmcm9tQmFzZTogc2dUb1BsYXRvLFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgcGxhdG86IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGJyaXg6IHtcbiAgICAgIHRvQmFzZTogYnJpeFRvU0csXG4gICAgICBmcm9tQmFzZTogc2dUb0JyaXgsXG4gICAgICB1bml0czoge1xuICAgICAgICBicml4OiB7XG4gICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgdGVtcGVyYXR1cmU6IHtcbiAgICBjZWxzaXVzOiB7XG4gICAgICB0b0Jhc2U6ICh2KSA9PiB2LFxuICAgICAgZnJvbUJhc2U6ICh2KSA9PiB2LFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgQzoge1xuICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICAgIHByZWNpc2lvbjogMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGZhaHJlbmhlaXQ6IHtcbiAgICAgIHRvQmFzZTogZmFocmVuaGVpdFRvQ2Vsc2l1cyxcbiAgICAgIGZyb21CYXNlOiBjZWxzaXVzVG9GYWhyZW5oZWl0LFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgRjoge1xuICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICAgIHByZWNpc2lvbjogMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICB0aW1lOiB7XG4gICAgdGltZToge1xuICAgICAgdG9CYXNlOiAodikgPT4gdixcbiAgICAgIGZyb21CYXNlOiAodikgPT4gdixcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIHNlYzoge1xuICAgICAgICAgIHJhdGlvOiAxIC8gNjAsXG4gICAgICAgIH0sXG4gICAgICAgIG1pbjoge1xuICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICB9LFxuICAgICAgICBocjoge1xuICAgICAgICAgIHJhdGlvOiA2MCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF5OiB7XG4gICAgICAgICAgcmF0aW86IDYwICogMjQsXG4gICAgICAgIH0sXG4gICAgICAgIHdlZWs6IHtcbiAgICAgICAgICByYXRpbzogNjAgKiAyNCAqIDcsXG4gICAgICAgIH0sXG4gICAgICAgIG1vbnRoOiB7XG4gICAgICAgICAgcmF0aW86IDYwICogMjQgKiAzMCxcbiAgICAgICAgfSxcbiAgICAgICAgeWVhcjoge1xuICAgICAgICAgIHJhdGlvOiA2MCAqIDI0ICogMzY1LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIHByZXNzdXJlOiB7XG4gICAgcHJlc3N1cmU6IHtcbiAgICAgIHRvQmFzZTogKHYpID0+IHYsXG4gICAgICBmcm9tQmFzZTogKHYpID0+IHYsXG4gICAgICB1bml0czoge1xuICAgICAgICBrUGE6IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgfSxcbiAgICAgICAgYXRtOiB7XG4gICAgICAgICAgcmF0aW86IDEwMS4zMjUsXG4gICAgICAgIH0sXG4gICAgICAgIGJhcjoge1xuICAgICAgICAgIHJhdGlvOiAxMDAsXG4gICAgICAgIH0sXG4gICAgICAgIHBzaToge1xuICAgICAgICAgIHJhdGlvOiA2Ljg5NDc1NyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn1cbiIsImltcG9ydCB7IGxpdGVyc1RvR2FsbG9ucywgcG91bmRzVG9rZywgc2dUb1BsYXRvIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB0eXBlIHsgWWVhc3QgfSBmcm9tIFwiLi90eXBlcy95ZWFzdFwiO1xuaW1wb3J0IHsgWWVhc3RGb3JtcyB9IGZyb20gXCIuL3R5cGVzL3llYXN0XCI7XG5cbi8vIGh0dHBzOi8vd3d3LmJyZXdlcnNmcmllbmQuY29tL3llYXN0LXBpdGNoLXJhdGUtYW5kLXN0YXJ0ZXItY2FsY3VsYXRvci9cblxuLy8gbWlsbGlvbiBjZWxscyAvIG1sIC8gZGVncmVlIFBsYXRvXG5cbi8vIE1pbmltdW0gbWFudWZhY3R1cmVyJ3MgcmVjb21tZW5kYXRpb246IDAuMzUgKGFsZSBvbmx5LCBmcmVzaCB5ZWFzdCBvbmx5KVxuLy8gTWlkZGxlIG9mIHRoZSByb2FkIFBybyBCcmV3ZXIgMC43NSAoYWxlKVxuLy8gUHJvIEJyZXdlciAxLjAwIChoaWdoIGdyYXZpdHkgYWxlKVxuLy8gUHJvIEJyZXdlciAxLjUwIChtaW5pbXVtIGZvciBsYWdlcilcbi8vIFBybyBCcmV3ZXIgMi4wIChoaWdoIGdyYXZpdHkgbGFnZXIpXG5cbi8vIGNlbGxEZW5zaXR5ID0gYmlsbGlvbiBjZWxscyAvIGdyYW1cbi8vIFNhZmFsZSBLLTk3XHQxNFxuLy8gU2FmYWxlIFMtMDRcdDhcbi8vIFNhZmJyZXcgVC01OFx0MThcbi8vIFNhZmJyZXcgUy0zM1x0MTZcbi8vIFNhZmxhZ2VyIFMtMjNcdDEwXG4vLyBTYWZsYWdlciBTLTE4OVx0OVxuXG4vLyBBIHBhY2svdmlhbCBjb250YWlucyAxMDAgYmlsbGlvbiBjZWxscyBhdCB0aGUgZGF0ZSBvZiBtYW51ZmFjdHVyZS5cbi8vIExpcXVpZCB5ZWFzdCB2aWFiaWxpdHkgZHJvcHMgMjElIGVhY2ggbW9udGgsIG9yIDAuNyUgZWFjaCBkYXksIGZyb20gdGhlIGRhdGUgb2YgbWFudWZhY3R1cmUuXG4vLyBUaGUgYXNzdW1wdGlvbiBpcyB0aGUgeWVhc3QgdmlhYmlsaXR5IGRyb3BzIGluIGEgbGluZWFyIGZhc2hpb24uIEluIDQuNzUgbW9udGhzIG9yIDE0MyBkYXlzLCB0aGlzIGNhbGN1bGF0b3IgYXNzdW1lcyB0aGUgeWVhc3QgaXMgMTAwJSBkZWFkICgxMDAgLyAwLjcgPSB+MTQzKS5cblxuLy8gbWlsbGlvbiAxMCBeIDZcbi8vIGJpbGxpb24gMTAgXiA5XG5cbmV4cG9ydCBjb25zdCB5ZWFzdE5lZWRlZCA9IChwaXRjaFJhdGU6IG51bWJlciwgYmF0Y2hTaXplOiBudW1iZXIsIGU6IG51bWJlcikgPT5cbiAgKHBpdGNoUmF0ZSAqIChiYXRjaFNpemUgKiAxMDAwKSAqIGUpIC8gMTAwMDtcblxuY29uc3QgdmlhYmlsaXR5ID0gKFxuICBjdXJyZW50RGF0ZTogc3RyaW5nLFxuICBjdWx0dXJlRGF0ZTogc3RyaW5nID0gbmV3IERhdGUoKS50b1N0cmluZygpXG4pID0+XG4gIDEwMCAtXG4gIE1hdGguZmxvb3IoKERhdGUucGFyc2UoY3VycmVudERhdGUpIC0gRGF0ZS5wYXJzZShjdWx0dXJlRGF0ZSkpIC8gODY0MDAwMDApICpcbiAgICAwLjc7XG5cbmV4cG9ydCBjb25zdCB5ZWFzdENvdW50ID0gKFxuICB7IGFtb3VudCwgZm9ybSwgY3VsdHVyZURhdGUgfTogWWVhc3QsXG4gIGN1cnJlbnREYXRlOiBzdHJpbmcgPSBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4gIGNlbGxEZW5zaXR5OiBudW1iZXIgPSA4LFxuICAvLyBiaWxsaW9uIGNlbGxzIC8gbWxcbiAgc2x1cnJ5RGVuc2l0eTogbnVtYmVyID0gMVxuKSA9PiB7XG4gIHN3aXRjaCAoZm9ybSkge1xuICAgIGNhc2UgWWVhc3RGb3Jtcy5kcnk6XG4gICAgICByZXR1cm4gY2VsbERlbnNpdHkgKiBhbW91bnQgKiAxMDAwO1xuICAgIGNhc2UgWWVhc3RGb3Jtcy5saXF1aWQ6XG4gICAgICByZXR1cm4gMTAwICogKHZpYWJpbGl0eShjdXJyZW50RGF0ZSwgY3VsdHVyZURhdGUpIC8gMTAwKSAqIGFtb3VudDtcbiAgICBjYXNlIFllYXN0Rm9ybXMuc2xhbnQ6XG4gICAgICByZXR1cm4gc2x1cnJ5RGVuc2l0eSAqIGFtb3VudCAqIDEwMDA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdEltcGxlbWVudGVkRXJyb3JcIik7XG4gIH1cbn07XG5cbmNvbnN0IHllYXN0R3Jvd3RoID0gKHJhdGlvKSA9PiAyLjMzIC0gMC42NyAqIHJhdGlvO1xuXG5jb25zdCBncm93dGhSYXRlQ3VydmVCcmF1a2Fpc2VyU3RpciA9IChyYXRpbzogbnVtYmVyKSA9PlxuICByYXRpbyA8IDEuNFxuICAgID8gMS40XG4gICAgOiByYXRpbyA+PSAxLjQgJiYgcmF0aW8gPD0gMy41ICYmIHllYXN0R3Jvd3RoKHJhdGlvKSA+IDBcbiAgICA/IHllYXN0R3Jvd3RoKHJhdGlvKVxuICAgIDogMDtcblxuZXhwb3J0IGNvbnN0IHllYXN0U3RhcnRlckdyb3cgPSAoXG4gIHN0YXJ0aW5nWWVhc3RDb3VudDogbnVtYmVyLFxuICBzdGFydGVyU2l6ZTogbnVtYmVyLFxuICBncmF2aXR5OiBudW1iZXIsXG4gIGJhdGNoU2l6ZTogbnVtYmVyXG4pID0+IHtcbiAgY29uc3Qgdm9sdW1lTGV2ZWwgPSBsaXRlcnNUb0dhbGxvbnMoc3RhcnRlclNpemUpO1xuICBjb25zdCBwb2ludHNOZWVkZWQgPSB2b2x1bWVMZXZlbCAqIChncmF2aXR5IC0gMSkgKiAxMDAwO1xuICBjb25zdCBwb3VuZHNETUUgPSBwb2ludHNOZWVkZWQgLyA0MjtcbiAgY29uc3QgZ3JhbXNETUUgPSBwb3VuZHNUb2tnKHBvdW5kc0RNRSkgKiAxMDAwO1xuICBjb25zdCBjZWxsc1RvR3JhbXNSYXRpbyA9IHN0YXJ0aW5nWWVhc3RDb3VudCAvIGdyYW1zRE1FO1xuXG4gIGNvbnN0IGdyb3d0aFJhdGUgPSBncm93dGhSYXRlQ3VydmVCcmF1a2Fpc2VyU3RpcihjZWxsc1RvR3JhbXNSYXRpbyk7XG4gIGNvbnN0IGVuZGluZ0NvdW50ID0gZ3JhbXNETUUgKiBncm93dGhSYXRlICsgc3RhcnRpbmdZZWFzdENvdW50O1xuICBjb25zdCBwaXRjaFJhdGUgPVxuICAgIChlbmRpbmdDb3VudCAqIDEwMDApIC8gc2dUb1BsYXRvKGdyYXZpdHkpIC8gKGJhdGNoU2l6ZSAvIDEwMDApO1xuXG4gIHJldHVybiB7XG4gICAgZ3Jvd3RoUmF0ZTogZ3Jvd3RoUmF0ZSxcbiAgICBlbmRpbmdDb3VudDogZW5kaW5nQ291bnQsXG4gICAgcGl0Y2hSYXRlOiBwaXRjaFJhdGUsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgc3VtIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCB7XG4gIFZvbHVtZVR5cGUsXG4gIEdyYXZpdHlUeXBlLFxuICBZaWVsZFR5cGUsXG4gIEVmZmljaWVuY3lUeXBlLFxuICBQZXJjZW50VHlwZSxcbiAgRmVybWVudGFibGVBZGRpdGlvblR5cGUsXG4gIEN1bHR1cmVBZGRpdGlvblR5cGUsXG59IGZyb20gJy4vdHlwZXMvYmVlcmpzb24nXG5pbXBvcnQgeyBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlIH0gZnJvbSAnLi91bml0cydcblxuLy8gU3VnYXIgcHJvdmlkZXMgNDYgZ3Jhdml0eSBwb2ludHMgcGVyIHBvdW5kLCBwZXIgZ2FsbG9uIChQUFBHKS5cbi8vIDEgcG91bmQgPSAxNiBveiAod2VpZ2h0L21hc3MpXG4vLyAxIGdhbGxvbiA9IDEyOCBmbCBvelxuLy8geWllbGQgYW5kIGVmZmljaWVuY3kgc2hvdWxkIGJlIHBhcnNlZCBmcm9tIHJlY2lwZSBhcyBwZXJjZW50IHZhbHVlc1xuLy8gVGhlIG1heGltdW0gcG90ZW50aWFsIGlzIGFwcHJveGltYXRlbHkgMS4wNDYgd2hpY2ggd291bGQgYmUgYSBwb3VuZCBvZiBwdXJlIHN1Z2FyIGluIGEgZ2FsbG9uIG9mIHdhdGVyLlxuXG5jb25zdCB5aWVsZFRvUG90ZW50aWFsID0gKGZlcm1lbnRhYmxlWWllbGQ6IFBlcmNlbnRUeXBlKTogR3Jhdml0eVR5cGUgPT4gKHtcbiAgdmFsdWU6IChmZXJtZW50YWJsZVlpZWxkLnZhbHVlICogMC4wMSAqIDQ2KSAvIDEwMDAgKyAxLFxuICB1bml0OiAnc2cnLFxufSlcblxuY29uc3QgY2FsY0Zlcm1lbnRhYmxlRWZmaWNpZW5jeSA9IChcbiAgdHlwZTogc3RyaW5nLFxuICBlcXVpcG1lbnRFZmZpY2llbmN5OiBudW1iZXIsXG4gIHN1Z2FyRWZmaWNpZW5jeSA9IDFcbikgPT5cbiAgdHlwZSA9PT0gJ2V4dHJhY3QnIHx8IHR5cGUgPT09ICdzdWdhcicgfHwgdHlwZSA9PT0gJ2RyeSBleHRyYWN0J1xuICAgID8gc3VnYXJFZmZpY2llbmN5XG4gICAgOiBlcXVpcG1lbnRFZmZpY2llbmN5XG5cbmNvbnN0IGNhbGNGZXJtZW50YWJsZVBvdGVudGlhbCA9IChmZXJtZW50YWJsZVlpZWxkOiBZaWVsZFR5cGUpOiBHcmF2aXR5VHlwZSA9PiB7XG4gIGlmIChmZXJtZW50YWJsZVlpZWxkLnBvdGVudGlhbCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGZlcm1lbnRhYmxlWWllbGQucG90ZW50aWFsXG4gIH1cbiAgaWYgKGZlcm1lbnRhYmxlWWllbGQuZmluZV9ncmluZCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHlpZWxkVG9Qb3RlbnRpYWwoZmVybWVudGFibGVZaWVsZC5maW5lX2dyaW5kKVxuICB9XG4gIGlmIChmZXJtZW50YWJsZVlpZWxkLmNvYXJzZV9ncmluZCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHlpZWxkVG9Qb3RlbnRpYWwoZmVybWVudGFibGVZaWVsZC5jb2Fyc2VfZ3JpbmQpXG4gIH1cbiAgcmV0dXJuIHsgdmFsdWU6IDAsIHVuaXQ6ICdzZycgfVxufVxuXG5jb25zdCBjYWxjRmVybWVudGFibGVHcmF2aXR5UG9pbnRzID0gKFxuICBmZXJtZW50YWJsZTogRmVybWVudGFibGVBZGRpdGlvblR5cGUsXG4gIGJyZXdob3VzZUVmZmljaWVuY3k6IFBlcmNlbnRUeXBlID0geyB2YWx1ZTogMTAwLCB1bml0OiAnJScgfSxcbiAgYXR0ZW51YXRpb246IFBlcmNlbnRUeXBlID0geyB2YWx1ZTogMCwgdW5pdDogJyUnIH1cbikgPT4ge1xuICBjb25zdCBhbW91bnRWYWx1ZSA9IGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoZmVybWVudGFibGUuYW1vdW50LCAnbGInKVxuICBjb25zdCBwb3RlbnRpYWxWYWx1ZSA9IGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoXG4gICAgY2FsY0Zlcm1lbnRhYmxlUG90ZW50aWFsKGZlcm1lbnRhYmxlLnlpZWxkKSxcbiAgICAnc2cnXG4gIClcblxuICBjb25zdCBlZmZpY2llbmN5VmFsdWU6IG51bWJlciA9XG4gICAgKDEgLSBhdHRlbnVhdGlvbi52YWx1ZSAvIDEwMCkgKlxuICAgIGNhbGNGZXJtZW50YWJsZUVmZmljaWVuY3koZmVybWVudGFibGUudHlwZSwgYnJld2hvdXNlRWZmaWNpZW5jeS52YWx1ZSAvIDEwMClcblxuICByZXR1cm4gKHBvdGVudGlhbFZhbHVlIC0gMSkgKiBhbW91bnRWYWx1ZSAqIGVmZmljaWVuY3lWYWx1ZVxufVxuXG5leHBvcnQgY29uc3QgY2FsY1RvdGFsR3Jhdml0eVBvaW50cyA9IChcbiAgZmVybWVudGFibGVzOiBBcnJheTxGZXJtZW50YWJsZUFkZGl0aW9uVHlwZT4sXG4gIGVmZmljaWVuY3k6IEVmZmljaWVuY3lUeXBlLFxuICBhdHRlbnVhdGlvbj86IFBlcmNlbnRUeXBlXG4pID0+XG4gIHN1bShcbiAgICBmZXJtZW50YWJsZXMubWFwKChmZXJtZW50YWJsZTogRmVybWVudGFibGVBZGRpdGlvblR5cGUpID0+XG4gICAgICBjYWxjRmVybWVudGFibGVHcmF2aXR5UG9pbnRzKFxuICAgICAgICBmZXJtZW50YWJsZSxcbiAgICAgICAgZWZmaWNpZW5jeS5icmV3aG91c2UsXG4gICAgICAgIGF0dGVudWF0aW9uXG4gICAgICApXG4gICAgKVxuICApXG5cbmNvbnN0IGNhbGNHcmF2aXR5ID0gKGJhdGNoU2l6ZTogVm9sdW1lVHlwZSwgZ3Jhdml0eVBvaW50czogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIDEuMCArIGdyYXZpdHlQb2ludHMgLyBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKGJhdGNoU2l6ZSwgJ2dhbCcpXG59XG5cbmNvbnN0IGJvaWxHcmF2aXR5ID0gKFxuICBiYXRjaFNpemVJbkdhbGxvbnM6IG51bWJlcixcbiAgYm9pbFNpemVJbkdhbGxvbnM6IG51bWJlcixcbiAgb2dJblNHOiBudW1iZXJcbik6IG51bWJlciA9PiAxICsgKChvZ0luU0cgLSAxKSAqIGJhdGNoU2l6ZUluR2FsbG9ucykgLyBib2lsU2l6ZUluR2FsbG9uc1xuXG5leHBvcnQgY29uc3QgY2FsY09yaWdpbmFsR3Jhdml0eSA9IChcbiAgYmF0Y2hTaXplOiBWb2x1bWVUeXBlLFxuICBmZXJtZW50YWJsZXM6IEFycmF5PEZlcm1lbnRhYmxlQWRkaXRpb25UeXBlPixcbiAgZWZmaWNpZW5jeTogRWZmaWNpZW5jeVR5cGVcbik6IEdyYXZpdHlUeXBlID0+IHtcbiAgY29uc3Qgb2dWYWx1ZSA9IGNhbGNHcmF2aXR5KFxuICAgIGJhdGNoU2l6ZSxcbiAgICBjYWxjVG90YWxHcmF2aXR5UG9pbnRzKGZlcm1lbnRhYmxlcywgZWZmaWNpZW5jeSlcbiAgKVxuICByZXR1cm4ge1xuICAgIHVuaXQ6ICdzZycsXG4gICAgdmFsdWU6IG9nVmFsdWUsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNhbGNGaW5hbEdyYXZpdHkgPSAoXG4gIGJhdGNoU2l6ZTogVm9sdW1lVHlwZSxcbiAgZmVybWVudGFibGVzOiBBcnJheTxGZXJtZW50YWJsZUFkZGl0aW9uVHlwZT4sXG4gIGVmZmljaWVuY3k6IEVmZmljaWVuY3lUeXBlLFxuICBjdWx0dXJlczogQXJyYXk8Q3VsdHVyZUFkZGl0aW9uVHlwZT5cbik6IEdyYXZpdHlUeXBlID0+IHtcbiAgY29uc3QgZmdWYWx1ZSA9IGNhbGNHcmF2aXR5KFxuICAgIGJhdGNoU2l6ZSxcbiAgICBjYWxjVG90YWxHcmF2aXR5UG9pbnRzKGZlcm1lbnRhYmxlcywgZWZmaWNpZW5jeSwgY3VsdHVyZXNbMF0uYXR0ZW51YXRpb24pXG4gIClcbiAgcmV0dXJuIHtcbiAgICB1bml0OiAnc2cnLFxuICAgIHZhbHVlOiBmZ1ZhbHVlLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjYWxjQm9pbEdyYXZpdHkgPSAoXG4gIGJhdGNoU2l6ZTogVm9sdW1lVHlwZSxcbiAgYm9pbFNpemU6IFZvbHVtZVR5cGUsXG4gIE9HOiBHcmF2aXR5VHlwZVxuKTogR3Jhdml0eVR5cGUgPT4ge1xuICByZXR1cm4ge1xuICAgIHVuaXQ6ICdzZycsXG4gICAgdmFsdWU6IGJvaWxHcmF2aXR5KFxuICAgICAgY29udmVydE1lYXN1cmFibGVWYWx1ZShiYXRjaFNpemUsICdnYWwnKSxcbiAgICAgIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoYm9pbFNpemUsICdnYWwnKSxcbiAgICAgIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoT0csICdzZycpXG4gICAgKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgc3VtIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCB7IGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUgfSBmcm9tICcuL3VuaXRzJ1xuaW1wb3J0IHsgdXNlLCBib2lsVGltZSB9IGZyb20gJy4vdGltaW5nJ1xuaW1wb3J0IHtcbiAgVm9sdW1lVHlwZSxcbiAgSG9wQWRkaXRpb25UeXBlLFxuICBCaXR0ZXJuZXNzVHlwZSxcbiAgR3Jhdml0eVR5cGUsXG59IGZyb20gJy4vdHlwZXMvYmVlcmpzb24nXG5cbmNvbnN0IGFscGhhQWNpZFVuaXRzID0gKGFtb3VudEluT3o6IG51bWJlciwgYWxwaGFBY2lkOiBudW1iZXIpOiBudW1iZXIgPT5cbiAgYW1vdW50SW5PeiAqIGFscGhhQWNpZFxuXG5jb25zdCBncmF2aXR5RmFjdG9yID0gKGJvaWxHcmF2aXR5VmFsdWU6IG51bWJlcik6IG51bWJlciA9PlxuICAxLjY1ICogTWF0aC5wb3coMC4wMDAxMjUsIGJvaWxHcmF2aXR5VmFsdWUgLSAxKVxuXG5jb25zdCB0aW1lRmFjdG9yID0gKGJvaWxUaW1lSW5NaW46IG51bWJlcik6IG51bWJlciA9PlxuICAoMSAtIE1hdGguZXhwKC0wLjA0ICogYm9pbFRpbWVJbk1pbikpIC8gNC4xNVxuXG5jb25zdCBwZWxsZXRGYWN0b3IgPSAoZm9ybTogc3RyaW5nID0gJycpOiBudW1iZXIgPT5cbiAgZm9ybSA9PT0gJ3BlbGxldCcgPyAxLjEgOiAxXG5cbmNvbnN0IGlidVV0aWxpemF0aW9uID0gKFxuICBob3BGb3JtOiBzdHJpbmcgPSAnJyxcbiAgYm9pbEdyYXZpdHlWYWx1ZTogbnVtYmVyLFxuICBib2lsVGltZUluTWluOiBudW1iZXIgPSAwXG4pID0+XG4gIHBlbGxldEZhY3Rvcihob3BGb3JtKSAqXG4gIGdyYXZpdHlGYWN0b3IoYm9pbEdyYXZpdHlWYWx1ZSkgKlxuICB0aW1lRmFjdG9yKGJvaWxUaW1lSW5NaW4pXG5cbi8vIEdsZW5uIFRpbnNldGggZGV2ZWxvcGVkIHRoZSBmb2xsb3dpbmcgZm9ybXVsYSB0byBjYWxjdWxhdGUgYml0dGVybmVzcyBpbiBJQlVzOlxuLy8gSUJVID0gKFUgKiBvenMgaG9wcyAqIDc0OTApL1ZvbHVtZSAoaW4gZ2FsbG9ucykgVSByZXByZXNlbnRzIHRoZSB1dGlsaXphdGlvbiBvZiB0aGUgaG9wcyAoY29udmVyc2lvbiB0byBpc28tYWxwaGEtYWNpZHMpIGJhc2VkIG9uIGJvaWwgdGltZSBhbmQgd29ydCBncmF2aXR5LlxuLy8gVSA9IGJpZ25lc3MgZmFjdG9yICogYm9pbCB0aW1lIGZhY3RvclxuXG4vLyBodHRwOi8vd3d3Lmhvd3RvYnJldy5jb20vYm9vay9zZWN0aW9uLTEvaG9wcy9ob3AtYml0dGVyaW5nLWNhbGN1bGF0aW9uc1xuXG5leHBvcnQgY29uc3QgYml0dGVybmVzc0lidVRpbnNldGggPSAoXG4gIGhvcHM6IEFycmF5PEhvcEFkZGl0aW9uVHlwZT4sXG4gIGJvaWxHcmF2aXR5OiBHcmF2aXR5VHlwZSxcbiAgcG9zdEJvaWxWb2x1bWU6IFZvbHVtZVR5cGVcbik6IEJpdHRlcm5lc3NUeXBlID0+IHtcbiAgY29uc3QgYml0dGVybmVzcyA9IHN1bShcbiAgICBob3BzLm1hcCgoeyBhbW91bnQsIGFscGhhX2FjaWQsIGZvcm0sIHRpbWluZyB9KSA9PiB7XG4gICAgICAvLyBUT0RPOiByZXNlYXJjaCBuZWVkZWRcblxuICAgICAgaWYgKCF1c2UodGltaW5nKS5hZGRfdG9fYm9pbCkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuXG4gICAgICBjb25zdCBBQVUgPSBhbHBoYUFjaWRVbml0cyhcbiAgICAgICAgY29udmVydE1lYXN1cmFibGVWYWx1ZShhbW91bnQsICdveicpLFxuICAgICAgICBhbHBoYV9hY2lkLnZhbHVlXG4gICAgICApXG4gICAgICBjb25zdCBVID0gaWJ1VXRpbGl6YXRpb24oXG4gICAgICAgIGZvcm0sXG4gICAgICAgIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoYm9pbEdyYXZpdHksICdzZycpLFxuICAgICAgICBib2lsVGltZSh0aW1pbmcpXG4gICAgICApXG5cbiAgICAgIHJldHVybiAoVSAqIEFBVSAqIDc0Ljg5KSAvIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUocG9zdEJvaWxWb2x1bWUsICdnYWwnKVxuICAgIH0pXG4gIClcblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBiaXR0ZXJuZXNzLFxuICAgIHVuaXQ6ICdJQlVzJyxcbiAgfVxufVxuXG4vLyBUaGUgcHJlY2VpdmVkIGJpdHRlcm5lc3MgZXhwcmVzc2VkIGluIGEgcmF0aW8gb2YgSUJVcyB0byBncmF2aXR5LiBUaGlzIGlzIGZyZXF1ZW50bHkgc2VlbiBleHByZXNzZWQgYXMgQlUvR1UuXG4vLyBUaGUgR3Jhdml0eSBVbml0cyBhcmUgdGhlIGRlY2ltYWwgcG9ydGlvbiBvZiB0aGUgb3JpZ2luYWwgZ3Jhdml0eVxuLy8gaHR0cDovL2JlZXJzbWl0aC5jb20vYmxvZy8yMDA5LzA5LzI2L2JhbGFuY2luZy15b3VyLWJlZXItd2l0aC10aGUtYml0dGVybmVzcy1yYXRpby9cbmV4cG9ydCBjb25zdCBiaXR0ZXJuZXNzUmF0aW8gPSAoaWJ1OiBudW1iZXIsIGd1OiBudW1iZXIpID0+IGlidSAvIGd1XG5cbi8vIHJhZ2VyXG5jb25zdCByYWdlckhvcEdyYXZpdHlBZGp1c3RtZW50ID0gKHNnYikgPT5cbiAgc2diIDw9IDEuMDUgPyAwIDogKHNnYiAtIDEuMDUpIC8gMC4yXG5jb25zdCByYWdlclV0aWwgPSAodGltZSkgPT4gMTguMTEgKyAxMy44NiAqIE1hdGgudGFuaCgodGltZSAtIDMxLjMyKSAvIDE4LjI3KVxuXG5jb25zdCByYWdlckhvcElidSA9IChcbiAgaG9wOiBIb3BBZGRpdGlvblR5cGUsXG4gIGJvaWxHcmF2aXR5OiBHcmF2aXR5VHlwZSxcbiAgcG9zdEJvaWxWb2x1bWU6IFZvbHVtZVR5cGVcbik6IG51bWJlciA9PiB7XG4gIGlmICghdXNlKGhvcC50aW1pbmcpLmFkZF90b19ib2lsKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IFUgPVxuICAgIChyYWdlclV0aWwoTWF0aC5mbG9vcihib2lsVGltZShob3AudGltaW5nKSArIDAuNSkpICpcbiAgICAgIHBlbGxldEZhY3Rvcihob3AuZm9ybSkpIC9cbiAgICAxMDBcbiAgY29uc3QgQUFVID0gYWxwaGFBY2lkVW5pdHMoaG9wLmFtb3VudC52YWx1ZSwgaG9wLmFscGhhX2FjaWQudmFsdWUpXG5cbiAgcmV0dXJuIChcbiAgICAoVSAqIEFBVSAqIDc0Ljg5KSAvXG4gICAgcG9zdEJvaWxWb2x1bWUudmFsdWUgL1xuICAgICgxLjAgKyByYWdlckhvcEdyYXZpdHlBZGp1c3RtZW50KGJvaWxHcmF2aXR5LnZhbHVlKSlcbiAgKVxufVxuXG5leHBvcnQgY29uc3QgYml0dGVybmVzc0lidVJhZ2VyID0gKFxuICBob3BzOiBBcnJheTxIb3BBZGRpdGlvblR5cGU+LFxuICBib2lsR3Jhdml0eTogR3Jhdml0eVR5cGUsXG4gIHBvc3RCb2lsVm9sdW1lOiBWb2x1bWVUeXBlXG4pOiBCaXR0ZXJuZXNzVHlwZSA9PiB7XG4gIGNvbnN0IGJpdHRlcm5lc3MgPSBzdW0oXG4gICAgaG9wcy5tYXAoKGhvcDogSG9wQWRkaXRpb25UeXBlKSA9PlxuICAgICAgcmFnZXJIb3BJYnUoaG9wLCBib2lsR3Jhdml0eSwgcG9zdEJvaWxWb2x1bWUpXG4gICAgKVxuICApXG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogYml0dGVybmVzcyxcbiAgICB1bml0OiAnSUJVcycsXG4gIH1cbn1cbiIsImltcG9ydCB7IHllYXN0Q291bnQsIHllYXN0TmVlZGVkLCB5ZWFzdFN0YXJ0ZXJHcm93IH0gZnJvbSBcIi4vY3VsdHVyZVwiO1xuaW1wb3J0IHsgY2FsY0NhbG9yaWVzLCBjYXJib25hdGlvbiB9IGZyb20gXCIuL2NhcmJvbmF0aW9uXCI7XG5cbmltcG9ydCB7XG4gIGJpdHRlcm5lc3NJYnVSYWdlcixcbiAgYml0dGVybmVzc0lidVRpbnNldGgsXG4gIGJpdHRlcm5lc3NSYXRpbyxcbn0gZnJvbSBcIi4vaG9wc1wiO1xuXG5pbXBvcnQgeyBpc05vdEVtcHR5QXJyYXksIHJvdW5kTWVhc3VyYWJsZSB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmltcG9ydCB7IGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUgfSBmcm9tIFwiLi91bml0c1wiO1xuaW1wb3J0IHsgY29udmVydCB9IGZyb20gXCIuL2NvbnZlcnRlci9jb252ZXJ0ZXJcIjtcblxuaW1wb3J0IHtcbiAgY2FsY01hc2hHcmFpbldlaWdodCxcbiAgcmVjYWxjdWxhdGVNYXNoU3RlcHMsXG4gIHVwZGF0ZVNwYXJnZVZvbHVtZSxcbn0gZnJvbSBcIi4vbWFzaFwiO1xuaW1wb3J0IHsgY2FsY0JvaWxWb2x1bWVzLCBjYWxjTWFzaFZvbHVtZXMgfSBmcm9tIFwiLi92b2x1bWVzXCI7XG5pbXBvcnQgeyBjYWxjV2F0ZXJDaGVtaXN0cnkgfSBmcm9tIFwiLi93YXRlckNoZW1cIjtcblxuaW1wb3J0IHR5cGUge1xuICBSZWNpcGVUeXBlLFxuICBNYXNoUHJvY2VkdXJlVHlwZSxcbiAgRXF1aXBtZW50SXRlbVR5cGUsXG4gIEdyYXZpdHlUeXBlLFxuICBDb2xvclR5cGUsXG4gIFBlcmNlbnRUeXBlLFxuICBCaXR0ZXJuZXNzVHlwZSxcbiAgQ3VsdHVyZUFkZGl0aW9uVHlwZSxcbiAgVm9sdW1lVHlwZSxcbiAgQm9pbFByb2NlZHVyZVR5cGUsXG59IGZyb20gXCIuL3R5cGVzL2JlZXJqc29uXCI7XG5cbmltcG9ydCB7XG4gIGNhbGNPcmlnaW5hbEdyYXZpdHksXG4gIGNhbGNGaW5hbEdyYXZpdHksXG4gIGNhbGNCb2lsR3Jhdml0eSxcbn0gZnJvbSBcIi4vZ3Jhdml0eVwiO1xuaW1wb3J0IHsgc3JtVG9Dc3MsIHNybVRvUmdiLCBjYWxjQ29sb3IgfSBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0IHsgY2FsY0FCViB9IGZyb20gXCIuL2FidlwiO1xuXG50eXBlIFN0YXRzID0ge1xuICBvcmlnaW5hbF9ncmF2aXR5OiBHcmF2aXR5VHlwZTtcbiAgZmluYWxfZ3Jhdml0eTogR3Jhdml0eVR5cGU7XG4gIGFsY29ob2xfYnlfdm9sdW1lOiBQZXJjZW50VHlwZTtcbiAgaWJ1X2VzdGltYXRlOiBCaXR0ZXJuZXNzVHlwZTtcbiAgY29sb3JfZXN0aW1hdGU6IENvbG9yVHlwZTtcbn07XG5cbnR5cGUgVm9sdW1lcyA9IHtcbiAgc3BhcmdlX3ZvbHVtZT86IFZvbHVtZVR5cGU7XG4gIG1hc2hfdm9sdW1lPzogVm9sdW1lVHlwZTtcbiAgdG90YWxfdm9sdW1lPzogVm9sdW1lVHlwZTtcbn07XG5cbmNvbnN0IGNhbGN1bGF0ZVJlY2lwZUJlZXJKU09OID0gKFxuICByZWNpcGU6IFJlY2lwZVR5cGUsXG4gIG1hc2g6IE1hc2hQcm9jZWR1cmVUeXBlLFxuICBlcXVpcG1lbnQ6IHtcbiAgICBobHQ/OiBFcXVpcG1lbnRJdGVtVHlwZTtcbiAgICBtYXNoX3R1bj86IEVxdWlwbWVudEl0ZW1UeXBlO1xuICAgIGJyZXdfa2V0dGxlPzogRXF1aXBtZW50SXRlbVR5cGU7XG4gICAgZmVybWVudGVyPzogRXF1aXBtZW50SXRlbVR5cGU7XG4gIH1cbik6IHtcbiAgc3RhdHM6IFN0YXRzO1xuICBtYXNoOiBNYXNoUHJvY2VkdXJlVHlwZTtcbiAgYm9pbDogQm9pbFByb2NlZHVyZVR5cGU7XG4gIHZvbHVtZXM6IFZvbHVtZXM7XG59ID0+IHtcbiAgY29uc3QgeyBiYXRjaF9zaXplLCBib2lsLCBlZmZpY2llbmN5LCBpbmdyZWRpZW50cyB9ID0gcmVjaXBlO1xuXG4gIGNvbnN0IHsgZmVybWVudGFibGVfYWRkaXRpb25zLCBob3BfYWRkaXRpb25zLCBjdWx0dXJlX2FkZGl0aW9ucyB9ID1cbiAgICBpbmdyZWRpZW50cztcblxuICBsZXQgb3JpZ2luYWxfZ3Jhdml0eTogR3Jhdml0eVR5cGUgPSB7XG4gICAgdW5pdDogXCJzZ1wiLFxuICAgIHZhbHVlOiBudWxsLFxuICB9O1xuICBsZXQgZmluYWxfZ3Jhdml0eTogR3Jhdml0eVR5cGUgPSB7XG4gICAgdW5pdDogXCJzZ1wiLFxuICAgIHZhbHVlOiBudWxsLFxuICB9O1xuICBsZXQgY29sb3I6IENvbG9yVHlwZSA9IHtcbiAgICB1bml0OiBcIlNSTVwiLFxuICAgIHZhbHVlOiBudWxsLFxuICB9O1xuICBsZXQgaWJ1OiBCaXR0ZXJuZXNzVHlwZSA9IHtcbiAgICB1bml0OiBcIklCVXNcIixcbiAgICB2YWx1ZTogbnVsbCxcbiAgfTtcbiAgbGV0IGFidjogUGVyY2VudFR5cGUgPSB7XG4gICAgdW5pdDogXCIlXCIsXG4gICAgdmFsdWU6IG51bGwsXG4gIH07XG4gIGxldCB2b2x1bWVzID0gbnVsbDtcbiAgbGV0IGNhbGN1bGF0ZWRNYXNoID0gbnVsbDtcbiAgbGV0IGNhbGN1bGF0ZWRCb2lsID0gbnVsbDtcblxuICBpZiAoaXNOb3RFbXB0eUFycmF5KGZlcm1lbnRhYmxlX2FkZGl0aW9ucykpIHtcbiAgICBvcmlnaW5hbF9ncmF2aXR5ID0gY2FsY09yaWdpbmFsR3Jhdml0eShcbiAgICAgIGJhdGNoX3NpemUsXG4gICAgICBmZXJtZW50YWJsZV9hZGRpdGlvbnMsXG4gICAgICBlZmZpY2llbmN5XG4gICAgKTtcblxuICAgIGNvbnN0IGRlZmF1bHRDdWx0dXJlQWRkaXRpb246IEN1bHR1cmVBZGRpdGlvblR5cGUgPSB7XG4gICAgICBuYW1lOiBcIkRlZmF1bHQgQ3VsdHVyZVwiLFxuICAgICAgdHlwZTogXCJhbGVcIixcbiAgICAgIGZvcm06IFwibGlxdWlkXCIsXG4gICAgICBhdHRlbnVhdGlvbjogeyB2YWx1ZTogNzUsIHVuaXQ6IFwiJVwiIH0sXG4gICAgfTtcblxuICAgIGZpbmFsX2dyYXZpdHkgPSBjYWxjRmluYWxHcmF2aXR5KFxuICAgICAgYmF0Y2hfc2l6ZSxcbiAgICAgIGZlcm1lbnRhYmxlX2FkZGl0aW9ucyxcbiAgICAgIGVmZmljaWVuY3ksXG4gICAgICBpc05vdEVtcHR5QXJyYXkoY3VsdHVyZV9hZGRpdGlvbnMpXG4gICAgICAgID8gY3VsdHVyZV9hZGRpdGlvbnNcbiAgICAgICAgOiBbZGVmYXVsdEN1bHR1cmVBZGRpdGlvbl1cbiAgICApO1xuXG4gICAgYWJ2ID0gY2FsY0FCVihvcmlnaW5hbF9ncmF2aXR5LCBmaW5hbF9ncmF2aXR5KTtcblxuICAgIGNvbnN0IHsgcHJlX2JvaWxfc2l6ZSB9ID0gY2FsY0JvaWxWb2x1bWVzKGJhdGNoX3NpemUsIGJvaWwsIGVxdWlwbWVudCk7XG4gICAgdm9sdW1lcyA9IHtcbiAgICAgIHByZV9ib2lsX3NpemUsXG4gICAgfTtcblxuICAgIGlmIChtYXNoKSB7XG4gICAgICBjb25zdCBtYXNoR3JhaW5XZWlnaHQgPSBjYWxjTWFzaEdyYWluV2VpZ2h0KGZlcm1lbnRhYmxlX2FkZGl0aW9ucyk7XG5cbiAgICAgIGNvbnN0IG1hc2hTdGVwcyA9IHJlY2FsY3VsYXRlTWFzaFN0ZXBzKFxuICAgICAgICBtYXNoLm1hc2hfc3RlcHMsXG4gICAgICAgIG1hc2guZ3JhaW5fdGVtcGVyYXR1cmUsXG4gICAgICAgIG1hc2hHcmFpbldlaWdodFxuICAgICAgKTtcblxuICAgICAgY29uc3QgeyBzcGFyZ2Vfdm9sdW1lLCBtYXNoX3ZvbHVtZSwgdG90YWxfdm9sdW1lIH0gPSBjYWxjTWFzaFZvbHVtZXMoXG4gICAgICAgIHByZV9ib2lsX3NpemUsXG4gICAgICAgIG1hc2hTdGVwcyxcbiAgICAgICAgbWFzaEdyYWluV2VpZ2h0LFxuICAgICAgICBlcXVpcG1lbnRcbiAgICAgICk7XG5cbiAgICAgIHZvbHVtZXMgPSB7XG4gICAgICAgIC4uLnZvbHVtZXMsXG4gICAgICAgIHNwYXJnZV92b2x1bWUsXG4gICAgICAgIG1hc2hfdm9sdW1lLFxuICAgICAgICB0b3RhbF92b2x1bWUsXG4gICAgICB9O1xuXG4gICAgICBjYWxjdWxhdGVkTWFzaCA9IHtcbiAgICAgICAgLi4ubWFzaCxcbiAgICAgICAgbWFzaF9zdGVwczogdXBkYXRlU3BhcmdlVm9sdW1lKG1hc2hTdGVwcywgc3BhcmdlX3ZvbHVtZSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChib2lsKSB7XG4gICAgICBjYWxjdWxhdGVkQm9pbCA9IHsgLi4uYm9pbCwgcHJlX2JvaWxfc2l6ZSB9O1xuICAgIH1cblxuICAgIGNvbG9yID0gY2FsY0NvbG9yKGZlcm1lbnRhYmxlX2FkZGl0aW9ucywgYmF0Y2hfc2l6ZSk7XG5cbiAgICBpZiAoaXNOb3RFbXB0eUFycmF5KGhvcF9hZGRpdGlvbnMpKSB7XG4gICAgICBjb25zdCBib2lsR3Jhdml0eSA9IGNhbGNCb2lsR3Jhdml0eShcbiAgICAgICAgYmF0Y2hfc2l6ZSxcbiAgICAgICAgcHJlX2JvaWxfc2l6ZSxcbiAgICAgICAgb3JpZ2luYWxfZ3Jhdml0eVxuICAgICAgKTtcbiAgICAgIGlidSA9IGJpdHRlcm5lc3NJYnVUaW5zZXRoKGhvcF9hZGRpdGlvbnMsIGJvaWxHcmF2aXR5LCBiYXRjaF9zaXplKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXRzOiB7XG4gICAgICBvcmlnaW5hbF9ncmF2aXR5OiByb3VuZE1lYXN1cmFibGUob3JpZ2luYWxfZ3Jhdml0eSwgMyksXG4gICAgICBmaW5hbF9ncmF2aXR5OiByb3VuZE1lYXN1cmFibGUoZmluYWxfZ3Jhdml0eSwgMyksXG4gICAgICBhbGNvaG9sX2J5X3ZvbHVtZTogcm91bmRNZWFzdXJhYmxlKGFidiwgMSksXG4gICAgICBpYnVfZXN0aW1hdGU6IHJvdW5kTWVhc3VyYWJsZShpYnUsIDEpLFxuICAgICAgY29sb3JfZXN0aW1hdGU6IHJvdW5kTWVhc3VyYWJsZShjb2xvciwgMSksXG4gICAgfSxcbiAgICB2b2x1bWVzLFxuICAgIG1hc2g6IGNhbGN1bGF0ZWRNYXNoLFxuICAgIGJvaWw6IGNhbGN1bGF0ZWRCb2lsLFxuICB9O1xufTtcblxuZXhwb3J0IHtcbiAgY29udmVydCxcbiAgY29udmVydE1lYXN1cmFibGVWYWx1ZSxcbiAgY2FsY09yaWdpbmFsR3Jhdml0eSxcbiAgY2FsY0ZpbmFsR3Jhdml0eSxcbiAgY2FsY0JvaWxHcmF2aXR5LFxuICBjYWxjQ29sb3IsXG4gIHNybVRvQ3NzLFxuICBzcm1Ub1JnYixcbiAgY2FsY0FCVixcbiAgYml0dGVybmVzc0lidVJhZ2VyLFxuICBiaXR0ZXJuZXNzSWJ1VGluc2V0aCxcbiAgYml0dGVybmVzc1JhdGlvLFxuICBjYWxjdWxhdGVSZWNpcGVCZWVySlNPTixcbiAgY2FsY0JvaWxWb2x1bWVzLFxuICBjYWxjTWFzaFZvbHVtZXMsXG4gIGNhbGNNYXNoR3JhaW5XZWlnaHQsXG4gIHJlY2FsY3VsYXRlTWFzaFN0ZXBzLFxuICAvL1RPRE86IHVzZSBiZWVySlNPTlxuICBjYWxjQ2Fsb3JpZXMsXG4gIGNhcmJvbmF0aW9uLFxuICB5ZWFzdENvdW50LFxuICB5ZWFzdE5lZWRlZCxcbiAgeWVhc3RTdGFydGVyR3Jvdyxcbn07XG4iLCJpbXBvcnQge1xuICBGZXJtZW50YWJsZUFkZGl0aW9uVHlwZSxcbiAgTWFzaFN0ZXBUeXBlLFxuICBUZW1wZXJhdHVyZVR5cGUsXG4gIFZvbHVtZVR5cGUsXG4gIE1hc3NUeXBlLFxufSBmcm9tICcuL3R5cGVzL2JlZXJqc29uJ1xuaW1wb3J0IHsgZ2V0TWVhc3VyYWJsZVZhbHVlLCBzdW0gfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHsgY29udmVydE1lYXN1cmFibGVWYWx1ZSB9IGZyb20gJy4vdW5pdHMnXG5pbXBvcnQgeyB1c2UgfSBmcm9tICcuL3RpbWluZydcblxuY29uc3QgZ3JhaW5Wb2x1bWUgPSAwLjY1MiAvLyBsL2tnXG5jb25zdCBib2lsaW5nVGVtcCA9IDEwMFxuY29uc3QgbWFsdFNwZWNpZmljSGVhdCA9IDAuMzggLy8gQ2FsL2dyYW0tQ1xuY29uc3QgaW5pdGlhbFdhdGVyR3JhaW5SYXRpbyA9IDIuNSAvLyBsL2tnXG5cbmNvbnN0IGFkanVzdFR1bk1hc3MgPSAodHVuVm9sdW1lLCB0b3RWb2x1bWUsIHR1bk1hc3MpID0+IHtcbiAgdHVuVm9sdW1lID0gdHVuVm9sdW1lICogMC44XG4gIHJldHVybiB0dW5Wb2x1bWUgPiAwICYmIHRvdFZvbHVtZSA8IHR1blZvbHVtZVxuICAgID8gKHR1bk1hc3MgKiB0b3RWb2x1bWUpIC8gdHVuVm9sdW1lXG4gICAgOiB0dW5NYXNzXG59XG5cbmNvbnN0IGNhbGNEZWNvY3Rpb25TdGVwID0gKFxuICBzdGFydFRlbXAsXG4gIHRhcmdldFRlbXAsXG4gIHN0YXJ0Vm9sdW1lLFxuICBtYXNoR3JhaW5XZWlnaHQsXG4gIHR1bk1hc3MgPSAwLFxuICB0dW5TcGVjaWZpY0hlYXQgPSAwLFxuICB0dW5Wb2x1bWUgPSAwXG4pOiB7IGFtb3VudDogVm9sdW1lVHlwZSB9ID0+IHtcbiAgY29uc3QgdG90Vm9sdW1lID0gZ3JhaW5Wb2x1bWUgKiBtYXNoR3JhaW5XZWlnaHQgKyBzdGFydFZvbHVtZVxuICBjb25zdCBhZGp1c3RlZFR1bk1hc3MgPSBhZGp1c3RUdW5NYXNzKHR1blZvbHVtZSwgdG90Vm9sdW1lLCB0dW5NYXNzKVxuICBsZXQgZnJhY3Rpb24gPVxuICAgICgoKG1hbHRTcGVjaWZpY0hlYXQgKiBtYXNoR3JhaW5XZWlnaHQgK1xuICAgICAgdHVuU3BlY2lmaWNIZWF0ICogYWRqdXN0ZWRUdW5NYXNzICtcbiAgICAgIHN0YXJ0Vm9sdW1lKSAvXG4gICAgICAobWFsdFNwZWNpZmljSGVhdCAqIG1hc2hHcmFpbldlaWdodCArIHN0YXJ0Vm9sdW1lKSkgKlxuICAgICAgKHRhcmdldFRlbXAgLSBzdGFydFRlbXApKSAvXG4gICAgKGJvaWxpbmdUZW1wIC0gc3RhcnRUZW1wKVxuXG4gIGlmIChmcmFjdGlvbiA+IDEpIHtcbiAgICBmcmFjdGlvbiA9IDFcbiAgfVxuICByZXR1cm4geyBhbW91bnQ6IHsgdmFsdWU6IHRvdFZvbHVtZSAqIGZyYWN0aW9uLCB1bml0OiAnbCcgfSB9XG59XG5cbmNvbnN0IGNhbGNJbmZ1c2lvblN0ZXAgPSAoXG4gIHN0YXJ0VGVtcCxcbiAgc3RlcFRlbXAsXG4gIHN0YXJ0Vm9sdW1lLFxuICBpbmRleCxcbiAgbWFzaEdyYWluV2VpZ2h0XG4pOiB7XG4gIGFtb3VudDogVm9sdW1lVHlwZVxuICBpbmZ1c2VfdGVtcGVyYXR1cmU6IFRlbXBlcmF0dXJlVHlwZVxufSA9PiB7XG4gIGNvbnN0IGluZnVzZVRlbXAgPVxuICAgIGluZGV4ID4gMFxuICAgICAgPyBib2lsaW5nVGVtcFxuICAgICAgOiAobWFsdFNwZWNpZmljSGVhdCAqIChzdGVwVGVtcCAtIHN0YXJ0VGVtcCkpIC8gaW5pdGlhbFdhdGVyR3JhaW5SYXRpbyArXG4gICAgICAgIHN0ZXBUZW1wXG4gIGNvbnN0IGluZnVzZUFtb3VudCA9XG4gICAgKChtYXNoR3JhaW5XZWlnaHQgKiBtYWx0U3BlY2lmaWNIZWF0ICsgc3RhcnRWb2x1bWUpICpcbiAgICAgIChzdGVwVGVtcCAtIHN0YXJ0VGVtcCkpIC9cbiAgICAoaW5mdXNlVGVtcCAtIHN0ZXBUZW1wKVxuXG4gIHJldHVybiB7XG4gICAgaW5mdXNlX3RlbXBlcmF0dXJlOiB7XG4gICAgICB1bml0OiAnQycsXG4gICAgICB2YWx1ZTogaW5mdXNlVGVtcCxcbiAgICB9LFxuICAgIGFtb3VudDoge1xuICAgICAgdW5pdDogJ2wnLFxuICAgICAgdmFsdWU6IGluZnVzZUFtb3VudCxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNhbGN1bGF0ZU1hc2hTdGVwcyhcbiAgbWFzaF9zdGVwczogQXJyYXk8TWFzaFN0ZXBUeXBlPixcbiAgZ3JhaW5fdGVtcGVyYXR1cmU6IFRlbXBlcmF0dXJlVHlwZSxcbiAgbWFzaEdyYWluV2VpZ2h0OiBNYXNzVHlwZVxuKTogQXJyYXk8TWFzaFN0ZXBUeXBlPiB7XG4gIGxldCBzdGFydFZvbHVtZSA9IDBcbiAgbGV0IHN0YXJ0VGVtcCA9IGdyYWluX3RlbXBlcmF0dXJlLnZhbHVlXG5cbiAgY29uc3QgZ3JhaW5XZWlnaHRWYWx1ZSA9IGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUobWFzaEdyYWluV2VpZ2h0LCAna2cnKVxuXG4gIHJldHVybiBtYXNoX3N0ZXBzLm1hcCgoc3RlcDogTWFzaFN0ZXBUeXBlLCBpbmRleDogbnVtYmVyKTogTWFzaFN0ZXBUeXBlID0+IHtcbiAgICBjb25zdCBzdGVwVGVtcCA9IGdldE1lYXN1cmFibGVWYWx1ZShzdGVwLnN0ZXBfdGVtcGVyYXR1cmUpXG5cbiAgICBzd2l0Y2ggKHN0ZXAudHlwZSkge1xuICAgICAgY2FzZSAnZGVjb2N0aW9uJzoge1xuICAgICAgICBjb25zdCB7IGFtb3VudCB9ID0gY2FsY0RlY29jdGlvblN0ZXAoXG4gICAgICAgICAgc3RhcnRUZW1wLFxuICAgICAgICAgIHN0ZXBUZW1wLFxuICAgICAgICAgIHN0YXJ0Vm9sdW1lLFxuICAgICAgICAgIGdyYWluV2VpZ2h0VmFsdWVcbiAgICAgICAgKVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RlcCxcbiAgICAgICAgICBhbW91bnQsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgJ2luZnVzaW9uJzoge1xuICAgICAgICBjb25zdCB7IGFtb3VudCwgaW5mdXNlX3RlbXBlcmF0dXJlIH0gPSBjYWxjSW5mdXNpb25TdGVwKFxuICAgICAgICAgIHN0YXJ0VGVtcCxcbiAgICAgICAgICBzdGVwVGVtcCxcbiAgICAgICAgICBzdGFydFZvbHVtZSxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBncmFpbldlaWdodFZhbHVlXG4gICAgICAgIClcblxuICAgICAgICBzdGFydFZvbHVtZSArPSBhbW91bnQudmFsdWVcbiAgICAgICAgc3RhcnRUZW1wID0gc3RlcFRlbXBcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0ZXAsXG4gICAgICAgICAgaW5mdXNlX3RlbXBlcmF0dXJlLFxuICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0ZXBcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjYWxjTWFzaEdyYWluV2VpZ2h0ID0gKFxuICBmZXJtZW50YWJsZXM6IEFycmF5PEZlcm1lbnRhYmxlQWRkaXRpb25UeXBlPlxuKTogTWFzc1R5cGUgPT4ge1xuICBjb25zdCB2YWx1ZSA9IHN1bShcbiAgICBmZXJtZW50YWJsZXMubWFwKCh7IHRpbWluZywgdHlwZSwgYW1vdW50IH06IEZlcm1lbnRhYmxlQWRkaXRpb25UeXBlKSA9PlxuICAgICAgdHlwZSA9PT0gJ2dyYWluJyAmJiB1c2UodGltaW5nKS5hZGRfdG9fbWFzaFxuICAgICAgICA/IGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoYW1vdW50LCAnbGInKVxuICAgICAgICA6IDBcbiAgICApXG4gIClcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZSxcbiAgICB1bml0OiAnbGInLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTcGFyZ2VWb2x1bWUoXG4gIG1hc2hfc3RlcHM6IEFycmF5PE1hc2hTdGVwVHlwZT4sXG4gIHNwYXJnZVZvbHVtZTogVm9sdW1lVHlwZVxuKTogQXJyYXk8TWFzaFN0ZXBUeXBlPiB7XG4gIHJldHVybiBtYXNoX3N0ZXBzLm1hcCgoc3RlcCkgPT4ge1xuICAgIGlmIChzdGVwLnR5cGUgPT09ICdzcGFyZ2UnKSB7XG4gICAgICByZXR1cm4geyAuLi5zdGVwLCBhbW91bnQ6IHNwYXJnZVZvbHVtZSB9XG4gICAgfVxuICAgIHJldHVybiBzdGVwXG4gIH0pXG59XG4iLCJpbXBvcnQgdHlwZSB7IFRpbWluZ1R5cGUgfSBmcm9tICcuL3R5cGVzL2JlZXJqc29uJ1xuXG5leHBvcnQgY29uc3QgdXNlID0gKFxuICB0aW1pbmc6IFRpbWluZ1R5cGUgPSB7fVxuKToge1xuICBhZGRfdG9fYm9pbDogYm9vbGVhblxuICBhZGRfdG9fbWFzaDogYm9vbGVhblxufSA9PiAoe1xuICBhZGRfdG9fYm9pbDogdGltaW5nLnVzZSA9PT0gJ2FkZF90b19ib2lsJyxcbiAgYWRkX3RvX21hc2g6ICF0aW1pbmcudXNlIHx8IHRpbWluZy51c2UgPT09ICdhZGRfdG9fbWFzaCcsXG59KVxuXG5leHBvcnQgY29uc3QgYm9pbFRpbWUgPSAodGltaW5nOiBUaW1pbmdUeXBlID0ge30pOiBudW1iZXIgPT5cbiAgdGltaW5nLnVzZSA9PT0gJ2FkZF90b19ib2lsJyA/IHRpbWluZy50aW1lLnZhbHVlIDogMFxuIiwiZXhwb3J0IHR5cGUgWWVhc3QgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBhbW91bnQ6IG51bWJlclxuICBhdHRlbnVhdGlvbj86IG51bWJlclxuICBmb3JtOiAnTGlxdWlkJyB8ICdEcnknIHwgJ1NsYW50JyB8ICdDdWx0dXJlJ1xuICB0eXBlOiAnQWxlJyB8ICdMYWdlcicgfCAnV2hlYXQnIHwgJ1dpbmUnIHwgJ0NoYW1wYWduZSdcbiAgY3VsdHVyZURhdGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFllYXN0VHlwZXMgPSB7XG4gIGFsZTogJ0FsZScsXG4gIGxhZ2VyOiAnTGFnZXInLFxuICB3aGVhdDogJ1doZWF0JyxcbiAgd2luZTogJ1dpbmUnLFxuICBjaGFtcGFnbmU6ICdDaGFtcGFnbmUnLFxufVxuZXhwb3J0IGNvbnN0IFllYXN0Rm9ybXMgPSB7XG4gIGxpcXVpZDogJ0xpcXVpZCcsXG4gIGRyeTogJ0RyeScsXG4gIHNsYW50OiAnU2xhbnQnLFxuICBjdWx0dXJlOiAnQ3VsdHVyZScsXG59XG4iLCJpbXBvcnQgeyBjb252ZXJ0IH0gZnJvbSAnLi9jb252ZXJ0ZXIvY29udmVydGVyJ1xuXG50eXBlIE1lYXN1cmFibGUgPSB7XG4gIHZhbHVlOiBudW1iZXJcbiAgdW5pdDogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlID0gKFxuICBtZWFzdXJhYmxlOiBNZWFzdXJhYmxlLFxuICB1bml0OiBzdHJpbmcsXG4gIHByZWNpc2lvbjogbnVtYmVyID0gNFxuKSA9PiB7XG4gIHJldHVybiBjb252ZXJ0KG1lYXN1cmFibGUudmFsdWUsIG1lYXN1cmFibGUudW5pdCwgdW5pdCwgcHJlY2lzaW9uKVxufVxuIiwiZXhwb3J0IGNvbnN0IGtnVG9PdW5jZXMgPSAoazogbnVtYmVyKSA9PiBrICogMzUuMjczOTYxOVxuXG5leHBvcnQgY29uc3Qga2dUb1BvdW5kcyA9IChrOiBudW1iZXIpID0+IGtnVG9PdW5jZXMoaykgLyAxNlxuXG5leHBvcnQgY29uc3QgcG91bmRzVG9rZyA9IChwOiBudW1iZXIpID0+IHAgLyAyLjIwNFxuXG5leHBvcnQgY29uc3QgbGl0ZXJzVG9PdW5jZXMgPSAobDogbnVtYmVyKSA9PiBsIC8gMC4wMjk1NzM1XG5cbmV4cG9ydCBjb25zdCBvdW5jZXNUb0xpdGVycyA9IChvOiBudW1iZXIpID0+IG8gKiAwLjAyOTU3MzVcblxuZXhwb3J0IGNvbnN0IGxpdGVyc1RvR2FsbG9ucyA9IChsOiBudW1iZXIpID0+IGxpdGVyc1RvT3VuY2VzKGwpIC8gMTI4XG5cbmV4cG9ydCBjb25zdCBnYWxsb25zVG9MaXRlcnMgPSAoZzogbnVtYmVyKSA9PiBvdW5jZXNUb0xpdGVycyhnICogMTI4KVxuXG5leHBvcnQgY29uc3QgZmFocmVuaGVpdFRvQ2Vsc2l1cyA9IChmOiBudW1iZXIpID0+IChmIC0gMzIpIC8gMS44XG5cbmV4cG9ydCBjb25zdCBjZWxzaXVzVG9GYWhyZW5oZWl0ID0gKGM6IG51bWJlcikgPT4gYyAqIDEuOCArIDMyXG5cbmV4cG9ydCBjb25zdCBrcGFUb1BzaSA9IChrcGE6IG51bWJlcikgPT4ga3BhICogMC4xNDUwMzc3Mzc3MzAyMDkyM1xuXG5leHBvcnQgY29uc3QgcHNpVG9rcGEgPSAocHNpOiBudW1iZXIpID0+IHBzaSAqIDYuODk0NzU3MjkzMTY4MzYxXG5cbmV4cG9ydCBjb25zdCBzZ1RvUGxhdG8gPSAoc2c6IG51bWJlcikgPT5cbiAgLTYxNi44NjggK1xuICAxMTExLjE0ICogc2cgLVxuICA2MzAuMjcyICogTWF0aC5wb3coc2csIDIpICtcbiAgMTM1Ljk5NyAqIE1hdGgucG93KHNnLCAzKVxuXG5leHBvcnQgY29uc3QgcGxhdG9Ub1NHID0gKGU6IG51bWJlcikgPT4gMSArIGUgLyAoMjU4LjYgLSAoZSAvIDI1OC4yKSAqIDIyNy4xKVxuXG5leHBvcnQgY29uc3QgYnJpeFRvU0cgPSAoYnJpeDogbnVtYmVyKSA9PlxuICBicml4IC8gKDI1OC42IC0gKGJyaXggLyAyNTguMikgKiAyMjcuMSkgKyAxXG5cbmV4cG9ydCBjb25zdCBzZ1RvQnJpeCA9IChzZzogbnVtYmVyKSA9PlxuICAtNjY5LjU2MjIgK1xuICAxMjYyLjc3NDkgKiBzZyAtXG4gIDc3NS42ODIxICogTWF0aC5wb3coc2csIDIpICtcbiAgMTgyLjQ2MDEgKiBNYXRoLnBvdyhzZywgMylcblxuZXhwb3J0IGNvbnN0IHNybVRvRWJjID0gKHNybTogbnVtYmVyKSA9PiBzcm0gKiAxLjk3XG5cbmV4cG9ydCBjb25zdCBlYmNUb1NybSA9IChlYmM6IG51bWJlcikgPT4gZWJjICogMC41MDhcblxuZXhwb3J0IGNvbnN0IHNybVRvTG92aWJvbmQgPSAoc3JtOiBudW1iZXIpID0+IChzcm0gKyAwLjc2KSAvIDEuMzU0NlxuXG5leHBvcnQgY29uc3QgbG92aWJvbmRUb1NybSA9IChsb3ZpYm9uZDogbnVtYmVyKSA9PiAxLjM1NDYgKiBsb3ZpYm9uZCAtIDAuNzZcblxuZXhwb3J0IGNvbnN0IHN1bSA9IChhcnJheTogQXJyYXk8bnVtYmVyPik6IG51bWJlciA9PlxuICBhcnJheS5yZWR1Y2UoKHB2LCBjdikgPT4gcHYgKyBjdiwgMClcblxuY29uc3Qgc2NhbGVJbmdyZWRpZW50cyA9IChzY2FsZUZhY3RvcjogbnVtYmVyLCBpbmdyZWRpZW50czogYW55KSA9PlxuICBpbmdyZWRpZW50cy5tYXAoKGkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaSxcbiAgICAgIGFtb3VudDogc2NhbGVGYWN0b3IgKiBpLmFtb3VudCxcbiAgICB9XG4gIH0pXG5cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3Qgd29yZHM6IEFycmF5PHN0cmluZz4gPSBzdHIuc3BsaXQoJyAnKVxuICBjb25zdCBjYXBpdGFsaXplZFdvcmRzOiBBcnJheTxzdHJpbmc+ID0gd29yZHMubWFwKFxuICAgICh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKVxuICApXG4gIHJldHVybiBjYXBpdGFsaXplZFdvcmRzLmpvaW4oJyAnKVxufVxuXG5leHBvcnQgY29uc3QgaXNOb3RFbXB0eUFycmF5ID0gKGFycjogQXJyYXk8YW55Pik6IGJvb2xlYW4gPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgcmV0dXJuIGFyci5sZW5ndGggPiAwXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChudW1iZXIsIHByZWNpc2lvbiA9IDApIHtcbiAgaWYgKHR5cGVvZiBudW1iZXIgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIE51bWJlcihudW1iZXIudG9GaXhlZChwcmVjaXNpb24pKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01lYXN1cmFibGUob2JqZWN0KSB7XG4gIHJldHVybiAoXG4gICAgaXNPYmplY3Qob2JqZWN0KSAmJlxuICAgIG9iamVjdC5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJlxuICAgIG9iamVjdC5oYXNPd25Qcm9wZXJ0eSgndW5pdCcpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lYXN1cmFibGVWYWx1ZShtZWFzdXJhYmxlKSB7XG4gIGlmIChpc01lYXN1cmFibGUobWVhc3VyYWJsZSkpIHtcbiAgICByZXR1cm4gbWVhc3VyYWJsZS52YWx1ZVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCByb3VuZE1lYXN1cmFibGUgPSAobSwgcHJlY2lzaW9uKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdW5pdDogbS51bml0LFxuICAgIHZhbHVlOiByb3VuZChtLnZhbHVlLCBwcmVjaXNpb24pLFxuICB9XG59XG4iLCJpbXBvcnQgeyBzdW0gfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHtcbiAgVm9sdW1lVHlwZSxcbiAgTWFzc1R5cGUsXG4gIEVxdWlwbWVudEl0ZW1UeXBlLFxuICBCb2lsUHJvY2VkdXJlVHlwZSxcbiAgTWFzaFN0ZXBUeXBlLFxufSBmcm9tIFwiLi90eXBlcy9iZWVyanNvblwiO1xuaW1wb3J0IHsgY29udmVydE1lYXN1cmFibGVWYWx1ZSB9IGZyb20gXCIuL3VuaXRzXCI7XG5cbmNvbnN0IGRlZmF1bHRCb2lsOiBCb2lsUHJvY2VkdXJlVHlwZSA9IHtcbiAgcHJlX2JvaWxfc2l6ZToge1xuICAgIHZhbHVlOiAwLFxuICAgIHVuaXQ6IFwiZ2FsXCIsXG4gIH0sXG4gIGJvaWxfdGltZToge1xuICAgIHZhbHVlOiAwLFxuICAgIHVuaXQ6IFwibWluXCIsXG4gIH0sXG59O1xuXG5jb25zdCBjb29saW5nU2hyaW5rYWdlUmF0ZSA9IDAuMDQ7XG5cbmNvbnN0IGNvbnZlcnRUb0dhbGxvbnMgPSAodm9sdW1lOiBWb2x1bWVUeXBlKSA9PlxuICBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKHZvbHVtZSwgXCJnYWxcIik7XG5cbi8vIDAuOTYgLSBudW1iZXIgb2YgZmwuIG91bmNlcyBvZiB3YXRlciBhYnNvcmJlZCBwZXIgb3VuY2Ugb2YgdGhlIGdyYWluXG4vLyAxMjggZmwuIG91bmNlcyBpbiBnYWxsb24sIDE2IG91bmNlcyBpbiBwb3VuZFxuY29uc3QgZ3JhaW5BYnNvcnB0aW9uUmF0aW8gPSAoMC45NiAvIDEyOCkgKiAxNjtcblxuY29uc3QgY2FsY0dyYWluQWJzb3JwdGlvbiA9IChncmFpbldlaWdodDogTWFzc1R5cGUpOiBWb2x1bWVUeXBlID0+IHtcbiAgY29uc3QgdmFsdWUgPVxuICAgIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoZ3JhaW5XZWlnaHQsIFwibGJcIikgKiBncmFpbkFic29ycHRpb25SYXRpbztcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZSxcbiAgICB1bml0OiBcImdhbFwiLFxuICB9O1xufTtcblxuY29uc3QgY2FsY01hc2hXYXRlclZvbHVtZSA9IChcbiAgbWFzaF9zdGVwczogQXJyYXk8TWFzaFN0ZXBUeXBlPiA9IFtdXG4pOiBWb2x1bWVUeXBlID0+IHtcbiAgY29uc3QgdmFsdWUgPSBzdW0oXG4gICAgbWFzaF9zdGVwcy5tYXAoKHsgdHlwZSwgYW1vdW50IH06IE1hc2hTdGVwVHlwZSkgPT5cbiAgICAgIHR5cGUgPT09IFwiaW5mdXNpb25cIiA/IGNvbnZlcnRUb0dhbGxvbnMoYW1vdW50KSA6IDBcbiAgICApXG4gICk7XG4gIHJldHVybiB7XG4gICAgdmFsdWUsXG4gICAgdW5pdDogXCJnYWxcIixcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjTWFzaFZvbHVtZXMgPSAoXG4gIHByZV9ib2lsX3NpemU6IFZvbHVtZVR5cGUsXG4gIG1hc2hTdGVwczogQXJyYXk8TWFzaFN0ZXBUeXBlPixcbiAgbWFzaEdyYWluV2VpZ2h0OiBNYXNzVHlwZSxcbiAgZXF1aXBtZW50OiB7XG4gICAgaGx0PzogRXF1aXBtZW50SXRlbVR5cGU7XG4gICAgbWFzaF90dW4/OiBFcXVpcG1lbnRJdGVtVHlwZTtcbiAgICBicmV3X2tldHRsZT86IEVxdWlwbWVudEl0ZW1UeXBlO1xuICAgIGZlcm1lbnRlcj86IEVxdWlwbWVudEl0ZW1UeXBlO1xuICB9XG4pOiB7XG4gIG1hc2hfdm9sdW1lOiBWb2x1bWVUeXBlO1xuICBzcGFyZ2Vfdm9sdW1lOiBWb2x1bWVUeXBlO1xuICB0b3RhbF92b2x1bWU6IFZvbHVtZVR5cGU7XG59ID0+IHtcbiAgY29uc3QgbWFzaFdhdGVyVm9sdW1lID0gY2FsY01hc2hXYXRlclZvbHVtZShtYXNoU3RlcHMpO1xuXG4gIGNvbnN0IGdyYWluQWJzb3JwdGlvbiA9IGNhbGNHcmFpbkFic29ycHRpb24obWFzaEdyYWluV2VpZ2h0KTtcblxuICBjb25zdCBtYXNoTG9zcyA9XG4gICAgZXF1aXBtZW50Lm1hc2hfdHVuICE9IG51bGwgPyBjb252ZXJ0VG9HYWxsb25zKGVxdWlwbWVudC5tYXNoX3R1bi5sb3NzKSA6IDA7XG5cbiAgY29uc3Qgc3BhcmdlVm9sdW1lVmFsdWUgPVxuICAgIGNvbnZlcnRUb0dhbGxvbnMocHJlX2JvaWxfc2l6ZSkgK1xuICAgIGdyYWluQWJzb3JwdGlvbi52YWx1ZSAtXG4gICAgbWFzaFdhdGVyVm9sdW1lLnZhbHVlICtcbiAgICBtYXNoTG9zcztcblxuICBjb25zdCBzcGFyZ2VWb2x1bWU6IFZvbHVtZVR5cGUgPSB7XG4gICAgdmFsdWU6IHNwYXJnZVZvbHVtZVZhbHVlLFxuICAgIHVuaXQ6IFwiZ2FsXCIsXG4gIH07XG5cbiAgY29uc3QgdG90YWxWb2x1bWU6IFZvbHVtZVR5cGUgPSB7XG4gICAgdmFsdWU6IG1hc2hXYXRlclZvbHVtZS52YWx1ZSArIHNwYXJnZVZvbHVtZS52YWx1ZSxcbiAgICB1bml0OiBcImdhbFwiLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbWFzaF92b2x1bWU6IG1hc2hXYXRlclZvbHVtZSxcbiAgICBzcGFyZ2Vfdm9sdW1lOiBzcGFyZ2VWb2x1bWUsXG4gICAgdG90YWxfdm9sdW1lOiB0b3RhbFZvbHVtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjQm9pbFZvbHVtZXMgPSAoXG4gIGJhdGNoX3NpemU6IFZvbHVtZVR5cGUsXG4gIGJvaWw6IEJvaWxQcm9jZWR1cmVUeXBlID0gZGVmYXVsdEJvaWwsXG4gIGVxdWlwbWVudDoge1xuICAgIGhsdD86IEVxdWlwbWVudEl0ZW1UeXBlO1xuICAgIG1hc2hfdHVuPzogRXF1aXBtZW50SXRlbVR5cGU7XG4gICAgYnJld19rZXR0bGU/OiBFcXVpcG1lbnRJdGVtVHlwZTtcbiAgICBmZXJtZW50ZXI/OiBFcXVpcG1lbnRJdGVtVHlwZTtcbiAgfVxuKTogeyBwcmVfYm9pbF9zaXplOiBWb2x1bWVUeXBlIH0gPT4ge1xuICBjb25zdCBib2lsUHJvZmlsZSA9IGJvaWwgfHwgZGVmYXVsdEJvaWw7XG5cbiAgY29uc3QgcG9zdEJvaWxWb2x1bWUgPSBjb252ZXJ0VG9HYWxsb25zKGJhdGNoX3NpemUpO1xuXG4gIGxldCBib2lsTG9zcyA9IDA7XG4gIGxldCBib2lsUmF0ZSA9IDA7XG4gIGlmIChlcXVpcG1lbnQgIT0gbnVsbCAmJiBlcXVpcG1lbnQuYnJld19rZXR0bGUgIT0gbnVsbCkge1xuICAgIGJvaWxMb3NzID0gY29udmVydFRvR2FsbG9ucyhlcXVpcG1lbnQuYnJld19rZXR0bGUubG9zcyk7XG4gICAgYm9pbFJhdGUgPSBjb252ZXJ0VG9HYWxsb25zKGVxdWlwbWVudC5icmV3X2tldHRsZS5ib2lsX3JhdGVfcGVyX2hvdXIpO1xuICB9XG5cbiAgY29uc3QgYm9pbE9mZlZvbHVtZSA9IChib2lsUmF0ZSAqIGJvaWxQcm9maWxlLmJvaWxfdGltZS52YWx1ZSkgLyA2MDtcbiAgY29uc3QgY29vbGluZ1Nocmlua2FnZSA9IHBvc3RCb2lsVm9sdW1lICogY29vbGluZ1Nocmlua2FnZVJhdGU7XG4gIGNvbnN0IHByZUJvaWxWb2x1bWUgPVxuICAgIHBvc3RCb2lsVm9sdW1lICsgYm9pbE9mZlZvbHVtZSArIGJvaWxMb3NzICsgY29vbGluZ1Nocmlua2FnZTtcblxuICByZXR1cm4ge1xuICAgIHByZV9ib2lsX3NpemU6IHtcbiAgICAgIHZhbHVlOiBwcmVCb2lsVm9sdW1lLFxuICAgICAgdW5pdDogXCJnYWxcIixcbiAgICB9LFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=