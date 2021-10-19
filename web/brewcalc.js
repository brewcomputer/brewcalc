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
const primingSugar = (carbVolume, t, batchSize) => 15.195 * batchSize * (carbVolume - 3.0378 + 5.0062e-2 * t - 2.6555e-4 * t * t);
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
            throw new Error('NotImplementedError');
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
        unit: 'sg',
        value: null,
    };
    let final_gravity = {
        unit: 'sg',
        value: null,
    };
    let color = {
        unit: 'SRM',
        value: null,
    };
    let ibu = {
        unit: 'IBUs',
        value: null,
    };
    let abv = {
        unit: '%',
        value: null,
    };
    let volumes = null;
    let calculatedMash = null;
    let calculatedBoil = null;
    if (utils_1.isNotEmptyArray(fermentable_additions)) {
        original_gravity = gravity_1.calcOriginalGravity(batch_size, fermentable_additions, efficiency);
        const defaultCultureAddition = {
            name: 'Default Culture',
            type: 'ale',
            form: 'liquid',
            attenuation: { value: 75, unit: '%' },
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
        unit: 'gal',
    },
    boil_time: {
        value: 0,
        unit: 'min',
    },
};
const coolingShrinkageRate = 0.04;
const convertToGallons = (volume) => units_1.convertMeasurableValue(volume, 'gal');
// 0.96 - number of fl. ounces of water absorbed per ounce of the grain
// 128 fl. ounces in gallon, 16 ounces in pound
const grainAbsorptionRatio = (0.96 / 128) * 16;
const calcGrainAbsorption = (grainWeight) => {
    const value = units_1.convertMeasurableValue(grainWeight, 'lb') * grainAbsorptionRatio;
    return {
        value,
        unit: 'gal',
    };
};
const calcMashWaterVolume = (mash_steps = []) => {
    const value = utils_1.sum(mash_steps.map(({ type, amount }) => type === 'infusion' ? convertToGallons(amount) : 0));
    return {
        value,
        unit: 'gal',
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
        unit: 'gal',
    };
    const totalVolume = {
        value: mashWaterVolume.value + spargeVolume.value,
        unit: 'gal',
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
            unit: 'gal',
        },
    };
};
exports.calcBoilVolumes = calcBoilVolumes;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmV3Y2FsYy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYnJld2NhbGMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnJld2NhbGMvLi9zcmMvYWJ2LnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL2NhcmJvbmF0aW9uLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL2NvbG9yLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL2NvbnZlcnRlci9jb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vYnJld2NhbGMvLi9zcmMvY29udmVydGVyL2RlZmluaXRpb25zLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL2N1bHR1cmUudHMiLCJ3ZWJwYWNrOi8vYnJld2NhbGMvLi9zcmMvZ3Jhdml0eS50cyIsIndlYnBhY2s6Ly9icmV3Y2FsYy8uL3NyYy9ob3BzLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL21hc2gudHMiLCJ3ZWJwYWNrOi8vYnJld2NhbGMvLi9zcmMvdGltaW5nLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL3R5cGVzL3llYXN0LnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL3VuaXRzLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL3ZvbHVtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7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N0IsVUFBc0IsRUFDdEIsT0FBMEIsV0FBVyxFQUNyQyxTQUtDLEVBQzhCLEVBQUU7SUFDakMsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLFdBQVc7SUFFdkMsTUFBTSxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0lBRW5ELElBQUksUUFBUSxHQUFHLENBQUM7SUFDaEIsSUFBSSxRQUFRLEdBQUcsQ0FBQztJQUNoQixJQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUU7UUFDdEQsUUFBUSxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3ZELFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0tBQ3RFO0lBRUQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO0lBQ25FLE1BQU0sZ0JBQWdCLEdBQUcsY0FBYyxHQUFHLG9CQUFvQjtJQUM5RCxNQUFNLGFBQWEsR0FDakIsY0FBYyxHQUFHLGFBQWEsR0FBRyxRQUFRLEdBQUcsZ0JBQWdCO0lBRTlELE9BQU87UUFDTCxhQUFhLEVBQUU7WUFDYixLQUFLLEVBQUUsYUFBYTtZQUNwQixJQUFJLEVBQUUsS0FBSztTQUNaO0tBQ0Y7QUFDSCxDQUFDO0FBaENZLHVCQUFlLG1CQWdDM0IiLCJmaWxlIjoiYnJld2NhbGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJicmV3Y2FsY1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJicmV3Y2FsY1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBzZ1RvUGxhdG8gfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHsgY29udmVydE1lYXN1cmFibGVWYWx1ZSB9IGZyb20gJy4vdW5pdHMnXG5pbXBvcnQgeyBHcmF2aXR5VHlwZSwgUGVyY2VudFR5cGUgfSBmcm9tICcuL3R5cGVzL2JlZXJqc29uJ1xuXG4vLyBodHRwOi8vYnlvLmNvbS9ib2NrL2l0ZW0vNDA4LWNhbGN1bGF0aW5nLWFsY29ob2wtY29udGVudC1hdHRlbnVhdGlvbi1leHRyYWN0LWFuZC1jYWxvcmllcy1hZHZhbmNlZC1ob21lYnJld2luZ1xuLy8gaHR0cHM6Ly93d3cuYnJld2Vyc2ZyaWVuZC5jb20vMjAxMS8wNi8xNi9hbGNvaG9sLWJ5LXZvbHVtZS1jYWxjdWxhdG9yLXVwZGF0ZWQvXG4vLyBBQlcgPSAoT0cgcG9pbnRzIC0gRkcgcG9pbnRzKSAqIDAuMTA1XG4vLyBBQlYgPSAoT0cgcG9pbnRzIC0gRkcgcG9pbnRzKSAqIDAuMTMyXG5leHBvcnQgY29uc3QgZXN0QUJXID0gKG9nUHRzOiBudW1iZXIsIGZnUHRzOiBudW1iZXIpID0+IChvZ1B0cyAtIGZnUHRzKSAqIDAuMTA1XG5leHBvcnQgY29uc3QgZXN0QUJWID0gKG9nUHRzOiBudW1iZXIsIGZnUHRzOiBudW1iZXIpID0+IChvZ1B0cyAtIGZnUHRzKSAqIDAuMTMyXG5cbi8vIGh0dHA6Ly9iZWVyc21pdGguY29tL2Jsb2cvMjAxMC8wOS8wNy9hcHBhcmVudC1hbmQtcmVhbC1hdHRlbnVhdGlvbi1mb3ItYmVlci1icmV3ZXJzLXBhcnQtMS9cbmNvbnN0IGVzdEFCVnJlYWxFeHRyYWN0ID0gKG9nOiBudW1iZXIsIGZnOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICBjb25zdCBvZSA9IHNnVG9QbGF0byhvZylcbiAgY29uc3QgYWUgPSBzZ1RvUGxhdG8oZmcpXG4gIGNvbnN0IHJlID0gMC4xODA4ICogb2UgKyAwLjgxOTIgKiBhZVxuICBjb25zdCBhYncgPSAob2UgLSByZSkgLyAoMi4wNjY1IC0gMC4wMTA2NjUgKiBvZSlcbiAgY29uc3QgYWJ2ID0gYWJ3ICogKGZnIC8gMC43OTY2MSlcblxuICByZXR1cm4gYWJ2XG59XG5cbmV4cG9ydCBjb25zdCBjYWxjQUJWID0gKG9nOiBHcmF2aXR5VHlwZSwgZmc6IEdyYXZpdHlUeXBlKTogUGVyY2VudFR5cGUgPT4ge1xuICByZXR1cm4ge1xuICAgIHZhbHVlOiBlc3RBQlZyZWFsRXh0cmFjdChcbiAgICAgIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUob2csICdzZycpLFxuICAgICAgY29udmVydE1lYXN1cmFibGVWYWx1ZShmZywgJ3NnJylcbiAgICApLFxuICAgIHVuaXQ6ICclJyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2Vsc2l1c1RvRmFocmVuaGVpdCwgbGl0ZXJzVG9HYWxsb25zIH0gZnJvbSAnLi91dGlscydcblxuLy8gaHR0cHM6Ly9ieW8uY29tL3llYXN0L2l0ZW0vMTY0LWJhbGFuY2luZy15b3VyLWRyYWZ0LXN5c3RlbS1hZHZhbmNlZC1icmV3aW5nXG5cbmNvbnN0IGtlZ1ByZXNzdXJlID0gKGNhcmJWb2x1bWU6IG51bWJlciwgdDogbnVtYmVyKSA9PlxuICBNYXRoLm1heChcbiAgICAwLFxuICAgIC0xNi42OTk5IC1cbiAgICAgIDAuMDEwMTA1OSAqIHQgK1xuICAgICAgMC4wMDExNjUxMiAqIHQgKiB0ICtcbiAgICAgIDAuMTczMzU0ICogdCAqIGNhcmJWb2x1bWUgK1xuICAgICAgNC4yNDI2NyAqIGNhcmJWb2x1bWUgLVxuICAgICAgMC4wNjg0MjI2ICogY2FyYlZvbHVtZSAqIGNhcmJWb2x1bWVcbiAgKVxuXG4vLyBodHRwOi8vd3d3LmhvbWVicmV3dGFsay5jb20vc2hvd3RocmVhZC5waHA/dD00NDEzODNcbmNvbnN0IHByaW1pbmdTdWdhciA9IChjYXJiVm9sdW1lLCB0LCBiYXRjaFNpemUpID0+XG4gIDE1LjE5NSAqIGJhdGNoU2l6ZSAqIChjYXJiVm9sdW1lIC0gMy4wMzc4ICsgNS4wMDYyZS0yICogdCAtIDIuNjU1NWUtNCAqIHQgKiB0KVxuXG5jb25zdCBub3JtYWxpemVUZW1wID0gKHQ6IG51bWJlcikgPT4gTWF0aC5tYXgoMzIuMCwgY2Vsc2l1c1RvRmFocmVuaGVpdCh0KSlcblxuZXhwb3J0IGNvbnN0IGNhcmJvbmF0aW9uID0gKFxuICBjYXJiVm9sdW1lOiBudW1iZXIsXG4gIHQ6IG51bWJlcixcbiAgYmF0Y2hTaXplOiBudW1iZXJcbikgPT4ge1xuICBjb25zdCBzdWdhciA9IHByaW1pbmdTdWdhcihcbiAgICBjYXJiVm9sdW1lLFxuICAgIG5vcm1hbGl6ZVRlbXAodCksXG4gICAgbGl0ZXJzVG9HYWxsb25zKGJhdGNoU2l6ZSlcbiAgKVxuXG4gIHJldHVybiB7XG4gICAga2VnUHJlc3N1cmU6IGtlZ1ByZXNzdXJlKGNhcmJWb2x1bWUsIG5vcm1hbGl6ZVRlbXAodCkpLFxuICAgIGtlZ1N1Z2FyOiBzdWdhciAqIDAuNSxcbiAgICBjb3JuU3VnYXI6IHN1Z2FyLFxuICAgIGRtZTogc3VnYXIgKiAxLjUzOCxcbiAgfVxufVxuXG4vLyBodHRwOi8vYmVlcnNtaXRoLmNvbS9ibG9nLzIwMTEvMDIvMDQvY291bnRpbmctY2Fsb3JpZXMtaW4teW91ci1ob21lYnJld2VkLWJlZXIvXG4vLyBDYWxvcmllX2Zyb21fYWxjb2hvbCA9IDE4ODEuMjIgKiBGRyAqIChPRy1GRykvKDEuNzc1LU9HKVxuLy8gQ2Fsb3JpZXNfZnJvbV9jYXJicyA9IDM1NTAuMCAqIEZHICogKCgwLjE4MDggKiBPRykgKyAoMC44MTkyICogRkcpIOKAkyAxLjAwMDQpXG4vLyBUb3RhbCBjYWxvcmllcyDigJMganVzdCBhZGQgdGhlIENhbG9yaWVzX2Zyb21fYWxjb2hvbCB0byBDYWxvcmllc19mcm9tX2NhcmJzXG5cbmNvbnN0IGNhbG9yaWVzQWxjID0gKG9nLCBmZykgPT4gMTg4MS4yMiAqIGZnICogKChvZyAtIGZnKSAvICgxLjc3NSAtIG9nKSlcbmNvbnN0IGNhbG9yaWVzRXh0ID0gKG9nLCBmZykgPT5cbiAgMzU1MC4wICogZmcgKiAoMC4xODA4ICogb2cgKyAwLjgxOTIgKiBmZyAtIDEuMDAwNClcblxuZXhwb3J0IGNvbnN0IGNhbGNDYWxvcmllcyA9IChvZzogbnVtYmVyLCBmZzogbnVtYmVyKSA9PlxuICBjYWxvcmllc0FsYyhvZywgZmcpICsgY2Fsb3JpZXNFeHQob2csIGZnKVxuIiwiaW1wb3J0IHsgc3VtIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCB7IGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUgfSBmcm9tICcuL3VuaXRzJ1xuaW1wb3J0IHtcbiAgVm9sdW1lVHlwZSxcbiAgQ29sb3JUeXBlLFxuICBGZXJtZW50YWJsZUFkZGl0aW9uVHlwZSxcbn0gZnJvbSAnLi90eXBlcy9iZWVyanNvbidcblxuLy8gTUNVID0gKHdlaWdodCBvZiBncmFpbiBpbiBsYnMpKihjb2xvciBvZiBncmFpbiBpbiBsb3ZpYm9uZCkgLyAodm9sdW1lIGluIGdhbCkgU1JNID0gMS40OTIyICogTUNVIF4gMC42ODU5XG5jb25zdCBtY3Uyc3JtID0gKG1jdTogbnVtYmVyKTogbnVtYmVyID0+IDEuNDkyMiAqIE1hdGgucG93KG1jdSwgMC42ODU5KVxuXG5jb25zdCBjYWxjTUNVID0gKGFtb3VudDogbnVtYmVyLCBjb2xvcjogbnVtYmVyKTogbnVtYmVyID0+XG4gIGNvbG9yID4gMC41NiA/IGFtb3VudCAqIGNvbG9yIDogMFxuXG5leHBvcnQgY29uc3QgY2FsY0NvbG9yID0gKFxuICBmZXJtZW50YWJsZXM6IEFycmF5PEZlcm1lbnRhYmxlQWRkaXRpb25UeXBlPixcbiAgcG9zdEJvaWxWb2x1bWU6IFZvbHVtZVR5cGVcbik6IENvbG9yVHlwZSA9PiB7XG4gIGNvbnN0IGZlcm1lbnRhYmxlc01DVTogbnVtYmVyW10gPSBmZXJtZW50YWJsZXMubWFwKFxuICAgIChmZXJtZW50YWJsZTogRmVybWVudGFibGVBZGRpdGlvblR5cGUpID0+IHtcbiAgICAgIHJldHVybiBjYWxjTUNVKFxuICAgICAgICBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKGZlcm1lbnRhYmxlLmFtb3VudCwgJ2xiJyksXG4gICAgICAgIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoZmVybWVudGFibGUuY29sb3IsICdMb3ZpJylcbiAgICAgIClcbiAgICB9XG4gIClcblxuICBjb25zdCBjb2xvclNSTSA9IG1jdTJzcm0oXG4gICAgc3VtKGZlcm1lbnRhYmxlc01DVSkgLyBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKHBvc3RCb2lsVm9sdW1lLCAnZ2FsJylcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgdW5pdDogJ1NSTScsXG4gICAgdmFsdWU6IGNvbG9yU1JNLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzcm1Ub1JnYiA9IChzcm06IG51bWJlcik6IHsgcjogbnVtYmVyOyBnOiBudW1iZXI7IGI6IG51bWJlciB9ID0+ICh7XG4gIHI6IE1hdGgucm91bmQoTWF0aC5taW4oMjU1LCBNYXRoLm1heCgwLCAyNTUgKiBNYXRoLnBvdygwLjk3NSwgc3JtKSkpKSxcbiAgZzogTWF0aC5yb3VuZChNYXRoLm1pbigyNTUsIE1hdGgubWF4KDAsIDI1NSAqIE1hdGgucG93KDAuODgsIHNybSkpKSksXG4gIGI6IE1hdGgucm91bmQoTWF0aC5taW4oMjU1LCBNYXRoLm1heCgwLCAyNTUgKiBNYXRoLnBvdygwLjcsIHNybSkpKSksXG59KVxuXG5leHBvcnQgY29uc3Qgc3JtVG9Dc3MgPSAoc3JtOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBjb2xvciA9IHNybVRvUmdiKHNybSlcblxuICByZXR1cm4gYHJnYigke2NvbG9yLnJ9LCAke2NvbG9yLmd9LCAke2NvbG9yLmJ9KWBcbn1cbiIsImltcG9ydCBkZWZpbml0aW9ucyBmcm9tICcuL2RlZmluaXRpb25zJ1xuXG5jb25zdCBERUZBVUxUX1BSRUNJU0lPTiA9IDJcblxuY29uc3Qgcm91bmRWYWx1ZSA9ICh2YWx1ZTogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlcik6IG51bWJlciA9PlxuICArdmFsdWUudG9GaXhlZChwcmVjaXNpb24pXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gZnJvbVxuICogQHBhcmFtIHtzdHJpbmd9IHRvXG4gKiBAcGFyYW0ge251bWJlcn0gcHJlY2lzaW9uXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgY29udmVydCA9IChcbiAgdmFsdWU6IG51bWJlcixcbiAgZnJvbTogc3RyaW5nLFxuICB0bzogc3RyaW5nLFxuICBwcmVjaXNpb24/OiBudW1iZXJcbik6IG51bWJlciA9PiB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY29udmVydCBudWxsIG9yIHVuZGVmaW5lZCFgKVxuICB9XG5cbiAgbGV0IG9yaWdpbiA9IG51bGxcbiAgbGV0IGRlc3RpbmF0aW9uID0gbnVsbFxuXG4gIGZvciAoY29uc3QgbWVhc3VyYWJsZVR5cGVLZXkgaW4gZGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCBtZWFzdXJhYmxlVHlwZSA9IGRlZmluaXRpb25zW21lYXN1cmFibGVUeXBlS2V5XVxuICAgIGZvciAoY29uc3Qgc3lzdGVtS2V5IGluIG1lYXN1cmFibGVUeXBlKSB7XG4gICAgICBjb25zdCBzeXN0ZW0gPSBtZWFzdXJhYmxlVHlwZVtzeXN0ZW1LZXldXG4gICAgICBpZiAoc3lzdGVtLnVuaXRzLmhhc093blByb3BlcnR5KGZyb20pKSB7XG4gICAgICAgIG9yaWdpbiA9IHsgdW5pdDogc3lzdGVtLnVuaXRzW2Zyb21dLCBzeXN0ZW0gfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3lzdGVtLnVuaXRzLmhhc093blByb3BlcnR5KHRvKSkge1xuICAgICAgICBkZXN0aW5hdGlvbiA9IHsgdW5pdDogc3lzdGVtLnVuaXRzW3RvXSwgc3lzdGVtIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3JpZ2luICE9IG51bGwgJiYgZGVzdGluYXRpb24gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5hYmxlIHRvIGNvbnZlcnQgWyR7bWVhc3VyYWJsZVR5cGVLZXl9XSB1bml0IFske2Zyb219XSB0byBbJHt0b31dIWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAob3JpZ2luID09IG51bGwgJiYgZGVzdGluYXRpb24gIT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5hYmxlIHRvIGNvbnZlcnQgWyR7ZnJvbX1dIHRvIFske21lYXN1cmFibGVUeXBlS2V5fV0gdW5pdCBbJHt0b31dIWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAob3JpZ2luICE9IG51bGwgJiYgZGVzdGluYXRpb24gIT0gbnVsbCkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAob3JpZ2luID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaXQgbm90IGZvdW5kIFske2Zyb219XSFgKVxuICB9XG5cbiAgaWYgKGRlc3RpbmF0aW9uID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaXQgbm90IGZvdW5kIFske3RvfV0hYClcbiAgfVxuXG4gIGNvbnN0IHVuaXRQcmVjaXNpb24gPVxuICAgIGRlc3RpbmF0aW9uLnVuaXQucHJlY2lzaW9uICE9IG51bGxcbiAgICAgID8gZGVzdGluYXRpb24udW5pdC5wcmVjaXNpb25cbiAgICAgIDogREVGQVVMVF9QUkVDSVNJT05cblxuICBjb25zdCBhY3R1YWxQcmVjaXNpb24gPSBwcmVjaXNpb24gIT0gbnVsbCA/IHByZWNpc2lvbiA6IHVuaXRQcmVjaXNpb25cblxuICBpZiAoZnJvbSA9PT0gdG8pIHtcbiAgICByZXR1cm4gcm91bmRWYWx1ZSh2YWx1ZSwgYWN0dWFsUHJlY2lzaW9uKVxuICB9XG5cbiAgbGV0IHJlc3VsdCA9IHZhbHVlICogb3JpZ2luLnVuaXQucmF0aW9cblxuICBpZiAob3JpZ2luLnN5c3RlbSAhPT0gZGVzdGluYXRpb24uc3lzdGVtKSB7XG4gICAgcmVzdWx0ID0gZGVzdGluYXRpb24uc3lzdGVtLmZyb21CYXNlKG9yaWdpbi5zeXN0ZW0udG9CYXNlKHJlc3VsdCkpXG4gIH1cblxuICByZXN1bHQgLz0gZGVzdGluYXRpb24udW5pdC5yYXRpb1xuXG4gIHJldHVybiByb3VuZFZhbHVlKHJlc3VsdCwgYWN0dWFsUHJlY2lzaW9uKVxufVxuIiwiaW1wb3J0IHtcbiAgc3JtVG9FYmMsXG4gIGViY1RvU3JtLFxuICBzcm1Ub0xvdmlib25kLFxuICBsb3ZpYm9uZFRvU3JtLFxuICBzZ1RvUGxhdG8sXG4gIHBsYXRvVG9TRyxcbiAgc2dUb0JyaXgsXG4gIGJyaXhUb1NHLFxuICBmYWhyZW5oZWl0VG9DZWxzaXVzLFxuICBjZWxzaXVzVG9GYWhyZW5oZWl0LFxufSBmcm9tICcuLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtYXNzOiB7XG4gICAgbWV0cmljOiB7XG4gICAgICB0b0Jhc2U6ICh2KSA9PiB2LFxuICAgICAgZnJvbUJhc2U6ICh2KSA9PiB2LFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgbWc6IHtcbiAgICAgICAgICByYXRpbzogMC4wMDEsXG4gICAgICAgIH0sXG4gICAgICAgIGc6IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgfSxcbiAgICAgICAga2c6IHtcbiAgICAgICAgICByYXRpbzogMTAwMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB1czoge1xuICAgICAgdG9CYXNlOiAodikgPT4gdiAqIDQ1My41OTIsXG4gICAgICBmcm9tQmFzZTogKHYpID0+IHYgLyA0NTMuNTkyLFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgbGI6IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgfSxcbiAgICAgICAgb3o6IHtcbiAgICAgICAgICByYXRpbzogMSAvIDE2LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIHZvbHVtZToge1xuICAgIG1ldHJpYzoge1xuICAgICAgdG9CYXNlOiAodikgPT4gdixcbiAgICAgIGZyb21CYXNlOiAodikgPT4gdixcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIGw6IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgfSxcbiAgICAgICAgbWw6IHtcbiAgICAgICAgICByYXRpbzogMC4wMDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBpbXBlcmlhbDoge1xuICAgICAgdG9CYXNlOiAodikgPT4gdiAqIDEuMTM2NTIzLFxuICAgICAgZnJvbUJhc2U6ICh2KSA9PiB2IC8gMS4xMzY1MjMsXG4gICAgICB1bml0czoge1xuICAgICAgICBpZmxvejoge1xuICAgICAgICAgIHJhdGlvOiAxIC8gNDAsXG4gICAgICAgIH0sXG4gICAgICAgIGlwdDoge1xuICAgICAgICAgIHJhdGlvOiAxIC8gMixcbiAgICAgICAgfSxcbiAgICAgICAgaXF0OiB7XG4gICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgIH0sXG4gICAgICAgIGlnYWw6IHtcbiAgICAgICAgICByYXRpbzogNCxcbiAgICAgICAgfSxcbiAgICAgICAgaWJibDoge1xuICAgICAgICAgIHJhdGlvOiAxNDQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICB1czoge1xuICAgICAgdG9CYXNlOiAodikgPT4gdiAqIDAuOTQ2MzUzLFxuICAgICAgZnJvbUJhc2U6ICh2KSA9PiB2IC8gMC45NDYzNTMsXG4gICAgICB1bml0czoge1xuICAgICAgICB0c3A6IHtcbiAgICAgICAgICByYXRpbzogMSAvIDE5MixcbiAgICAgICAgfSxcbiAgICAgICAgdGJzcDoge1xuICAgICAgICAgIHJhdGlvOiAxIC8gNjQsXG4gICAgICAgIH0sXG4gICAgICAgIGZsb3o6IHtcbiAgICAgICAgICByYXRpbzogMSAvIDMyLFxuICAgICAgICB9LFxuICAgICAgICBjdXA6IHtcbiAgICAgICAgICByYXRpbzogMSAvIDQsXG4gICAgICAgIH0sXG4gICAgICAgIHB0OiB7XG4gICAgICAgICAgcmF0aW86IDEgLyAyLFxuICAgICAgICB9LFxuICAgICAgICBxdDoge1xuICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICB9LFxuICAgICAgICBnYWw6IHtcbiAgICAgICAgICByYXRpbzogNCxcbiAgICAgICAgfSxcbiAgICAgICAgYmJsOiB7XG4gICAgICAgICAgcmF0aW86IDEyNCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBjb2xvcjoge1xuICAgIGxvdmlib25kOiB7XG4gICAgICB0b0Jhc2U6IGxvdmlib25kVG9Tcm0sXG4gICAgICBmcm9tQmFzZTogc3JtVG9Mb3ZpYm9uZCxcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIExvdmk6IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGViYzoge1xuICAgICAgdG9CYXNlOiBlYmNUb1NybSxcbiAgICAgIGZyb21CYXNlOiBzcm1Ub0ViYyxcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIEVCQzoge1xuICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgc3JtOiB7XG4gICAgICB0b0Jhc2U6ICh2KSA9PiB2LFxuICAgICAgZnJvbUJhc2U6ICh2KSA9PiB2LFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgU1JNOiB7XG4gICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgIH0sXG4gICAgICAgIHNybToge1xuICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGdyYXZpdHk6IHtcbiAgICBzZzoge1xuICAgICAgdG9CYXNlOiAodikgPT4gdixcbiAgICAgIGZyb21CYXNlOiAodikgPT4gdixcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIHNnOiB7XG4gICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgICAgcHJlY2lzaW9uOiA0LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgcGxhdG86IHtcbiAgICAgIHRvQmFzZTogcGxhdG9Ub1NHLFxuICAgICAgZnJvbUJhc2U6IHNnVG9QbGF0byxcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIHBsYXRvOiB7XG4gICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBicml4OiB7XG4gICAgICB0b0Jhc2U6IGJyaXhUb1NHLFxuICAgICAgZnJvbUJhc2U6IHNnVG9Ccml4LFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgYnJpeDoge1xuICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIHRlbXBlcmF0dXJlOiB7XG4gICAgY2Vsc2l1czoge1xuICAgICAgdG9CYXNlOiAodikgPT4gdixcbiAgICAgIGZyb21CYXNlOiAodikgPT4gdixcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIEM6IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgICBwcmVjaXNpb246IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBmYWhyZW5oZWl0OiB7XG4gICAgICB0b0Jhc2U6IGZhaHJlbmhlaXRUb0NlbHNpdXMsXG4gICAgICBmcm9tQmFzZTogY2Vsc2l1c1RvRmFocmVuaGVpdCxcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIEY6IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgICBwcmVjaXNpb246IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgdGltZToge1xuICAgIHRpbWU6IHtcbiAgICAgIHRvQmFzZTogKHYpID0+IHYsXG4gICAgICBmcm9tQmFzZTogKHYpID0+IHYsXG4gICAgICB1bml0czoge1xuICAgICAgICBzZWM6IHtcbiAgICAgICAgICByYXRpbzogMSAvIDYwLFxuICAgICAgICB9LFxuICAgICAgICBtaW46IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgfSxcbiAgICAgICAgaHI6IHtcbiAgICAgICAgICByYXRpbzogNjAsXG4gICAgICAgIH0sXG4gICAgICAgIGRheToge1xuICAgICAgICAgIHJhdGlvOiA2MCAqIDI0LFxuICAgICAgICB9LFxuICAgICAgICB3ZWVrOiB7XG4gICAgICAgICAgcmF0aW86IDYwICogMjQgKiA3LFxuICAgICAgICB9LFxuICAgICAgICBtb250aDoge1xuICAgICAgICAgIHJhdGlvOiA2MCAqIDI0ICogMzAsXG4gICAgICAgIH0sXG4gICAgICAgIHllYXI6IHtcbiAgICAgICAgICByYXRpbzogNjAgKiAyNCAqIDM2NSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBwcmVzc3VyZToge1xuICAgIHByZXNzdXJlOiB7XG4gICAgICB0b0Jhc2U6ICh2KSA9PiB2LFxuICAgICAgZnJvbUJhc2U6ICh2KSA9PiB2LFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAga1BhOiB7XG4gICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgIH0sXG4gICAgICAgIGF0bToge1xuICAgICAgICAgIHJhdGlvOiAxMDEuMzI1LFxuICAgICAgICB9LFxuICAgICAgICBiYXI6IHtcbiAgICAgICAgICByYXRpbzogMTAwLFxuICAgICAgICB9LFxuICAgICAgICBwc2k6IHtcbiAgICAgICAgICByYXRpbzogNi44OTQ3NTcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59XG4iLCJpbXBvcnQgeyBsaXRlcnNUb0dhbGxvbnMsIHBvdW5kc1Rva2csIHNnVG9QbGF0byB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgdHlwZSB7IFllYXN0IH0gZnJvbSAnLi90eXBlcy95ZWFzdCdcbmltcG9ydCB7IFllYXN0Rm9ybXMgfSBmcm9tICcuL3R5cGVzL3llYXN0J1xuXG4vLyBodHRwczovL3d3dy5icmV3ZXJzZnJpZW5kLmNvbS95ZWFzdC1waXRjaC1yYXRlLWFuZC1zdGFydGVyLWNhbGN1bGF0b3IvXG5cbi8vIG1pbGxpb24gY2VsbHMgLyBtbCAvIGRlZ3JlZSBQbGF0b1xuXG4vLyBNaW5pbXVtIG1hbnVmYWN0dXJlcidzIHJlY29tbWVuZGF0aW9uOiAwLjM1IChhbGUgb25seSwgZnJlc2ggeWVhc3Qgb25seSlcbi8vIE1pZGRsZSBvZiB0aGUgcm9hZCBQcm8gQnJld2VyIDAuNzUgKGFsZSlcbi8vIFBybyBCcmV3ZXIgMS4wMCAoaGlnaCBncmF2aXR5IGFsZSlcbi8vIFBybyBCcmV3ZXIgMS41MCAobWluaW11bSBmb3IgbGFnZXIpXG4vLyBQcm8gQnJld2VyIDIuMCAoaGlnaCBncmF2aXR5IGxhZ2VyKVxuXG4vLyBjZWxsRGVuc2l0eSA9IGJpbGxpb24gY2VsbHMgLyBncmFtXG4vLyBTYWZhbGUgSy05N1x0MTRcbi8vIFNhZmFsZSBTLTA0XHQ4XG4vLyBTYWZicmV3IFQtNThcdDE4XG4vLyBTYWZicmV3IFMtMzNcdDE2XG4vLyBTYWZsYWdlciBTLTIzXHQxMFxuLy8gU2FmbGFnZXIgUy0xODlcdDlcblxuLy8gQSBwYWNrL3ZpYWwgY29udGFpbnMgMTAwIGJpbGxpb24gY2VsbHMgYXQgdGhlIGRhdGUgb2YgbWFudWZhY3R1cmUuXG4vLyBMaXF1aWQgeWVhc3QgdmlhYmlsaXR5IGRyb3BzIDIxJSBlYWNoIG1vbnRoLCBvciAwLjclIGVhY2ggZGF5LCBmcm9tIHRoZSBkYXRlIG9mIG1hbnVmYWN0dXJlLlxuLy8gVGhlIGFzc3VtcHRpb24gaXMgdGhlIHllYXN0IHZpYWJpbGl0eSBkcm9wcyBpbiBhIGxpbmVhciBmYXNoaW9uLiBJbiA0Ljc1IG1vbnRocyBvciAxNDMgZGF5cywgdGhpcyBjYWxjdWxhdG9yIGFzc3VtZXMgdGhlIHllYXN0IGlzIDEwMCUgZGVhZCAoMTAwIC8gMC43ID0gfjE0MykuXG5cbi8vIG1pbGxpb24gMTAgXiA2XG4vLyBiaWxsaW9uIDEwIF4gOVxuXG5leHBvcnQgY29uc3QgeWVhc3ROZWVkZWQgPSAocGl0Y2hSYXRlOiBudW1iZXIsIGJhdGNoU2l6ZTogbnVtYmVyLCBlOiBudW1iZXIpID0+XG4gIChwaXRjaFJhdGUgKiAoYmF0Y2hTaXplICogMTAwMCkgKiBlKSAvIDEwMDBcblxuY29uc3QgdmlhYmlsaXR5ID0gKFxuICBjdXJyZW50RGF0ZTogc3RyaW5nLFxuICBjdWx0dXJlRGF0ZTogc3RyaW5nID0gbmV3IERhdGUoKS50b1N0cmluZygpXG4pID0+XG4gIDEwMCAtXG4gIE1hdGguZmxvb3IoKERhdGUucGFyc2UoY3VycmVudERhdGUpIC0gRGF0ZS5wYXJzZShjdWx0dXJlRGF0ZSkpIC8gODY0MDAwMDApICpcbiAgICAwLjdcblxuZXhwb3J0IGNvbnN0IHllYXN0Q291bnQgPSAoXG4gIHsgYW1vdW50LCBmb3JtLCBjdWx0dXJlRGF0ZSB9OiBZZWFzdCxcbiAgY3VycmVudERhdGU6IHN0cmluZyA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcbiAgY2VsbERlbnNpdHk6IG51bWJlciA9IDgsXG4gIC8vIGJpbGxpb24gY2VsbHMgLyBtbFxuICBzbHVycnlEZW5zaXR5OiBudW1iZXIgPSAxXG4pID0+IHtcbiAgc3dpdGNoIChmb3JtKSB7XG4gICAgY2FzZSBZZWFzdEZvcm1zLmRyeTpcbiAgICAgIHJldHVybiBjZWxsRGVuc2l0eSAqIGFtb3VudCAqIDEwMDBcbiAgICBjYXNlIFllYXN0Rm9ybXMubGlxdWlkOlxuICAgICAgcmV0dXJuIDEwMCAqICh2aWFiaWxpdHkoY3VycmVudERhdGUsIGN1bHR1cmVEYXRlKSAvIDEwMCkgKiBhbW91bnRcbiAgICBjYXNlIFllYXN0Rm9ybXMuc2xhbnQ6XG4gICAgICByZXR1cm4gc2x1cnJ5RGVuc2l0eSAqIGFtb3VudCAqIDEwMDBcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3RJbXBsZW1lbnRlZEVycm9yJylcbiAgfVxufVxuXG5jb25zdCB5ZWFzdEdyb3d0aCA9IChyYXRpbykgPT4gMi4zMyAtIDAuNjcgKiByYXRpb1xuXG5jb25zdCBncm93dGhSYXRlQ3VydmVCcmF1a2Fpc2VyU3RpciA9IChyYXRpbzogbnVtYmVyKSA9PlxuICByYXRpbyA8IDEuNFxuICAgID8gMS40XG4gICAgOiByYXRpbyA+PSAxLjQgJiYgcmF0aW8gPD0gMy41ICYmIHllYXN0R3Jvd3RoKHJhdGlvKSA+IDBcbiAgICA/IHllYXN0R3Jvd3RoKHJhdGlvKVxuICAgIDogMFxuXG5leHBvcnQgY29uc3QgeWVhc3RTdGFydGVyR3JvdyA9IChcbiAgc3RhcnRpbmdZZWFzdENvdW50OiBudW1iZXIsXG4gIHN0YXJ0ZXJTaXplOiBudW1iZXIsXG4gIGdyYXZpdHk6IG51bWJlcixcbiAgYmF0Y2hTaXplOiBudW1iZXJcbikgPT4ge1xuICBjb25zdCB2b2x1bWVMZXZlbCA9IGxpdGVyc1RvR2FsbG9ucyhzdGFydGVyU2l6ZSlcbiAgY29uc3QgcG9pbnRzTmVlZGVkID0gdm9sdW1lTGV2ZWwgKiAoZ3Jhdml0eSAtIDEpICogMTAwMFxuICBjb25zdCBwb3VuZHNETUUgPSBwb2ludHNOZWVkZWQgLyA0MlxuICBjb25zdCBncmFtc0RNRSA9IHBvdW5kc1Rva2cocG91bmRzRE1FKSAqIDEwMDBcbiAgY29uc3QgY2VsbHNUb0dyYW1zUmF0aW8gPSBzdGFydGluZ1llYXN0Q291bnQgLyBncmFtc0RNRVxuXG4gIGNvbnN0IGdyb3d0aFJhdGUgPSBncm93dGhSYXRlQ3VydmVCcmF1a2Fpc2VyU3RpcihjZWxsc1RvR3JhbXNSYXRpbylcbiAgY29uc3QgZW5kaW5nQ291bnQgPSBncmFtc0RNRSAqIGdyb3d0aFJhdGUgKyBzdGFydGluZ1llYXN0Q291bnRcbiAgY29uc3QgcGl0Y2hSYXRlID1cbiAgICAoZW5kaW5nQ291bnQgKiAxMDAwKSAvIHNnVG9QbGF0byhncmF2aXR5KSAvIChiYXRjaFNpemUgLyAxMDAwKVxuXG4gIHJldHVybiB7XG4gICAgZ3Jvd3RoUmF0ZTogZ3Jvd3RoUmF0ZSxcbiAgICBlbmRpbmdDb3VudDogZW5kaW5nQ291bnQsXG4gICAgcGl0Y2hSYXRlOiBwaXRjaFJhdGUsXG4gIH1cbn1cbiIsImltcG9ydCB7IHN1bSB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQge1xuICBWb2x1bWVUeXBlLFxuICBHcmF2aXR5VHlwZSxcbiAgWWllbGRUeXBlLFxuICBFZmZpY2llbmN5VHlwZSxcbiAgUGVyY2VudFR5cGUsXG4gIEZlcm1lbnRhYmxlQWRkaXRpb25UeXBlLFxuICBDdWx0dXJlQWRkaXRpb25UeXBlLFxufSBmcm9tICcuL3R5cGVzL2JlZXJqc29uJ1xuaW1wb3J0IHsgY29udmVydE1lYXN1cmFibGVWYWx1ZSB9IGZyb20gJy4vdW5pdHMnXG5cbi8vIFN1Z2FyIHByb3ZpZGVzIDQ2IGdyYXZpdHkgcG9pbnRzIHBlciBwb3VuZCwgcGVyIGdhbGxvbiAoUFBQRykuXG4vLyAxIHBvdW5kID0gMTYgb3ogKHdlaWdodC9tYXNzKVxuLy8gMSBnYWxsb24gPSAxMjggZmwgb3pcbi8vIHlpZWxkIGFuZCBlZmZpY2llbmN5IHNob3VsZCBiZSBwYXJzZWQgZnJvbSByZWNpcGUgYXMgcGVyY2VudCB2YWx1ZXNcbi8vIFRoZSBtYXhpbXVtIHBvdGVudGlhbCBpcyBhcHByb3hpbWF0ZWx5IDEuMDQ2IHdoaWNoIHdvdWxkIGJlIGEgcG91bmQgb2YgcHVyZSBzdWdhciBpbiBhIGdhbGxvbiBvZiB3YXRlci5cblxuY29uc3QgeWllbGRUb1BvdGVudGlhbCA9IChmZXJtZW50YWJsZVlpZWxkOiBQZXJjZW50VHlwZSk6IEdyYXZpdHlUeXBlID0+ICh7XG4gIHZhbHVlOiAoZmVybWVudGFibGVZaWVsZC52YWx1ZSAqIDAuMDEgKiA0NikgLyAxMDAwICsgMSxcbiAgdW5pdDogJ3NnJyxcbn0pXG5cbmNvbnN0IGNhbGNGZXJtZW50YWJsZUVmZmljaWVuY3kgPSAoXG4gIHR5cGU6IHN0cmluZyxcbiAgZXF1aXBtZW50RWZmaWNpZW5jeTogbnVtYmVyLFxuICBzdWdhckVmZmljaWVuY3kgPSAxXG4pID0+XG4gIHR5cGUgPT09ICdleHRyYWN0JyB8fCB0eXBlID09PSAnc3VnYXInIHx8IHR5cGUgPT09ICdkcnkgZXh0cmFjdCdcbiAgICA/IHN1Z2FyRWZmaWNpZW5jeVxuICAgIDogZXF1aXBtZW50RWZmaWNpZW5jeVxuXG5jb25zdCBjYWxjRmVybWVudGFibGVQb3RlbnRpYWwgPSAoZmVybWVudGFibGVZaWVsZDogWWllbGRUeXBlKTogR3Jhdml0eVR5cGUgPT4ge1xuICBpZiAoZmVybWVudGFibGVZaWVsZC5wb3RlbnRpYWwgIT0gbnVsbCkge1xuICAgIHJldHVybiBmZXJtZW50YWJsZVlpZWxkLnBvdGVudGlhbFxuICB9XG4gIGlmIChmZXJtZW50YWJsZVlpZWxkLmZpbmVfZ3JpbmQgIT0gbnVsbCkge1xuICAgIHJldHVybiB5aWVsZFRvUG90ZW50aWFsKGZlcm1lbnRhYmxlWWllbGQuZmluZV9ncmluZClcbiAgfVxuICBpZiAoZmVybWVudGFibGVZaWVsZC5jb2Fyc2VfZ3JpbmQgIT0gbnVsbCkge1xuICAgIHJldHVybiB5aWVsZFRvUG90ZW50aWFsKGZlcm1lbnRhYmxlWWllbGQuY29hcnNlX2dyaW5kKVxuICB9XG4gIHJldHVybiB7IHZhbHVlOiAwLCB1bml0OiAnc2cnIH1cbn1cblxuY29uc3QgY2FsY0Zlcm1lbnRhYmxlR3Jhdml0eVBvaW50cyA9IChcbiAgZmVybWVudGFibGU6IEZlcm1lbnRhYmxlQWRkaXRpb25UeXBlLFxuICBicmV3aG91c2VFZmZpY2llbmN5OiBQZXJjZW50VHlwZSA9IHsgdmFsdWU6IDEwMCwgdW5pdDogJyUnIH0sXG4gIGF0dGVudWF0aW9uOiBQZXJjZW50VHlwZSA9IHsgdmFsdWU6IDAsIHVuaXQ6ICclJyB9XG4pID0+IHtcbiAgY29uc3QgYW1vdW50VmFsdWUgPSBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKGZlcm1lbnRhYmxlLmFtb3VudCwgJ2xiJylcbiAgY29uc3QgcG90ZW50aWFsVmFsdWUgPSBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKFxuICAgIGNhbGNGZXJtZW50YWJsZVBvdGVudGlhbChmZXJtZW50YWJsZS55aWVsZCksXG4gICAgJ3NnJ1xuICApXG5cbiAgY29uc3QgZWZmaWNpZW5jeVZhbHVlOiBudW1iZXIgPVxuICAgICgxIC0gYXR0ZW51YXRpb24udmFsdWUgLyAxMDApICpcbiAgICBjYWxjRmVybWVudGFibGVFZmZpY2llbmN5KGZlcm1lbnRhYmxlLnR5cGUsIGJyZXdob3VzZUVmZmljaWVuY3kudmFsdWUgLyAxMDApXG5cbiAgcmV0dXJuIChwb3RlbnRpYWxWYWx1ZSAtIDEpICogYW1vdW50VmFsdWUgKiBlZmZpY2llbmN5VmFsdWVcbn1cblxuZXhwb3J0IGNvbnN0IGNhbGNUb3RhbEdyYXZpdHlQb2ludHMgPSAoXG4gIGZlcm1lbnRhYmxlczogQXJyYXk8RmVybWVudGFibGVBZGRpdGlvblR5cGU+LFxuICBlZmZpY2llbmN5OiBFZmZpY2llbmN5VHlwZSxcbiAgYXR0ZW51YXRpb24/OiBQZXJjZW50VHlwZVxuKSA9PlxuICBzdW0oXG4gICAgZmVybWVudGFibGVzLm1hcCgoZmVybWVudGFibGU6IEZlcm1lbnRhYmxlQWRkaXRpb25UeXBlKSA9PlxuICAgICAgY2FsY0Zlcm1lbnRhYmxlR3Jhdml0eVBvaW50cyhcbiAgICAgICAgZmVybWVudGFibGUsXG4gICAgICAgIGVmZmljaWVuY3kuYnJld2hvdXNlLFxuICAgICAgICBhdHRlbnVhdGlvblxuICAgICAgKVxuICAgIClcbiAgKVxuXG5jb25zdCBjYWxjR3Jhdml0eSA9IChiYXRjaFNpemU6IFZvbHVtZVR5cGUsIGdyYXZpdHlQb2ludHM6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIHJldHVybiAxLjAgKyBncmF2aXR5UG9pbnRzIC8gY29udmVydE1lYXN1cmFibGVWYWx1ZShiYXRjaFNpemUsICdnYWwnKVxufVxuXG5jb25zdCBib2lsR3Jhdml0eSA9IChcbiAgYmF0Y2hTaXplSW5HYWxsb25zOiBudW1iZXIsXG4gIGJvaWxTaXplSW5HYWxsb25zOiBudW1iZXIsXG4gIG9nSW5TRzogbnVtYmVyXG4pOiBudW1iZXIgPT4gMSArICgob2dJblNHIC0gMSkgKiBiYXRjaFNpemVJbkdhbGxvbnMpIC8gYm9pbFNpemVJbkdhbGxvbnNcblxuZXhwb3J0IGNvbnN0IGNhbGNPcmlnaW5hbEdyYXZpdHkgPSAoXG4gIGJhdGNoU2l6ZTogVm9sdW1lVHlwZSxcbiAgZmVybWVudGFibGVzOiBBcnJheTxGZXJtZW50YWJsZUFkZGl0aW9uVHlwZT4sXG4gIGVmZmljaWVuY3k6IEVmZmljaWVuY3lUeXBlXG4pOiBHcmF2aXR5VHlwZSA9PiB7XG4gIGNvbnN0IG9nVmFsdWUgPSBjYWxjR3Jhdml0eShcbiAgICBiYXRjaFNpemUsXG4gICAgY2FsY1RvdGFsR3Jhdml0eVBvaW50cyhmZXJtZW50YWJsZXMsIGVmZmljaWVuY3kpXG4gIClcbiAgcmV0dXJuIHtcbiAgICB1bml0OiAnc2cnLFxuICAgIHZhbHVlOiBvZ1ZhbHVlLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjYWxjRmluYWxHcmF2aXR5ID0gKFxuICBiYXRjaFNpemU6IFZvbHVtZVR5cGUsXG4gIGZlcm1lbnRhYmxlczogQXJyYXk8RmVybWVudGFibGVBZGRpdGlvblR5cGU+LFxuICBlZmZpY2llbmN5OiBFZmZpY2llbmN5VHlwZSxcbiAgY3VsdHVyZXM6IEFycmF5PEN1bHR1cmVBZGRpdGlvblR5cGU+XG4pOiBHcmF2aXR5VHlwZSA9PiB7XG4gIGNvbnN0IGZnVmFsdWUgPSBjYWxjR3Jhdml0eShcbiAgICBiYXRjaFNpemUsXG4gICAgY2FsY1RvdGFsR3Jhdml0eVBvaW50cyhmZXJtZW50YWJsZXMsIGVmZmljaWVuY3ksIGN1bHR1cmVzWzBdLmF0dGVudWF0aW9uKVxuICApXG4gIHJldHVybiB7XG4gICAgdW5pdDogJ3NnJyxcbiAgICB2YWx1ZTogZmdWYWx1ZSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2FsY0JvaWxHcmF2aXR5ID0gKFxuICBiYXRjaFNpemU6IFZvbHVtZVR5cGUsXG4gIGJvaWxTaXplOiBWb2x1bWVUeXBlLFxuICBPRzogR3Jhdml0eVR5cGVcbik6IEdyYXZpdHlUeXBlID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1bml0OiAnc2cnLFxuICAgIHZhbHVlOiBib2lsR3Jhdml0eShcbiAgICAgIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoYmF0Y2hTaXplLCAnZ2FsJyksXG4gICAgICBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKGJvaWxTaXplLCAnZ2FsJyksXG4gICAgICBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKE9HLCAnc2cnKVxuICAgICksXG4gIH1cbn1cbiIsImltcG9ydCB7IHN1bSB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgeyBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlIH0gZnJvbSAnLi91bml0cydcbmltcG9ydCB7IHVzZSwgYm9pbFRpbWUgfSBmcm9tICcuL3RpbWluZydcbmltcG9ydCB7XG4gIFZvbHVtZVR5cGUsXG4gIEhvcEFkZGl0aW9uVHlwZSxcbiAgQml0dGVybmVzc1R5cGUsXG4gIEdyYXZpdHlUeXBlLFxufSBmcm9tICcuL3R5cGVzL2JlZXJqc29uJ1xuXG5jb25zdCBhbHBoYUFjaWRVbml0cyA9IChhbW91bnRJbk96OiBudW1iZXIsIGFscGhhQWNpZDogbnVtYmVyKTogbnVtYmVyID0+XG4gIGFtb3VudEluT3ogKiBhbHBoYUFjaWRcblxuY29uc3QgZ3Jhdml0eUZhY3RvciA9IChib2lsR3Jhdml0eVZhbHVlOiBudW1iZXIpOiBudW1iZXIgPT5cbiAgMS42NSAqIE1hdGgucG93KDAuMDAwMTI1LCBib2lsR3Jhdml0eVZhbHVlIC0gMSlcblxuY29uc3QgdGltZUZhY3RvciA9IChib2lsVGltZUluTWluOiBudW1iZXIpOiBudW1iZXIgPT5cbiAgKDEgLSBNYXRoLmV4cCgtMC4wNCAqIGJvaWxUaW1lSW5NaW4pKSAvIDQuMTVcblxuY29uc3QgcGVsbGV0RmFjdG9yID0gKGZvcm06IHN0cmluZyA9ICcnKTogbnVtYmVyID0+XG4gIGZvcm0gPT09ICdwZWxsZXQnID8gMS4xIDogMVxuXG5jb25zdCBpYnVVdGlsaXphdGlvbiA9IChcbiAgaG9wRm9ybTogc3RyaW5nID0gJycsXG4gIGJvaWxHcmF2aXR5VmFsdWU6IG51bWJlcixcbiAgYm9pbFRpbWVJbk1pbjogbnVtYmVyID0gMFxuKSA9PlxuICBwZWxsZXRGYWN0b3IoaG9wRm9ybSkgKlxuICBncmF2aXR5RmFjdG9yKGJvaWxHcmF2aXR5VmFsdWUpICpcbiAgdGltZUZhY3Rvcihib2lsVGltZUluTWluKVxuXG4vLyBHbGVubiBUaW5zZXRoIGRldmVsb3BlZCB0aGUgZm9sbG93aW5nIGZvcm11bGEgdG8gY2FsY3VsYXRlIGJpdHRlcm5lc3MgaW4gSUJVczpcbi8vIElCVSA9IChVICogb3pzIGhvcHMgKiA3NDkwKS9Wb2x1bWUgKGluIGdhbGxvbnMpIFUgcmVwcmVzZW50cyB0aGUgdXRpbGl6YXRpb24gb2YgdGhlIGhvcHMgKGNvbnZlcnNpb24gdG8gaXNvLWFscGhhLWFjaWRzKSBiYXNlZCBvbiBib2lsIHRpbWUgYW5kIHdvcnQgZ3Jhdml0eS5cbi8vIFUgPSBiaWduZXNzIGZhY3RvciAqIGJvaWwgdGltZSBmYWN0b3JcblxuLy8gaHR0cDovL3d3dy5ob3d0b2JyZXcuY29tL2Jvb2svc2VjdGlvbi0xL2hvcHMvaG9wLWJpdHRlcmluZy1jYWxjdWxhdGlvbnNcblxuZXhwb3J0IGNvbnN0IGJpdHRlcm5lc3NJYnVUaW5zZXRoID0gKFxuICBob3BzOiBBcnJheTxIb3BBZGRpdGlvblR5cGU+LFxuICBib2lsR3Jhdml0eTogR3Jhdml0eVR5cGUsXG4gIHBvc3RCb2lsVm9sdW1lOiBWb2x1bWVUeXBlXG4pOiBCaXR0ZXJuZXNzVHlwZSA9PiB7XG4gIGNvbnN0IGJpdHRlcm5lc3MgPSBzdW0oXG4gICAgaG9wcy5tYXAoKHsgYW1vdW50LCBhbHBoYV9hY2lkLCBmb3JtLCB0aW1pbmcgfSkgPT4ge1xuICAgICAgLy8gVE9ETzogcmVzZWFyY2ggbmVlZGVkXG5cbiAgICAgIGlmICghdXNlKHRpbWluZykuYWRkX3RvX2JvaWwpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cblxuICAgICAgY29uc3QgQUFVID0gYWxwaGFBY2lkVW5pdHMoXG4gICAgICAgIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoYW1vdW50LCAnb3onKSxcbiAgICAgICAgYWxwaGFfYWNpZC52YWx1ZVxuICAgICAgKVxuICAgICAgY29uc3QgVSA9IGlidVV0aWxpemF0aW9uKFxuICAgICAgICBmb3JtLFxuICAgICAgICBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKGJvaWxHcmF2aXR5LCAnc2cnKSxcbiAgICAgICAgYm9pbFRpbWUodGltaW5nKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gKFUgKiBBQVUgKiA3NC44OSkgLyBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKHBvc3RCb2lsVm9sdW1lLCAnZ2FsJylcbiAgICB9KVxuICApXG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogYml0dGVybmVzcyxcbiAgICB1bml0OiAnSUJVcycsXG4gIH1cbn1cblxuLy8gVGhlIHByZWNlaXZlZCBiaXR0ZXJuZXNzIGV4cHJlc3NlZCBpbiBhIHJhdGlvIG9mIElCVXMgdG8gZ3Jhdml0eS4gVGhpcyBpcyBmcmVxdWVudGx5IHNlZW4gZXhwcmVzc2VkIGFzIEJVL0dVLlxuLy8gVGhlIEdyYXZpdHkgVW5pdHMgYXJlIHRoZSBkZWNpbWFsIHBvcnRpb24gb2YgdGhlIG9yaWdpbmFsIGdyYXZpdHlcbi8vIGh0dHA6Ly9iZWVyc21pdGguY29tL2Jsb2cvMjAwOS8wOS8yNi9iYWxhbmNpbmcteW91ci1iZWVyLXdpdGgtdGhlLWJpdHRlcm5lc3MtcmF0aW8vXG5leHBvcnQgY29uc3QgYml0dGVybmVzc1JhdGlvID0gKGlidTogbnVtYmVyLCBndTogbnVtYmVyKSA9PiBpYnUgLyBndVxuXG4vLyByYWdlclxuY29uc3QgcmFnZXJIb3BHcmF2aXR5QWRqdXN0bWVudCA9IChzZ2IpID0+XG4gIHNnYiA8PSAxLjA1ID8gMCA6IChzZ2IgLSAxLjA1KSAvIDAuMlxuY29uc3QgcmFnZXJVdGlsID0gKHRpbWUpID0+IDE4LjExICsgMTMuODYgKiBNYXRoLnRhbmgoKHRpbWUgLSAzMS4zMikgLyAxOC4yNylcblxuY29uc3QgcmFnZXJIb3BJYnUgPSAoXG4gIGhvcDogSG9wQWRkaXRpb25UeXBlLFxuICBib2lsR3Jhdml0eTogR3Jhdml0eVR5cGUsXG4gIHBvc3RCb2lsVm9sdW1lOiBWb2x1bWVUeXBlXG4pOiBudW1iZXIgPT4ge1xuICBpZiAoIXVzZShob3AudGltaW5nKS5hZGRfdG9fYm9pbCkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICBjb25zdCBVID1cbiAgICAocmFnZXJVdGlsKE1hdGguZmxvb3IoYm9pbFRpbWUoaG9wLnRpbWluZykgKyAwLjUpKSAqXG4gICAgICBwZWxsZXRGYWN0b3IoaG9wLmZvcm0pKSAvXG4gICAgMTAwXG4gIGNvbnN0IEFBVSA9IGFscGhhQWNpZFVuaXRzKGhvcC5hbW91bnQudmFsdWUsIGhvcC5hbHBoYV9hY2lkLnZhbHVlKVxuXG4gIHJldHVybiAoXG4gICAgKFUgKiBBQVUgKiA3NC44OSkgL1xuICAgIHBvc3RCb2lsVm9sdW1lLnZhbHVlIC9cbiAgICAoMS4wICsgcmFnZXJIb3BHcmF2aXR5QWRqdXN0bWVudChib2lsR3Jhdml0eS52YWx1ZSkpXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGJpdHRlcm5lc3NJYnVSYWdlciA9IChcbiAgaG9wczogQXJyYXk8SG9wQWRkaXRpb25UeXBlPixcbiAgYm9pbEdyYXZpdHk6IEdyYXZpdHlUeXBlLFxuICBwb3N0Qm9pbFZvbHVtZTogVm9sdW1lVHlwZVxuKTogQml0dGVybmVzc1R5cGUgPT4ge1xuICBjb25zdCBiaXR0ZXJuZXNzID0gc3VtKFxuICAgIGhvcHMubWFwKChob3A6IEhvcEFkZGl0aW9uVHlwZSkgPT5cbiAgICAgIHJhZ2VySG9wSWJ1KGhvcCwgYm9pbEdyYXZpdHksIHBvc3RCb2lsVm9sdW1lKVxuICAgIClcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGJpdHRlcm5lc3MsXG4gICAgdW5pdDogJ0lCVXMnLFxuICB9XG59XG4iLCJpbXBvcnQgeyB5ZWFzdENvdW50LCB5ZWFzdE5lZWRlZCwgeWVhc3RTdGFydGVyR3JvdyB9IGZyb20gJy4vY3VsdHVyZSdcbmltcG9ydCB7IGNhbGNDYWxvcmllcywgY2FyYm9uYXRpb24gfSBmcm9tICcuL2NhcmJvbmF0aW9uJ1xuXG5pbXBvcnQge1xuICBiaXR0ZXJuZXNzSWJ1UmFnZXIsXG4gIGJpdHRlcm5lc3NJYnVUaW5zZXRoLFxuICBiaXR0ZXJuZXNzUmF0aW8sXG59IGZyb20gJy4vaG9wcydcblxuaW1wb3J0IHsgaXNOb3RFbXB0eUFycmF5LCByb3VuZE1lYXN1cmFibGUgfSBmcm9tICcuL3V0aWxzJ1xuXG5pbXBvcnQgeyBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlIH0gZnJvbSAnLi91bml0cydcbmltcG9ydCB7IGNvbnZlcnQgfSBmcm9tICcuL2NvbnZlcnRlci9jb252ZXJ0ZXInXG5cbmltcG9ydCB7XG4gIGNhbGNNYXNoR3JhaW5XZWlnaHQsXG4gIHJlY2FsY3VsYXRlTWFzaFN0ZXBzLFxuICB1cGRhdGVTcGFyZ2VWb2x1bWUsXG59IGZyb20gJy4vbWFzaCdcbmltcG9ydCB7IGNhbGNCb2lsVm9sdW1lcywgY2FsY01hc2hWb2x1bWVzIH0gZnJvbSAnLi92b2x1bWVzJ1xuaW1wb3J0IHsgY2FsY1dhdGVyQ2hlbWlzdHJ5IH0gZnJvbSAnLi93YXRlckNoZW0nXG5cbmltcG9ydCB0eXBlIHtcbiAgUmVjaXBlVHlwZSxcbiAgTWFzaFByb2NlZHVyZVR5cGUsXG4gIEVxdWlwbWVudEl0ZW1UeXBlLFxuICBHcmF2aXR5VHlwZSxcbiAgQ29sb3JUeXBlLFxuICBQZXJjZW50VHlwZSxcbiAgQml0dGVybmVzc1R5cGUsXG4gIEN1bHR1cmVBZGRpdGlvblR5cGUsXG4gIFZvbHVtZVR5cGUsXG4gIEJvaWxQcm9jZWR1cmVUeXBlLFxufSBmcm9tICcuL3R5cGVzL2JlZXJqc29uJ1xuXG5pbXBvcnQge1xuICBjYWxjT3JpZ2luYWxHcmF2aXR5LFxuICBjYWxjRmluYWxHcmF2aXR5LFxuICBjYWxjQm9pbEdyYXZpdHksXG59IGZyb20gJy4vZ3Jhdml0eSdcbmltcG9ydCB7IHNybVRvQ3NzLCBzcm1Ub1JnYiwgY2FsY0NvbG9yIH0gZnJvbSAnLi9jb2xvcidcbmltcG9ydCB7IGNhbGNBQlYgfSBmcm9tICcuL2FididcblxudHlwZSBTdGF0cyA9IHtcbiAgb3JpZ2luYWxfZ3Jhdml0eTogR3Jhdml0eVR5cGVcbiAgZmluYWxfZ3Jhdml0eTogR3Jhdml0eVR5cGVcbiAgYWxjb2hvbF9ieV92b2x1bWU6IFBlcmNlbnRUeXBlXG4gIGlidV9lc3RpbWF0ZTogQml0dGVybmVzc1R5cGVcbiAgY29sb3JfZXN0aW1hdGU6IENvbG9yVHlwZVxufVxuXG50eXBlIFZvbHVtZXMgPSB7XG4gIHNwYXJnZV92b2x1bWU/OiBWb2x1bWVUeXBlXG4gIG1hc2hfdm9sdW1lPzogVm9sdW1lVHlwZVxuICB0b3RhbF92b2x1bWU/OiBWb2x1bWVUeXBlXG59XG5cbmNvbnN0IGNhbGN1bGF0ZVJlY2lwZUJlZXJKU09OID0gKFxuICByZWNpcGU6IFJlY2lwZVR5cGUsXG4gIG1hc2g6IE1hc2hQcm9jZWR1cmVUeXBlLFxuICBlcXVpcG1lbnQ6IHtcbiAgICBobHQ/OiBFcXVpcG1lbnRJdGVtVHlwZVxuICAgIG1hc2hfdHVuPzogRXF1aXBtZW50SXRlbVR5cGVcbiAgICBicmV3X2tldHRsZT86IEVxdWlwbWVudEl0ZW1UeXBlXG4gICAgZmVybWVudGVyPzogRXF1aXBtZW50SXRlbVR5cGVcbiAgfVxuKToge1xuICBzdGF0czogU3RhdHNcbiAgbWFzaDogTWFzaFByb2NlZHVyZVR5cGVcbiAgYm9pbDogQm9pbFByb2NlZHVyZVR5cGVcbiAgdm9sdW1lczogVm9sdW1lc1xufSA9PiB7XG4gIGNvbnN0IHsgYmF0Y2hfc2l6ZSwgYm9pbCwgZWZmaWNpZW5jeSwgaW5ncmVkaWVudHMgfSA9IHJlY2lwZVxuXG4gIGNvbnN0IHsgZmVybWVudGFibGVfYWRkaXRpb25zLCBob3BfYWRkaXRpb25zLCBjdWx0dXJlX2FkZGl0aW9ucyB9ID1cbiAgICBpbmdyZWRpZW50c1xuXG4gIGxldCBvcmlnaW5hbF9ncmF2aXR5OiBHcmF2aXR5VHlwZSA9IHtcbiAgICB1bml0OiAnc2cnLFxuICAgIHZhbHVlOiBudWxsLFxuICB9XG4gIGxldCBmaW5hbF9ncmF2aXR5OiBHcmF2aXR5VHlwZSA9IHtcbiAgICB1bml0OiAnc2cnLFxuICAgIHZhbHVlOiBudWxsLFxuICB9XG4gIGxldCBjb2xvcjogQ29sb3JUeXBlID0ge1xuICAgIHVuaXQ6ICdTUk0nLFxuICAgIHZhbHVlOiBudWxsLFxuICB9XG4gIGxldCBpYnU6IEJpdHRlcm5lc3NUeXBlID0ge1xuICAgIHVuaXQ6ICdJQlVzJyxcbiAgICB2YWx1ZTogbnVsbCxcbiAgfVxuICBsZXQgYWJ2OiBQZXJjZW50VHlwZSA9IHtcbiAgICB1bml0OiAnJScsXG4gICAgdmFsdWU6IG51bGwsXG4gIH1cbiAgbGV0IHZvbHVtZXMgPSBudWxsXG4gIGxldCBjYWxjdWxhdGVkTWFzaCA9IG51bGxcbiAgbGV0IGNhbGN1bGF0ZWRCb2lsID0gbnVsbFxuXG4gIGlmIChpc05vdEVtcHR5QXJyYXkoZmVybWVudGFibGVfYWRkaXRpb25zKSkge1xuICAgIG9yaWdpbmFsX2dyYXZpdHkgPSBjYWxjT3JpZ2luYWxHcmF2aXR5KFxuICAgICAgYmF0Y2hfc2l6ZSxcbiAgICAgIGZlcm1lbnRhYmxlX2FkZGl0aW9ucyxcbiAgICAgIGVmZmljaWVuY3lcbiAgICApXG5cbiAgICBjb25zdCBkZWZhdWx0Q3VsdHVyZUFkZGl0aW9uOiBDdWx0dXJlQWRkaXRpb25UeXBlID0ge1xuICAgICAgbmFtZTogJ0RlZmF1bHQgQ3VsdHVyZScsXG4gICAgICB0eXBlOiAnYWxlJyxcbiAgICAgIGZvcm06ICdsaXF1aWQnLFxuICAgICAgYXR0ZW51YXRpb246IHsgdmFsdWU6IDc1LCB1bml0OiAnJScgfSxcbiAgICB9XG5cbiAgICBmaW5hbF9ncmF2aXR5ID0gY2FsY0ZpbmFsR3Jhdml0eShcbiAgICAgIGJhdGNoX3NpemUsXG4gICAgICBmZXJtZW50YWJsZV9hZGRpdGlvbnMsXG4gICAgICBlZmZpY2llbmN5LFxuICAgICAgaXNOb3RFbXB0eUFycmF5KGN1bHR1cmVfYWRkaXRpb25zKVxuICAgICAgICA/IGN1bHR1cmVfYWRkaXRpb25zXG4gICAgICAgIDogW2RlZmF1bHRDdWx0dXJlQWRkaXRpb25dXG4gICAgKVxuXG4gICAgYWJ2ID0gY2FsY0FCVihvcmlnaW5hbF9ncmF2aXR5LCBmaW5hbF9ncmF2aXR5KVxuXG4gICAgY29uc3QgeyBwcmVfYm9pbF9zaXplIH0gPSBjYWxjQm9pbFZvbHVtZXMoYmF0Y2hfc2l6ZSwgYm9pbCwgZXF1aXBtZW50KVxuICAgIHZvbHVtZXMgPSB7XG4gICAgICBwcmVfYm9pbF9zaXplLFxuICAgIH1cblxuICAgIGlmIChtYXNoKSB7XG4gICAgICBjb25zdCBtYXNoR3JhaW5XZWlnaHQgPSBjYWxjTWFzaEdyYWluV2VpZ2h0KGZlcm1lbnRhYmxlX2FkZGl0aW9ucylcblxuICAgICAgY29uc3QgbWFzaFN0ZXBzID0gcmVjYWxjdWxhdGVNYXNoU3RlcHMoXG4gICAgICAgIG1hc2gubWFzaF9zdGVwcyxcbiAgICAgICAgbWFzaC5ncmFpbl90ZW1wZXJhdHVyZSxcbiAgICAgICAgbWFzaEdyYWluV2VpZ2h0XG4gICAgICApXG5cbiAgICAgIGNvbnN0IHsgc3BhcmdlX3ZvbHVtZSwgbWFzaF92b2x1bWUsIHRvdGFsX3ZvbHVtZSB9ID0gY2FsY01hc2hWb2x1bWVzKFxuICAgICAgICBwcmVfYm9pbF9zaXplLFxuICAgICAgICBtYXNoU3RlcHMsXG4gICAgICAgIG1hc2hHcmFpbldlaWdodCxcbiAgICAgICAgZXF1aXBtZW50XG4gICAgICApXG5cbiAgICAgIHZvbHVtZXMgPSB7XG4gICAgICAgIC4uLnZvbHVtZXMsXG4gICAgICAgIHNwYXJnZV92b2x1bWUsXG4gICAgICAgIG1hc2hfdm9sdW1lLFxuICAgICAgICB0b3RhbF92b2x1bWUsXG4gICAgICB9XG5cbiAgICAgIGNhbGN1bGF0ZWRNYXNoID0ge1xuICAgICAgICAuLi5tYXNoLFxuICAgICAgICBtYXNoX3N0ZXBzOiB1cGRhdGVTcGFyZ2VWb2x1bWUobWFzaFN0ZXBzLCBzcGFyZ2Vfdm9sdW1lKSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYm9pbCkge1xuICAgICAgY2FsY3VsYXRlZEJvaWwgPSB7IC4uLmJvaWwsIHByZV9ib2lsX3NpemUgfVxuICAgIH1cblxuICAgIGNvbG9yID0gY2FsY0NvbG9yKGZlcm1lbnRhYmxlX2FkZGl0aW9ucywgYmF0Y2hfc2l6ZSlcblxuICAgIGlmIChpc05vdEVtcHR5QXJyYXkoaG9wX2FkZGl0aW9ucykpIHtcbiAgICAgIGNvbnN0IGJvaWxHcmF2aXR5ID0gY2FsY0JvaWxHcmF2aXR5KFxuICAgICAgICBiYXRjaF9zaXplLFxuICAgICAgICBwcmVfYm9pbF9zaXplLFxuICAgICAgICBvcmlnaW5hbF9ncmF2aXR5XG4gICAgICApXG4gICAgICBpYnUgPSBiaXR0ZXJuZXNzSWJ1VGluc2V0aChob3BfYWRkaXRpb25zLCBib2lsR3Jhdml0eSwgYmF0Y2hfc2l6ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXRzOiB7XG4gICAgICBvcmlnaW5hbF9ncmF2aXR5OiByb3VuZE1lYXN1cmFibGUob3JpZ2luYWxfZ3Jhdml0eSwgMyksXG4gICAgICBmaW5hbF9ncmF2aXR5OiByb3VuZE1lYXN1cmFibGUoZmluYWxfZ3Jhdml0eSwgMyksXG4gICAgICBhbGNvaG9sX2J5X3ZvbHVtZTogcm91bmRNZWFzdXJhYmxlKGFidiwgMSksXG4gICAgICBpYnVfZXN0aW1hdGU6IHJvdW5kTWVhc3VyYWJsZShpYnUsIDEpLFxuICAgICAgY29sb3JfZXN0aW1hdGU6IHJvdW5kTWVhc3VyYWJsZShjb2xvciwgMSksXG4gICAgfSxcbiAgICB2b2x1bWVzLFxuICAgIG1hc2g6IGNhbGN1bGF0ZWRNYXNoLFxuICAgIGJvaWw6IGNhbGN1bGF0ZWRCb2lsLFxuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNvbnZlcnQsXG4gIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUsXG4gIGNhbGNPcmlnaW5hbEdyYXZpdHksXG4gIGNhbGNGaW5hbEdyYXZpdHksXG4gIGNhbGNCb2lsR3Jhdml0eSxcbiAgY2FsY0NvbG9yLFxuICBzcm1Ub0NzcyxcbiAgc3JtVG9SZ2IsXG4gIGNhbGNBQlYsXG4gIGJpdHRlcm5lc3NJYnVSYWdlcixcbiAgYml0dGVybmVzc0lidVRpbnNldGgsXG4gIGJpdHRlcm5lc3NSYXRpbyxcbiAgY2FsY3VsYXRlUmVjaXBlQmVlckpTT04sXG4gIGNhbGNCb2lsVm9sdW1lcyxcbiAgY2FsY01hc2hWb2x1bWVzLFxuICBjYWxjTWFzaEdyYWluV2VpZ2h0LFxuICByZWNhbGN1bGF0ZU1hc2hTdGVwcyxcbiAgLy9UT0RPOiB1c2UgYmVlckpTT05cbiAgY2FsY0NhbG9yaWVzLFxuICBjYXJib25hdGlvbixcbiAgeWVhc3RDb3VudCxcbiAgeWVhc3ROZWVkZWQsXG4gIHllYXN0U3RhcnRlckdyb3csXG59XG4iLCJpbXBvcnQge1xuICBGZXJtZW50YWJsZUFkZGl0aW9uVHlwZSxcbiAgTWFzaFN0ZXBUeXBlLFxuICBUZW1wZXJhdHVyZVR5cGUsXG4gIFZvbHVtZVR5cGUsXG4gIE1hc3NUeXBlLFxufSBmcm9tICcuL3R5cGVzL2JlZXJqc29uJ1xuaW1wb3J0IHsgZ2V0TWVhc3VyYWJsZVZhbHVlLCBzdW0gfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHsgY29udmVydE1lYXN1cmFibGVWYWx1ZSB9IGZyb20gJy4vdW5pdHMnXG5pbXBvcnQgeyB1c2UgfSBmcm9tICcuL3RpbWluZydcblxuY29uc3QgZ3JhaW5Wb2x1bWUgPSAwLjY1MiAvLyBsL2tnXG5jb25zdCBib2lsaW5nVGVtcCA9IDEwMFxuY29uc3QgbWFsdFNwZWNpZmljSGVhdCA9IDAuMzggLy8gQ2FsL2dyYW0tQ1xuY29uc3QgaW5pdGlhbFdhdGVyR3JhaW5SYXRpbyA9IDIuNSAvLyBsL2tnXG5cbmNvbnN0IGFkanVzdFR1bk1hc3MgPSAodHVuVm9sdW1lLCB0b3RWb2x1bWUsIHR1bk1hc3MpID0+IHtcbiAgdHVuVm9sdW1lID0gdHVuVm9sdW1lICogMC44XG4gIHJldHVybiB0dW5Wb2x1bWUgPiAwICYmIHRvdFZvbHVtZSA8IHR1blZvbHVtZVxuICAgID8gKHR1bk1hc3MgKiB0b3RWb2x1bWUpIC8gdHVuVm9sdW1lXG4gICAgOiB0dW5NYXNzXG59XG5cbmNvbnN0IGNhbGNEZWNvY3Rpb25TdGVwID0gKFxuICBzdGFydFRlbXAsXG4gIHRhcmdldFRlbXAsXG4gIHN0YXJ0Vm9sdW1lLFxuICBtYXNoR3JhaW5XZWlnaHQsXG4gIHR1bk1hc3MgPSAwLFxuICB0dW5TcGVjaWZpY0hlYXQgPSAwLFxuICB0dW5Wb2x1bWUgPSAwXG4pOiB7IGFtb3VudDogVm9sdW1lVHlwZSB9ID0+IHtcbiAgY29uc3QgdG90Vm9sdW1lID0gZ3JhaW5Wb2x1bWUgKiBtYXNoR3JhaW5XZWlnaHQgKyBzdGFydFZvbHVtZVxuICBjb25zdCBhZGp1c3RlZFR1bk1hc3MgPSBhZGp1c3RUdW5NYXNzKHR1blZvbHVtZSwgdG90Vm9sdW1lLCB0dW5NYXNzKVxuICBsZXQgZnJhY3Rpb24gPVxuICAgICgoKG1hbHRTcGVjaWZpY0hlYXQgKiBtYXNoR3JhaW5XZWlnaHQgK1xuICAgICAgdHVuU3BlY2lmaWNIZWF0ICogYWRqdXN0ZWRUdW5NYXNzICtcbiAgICAgIHN0YXJ0Vm9sdW1lKSAvXG4gICAgICAobWFsdFNwZWNpZmljSGVhdCAqIG1hc2hHcmFpbldlaWdodCArIHN0YXJ0Vm9sdW1lKSkgKlxuICAgICAgKHRhcmdldFRlbXAgLSBzdGFydFRlbXApKSAvXG4gICAgKGJvaWxpbmdUZW1wIC0gc3RhcnRUZW1wKVxuXG4gIGlmIChmcmFjdGlvbiA+IDEpIHtcbiAgICBmcmFjdGlvbiA9IDFcbiAgfVxuICByZXR1cm4geyBhbW91bnQ6IHsgdmFsdWU6IHRvdFZvbHVtZSAqIGZyYWN0aW9uLCB1bml0OiAnbCcgfSB9XG59XG5cbmNvbnN0IGNhbGNJbmZ1c2lvblN0ZXAgPSAoXG4gIHN0YXJ0VGVtcCxcbiAgc3RlcFRlbXAsXG4gIHN0YXJ0Vm9sdW1lLFxuICBpbmRleCxcbiAgbWFzaEdyYWluV2VpZ2h0XG4pOiB7XG4gIGFtb3VudDogVm9sdW1lVHlwZVxuICBpbmZ1c2VfdGVtcGVyYXR1cmU6IFRlbXBlcmF0dXJlVHlwZVxufSA9PiB7XG4gIGNvbnN0IGluZnVzZVRlbXAgPVxuICAgIGluZGV4ID4gMFxuICAgICAgPyBib2lsaW5nVGVtcFxuICAgICAgOiAobWFsdFNwZWNpZmljSGVhdCAqIChzdGVwVGVtcCAtIHN0YXJ0VGVtcCkpIC8gaW5pdGlhbFdhdGVyR3JhaW5SYXRpbyArXG4gICAgICAgIHN0ZXBUZW1wXG4gIGNvbnN0IGluZnVzZUFtb3VudCA9XG4gICAgKChtYXNoR3JhaW5XZWlnaHQgKiBtYWx0U3BlY2lmaWNIZWF0ICsgc3RhcnRWb2x1bWUpICpcbiAgICAgIChzdGVwVGVtcCAtIHN0YXJ0VGVtcCkpIC9cbiAgICAoaW5mdXNlVGVtcCAtIHN0ZXBUZW1wKVxuXG4gIHJldHVybiB7XG4gICAgaW5mdXNlX3RlbXBlcmF0dXJlOiB7XG4gICAgICB1bml0OiAnQycsXG4gICAgICB2YWx1ZTogaW5mdXNlVGVtcCxcbiAgICB9LFxuICAgIGFtb3VudDoge1xuICAgICAgdW5pdDogJ2wnLFxuICAgICAgdmFsdWU6IGluZnVzZUFtb3VudCxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNhbGN1bGF0ZU1hc2hTdGVwcyhcbiAgbWFzaF9zdGVwczogQXJyYXk8TWFzaFN0ZXBUeXBlPixcbiAgZ3JhaW5fdGVtcGVyYXR1cmU6IFRlbXBlcmF0dXJlVHlwZSxcbiAgbWFzaEdyYWluV2VpZ2h0OiBNYXNzVHlwZVxuKTogQXJyYXk8TWFzaFN0ZXBUeXBlPiB7XG4gIGxldCBzdGFydFZvbHVtZSA9IDBcbiAgbGV0IHN0YXJ0VGVtcCA9IGdyYWluX3RlbXBlcmF0dXJlLnZhbHVlXG5cbiAgY29uc3QgZ3JhaW5XZWlnaHRWYWx1ZSA9IGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUobWFzaEdyYWluV2VpZ2h0LCAna2cnKVxuXG4gIHJldHVybiBtYXNoX3N0ZXBzLm1hcCgoc3RlcDogTWFzaFN0ZXBUeXBlLCBpbmRleDogbnVtYmVyKTogTWFzaFN0ZXBUeXBlID0+IHtcbiAgICBjb25zdCBzdGVwVGVtcCA9IGdldE1lYXN1cmFibGVWYWx1ZShzdGVwLnN0ZXBfdGVtcGVyYXR1cmUpXG5cbiAgICBzd2l0Y2ggKHN0ZXAudHlwZSkge1xuICAgICAgY2FzZSAnZGVjb2N0aW9uJzoge1xuICAgICAgICBjb25zdCB7IGFtb3VudCB9ID0gY2FsY0RlY29jdGlvblN0ZXAoXG4gICAgICAgICAgc3RhcnRUZW1wLFxuICAgICAgICAgIHN0ZXBUZW1wLFxuICAgICAgICAgIHN0YXJ0Vm9sdW1lLFxuICAgICAgICAgIGdyYWluV2VpZ2h0VmFsdWVcbiAgICAgICAgKVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RlcCxcbiAgICAgICAgICBhbW91bnQsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgJ2luZnVzaW9uJzoge1xuICAgICAgICBjb25zdCB7IGFtb3VudCwgaW5mdXNlX3RlbXBlcmF0dXJlIH0gPSBjYWxjSW5mdXNpb25TdGVwKFxuICAgICAgICAgIHN0YXJ0VGVtcCxcbiAgICAgICAgICBzdGVwVGVtcCxcbiAgICAgICAgICBzdGFydFZvbHVtZSxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBncmFpbldlaWdodFZhbHVlXG4gICAgICAgIClcblxuICAgICAgICBzdGFydFZvbHVtZSArPSBhbW91bnQudmFsdWVcbiAgICAgICAgc3RhcnRUZW1wID0gc3RlcFRlbXBcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0ZXAsXG4gICAgICAgICAgaW5mdXNlX3RlbXBlcmF0dXJlLFxuICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0ZXBcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjYWxjTWFzaEdyYWluV2VpZ2h0ID0gKFxuICBmZXJtZW50YWJsZXM6IEFycmF5PEZlcm1lbnRhYmxlQWRkaXRpb25UeXBlPlxuKTogTWFzc1R5cGUgPT4ge1xuICBjb25zdCB2YWx1ZSA9IHN1bShcbiAgICBmZXJtZW50YWJsZXMubWFwKCh7IHRpbWluZywgdHlwZSwgYW1vdW50IH06IEZlcm1lbnRhYmxlQWRkaXRpb25UeXBlKSA9PlxuICAgICAgdHlwZSA9PT0gJ2dyYWluJyAmJiB1c2UodGltaW5nKS5hZGRfdG9fbWFzaFxuICAgICAgICA/IGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoYW1vdW50LCAnbGInKVxuICAgICAgICA6IDBcbiAgICApXG4gIClcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZSxcbiAgICB1bml0OiAnbGInLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTcGFyZ2VWb2x1bWUoXG4gIG1hc2hfc3RlcHM6IEFycmF5PE1hc2hTdGVwVHlwZT4sXG4gIHNwYXJnZVZvbHVtZTogVm9sdW1lVHlwZVxuKTogQXJyYXk8TWFzaFN0ZXBUeXBlPiB7XG4gIHJldHVybiBtYXNoX3N0ZXBzLm1hcCgoc3RlcCkgPT4ge1xuICAgIGlmIChzdGVwLnR5cGUgPT09ICdzcGFyZ2UnKSB7XG4gICAgICByZXR1cm4geyAuLi5zdGVwLCBhbW91bnQ6IHNwYXJnZVZvbHVtZSB9XG4gICAgfVxuICAgIHJldHVybiBzdGVwXG4gIH0pXG59XG4iLCJpbXBvcnQgdHlwZSB7IFRpbWluZ1R5cGUgfSBmcm9tICcuL3R5cGVzL2JlZXJqc29uJ1xuXG5leHBvcnQgY29uc3QgdXNlID0gKFxuICB0aW1pbmc6IFRpbWluZ1R5cGUgPSB7fVxuKToge1xuICBhZGRfdG9fYm9pbDogYm9vbGVhblxuICBhZGRfdG9fbWFzaDogYm9vbGVhblxufSA9PiAoe1xuICBhZGRfdG9fYm9pbDogdGltaW5nLnVzZSA9PT0gJ2FkZF90b19ib2lsJyxcbiAgYWRkX3RvX21hc2g6ICF0aW1pbmcudXNlIHx8IHRpbWluZy51c2UgPT09ICdhZGRfdG9fbWFzaCcsXG59KVxuXG5leHBvcnQgY29uc3QgYm9pbFRpbWUgPSAodGltaW5nOiBUaW1pbmdUeXBlID0ge30pOiBudW1iZXIgPT5cbiAgdGltaW5nLnVzZSA9PT0gJ2FkZF90b19ib2lsJyA/IHRpbWluZy50aW1lLnZhbHVlIDogMFxuIiwiZXhwb3J0IHR5cGUgWWVhc3QgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBhbW91bnQ6IG51bWJlclxuICBhdHRlbnVhdGlvbj86IG51bWJlclxuICBmb3JtOiAnTGlxdWlkJyB8ICdEcnknIHwgJ1NsYW50JyB8ICdDdWx0dXJlJ1xuICB0eXBlOiAnQWxlJyB8ICdMYWdlcicgfCAnV2hlYXQnIHwgJ1dpbmUnIHwgJ0NoYW1wYWduZSdcbiAgY3VsdHVyZURhdGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFllYXN0VHlwZXMgPSB7XG4gIGFsZTogJ0FsZScsXG4gIGxhZ2VyOiAnTGFnZXInLFxuICB3aGVhdDogJ1doZWF0JyxcbiAgd2luZTogJ1dpbmUnLFxuICBjaGFtcGFnbmU6ICdDaGFtcGFnbmUnLFxufVxuZXhwb3J0IGNvbnN0IFllYXN0Rm9ybXMgPSB7XG4gIGxpcXVpZDogJ0xpcXVpZCcsXG4gIGRyeTogJ0RyeScsXG4gIHNsYW50OiAnU2xhbnQnLFxuICBjdWx0dXJlOiAnQ3VsdHVyZScsXG59XG4iLCJpbXBvcnQgeyBjb252ZXJ0IH0gZnJvbSAnLi9jb252ZXJ0ZXIvY29udmVydGVyJ1xuXG50eXBlIE1lYXN1cmFibGUgPSB7XG4gIHZhbHVlOiBudW1iZXJcbiAgdW5pdDogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlID0gKFxuICBtZWFzdXJhYmxlOiBNZWFzdXJhYmxlLFxuICB1bml0OiBzdHJpbmcsXG4gIHByZWNpc2lvbjogbnVtYmVyID0gNFxuKSA9PiB7XG4gIHJldHVybiBjb252ZXJ0KG1lYXN1cmFibGUudmFsdWUsIG1lYXN1cmFibGUudW5pdCwgdW5pdCwgcHJlY2lzaW9uKVxufVxuIiwiZXhwb3J0IGNvbnN0IGtnVG9PdW5jZXMgPSAoazogbnVtYmVyKSA9PiBrICogMzUuMjczOTYxOVxuXG5leHBvcnQgY29uc3Qga2dUb1BvdW5kcyA9IChrOiBudW1iZXIpID0+IGtnVG9PdW5jZXMoaykgLyAxNlxuXG5leHBvcnQgY29uc3QgcG91bmRzVG9rZyA9IChwOiBudW1iZXIpID0+IHAgLyAyLjIwNFxuXG5leHBvcnQgY29uc3QgbGl0ZXJzVG9PdW5jZXMgPSAobDogbnVtYmVyKSA9PiBsIC8gMC4wMjk1NzM1XG5cbmV4cG9ydCBjb25zdCBvdW5jZXNUb0xpdGVycyA9IChvOiBudW1iZXIpID0+IG8gKiAwLjAyOTU3MzVcblxuZXhwb3J0IGNvbnN0IGxpdGVyc1RvR2FsbG9ucyA9IChsOiBudW1iZXIpID0+IGxpdGVyc1RvT3VuY2VzKGwpIC8gMTI4XG5cbmV4cG9ydCBjb25zdCBnYWxsb25zVG9MaXRlcnMgPSAoZzogbnVtYmVyKSA9PiBvdW5jZXNUb0xpdGVycyhnICogMTI4KVxuXG5leHBvcnQgY29uc3QgZmFocmVuaGVpdFRvQ2Vsc2l1cyA9IChmOiBudW1iZXIpID0+IChmIC0gMzIpIC8gMS44XG5cbmV4cG9ydCBjb25zdCBjZWxzaXVzVG9GYWhyZW5oZWl0ID0gKGM6IG51bWJlcikgPT4gYyAqIDEuOCArIDMyXG5cbmV4cG9ydCBjb25zdCBrcGFUb1BzaSA9IChrcGE6IG51bWJlcikgPT4ga3BhICogMC4xNDUwMzc3Mzc3MzAyMDkyM1xuXG5leHBvcnQgY29uc3QgcHNpVG9rcGEgPSAocHNpOiBudW1iZXIpID0+IHBzaSAqIDYuODk0NzU3MjkzMTY4MzYxXG5cbmV4cG9ydCBjb25zdCBzZ1RvUGxhdG8gPSAoc2c6IG51bWJlcikgPT5cbiAgLTYxNi44NjggK1xuICAxMTExLjE0ICogc2cgLVxuICA2MzAuMjcyICogTWF0aC5wb3coc2csIDIpICtcbiAgMTM1Ljk5NyAqIE1hdGgucG93KHNnLCAzKVxuXG5leHBvcnQgY29uc3QgcGxhdG9Ub1NHID0gKGU6IG51bWJlcikgPT4gMSArIGUgLyAoMjU4LjYgLSAoZSAvIDI1OC4yKSAqIDIyNy4xKVxuXG5leHBvcnQgY29uc3QgYnJpeFRvU0cgPSAoYnJpeDogbnVtYmVyKSA9PlxuICBicml4IC8gKDI1OC42IC0gKGJyaXggLyAyNTguMikgKiAyMjcuMSkgKyAxXG5cbmV4cG9ydCBjb25zdCBzZ1RvQnJpeCA9IChzZzogbnVtYmVyKSA9PlxuICAtNjY5LjU2MjIgK1xuICAxMjYyLjc3NDkgKiBzZyAtXG4gIDc3NS42ODIxICogTWF0aC5wb3coc2csIDIpICtcbiAgMTgyLjQ2MDEgKiBNYXRoLnBvdyhzZywgMylcblxuZXhwb3J0IGNvbnN0IHNybVRvRWJjID0gKHNybTogbnVtYmVyKSA9PiBzcm0gKiAxLjk3XG5cbmV4cG9ydCBjb25zdCBlYmNUb1NybSA9IChlYmM6IG51bWJlcikgPT4gZWJjICogMC41MDhcblxuZXhwb3J0IGNvbnN0IHNybVRvTG92aWJvbmQgPSAoc3JtOiBudW1iZXIpID0+IChzcm0gKyAwLjc2KSAvIDEuMzU0NlxuXG5leHBvcnQgY29uc3QgbG92aWJvbmRUb1NybSA9IChsb3ZpYm9uZDogbnVtYmVyKSA9PiAxLjM1NDYgKiBsb3ZpYm9uZCAtIDAuNzZcblxuZXhwb3J0IGNvbnN0IHN1bSA9IChhcnJheTogQXJyYXk8bnVtYmVyPik6IG51bWJlciA9PlxuICBhcnJheS5yZWR1Y2UoKHB2LCBjdikgPT4gcHYgKyBjdiwgMClcblxuY29uc3Qgc2NhbGVJbmdyZWRpZW50cyA9IChzY2FsZUZhY3RvcjogbnVtYmVyLCBpbmdyZWRpZW50czogYW55KSA9PlxuICBpbmdyZWRpZW50cy5tYXAoKGkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaSxcbiAgICAgIGFtb3VudDogc2NhbGVGYWN0b3IgKiBpLmFtb3VudCxcbiAgICB9XG4gIH0pXG5cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3Qgd29yZHM6IEFycmF5PHN0cmluZz4gPSBzdHIuc3BsaXQoJyAnKVxuICBjb25zdCBjYXBpdGFsaXplZFdvcmRzOiBBcnJheTxzdHJpbmc+ID0gd29yZHMubWFwKFxuICAgICh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKVxuICApXG4gIHJldHVybiBjYXBpdGFsaXplZFdvcmRzLmpvaW4oJyAnKVxufVxuXG5leHBvcnQgY29uc3QgaXNOb3RFbXB0eUFycmF5ID0gKGFycjogQXJyYXk8YW55Pik6IGJvb2xlYW4gPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgcmV0dXJuIGFyci5sZW5ndGggPiAwXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChudW1iZXIsIHByZWNpc2lvbiA9IDApIHtcbiAgaWYgKHR5cGVvZiBudW1iZXIgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIE51bWJlcihudW1iZXIudG9GaXhlZChwcmVjaXNpb24pKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01lYXN1cmFibGUob2JqZWN0KSB7XG4gIHJldHVybiAoXG4gICAgaXNPYmplY3Qob2JqZWN0KSAmJlxuICAgIG9iamVjdC5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJlxuICAgIG9iamVjdC5oYXNPd25Qcm9wZXJ0eSgndW5pdCcpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lYXN1cmFibGVWYWx1ZShtZWFzdXJhYmxlKSB7XG4gIGlmIChpc01lYXN1cmFibGUobWVhc3VyYWJsZSkpIHtcbiAgICByZXR1cm4gbWVhc3VyYWJsZS52YWx1ZVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCByb3VuZE1lYXN1cmFibGUgPSAobSwgcHJlY2lzaW9uKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdW5pdDogbS51bml0LFxuICAgIHZhbHVlOiByb3VuZChtLnZhbHVlLCBwcmVjaXNpb24pLFxuICB9XG59XG4iLCJpbXBvcnQgeyBzdW0gfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHtcbiAgVm9sdW1lVHlwZSxcbiAgTWFzc1R5cGUsXG4gIEVxdWlwbWVudEl0ZW1UeXBlLFxuICBCb2lsUHJvY2VkdXJlVHlwZSxcbiAgTWFzaFN0ZXBUeXBlLFxufSBmcm9tICcuL3R5cGVzL2JlZXJqc29uJ1xuaW1wb3J0IHsgY29udmVydE1lYXN1cmFibGVWYWx1ZSB9IGZyb20gJy4vdW5pdHMnXG5cbmNvbnN0IGRlZmF1bHRCb2lsOiBCb2lsUHJvY2VkdXJlVHlwZSA9IHtcbiAgcHJlX2JvaWxfc2l6ZToge1xuICAgIHZhbHVlOiAwLFxuICAgIHVuaXQ6ICdnYWwnLFxuICB9LFxuICBib2lsX3RpbWU6IHtcbiAgICB2YWx1ZTogMCxcbiAgICB1bml0OiAnbWluJyxcbiAgfSxcbn1cblxuY29uc3QgY29vbGluZ1Nocmlua2FnZVJhdGUgPSAwLjA0XG5cbmNvbnN0IGNvbnZlcnRUb0dhbGxvbnMgPSAodm9sdW1lOiBWb2x1bWVUeXBlKSA9PlxuICBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKHZvbHVtZSwgJ2dhbCcpXG5cbi8vIDAuOTYgLSBudW1iZXIgb2YgZmwuIG91bmNlcyBvZiB3YXRlciBhYnNvcmJlZCBwZXIgb3VuY2Ugb2YgdGhlIGdyYWluXG4vLyAxMjggZmwuIG91bmNlcyBpbiBnYWxsb24sIDE2IG91bmNlcyBpbiBwb3VuZFxuY29uc3QgZ3JhaW5BYnNvcnB0aW9uUmF0aW8gPSAoMC45NiAvIDEyOCkgKiAxNlxuXG5jb25zdCBjYWxjR3JhaW5BYnNvcnB0aW9uID0gKGdyYWluV2VpZ2h0OiBNYXNzVHlwZSk6IFZvbHVtZVR5cGUgPT4ge1xuICBjb25zdCB2YWx1ZSA9IGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoZ3JhaW5XZWlnaHQsICdsYicpICogZ3JhaW5BYnNvcnB0aW9uUmF0aW9cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZSxcbiAgICB1bml0OiAnZ2FsJyxcbiAgfVxufVxuXG5jb25zdCBjYWxjTWFzaFdhdGVyVm9sdW1lID0gKFxuICBtYXNoX3N0ZXBzOiBBcnJheTxNYXNoU3RlcFR5cGU+ID0gW11cbik6IFZvbHVtZVR5cGUgPT4ge1xuICBjb25zdCB2YWx1ZSA9IHN1bShcbiAgICBtYXNoX3N0ZXBzLm1hcCgoeyB0eXBlLCBhbW91bnQgfTogTWFzaFN0ZXBUeXBlKSA9PlxuICAgICAgdHlwZSA9PT0gJ2luZnVzaW9uJyA/IGNvbnZlcnRUb0dhbGxvbnMoYW1vdW50KSA6IDBcbiAgICApXG4gIClcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZSxcbiAgICB1bml0OiAnZ2FsJyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2FsY01hc2hWb2x1bWVzID0gKFxuICBwcmVfYm9pbF9zaXplOiBWb2x1bWVUeXBlLFxuICBtYXNoU3RlcHM6IEFycmF5PE1hc2hTdGVwVHlwZT4sXG4gIG1hc2hHcmFpbldlaWdodDogTWFzc1R5cGUsXG4gIGVxdWlwbWVudDoge1xuICAgIGhsdD86IEVxdWlwbWVudEl0ZW1UeXBlXG4gICAgbWFzaF90dW4/OiBFcXVpcG1lbnRJdGVtVHlwZVxuICAgIGJyZXdfa2V0dGxlPzogRXF1aXBtZW50SXRlbVR5cGVcbiAgICBmZXJtZW50ZXI/OiBFcXVpcG1lbnRJdGVtVHlwZVxuICB9XG4pOiB7XG4gIG1hc2hfdm9sdW1lOiBWb2x1bWVUeXBlXG4gIHNwYXJnZV92b2x1bWU6IFZvbHVtZVR5cGVcbiAgdG90YWxfdm9sdW1lOiBWb2x1bWVUeXBlXG59ID0+IHtcbiAgY29uc3QgbWFzaFdhdGVyVm9sdW1lID0gY2FsY01hc2hXYXRlclZvbHVtZShtYXNoU3RlcHMpXG5cbiAgY29uc3QgZ3JhaW5BYnNvcnB0aW9uID0gY2FsY0dyYWluQWJzb3JwdGlvbihtYXNoR3JhaW5XZWlnaHQpXG5cbiAgY29uc3QgbWFzaExvc3MgPVxuICAgIGVxdWlwbWVudC5tYXNoX3R1biAhPSBudWxsID8gY29udmVydFRvR2FsbG9ucyhlcXVpcG1lbnQubWFzaF90dW4ubG9zcykgOiAwXG5cbiAgY29uc3Qgc3BhcmdlVm9sdW1lVmFsdWUgPVxuICAgIGNvbnZlcnRUb0dhbGxvbnMocHJlX2JvaWxfc2l6ZSkgK1xuICAgIGdyYWluQWJzb3JwdGlvbi52YWx1ZSAtXG4gICAgbWFzaFdhdGVyVm9sdW1lLnZhbHVlICtcbiAgICBtYXNoTG9zc1xuXG4gIGNvbnN0IHNwYXJnZVZvbHVtZTogVm9sdW1lVHlwZSA9IHtcbiAgICB2YWx1ZTogc3BhcmdlVm9sdW1lVmFsdWUsXG4gICAgdW5pdDogJ2dhbCcsXG4gIH1cblxuICBjb25zdCB0b3RhbFZvbHVtZTogVm9sdW1lVHlwZSA9IHtcbiAgICB2YWx1ZTogbWFzaFdhdGVyVm9sdW1lLnZhbHVlICsgc3BhcmdlVm9sdW1lLnZhbHVlLFxuICAgIHVuaXQ6ICdnYWwnLFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtYXNoX3ZvbHVtZTogbWFzaFdhdGVyVm9sdW1lLFxuICAgIHNwYXJnZV92b2x1bWU6IHNwYXJnZVZvbHVtZSxcbiAgICB0b3RhbF92b2x1bWU6IHRvdGFsVm9sdW1lLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjYWxjQm9pbFZvbHVtZXMgPSAoXG4gIGJhdGNoX3NpemU6IFZvbHVtZVR5cGUsXG4gIGJvaWw6IEJvaWxQcm9jZWR1cmVUeXBlID0gZGVmYXVsdEJvaWwsXG4gIGVxdWlwbWVudDoge1xuICAgIGhsdD86IEVxdWlwbWVudEl0ZW1UeXBlXG4gICAgbWFzaF90dW4/OiBFcXVpcG1lbnRJdGVtVHlwZVxuICAgIGJyZXdfa2V0dGxlPzogRXF1aXBtZW50SXRlbVR5cGVcbiAgICBmZXJtZW50ZXI/OiBFcXVpcG1lbnRJdGVtVHlwZVxuICB9XG4pOiB7IHByZV9ib2lsX3NpemU6IFZvbHVtZVR5cGUgfSA9PiB7XG4gIGNvbnN0IGJvaWxQcm9maWxlID0gYm9pbCB8fCBkZWZhdWx0Qm9pbFxuXG4gIGNvbnN0IHBvc3RCb2lsVm9sdW1lID0gY29udmVydFRvR2FsbG9ucyhiYXRjaF9zaXplKVxuXG4gIGxldCBib2lsTG9zcyA9IDBcbiAgbGV0IGJvaWxSYXRlID0gMFxuICBpZiAoZXF1aXBtZW50ICE9IG51bGwgJiYgZXF1aXBtZW50LmJyZXdfa2V0dGxlICE9IG51bGwpIHtcbiAgICBib2lsTG9zcyA9IGNvbnZlcnRUb0dhbGxvbnMoZXF1aXBtZW50LmJyZXdfa2V0dGxlLmxvc3MpXG4gICAgYm9pbFJhdGUgPSBjb252ZXJ0VG9HYWxsb25zKGVxdWlwbWVudC5icmV3X2tldHRsZS5ib2lsX3JhdGVfcGVyX2hvdXIpXG4gIH1cblxuICBjb25zdCBib2lsT2ZmVm9sdW1lID0gKGJvaWxSYXRlICogYm9pbFByb2ZpbGUuYm9pbF90aW1lLnZhbHVlKSAvIDYwXG4gIGNvbnN0IGNvb2xpbmdTaHJpbmthZ2UgPSBwb3N0Qm9pbFZvbHVtZSAqIGNvb2xpbmdTaHJpbmthZ2VSYXRlXG4gIGNvbnN0IHByZUJvaWxWb2x1bWUgPVxuICAgIHBvc3RCb2lsVm9sdW1lICsgYm9pbE9mZlZvbHVtZSArIGJvaWxMb3NzICsgY29vbGluZ1Nocmlua2FnZVxuXG4gIHJldHVybiB7XG4gICAgcHJlX2JvaWxfc2l6ZToge1xuICAgICAgdmFsdWU6IHByZUJvaWxWb2x1bWUsXG4gICAgICB1bml0OiAnZ2FsJyxcbiAgICB9LFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9