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
/*! exports provided: estABW, estABV, calcABV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estABW", function() { return estABW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estABV", function() { return estABV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcABV", function() { return calcABV; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units */ "./src/units.ts");


// http://byo.com/bock/item/408-calculating-alcohol-content-attenuation-extract-and-calories-advanced-homebrewing
// https://www.brewersfriend.com/2011/06/16/alcohol-by-volume-calculator-updated/
// ABW = (OG points - FG points) * 0.105
// ABV = (OG points - FG points) * 0.132
const estABW = (ogPts, fgPts) => (ogPts - fgPts) * 0.105;
const estABV = (ogPts, fgPts) => (ogPts - fgPts) * 0.132;
// http://beersmith.com/blog/2010/09/07/apparent-and-real-attenuation-for-beer-brewers-part-1/
const estABVrealExtract = (og, fg) => {
    const oe = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sgToPlato"])(og);
    const ae = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sgToPlato"])(fg);
    const re = 0.1808 * oe + 0.8192 * ae;
    const abw = (oe - re) / (2.0665 - 0.010665 * oe);
    const abv = abw * (fg / 0.79661);
    return abv;
};
const calcABV = (og, fg) => {
    return {
        value: estABVrealExtract(Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(og, 'sg'), Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(fg, 'sg')),
        unit: '%',
    };
};


/***/ }),

/***/ "./src/carbonation.ts":
/*!****************************!*\
  !*** ./src/carbonation.ts ***!
  \****************************/
/*! exports provided: carbonation, calcCalories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carbonation", function() { return carbonation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCalories", function() { return calcCalories; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

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
const normalizeTemp = (t) => Math.max(32.0, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["celsiusToFahrenheit"])(t));
const carbonation = (carbVolume, t, batchSize) => {
    const sugar = primingSugar(carbVolume, normalizeTemp(t), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["litersToGallons"])(batchSize));
    return {
        kegPressure: kegPressure(carbVolume, normalizeTemp(t)),
        kegSugar: sugar * 0.5,
        cornSugar: sugar,
        dme: sugar * 1.538,
    };
};
// http://beersmith.com/blog/2011/02/04/counting-calories-in-your-homebrewed-beer/
// Calorie_from_alcohol = 1881.22 * FG * (OG-FG)/(1.775-OG)
// Calories_from_carbs = 3550.0 * FG * ((0.1808 * OG) + (0.8192 * FG) – 1.0004)
// Total calories – just add the Calories_from_alcohol to Calories_from_carbs
const caloriesAlc = (og, fg) => 1881.22 * fg * ((og - fg) / (1.775 - og));
const caloriesExt = (og, fg) => 3550.0 * fg * (0.1808 * og + 0.8192 * fg - 1.0004);
const calcCalories = (og, fg) => caloriesAlc(og, fg) + caloriesExt(og, fg);


/***/ }),

/***/ "./src/color.ts":
/*!**********************!*\
  !*** ./src/color.ts ***!
  \**********************/
/*! exports provided: calcColor, srmToRgb, srmToCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcColor", function() { return calcColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "srmToRgb", function() { return srmToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "srmToCss", function() { return srmToCss; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units */ "./src/units.ts");


// MCU = (weight of grain in lbs)*(color of grain in lovibond) / (volume in gal) SRM = 1.4922 * MCU ^ 0.6859
const mcu2srm = (mcu) => 1.4922 * Math.pow(mcu, 0.6859);
const calcMCU = (amount, color) => color > 0.56 ? amount * color : 0;
const calcColor = (fermentables, postBoilVolume) => {
    const fermentablesMCU = fermentables.map((fermentable) => {
        return calcMCU(Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(fermentable.amount, 'lb'), Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(fermentable.color, 'Lovi'));
    });
    const colorSRM = mcu2srm(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sum"])(fermentablesMCU) / Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(postBoilVolume, 'gal'));
    return {
        unit: 'SRM',
        value: colorSRM,
    };
};
const srmToRgb = (srm) => ({
    r: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.975, srm)))),
    g: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.88, srm)))),
    b: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.7, srm)))),
});
const srmToCss = (srm) => {
    const color = srmToRgb(srm);
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
};


/***/ }),

/***/ "./src/converter/converter.ts":
/*!************************************!*\
  !*** ./src/converter/converter.ts ***!
  \************************************/
/*! exports provided: convert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convert", function() { return convert; });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ "./src/converter/definitions.ts");

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
    for (const measurableTypeKey in _definitions__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        const measurableType = _definitions__WEBPACK_IMPORTED_MODULE_0__["default"][measurableTypeKey];
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


/***/ }),

/***/ "./src/converter/definitions.ts":
/*!**************************************!*\
  !*** ./src/converter/definitions.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");

/* harmony default export */ __webpack_exports__["default"] = ({
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
            toBase: _utils__WEBPACK_IMPORTED_MODULE_0__["lovibondToSrm"],
            fromBase: _utils__WEBPACK_IMPORTED_MODULE_0__["srmToLovibond"],
            units: {
                Lovi: {
                    ratio: 1,
                },
            },
        },
        ebc: {
            toBase: _utils__WEBPACK_IMPORTED_MODULE_0__["ebcToSrm"],
            fromBase: _utils__WEBPACK_IMPORTED_MODULE_0__["srmToEbc"],
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
            toBase: _utils__WEBPACK_IMPORTED_MODULE_0__["platoToSG"],
            fromBase: _utils__WEBPACK_IMPORTED_MODULE_0__["sgToPlato"],
            units: {
                plato: {
                    ratio: 1,
                },
            },
        },
        brix: {
            toBase: _utils__WEBPACK_IMPORTED_MODULE_0__["brixToSG"],
            fromBase: _utils__WEBPACK_IMPORTED_MODULE_0__["sgToBrix"],
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
            toBase: _utils__WEBPACK_IMPORTED_MODULE_0__["fahrenheitToCelsius"],
            fromBase: _utils__WEBPACK_IMPORTED_MODULE_0__["celsiusToFahrenheit"],
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
});


/***/ }),

/***/ "./src/culture.ts":
/*!************************!*\
  !*** ./src/culture.ts ***!
  \************************/
/*! exports provided: yeastNeeded, yeastCount, yeastStarterGrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yeastNeeded", function() { return yeastNeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yeastCount", function() { return yeastCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yeastStarterGrow", function() { return yeastStarterGrow; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _types_yeast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/yeast */ "./src/types/yeast.ts");


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
const viability = (currentDate, cultureDate = new Date().toString()) => 100 -
    Math.floor((Date.parse(currentDate) - Date.parse(cultureDate)) / 86400000) *
        0.7;
const yeastCount = ({ amount, form, cultureDate }, currentDate = new Date().toString(), cellDensity = 8, 
// billion cells / ml
slurryDensity = 1) => {
    switch (form) {
        case _types_yeast__WEBPACK_IMPORTED_MODULE_1__["YeastForms"].dry:
            return cellDensity * amount * 1000;
        case _types_yeast__WEBPACK_IMPORTED_MODULE_1__["YeastForms"].liquid:
            return 100 * (viability(currentDate, cultureDate) / 100) * amount;
        case _types_yeast__WEBPACK_IMPORTED_MODULE_1__["YeastForms"].slant:
            return slurryDensity * amount * 1000;
        default:
            throw new Error("NotImplementedError");
    }
};
const yeastGrowth = (ratio) => 2.33 - 0.67 * ratio;
const growthRateCurveBraukaiserStir = (ratio) => ratio < 1.4
    ? 1.4
    : ratio >= 1.4 && ratio <= 3.5 && yeastGrowth(ratio) > 0
        ? yeastGrowth(ratio)
        : 0;
const yeastStarterGrow = (startingYeastCount, starterSize, gravity, batchSize) => {
    const volumeLevel = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["litersToGallons"])(starterSize);
    const pointsNeeded = volumeLevel * (gravity - 1) * 1000;
    const poundsDME = pointsNeeded / 42;
    const gramsDME = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["poundsTokg"])(poundsDME) * 1000;
    const cellsToGramsRatio = startingYeastCount / gramsDME;
    const growthRate = growthRateCurveBraukaiserStir(cellsToGramsRatio);
    const endingCount = gramsDME * growthRate + startingYeastCount;
    const pitchRate = (endingCount * 1000) / Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sgToPlato"])(gravity) / (batchSize / 1000);
    return {
        growthRate: growthRate,
        endingCount: endingCount,
        pitchRate: pitchRate,
    };
};


/***/ }),

/***/ "./src/gravity.ts":
/*!************************!*\
  !*** ./src/gravity.ts ***!
  \************************/
/*! exports provided: calcTotalGravityPoints, calcOriginalGravity, calcFinalGravity, calcBoilGravity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcTotalGravityPoints", function() { return calcTotalGravityPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcOriginalGravity", function() { return calcOriginalGravity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcFinalGravity", function() { return calcFinalGravity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcBoilGravity", function() { return calcBoilGravity; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units */ "./src/units.ts");


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
    const amountValue = Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(fermentable.amount, 'lb');
    const potentialValue = Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(calcFermentablePotential(fermentable.yield), 'sg');
    const efficiencyValue = (1 - attenuation.value / 100) *
        calcFermentableEfficiency(fermentable.type, brewhouseEfficiency.value / 100);
    return (potentialValue - 1) * amountValue * efficiencyValue;
};
const calcTotalGravityPoints = (fermentables, efficiency, attenuation) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sum"])(fermentables.map((fermentable) => calcFermentableGravityPoints(fermentable, efficiency.brewhouse, attenuation)));
const calcGravity = (batchSize, gravityPoints) => {
    return 1.0 + gravityPoints / Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(batchSize, 'gal');
};
const boilGravity = (batchSizeInGallons, boilSizeInGallons, ogInSG) => 1 + ((ogInSG - 1) * batchSizeInGallons) / boilSizeInGallons;
const calcOriginalGravity = (batchSize, fermentables, efficiency) => {
    const ogValue = calcGravity(batchSize, calcTotalGravityPoints(fermentables, efficiency));
    return {
        unit: 'sg',
        value: ogValue,
    };
};
const calcFinalGravity = (batchSize, fermentables, efficiency, cultures) => {
    const fgValue = calcGravity(batchSize, calcTotalGravityPoints(fermentables, efficiency, cultures[0].attenuation));
    return {
        unit: 'sg',
        value: fgValue,
    };
};
const calcBoilGravity = (batchSize, boilSize, OG) => {
    return {
        unit: 'sg',
        value: boilGravity(Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(batchSize, 'gal'), Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(boilSize, 'gal'), Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(OG, 'sg')),
    };
};


/***/ }),

/***/ "./src/hops.ts":
/*!*********************!*\
  !*** ./src/hops.ts ***!
  \*********************/
/*! exports provided: bitternessIbuTinseth, bitternessRatio, bitternessIbuRager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bitternessIbuTinseth", function() { return bitternessIbuTinseth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bitternessRatio", function() { return bitternessRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bitternessIbuRager", function() { return bitternessIbuRager; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units */ "./src/units.ts");
/* harmony import */ var _timing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timing */ "./src/timing.ts");



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
    const bitterness = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sum"])(hops.map(({ amount, alpha_acid, form, timing }) => {
        // TODO: research needed
        if (!Object(_timing__WEBPACK_IMPORTED_MODULE_2__["use"])(timing).add_to_boil) {
            return 0;
        }
        const AAU = alphaAcidUnits(Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(amount, 'oz'), alpha_acid.value);
        const U = ibuUtilization(form, Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(boilGravity, 'sg'), Object(_timing__WEBPACK_IMPORTED_MODULE_2__["boilTime"])(timing));
        return (U * AAU * 74.89) / Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(postBoilVolume, 'gal');
    }));
    return {
        value: bitterness,
        unit: 'IBUs',
    };
};
// The preceived bitterness expressed in a ratio of IBUs to gravity. This is frequently seen expressed as BU/GU.
// The Gravity Units are the decimal portion of the original gravity
// http://beersmith.com/blog/2009/09/26/balancing-your-beer-with-the-bitterness-ratio/
const bitternessRatio = (ibu, gu) => ibu / gu;
// rager
const ragerHopGravityAdjustment = (sgb) => sgb <= 1.05 ? 0 : (sgb - 1.05) / 0.2;
const ragerUtil = (time) => 18.11 + 13.86 * Math.tanh((time - 31.32) / 18.27);
const ragerHopIbu = (hop, boilGravity, postBoilVolume) => {
    if (!Object(_timing__WEBPACK_IMPORTED_MODULE_2__["use"])(hop.timing).add_to_boil) {
        return 0;
    }
    const U = (ragerUtil(Math.floor(Object(_timing__WEBPACK_IMPORTED_MODULE_2__["boilTime"])(hop.timing) + 0.5)) *
        pelletFactor(hop.form)) /
        100;
    const AAU = alphaAcidUnits(hop.amount.value, hop.alpha_acid.value);
    return ((U * AAU * 74.89) /
        postBoilVolume.value /
        (1.0 + ragerHopGravityAdjustment(boilGravity.value)));
};
const bitternessIbuRager = (hops, boilGravity, postBoilVolume) => {
    const bitterness = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sum"])(hops.map((hop) => ragerHopIbu(hop, boilGravity, postBoilVolume)));
    return {
        value: bitterness,
        unit: 'IBUs',
    };
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: convert, convertMeasurableValue, calcOriginalGravity, calcFinalGravity, calcBoilGravity, calcColor, srmToCss, srmToRgb, calcABV, bitternessIbuRager, bitternessIbuTinseth, bitternessRatio, calculateRecipeBeerJSON, calcBoilVolumes, calcMashVolumes, calcMashGrainWeight, recalculateMashSteps, calcCalories, carbonation, yeastCount, yeastNeeded, yeastStarterGrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateRecipeBeerJSON", function() { return calculateRecipeBeerJSON; });
/* harmony import */ var _culture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./culture */ "./src/culture.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yeastCount", function() { return _culture__WEBPACK_IMPORTED_MODULE_0__["yeastCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yeastNeeded", function() { return _culture__WEBPACK_IMPORTED_MODULE_0__["yeastNeeded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yeastStarterGrow", function() { return _culture__WEBPACK_IMPORTED_MODULE_0__["yeastStarterGrow"]; });

/* harmony import */ var _carbonation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carbonation */ "./src/carbonation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcCalories", function() { return _carbonation__WEBPACK_IMPORTED_MODULE_1__["calcCalories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "carbonation", function() { return _carbonation__WEBPACK_IMPORTED_MODULE_1__["carbonation"]; });

/* harmony import */ var _hops__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hops */ "./src/hops.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bitternessIbuRager", function() { return _hops__WEBPACK_IMPORTED_MODULE_2__["bitternessIbuRager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bitternessIbuTinseth", function() { return _hops__WEBPACK_IMPORTED_MODULE_2__["bitternessIbuTinseth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bitternessRatio", function() { return _hops__WEBPACK_IMPORTED_MODULE_2__["bitternessRatio"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _units__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./units */ "./src/units.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertMeasurableValue", function() { return _units__WEBPACK_IMPORTED_MODULE_4__["convertMeasurableValue"]; });

/* harmony import */ var _converter_converter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./converter/converter */ "./src/converter/converter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convert", function() { return _converter_converter__WEBPACK_IMPORTED_MODULE_5__["convert"]; });

/* harmony import */ var _mash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mash */ "./src/mash.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcMashGrainWeight", function() { return _mash__WEBPACK_IMPORTED_MODULE_6__["calcMashGrainWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recalculateMashSteps", function() { return _mash__WEBPACK_IMPORTED_MODULE_6__["recalculateMashSteps"]; });

/* harmony import */ var _volumes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./volumes */ "./src/volumes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcBoilVolumes", function() { return _volumes__WEBPACK_IMPORTED_MODULE_7__["calcBoilVolumes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcMashVolumes", function() { return _volumes__WEBPACK_IMPORTED_MODULE_7__["calcMashVolumes"]; });

/* harmony import */ var _gravity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gravity */ "./src/gravity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcOriginalGravity", function() { return _gravity__WEBPACK_IMPORTED_MODULE_8__["calcOriginalGravity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcFinalGravity", function() { return _gravity__WEBPACK_IMPORTED_MODULE_8__["calcFinalGravity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcBoilGravity", function() { return _gravity__WEBPACK_IMPORTED_MODULE_8__["calcBoilGravity"]; });

/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./color */ "./src/color.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcColor", function() { return _color__WEBPACK_IMPORTED_MODULE_9__["calcColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "srmToCss", function() { return _color__WEBPACK_IMPORTED_MODULE_9__["srmToCss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "srmToRgb", function() { return _color__WEBPACK_IMPORTED_MODULE_9__["srmToRgb"]; });

/* harmony import */ var _abv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./abv */ "./src/abv.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcABV", function() { return _abv__WEBPACK_IMPORTED_MODULE_10__["calcABV"]; });












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
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isNotEmptyArray"])(fermentable_additions)) {
        original_gravity = Object(_gravity__WEBPACK_IMPORTED_MODULE_8__["calcOriginalGravity"])(batch_size, fermentable_additions, efficiency);
        const defaultCultureAddition = {
            name: "Default Culture",
            type: "ale",
            form: "liquid",
            attenuation: { value: 75, unit: "%" },
        };
        final_gravity = Object(_gravity__WEBPACK_IMPORTED_MODULE_8__["calcFinalGravity"])(batch_size, fermentable_additions, efficiency, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isNotEmptyArray"])(culture_additions)
            ? culture_additions
            : [defaultCultureAddition]);
        abv = Object(_abv__WEBPACK_IMPORTED_MODULE_10__["calcABV"])(original_gravity, final_gravity);
        const { pre_boil_size } = Object(_volumes__WEBPACK_IMPORTED_MODULE_7__["calcBoilVolumes"])(batch_size, boil, equipment);
        volumes = {
            pre_boil_size,
        };
        if (mash) {
            const mashGrainWeight = Object(_mash__WEBPACK_IMPORTED_MODULE_6__["calcMashGrainWeight"])(fermentable_additions);
            const mashSteps = Object(_mash__WEBPACK_IMPORTED_MODULE_6__["recalculateMashSteps"])(mash.mash_steps, mash.grain_temperature, mashGrainWeight);
            const { sparge_volume, mash_volume, total_volume } = Object(_volumes__WEBPACK_IMPORTED_MODULE_7__["calcMashVolumes"])(pre_boil_size, mashSteps, mashGrainWeight, equipment);
            volumes = Object.assign(Object.assign({}, volumes), { sparge_volume,
                mash_volume,
                total_volume });
            calculatedMash = Object.assign(Object.assign({}, mash), { mash_steps: Object(_mash__WEBPACK_IMPORTED_MODULE_6__["updateSpargeVolume"])(mashSteps, sparge_volume) });
        }
        if (boil) {
            calculatedBoil = Object.assign(Object.assign({}, boil), { pre_boil_size });
        }
        color = Object(_color__WEBPACK_IMPORTED_MODULE_9__["calcColor"])(fermentable_additions, batch_size);
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isNotEmptyArray"])(hop_additions)) {
            const boilGravity = Object(_gravity__WEBPACK_IMPORTED_MODULE_8__["calcBoilGravity"])(batch_size, pre_boil_size, original_gravity);
            ibu = Object(_hops__WEBPACK_IMPORTED_MODULE_2__["bitternessIbuTinseth"])(hop_additions, boilGravity, batch_size);
        }
    }
    return {
        stats: {
            original_gravity: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["roundMeasurable"])(original_gravity, 3),
            final_gravity: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["roundMeasurable"])(final_gravity, 3),
            alcohol_by_volume: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["roundMeasurable"])(abv, 1),
            ibu_estimate: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["roundMeasurable"])(ibu, 1),
            color_estimate: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["roundMeasurable"])(color, 1),
        },
        volumes,
        mash: calculatedMash,
        boil: calculatedBoil,
    };
};



/***/ }),

/***/ "./src/mash.ts":
/*!*********************!*\
  !*** ./src/mash.ts ***!
  \*********************/
/*! exports provided: recalculateMashSteps, calcMashGrainWeight, updateSpargeVolume */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recalculateMashSteps", function() { return recalculateMashSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcMashGrainWeight", function() { return calcMashGrainWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSpargeVolume", function() { return updateSpargeVolume; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units */ "./src/units.ts");
/* harmony import */ var _timing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timing */ "./src/timing.ts");



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
    const grainWeightValue = Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(mashGrainWeight, 'kg');
    return mash_steps.map((step, index) => {
        const stepTemp = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getMeasurableValue"])(step.step_temperature);
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
const calcMashGrainWeight = (fermentables) => {
    const value = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sum"])(fermentables.map(({ timing, type, amount }) => type === 'grain' && Object(_timing__WEBPACK_IMPORTED_MODULE_2__["use"])(timing).add_to_mash
        ? Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(amount, 'lb')
        : 0));
    return {
        value,
        unit: 'lb',
    };
};
function updateSpargeVolume(mash_steps, spargeVolume) {
    return mash_steps.map((step) => {
        if (step.type === 'sparge') {
            return Object.assign(Object.assign({}, step), { amount: spargeVolume });
        }
        return step;
    });
}


/***/ }),

/***/ "./src/timing.ts":
/*!***********************!*\
  !*** ./src/timing.ts ***!
  \***********************/
/*! exports provided: use, boilTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "use", function() { return use; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boilTime", function() { return boilTime; });
const use = (timing = {}) => ({
    add_to_boil: timing.use === 'add_to_boil',
    add_to_mash: !timing.use || timing.use === 'add_to_mash',
});
const boilTime = (timing = {}) => timing.use === 'add_to_boil' ? timing.time.value : 0;


/***/ }),

/***/ "./src/types/yeast.ts":
/*!****************************!*\
  !*** ./src/types/yeast.ts ***!
  \****************************/
/*! exports provided: YeastTypes, YeastForms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeastTypes", function() { return YeastTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeastForms", function() { return YeastForms; });
const YeastTypes = {
    ale: 'Ale',
    lager: 'Lager',
    wheat: 'Wheat',
    wine: 'Wine',
    champagne: 'Champagne',
};
const YeastForms = {
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
/*! exports provided: convertMeasurableValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertMeasurableValue", function() { return convertMeasurableValue; });
/* harmony import */ var _converter_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converter/converter */ "./src/converter/converter.ts");

const convertMeasurableValue = (measurable, unit, precision = 4) => {
    return Object(_converter_converter__WEBPACK_IMPORTED_MODULE_0__["convert"])(measurable.value, measurable.unit, unit, precision);
};


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: kgToOunces, kgToPounds, poundsTokg, litersToOunces, ouncesToLiters, litersToGallons, gallonsToLiters, fahrenheitToCelsius, celsiusToFahrenheit, kpaToPsi, psiTokpa, sgToPlato, platoToSG, brixToSG, sgToBrix, srmToEbc, ebcToSrm, srmToLovibond, lovibondToSrm, sum, capitalize, isNotEmptyArray, round, isObject, isMeasurable, getMeasurableValue, roundMeasurable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kgToOunces", function() { return kgToOunces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kgToPounds", function() { return kgToPounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poundsTokg", function() { return poundsTokg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "litersToOunces", function() { return litersToOunces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ouncesToLiters", function() { return ouncesToLiters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "litersToGallons", function() { return litersToGallons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gallonsToLiters", function() { return gallonsToLiters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fahrenheitToCelsius", function() { return fahrenheitToCelsius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "celsiusToFahrenheit", function() { return celsiusToFahrenheit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kpaToPsi", function() { return kpaToPsi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "psiTokpa", function() { return psiTokpa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sgToPlato", function() { return sgToPlato; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platoToSG", function() { return platoToSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brixToSG", function() { return brixToSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sgToBrix", function() { return sgToBrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "srmToEbc", function() { return srmToEbc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ebcToSrm", function() { return ebcToSrm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "srmToLovibond", function() { return srmToLovibond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lovibondToSrm", function() { return lovibondToSrm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotEmptyArray", function() { return isNotEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMeasurable", function() { return isMeasurable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeasurableValue", function() { return getMeasurableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundMeasurable", function() { return roundMeasurable; });
const kgToOunces = (k) => k * 35.2739619;
const kgToPounds = (k) => kgToOunces(k) / 16;
const poundsTokg = (p) => p / 2.204;
const litersToOunces = (l) => l / 0.0295735;
const ouncesToLiters = (o) => o * 0.0295735;
const litersToGallons = (l) => litersToOunces(l) / 128;
const gallonsToLiters = (g) => ouncesToLiters(g * 128);
const fahrenheitToCelsius = (f) => (f - 32) / 1.8;
const celsiusToFahrenheit = (c) => c * 1.8 + 32;
const kpaToPsi = (kpa) => kpa * 0.14503773773020923;
const psiTokpa = (psi) => psi * 6.894757293168361;
const sgToPlato = (sg) => -616.868 +
    1111.14 * sg -
    630.272 * Math.pow(sg, 2) +
    135.997 * Math.pow(sg, 3);
const platoToSG = (e) => 1 + e / (258.6 - (e / 258.2) * 227.1);
const brixToSG = (brix) => brix / (258.6 - (brix / 258.2) * 227.1) + 1;
const sgToBrix = (sg) => -669.5622 +
    1262.7749 * sg -
    775.6821 * Math.pow(sg, 2) +
    182.4601 * Math.pow(sg, 3);
const srmToEbc = (srm) => srm * 1.97;
const ebcToSrm = (ebc) => ebc * 0.508;
const srmToLovibond = (srm) => (srm + 0.76) / 1.3546;
const lovibondToSrm = (lovibond) => 1.3546 * lovibond - 0.76;
const sum = (array) => array.reduce((pv, cv) => pv + cv, 0);
const scaleIngredients = (scaleFactor, ingredients) => ingredients.map((i) => {
    return Object.assign(Object.assign({}, i), { amount: scaleFactor * i.amount });
});
const capitalize = (str) => {
    const words = str.split(' ');
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
};
const isNotEmptyArray = (arr) => {
    if (Array.isArray(arr)) {
        return arr.length > 0;
    }
    return false;
};
function round(number, precision = 0) {
    if (typeof number === 'number') {
        return Number(number.toFixed(precision));
    }
    return null;
}
function isObject(object) {
    return object != null && typeof object === 'object';
}
function isMeasurable(object) {
    return (isObject(object) &&
        object.hasOwnProperty('value') &&
        object.hasOwnProperty('unit'));
}
function getMeasurableValue(measurable) {
    if (isMeasurable(measurable)) {
        return measurable.value;
    }
    return null;
}
const roundMeasurable = (m, precision) => {
    return {
        unit: m.unit,
        value: round(m.value, precision),
    };
};


/***/ }),

/***/ "./src/volumes.ts":
/*!************************!*\
  !*** ./src/volumes.ts ***!
  \************************/
/*! exports provided: calcMashVolumes, calcBoilVolumes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcMashVolumes", function() { return calcMashVolumes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcBoilVolumes", function() { return calcBoilVolumes; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units */ "./src/units.ts");


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
const convertToGallons = (volume) => Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(volume, "gal");
// 0.96 - number of fl. ounces of water absorbed per ounce of the grain
// 128 fl. ounces in gallon, 16 ounces in pound
const grainAbsorptionRatio = (0.96 / 128) * 16;
const calcGrainAbsorption = (grainWeight) => {
    const value = Object(_units__WEBPACK_IMPORTED_MODULE_1__["convertMeasurableValue"])(grainWeight, "lb") * grainAbsorptionRatio;
    return {
        value,
        unit: "gal",
    };
};
const calcMashWaterVolume = (mash_steps = []) => {
    const value = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sum"])(mash_steps.map(({ type, amount }) => type === "infusion" ? convertToGallons(amount) : 0));
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


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmV3Y2FsYy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYnJld2NhbGMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnJld2NhbGMvLi9zcmMvYWJ2LnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL2NhcmJvbmF0aW9uLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL2NvbG9yLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL2NvbnZlcnRlci9jb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vYnJld2NhbGMvLi9zcmMvY29udmVydGVyL2RlZmluaXRpb25zLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL2N1bHR1cmUudHMiLCJ3ZWJwYWNrOi8vYnJld2NhbGMvLi9zcmMvZ3Jhdml0eS50cyIsIndlYnBhY2s6Ly9icmV3Y2FsYy8uL3NyYy9ob3BzLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL21hc2gudHMiLCJ3ZWJwYWNrOi8vYnJld2NhbGMvLi9zcmMvdGltaW5nLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL3R5cGVzL3llYXN0LnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL3VuaXRzLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL2JyZXdjYWxjLy4vc3JjL3ZvbHVtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7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QUs7U0FDWjtLQUNGLENBQUM7QUFDSixDQUFDLENBQUMiLCJmaWxlIjoiYnJld2NhbGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJicmV3Y2FsY1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJicmV3Y2FsY1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBzZ1RvUGxhdG8gfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHsgY29udmVydE1lYXN1cmFibGVWYWx1ZSB9IGZyb20gJy4vdW5pdHMnXG5pbXBvcnQgeyBHcmF2aXR5VHlwZSwgUGVyY2VudFR5cGUgfSBmcm9tICcuL3R5cGVzL2JlZXJqc29uJ1xuXG4vLyBodHRwOi8vYnlvLmNvbS9ib2NrL2l0ZW0vNDA4LWNhbGN1bGF0aW5nLWFsY29ob2wtY29udGVudC1hdHRlbnVhdGlvbi1leHRyYWN0LWFuZC1jYWxvcmllcy1hZHZhbmNlZC1ob21lYnJld2luZ1xuLy8gaHR0cHM6Ly93d3cuYnJld2Vyc2ZyaWVuZC5jb20vMjAxMS8wNi8xNi9hbGNvaG9sLWJ5LXZvbHVtZS1jYWxjdWxhdG9yLXVwZGF0ZWQvXG4vLyBBQlcgPSAoT0cgcG9pbnRzIC0gRkcgcG9pbnRzKSAqIDAuMTA1XG4vLyBBQlYgPSAoT0cgcG9pbnRzIC0gRkcgcG9pbnRzKSAqIDAuMTMyXG5leHBvcnQgY29uc3QgZXN0QUJXID0gKG9nUHRzOiBudW1iZXIsIGZnUHRzOiBudW1iZXIpID0+IChvZ1B0cyAtIGZnUHRzKSAqIDAuMTA1XG5leHBvcnQgY29uc3QgZXN0QUJWID0gKG9nUHRzOiBudW1iZXIsIGZnUHRzOiBudW1iZXIpID0+IChvZ1B0cyAtIGZnUHRzKSAqIDAuMTMyXG5cbi8vIGh0dHA6Ly9iZWVyc21pdGguY29tL2Jsb2cvMjAxMC8wOS8wNy9hcHBhcmVudC1hbmQtcmVhbC1hdHRlbnVhdGlvbi1mb3ItYmVlci1icmV3ZXJzLXBhcnQtMS9cbmNvbnN0IGVzdEFCVnJlYWxFeHRyYWN0ID0gKG9nOiBudW1iZXIsIGZnOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICBjb25zdCBvZSA9IHNnVG9QbGF0byhvZylcbiAgY29uc3QgYWUgPSBzZ1RvUGxhdG8oZmcpXG4gIGNvbnN0IHJlID0gMC4xODA4ICogb2UgKyAwLjgxOTIgKiBhZVxuICBjb25zdCBhYncgPSAob2UgLSByZSkgLyAoMi4wNjY1IC0gMC4wMTA2NjUgKiBvZSlcbiAgY29uc3QgYWJ2ID0gYWJ3ICogKGZnIC8gMC43OTY2MSlcblxuICByZXR1cm4gYWJ2XG59XG5cbmV4cG9ydCBjb25zdCBjYWxjQUJWID0gKG9nOiBHcmF2aXR5VHlwZSwgZmc6IEdyYXZpdHlUeXBlKTogUGVyY2VudFR5cGUgPT4ge1xuICByZXR1cm4ge1xuICAgIHZhbHVlOiBlc3RBQlZyZWFsRXh0cmFjdChcbiAgICAgIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUob2csICdzZycpLFxuICAgICAgY29udmVydE1lYXN1cmFibGVWYWx1ZShmZywgJ3NnJylcbiAgICApLFxuICAgIHVuaXQ6ICclJyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2Vsc2l1c1RvRmFocmVuaGVpdCwgbGl0ZXJzVG9HYWxsb25zIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuLy8gaHR0cHM6Ly9ieW8uY29tL3llYXN0L2l0ZW0vMTY0LWJhbGFuY2luZy15b3VyLWRyYWZ0LXN5c3RlbS1hZHZhbmNlZC1icmV3aW5nXG5cbmNvbnN0IGtlZ1ByZXNzdXJlID0gKGNhcmJWb2x1bWU6IG51bWJlciwgdDogbnVtYmVyKSA9PlxuICBNYXRoLm1heChcbiAgICAwLFxuICAgIC0xNi42OTk5IC1cbiAgICAgIDAuMDEwMTA1OSAqIHQgK1xuICAgICAgMC4wMDExNjUxMiAqIHQgKiB0ICtcbiAgICAgIDAuMTczMzU0ICogdCAqIGNhcmJWb2x1bWUgK1xuICAgICAgNC4yNDI2NyAqIGNhcmJWb2x1bWUgLVxuICAgICAgMC4wNjg0MjI2ICogY2FyYlZvbHVtZSAqIGNhcmJWb2x1bWVcbiAgKTtcblxuLy8gaHR0cDovL3d3dy5ob21lYnJld3RhbGsuY29tL3Nob3d0aHJlYWQucGhwP3Q9NDQxMzgzXG5jb25zdCBwcmltaW5nU3VnYXIgPSAoY2FyYlZvbHVtZSwgdCwgYmF0Y2hTaXplKSA9PlxuICAxNS4xOTUgKlxuICBiYXRjaFNpemUgKlxuICAoY2FyYlZvbHVtZSAtIDMuMDM3OCArIDUuMDA2MmUtMiAqIHQgLSAyLjY1NTVlLTQgKiB0ICogdCk7XG5cbmNvbnN0IG5vcm1hbGl6ZVRlbXAgPSAodDogbnVtYmVyKSA9PiBNYXRoLm1heCgzMi4wLCBjZWxzaXVzVG9GYWhyZW5oZWl0KHQpKTtcblxuZXhwb3J0IGNvbnN0IGNhcmJvbmF0aW9uID0gKFxuICBjYXJiVm9sdW1lOiBudW1iZXIsXG4gIHQ6IG51bWJlcixcbiAgYmF0Y2hTaXplOiBudW1iZXJcbikgPT4ge1xuICBjb25zdCBzdWdhciA9IHByaW1pbmdTdWdhcihcbiAgICBjYXJiVm9sdW1lLFxuICAgIG5vcm1hbGl6ZVRlbXAodCksXG4gICAgbGl0ZXJzVG9HYWxsb25zKGJhdGNoU2l6ZSlcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGtlZ1ByZXNzdXJlOiBrZWdQcmVzc3VyZShjYXJiVm9sdW1lLCBub3JtYWxpemVUZW1wKHQpKSxcbiAgICBrZWdTdWdhcjogc3VnYXIgKiAwLjUsXG4gICAgY29yblN1Z2FyOiBzdWdhcixcbiAgICBkbWU6IHN1Z2FyICogMS41MzgsXG4gIH07XG59O1xuXG4vLyBodHRwOi8vYmVlcnNtaXRoLmNvbS9ibG9nLzIwMTEvMDIvMDQvY291bnRpbmctY2Fsb3JpZXMtaW4teW91ci1ob21lYnJld2VkLWJlZXIvXG4vLyBDYWxvcmllX2Zyb21fYWxjb2hvbCA9IDE4ODEuMjIgKiBGRyAqIChPRy1GRykvKDEuNzc1LU9HKVxuLy8gQ2Fsb3JpZXNfZnJvbV9jYXJicyA9IDM1NTAuMCAqIEZHICogKCgwLjE4MDggKiBPRykgKyAoMC44MTkyICogRkcpIOKAkyAxLjAwMDQpXG4vLyBUb3RhbCBjYWxvcmllcyDigJMganVzdCBhZGQgdGhlIENhbG9yaWVzX2Zyb21fYWxjb2hvbCB0byBDYWxvcmllc19mcm9tX2NhcmJzXG5cbmNvbnN0IGNhbG9yaWVzQWxjID0gKG9nLCBmZykgPT4gMTg4MS4yMiAqIGZnICogKChvZyAtIGZnKSAvICgxLjc3NSAtIG9nKSk7XG5jb25zdCBjYWxvcmllc0V4dCA9IChvZywgZmcpID0+XG4gIDM1NTAuMCAqIGZnICogKDAuMTgwOCAqIG9nICsgMC44MTkyICogZmcgLSAxLjAwMDQpO1xuXG5leHBvcnQgY29uc3QgY2FsY0NhbG9yaWVzID0gKG9nOiBudW1iZXIsIGZnOiBudW1iZXIpID0+XG4gIGNhbG9yaWVzQWxjKG9nLCBmZykgKyBjYWxvcmllc0V4dChvZywgZmcpO1xuIiwiaW1wb3J0IHsgc3VtIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCB7IGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUgfSBmcm9tICcuL3VuaXRzJ1xuaW1wb3J0IHtcbiAgVm9sdW1lVHlwZSxcbiAgQ29sb3JUeXBlLFxuICBGZXJtZW50YWJsZUFkZGl0aW9uVHlwZSxcbn0gZnJvbSAnLi90eXBlcy9iZWVyanNvbidcblxuLy8gTUNVID0gKHdlaWdodCBvZiBncmFpbiBpbiBsYnMpKihjb2xvciBvZiBncmFpbiBpbiBsb3ZpYm9uZCkgLyAodm9sdW1lIGluIGdhbCkgU1JNID0gMS40OTIyICogTUNVIF4gMC42ODU5XG5jb25zdCBtY3Uyc3JtID0gKG1jdTogbnVtYmVyKTogbnVtYmVyID0+IDEuNDkyMiAqIE1hdGgucG93KG1jdSwgMC42ODU5KVxuXG5jb25zdCBjYWxjTUNVID0gKGFtb3VudDogbnVtYmVyLCBjb2xvcjogbnVtYmVyKTogbnVtYmVyID0+XG4gIGNvbG9yID4gMC41NiA/IGFtb3VudCAqIGNvbG9yIDogMFxuXG5leHBvcnQgY29uc3QgY2FsY0NvbG9yID0gKFxuICBmZXJtZW50YWJsZXM6IEFycmF5PEZlcm1lbnRhYmxlQWRkaXRpb25UeXBlPixcbiAgcG9zdEJvaWxWb2x1bWU6IFZvbHVtZVR5cGVcbik6IENvbG9yVHlwZSA9PiB7XG4gIGNvbnN0IGZlcm1lbnRhYmxlc01DVTogbnVtYmVyW10gPSBmZXJtZW50YWJsZXMubWFwKFxuICAgIChmZXJtZW50YWJsZTogRmVybWVudGFibGVBZGRpdGlvblR5cGUpID0+IHtcbiAgICAgIHJldHVybiBjYWxjTUNVKFxuICAgICAgICBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKGZlcm1lbnRhYmxlLmFtb3VudCwgJ2xiJyksXG4gICAgICAgIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoZmVybWVudGFibGUuY29sb3IsICdMb3ZpJylcbiAgICAgIClcbiAgICB9XG4gIClcblxuICBjb25zdCBjb2xvclNSTSA9IG1jdTJzcm0oXG4gICAgc3VtKGZlcm1lbnRhYmxlc01DVSkgLyBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKHBvc3RCb2lsVm9sdW1lLCAnZ2FsJylcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgdW5pdDogJ1NSTScsXG4gICAgdmFsdWU6IGNvbG9yU1JNLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzcm1Ub1JnYiA9IChzcm06IG51bWJlcik6IHsgcjogbnVtYmVyOyBnOiBudW1iZXI7IGI6IG51bWJlciB9ID0+ICh7XG4gIHI6IE1hdGgucm91bmQoTWF0aC5taW4oMjU1LCBNYXRoLm1heCgwLCAyNTUgKiBNYXRoLnBvdygwLjk3NSwgc3JtKSkpKSxcbiAgZzogTWF0aC5yb3VuZChNYXRoLm1pbigyNTUsIE1hdGgubWF4KDAsIDI1NSAqIE1hdGgucG93KDAuODgsIHNybSkpKSksXG4gIGI6IE1hdGgucm91bmQoTWF0aC5taW4oMjU1LCBNYXRoLm1heCgwLCAyNTUgKiBNYXRoLnBvdygwLjcsIHNybSkpKSksXG59KVxuXG5leHBvcnQgY29uc3Qgc3JtVG9Dc3MgPSAoc3JtOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBjb2xvciA9IHNybVRvUmdiKHNybSlcblxuICByZXR1cm4gYHJnYigke2NvbG9yLnJ9LCAke2NvbG9yLmd9LCAke2NvbG9yLmJ9KWBcbn1cbiIsImltcG9ydCBkZWZpbml0aW9ucyBmcm9tICcuL2RlZmluaXRpb25zJ1xuXG5jb25zdCBERUZBVUxUX1BSRUNJU0lPTiA9IDJcblxuY29uc3Qgcm91bmRWYWx1ZSA9ICh2YWx1ZTogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlcik6IG51bWJlciA9PlxuICArdmFsdWUudG9GaXhlZChwcmVjaXNpb24pXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gZnJvbVxuICogQHBhcmFtIHtzdHJpbmd9IHRvXG4gKiBAcGFyYW0ge251bWJlcn0gcHJlY2lzaW9uXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgY29udmVydCA9IChcbiAgdmFsdWU6IG51bWJlcixcbiAgZnJvbTogc3RyaW5nLFxuICB0bzogc3RyaW5nLFxuICBwcmVjaXNpb24/OiBudW1iZXJcbik6IG51bWJlciA9PiB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY29udmVydCBudWxsIG9yIHVuZGVmaW5lZCFgKVxuICB9XG5cbiAgbGV0IG9yaWdpbiA9IG51bGxcbiAgbGV0IGRlc3RpbmF0aW9uID0gbnVsbFxuXG4gIGZvciAoY29uc3QgbWVhc3VyYWJsZVR5cGVLZXkgaW4gZGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCBtZWFzdXJhYmxlVHlwZSA9IGRlZmluaXRpb25zW21lYXN1cmFibGVUeXBlS2V5XVxuICAgIGZvciAoY29uc3Qgc3lzdGVtS2V5IGluIG1lYXN1cmFibGVUeXBlKSB7XG4gICAgICBjb25zdCBzeXN0ZW0gPSBtZWFzdXJhYmxlVHlwZVtzeXN0ZW1LZXldXG4gICAgICBpZiAoc3lzdGVtLnVuaXRzLmhhc093blByb3BlcnR5KGZyb20pKSB7XG4gICAgICAgIG9yaWdpbiA9IHsgdW5pdDogc3lzdGVtLnVuaXRzW2Zyb21dLCBzeXN0ZW0gfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3lzdGVtLnVuaXRzLmhhc093blByb3BlcnR5KHRvKSkge1xuICAgICAgICBkZXN0aW5hdGlvbiA9IHsgdW5pdDogc3lzdGVtLnVuaXRzW3RvXSwgc3lzdGVtIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3JpZ2luICE9IG51bGwgJiYgZGVzdGluYXRpb24gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5hYmxlIHRvIGNvbnZlcnQgWyR7bWVhc3VyYWJsZVR5cGVLZXl9XSB1bml0IFske2Zyb219XSB0byBbJHt0b31dIWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAob3JpZ2luID09IG51bGwgJiYgZGVzdGluYXRpb24gIT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5hYmxlIHRvIGNvbnZlcnQgWyR7ZnJvbX1dIHRvIFske21lYXN1cmFibGVUeXBlS2V5fV0gdW5pdCBbJHt0b31dIWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAob3JpZ2luICE9IG51bGwgJiYgZGVzdGluYXRpb24gIT0gbnVsbCkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAob3JpZ2luID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaXQgbm90IGZvdW5kIFske2Zyb219XSFgKVxuICB9XG5cbiAgaWYgKGRlc3RpbmF0aW9uID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaXQgbm90IGZvdW5kIFske3RvfV0hYClcbiAgfVxuXG4gIGNvbnN0IHVuaXRQcmVjaXNpb24gPVxuICAgIGRlc3RpbmF0aW9uLnVuaXQucHJlY2lzaW9uICE9IG51bGxcbiAgICAgID8gZGVzdGluYXRpb24udW5pdC5wcmVjaXNpb25cbiAgICAgIDogREVGQVVMVF9QUkVDSVNJT05cblxuICBjb25zdCBhY3R1YWxQcmVjaXNpb24gPSBwcmVjaXNpb24gIT0gbnVsbCA/IHByZWNpc2lvbiA6IHVuaXRQcmVjaXNpb25cblxuICBpZiAoZnJvbSA9PT0gdG8pIHtcbiAgICByZXR1cm4gcm91bmRWYWx1ZSh2YWx1ZSwgYWN0dWFsUHJlY2lzaW9uKVxuICB9XG5cbiAgbGV0IHJlc3VsdCA9IHZhbHVlICogb3JpZ2luLnVuaXQucmF0aW9cblxuICBpZiAob3JpZ2luLnN5c3RlbSAhPT0gZGVzdGluYXRpb24uc3lzdGVtKSB7XG4gICAgcmVzdWx0ID0gZGVzdGluYXRpb24uc3lzdGVtLmZyb21CYXNlKG9yaWdpbi5zeXN0ZW0udG9CYXNlKHJlc3VsdCkpXG4gIH1cblxuICByZXN1bHQgLz0gZGVzdGluYXRpb24udW5pdC5yYXRpb1xuXG4gIHJldHVybiByb3VuZFZhbHVlKHJlc3VsdCwgYWN0dWFsUHJlY2lzaW9uKVxufVxuIiwiaW1wb3J0IHtcbiAgc3JtVG9FYmMsXG4gIGViY1RvU3JtLFxuICBzcm1Ub0xvdmlib25kLFxuICBsb3ZpYm9uZFRvU3JtLFxuICBzZ1RvUGxhdG8sXG4gIHBsYXRvVG9TRyxcbiAgc2dUb0JyaXgsXG4gIGJyaXhUb1NHLFxuICBmYWhyZW5oZWl0VG9DZWxzaXVzLFxuICBjZWxzaXVzVG9GYWhyZW5oZWl0LFxufSBmcm9tICcuLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtYXNzOiB7XG4gICAgbWV0cmljOiB7XG4gICAgICB0b0Jhc2U6ICh2KSA9PiB2LFxuICAgICAgZnJvbUJhc2U6ICh2KSA9PiB2LFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgbWc6IHtcbiAgICAgICAgICByYXRpbzogMC4wMDEsXG4gICAgICAgIH0sXG4gICAgICAgIGc6IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgfSxcbiAgICAgICAga2c6IHtcbiAgICAgICAgICByYXRpbzogMTAwMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB1czoge1xuICAgICAgdG9CYXNlOiAodikgPT4gdiAqIDQ1My41OTIsXG4gICAgICBmcm9tQmFzZTogKHYpID0+IHYgLyA0NTMuNTkyLFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgbGI6IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgfSxcbiAgICAgICAgb3o6IHtcbiAgICAgICAgICByYXRpbzogMSAvIDE2LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIHZvbHVtZToge1xuICAgIG1ldHJpYzoge1xuICAgICAgdG9CYXNlOiAodikgPT4gdixcbiAgICAgIGZyb21CYXNlOiAodikgPT4gdixcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIGw6IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgfSxcbiAgICAgICAgbWw6IHtcbiAgICAgICAgICByYXRpbzogMC4wMDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBpbXBlcmlhbDoge1xuICAgICAgdG9CYXNlOiAodikgPT4gdiAqIDEuMTM2NTIzLFxuICAgICAgZnJvbUJhc2U6ICh2KSA9PiB2IC8gMS4xMzY1MjMsXG4gICAgICB1bml0czoge1xuICAgICAgICBpZmxvejoge1xuICAgICAgICAgIHJhdGlvOiAxIC8gNDAsXG4gICAgICAgIH0sXG4gICAgICAgIGlwdDoge1xuICAgICAgICAgIHJhdGlvOiAxIC8gMixcbiAgICAgICAgfSxcbiAgICAgICAgaXF0OiB7XG4gICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgIH0sXG4gICAgICAgIGlnYWw6IHtcbiAgICAgICAgICByYXRpbzogNCxcbiAgICAgICAgfSxcbiAgICAgICAgaWJibDoge1xuICAgICAgICAgIHJhdGlvOiAxNDQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICB1czoge1xuICAgICAgdG9CYXNlOiAodikgPT4gdiAqIDAuOTQ2MzUzLFxuICAgICAgZnJvbUJhc2U6ICh2KSA9PiB2IC8gMC45NDYzNTMsXG4gICAgICB1bml0czoge1xuICAgICAgICB0c3A6IHtcbiAgICAgICAgICByYXRpbzogMSAvIDE5MixcbiAgICAgICAgfSxcbiAgICAgICAgdGJzcDoge1xuICAgICAgICAgIHJhdGlvOiAxIC8gNjQsXG4gICAgICAgIH0sXG4gICAgICAgIGZsb3o6IHtcbiAgICAgICAgICByYXRpbzogMSAvIDMyLFxuICAgICAgICB9LFxuICAgICAgICBjdXA6IHtcbiAgICAgICAgICByYXRpbzogMSAvIDQsXG4gICAgICAgIH0sXG4gICAgICAgIHB0OiB7XG4gICAgICAgICAgcmF0aW86IDEgLyAyLFxuICAgICAgICB9LFxuICAgICAgICBxdDoge1xuICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICB9LFxuICAgICAgICBnYWw6IHtcbiAgICAgICAgICByYXRpbzogNCxcbiAgICAgICAgfSxcbiAgICAgICAgYmJsOiB7XG4gICAgICAgICAgcmF0aW86IDEyNCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBjb2xvcjoge1xuICAgIGxvdmlib25kOiB7XG4gICAgICB0b0Jhc2U6IGxvdmlib25kVG9Tcm0sXG4gICAgICBmcm9tQmFzZTogc3JtVG9Mb3ZpYm9uZCxcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIExvdmk6IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGViYzoge1xuICAgICAgdG9CYXNlOiBlYmNUb1NybSxcbiAgICAgIGZyb21CYXNlOiBzcm1Ub0ViYyxcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIEVCQzoge1xuICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgc3JtOiB7XG4gICAgICB0b0Jhc2U6ICh2KSA9PiB2LFxuICAgICAgZnJvbUJhc2U6ICh2KSA9PiB2LFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgU1JNOiB7XG4gICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgIH0sXG4gICAgICAgIHNybToge1xuICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGdyYXZpdHk6IHtcbiAgICBzZzoge1xuICAgICAgdG9CYXNlOiAodikgPT4gdixcbiAgICAgIGZyb21CYXNlOiAodikgPT4gdixcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIHNnOiB7XG4gICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgICAgcHJlY2lzaW9uOiA0LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgcGxhdG86IHtcbiAgICAgIHRvQmFzZTogcGxhdG9Ub1NHLFxuICAgICAgZnJvbUJhc2U6IHNnVG9QbGF0byxcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIHBsYXRvOiB7XG4gICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBicml4OiB7XG4gICAgICB0b0Jhc2U6IGJyaXhUb1NHLFxuICAgICAgZnJvbUJhc2U6IHNnVG9Ccml4LFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgYnJpeDoge1xuICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIHRlbXBlcmF0dXJlOiB7XG4gICAgY2Vsc2l1czoge1xuICAgICAgdG9CYXNlOiAodikgPT4gdixcbiAgICAgIGZyb21CYXNlOiAodikgPT4gdixcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIEM6IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgICBwcmVjaXNpb246IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBmYWhyZW5oZWl0OiB7XG4gICAgICB0b0Jhc2U6IGZhaHJlbmhlaXRUb0NlbHNpdXMsXG4gICAgICBmcm9tQmFzZTogY2Vsc2l1c1RvRmFocmVuaGVpdCxcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIEY6IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgICBwcmVjaXNpb246IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgdGltZToge1xuICAgIHRpbWU6IHtcbiAgICAgIHRvQmFzZTogKHYpID0+IHYsXG4gICAgICBmcm9tQmFzZTogKHYpID0+IHYsXG4gICAgICB1bml0czoge1xuICAgICAgICBzZWM6IHtcbiAgICAgICAgICByYXRpbzogMSAvIDYwLFxuICAgICAgICB9LFxuICAgICAgICBtaW46IHtcbiAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgfSxcbiAgICAgICAgaHI6IHtcbiAgICAgICAgICByYXRpbzogNjAsXG4gICAgICAgIH0sXG4gICAgICAgIGRheToge1xuICAgICAgICAgIHJhdGlvOiA2MCAqIDI0LFxuICAgICAgICB9LFxuICAgICAgICB3ZWVrOiB7XG4gICAgICAgICAgcmF0aW86IDYwICogMjQgKiA3LFxuICAgICAgICB9LFxuICAgICAgICBtb250aDoge1xuICAgICAgICAgIHJhdGlvOiA2MCAqIDI0ICogMzAsXG4gICAgICAgIH0sXG4gICAgICAgIHllYXI6IHtcbiAgICAgICAgICByYXRpbzogNjAgKiAyNCAqIDM2NSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBwcmVzc3VyZToge1xuICAgIHByZXNzdXJlOiB7XG4gICAgICB0b0Jhc2U6ICh2KSA9PiB2LFxuICAgICAgZnJvbUJhc2U6ICh2KSA9PiB2LFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAga1BhOiB7XG4gICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgIH0sXG4gICAgICAgIGF0bToge1xuICAgICAgICAgIHJhdGlvOiAxMDEuMzI1LFxuICAgICAgICB9LFxuICAgICAgICBiYXI6IHtcbiAgICAgICAgICByYXRpbzogMTAwLFxuICAgICAgICB9LFxuICAgICAgICBwc2k6IHtcbiAgICAgICAgICByYXRpbzogNi44OTQ3NTcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59XG4iLCJpbXBvcnQgeyBsaXRlcnNUb0dhbGxvbnMsIHBvdW5kc1Rva2csIHNnVG9QbGF0byB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgdHlwZSB7IFllYXN0IH0gZnJvbSBcIi4vdHlwZXMveWVhc3RcIjtcbmltcG9ydCB7IFllYXN0Rm9ybXMgfSBmcm9tIFwiLi90eXBlcy95ZWFzdFwiO1xuXG4vLyBodHRwczovL3d3dy5icmV3ZXJzZnJpZW5kLmNvbS95ZWFzdC1waXRjaC1yYXRlLWFuZC1zdGFydGVyLWNhbGN1bGF0b3IvXG5cbi8vIG1pbGxpb24gY2VsbHMgLyBtbCAvIGRlZ3JlZSBQbGF0b1xuXG4vLyBNaW5pbXVtIG1hbnVmYWN0dXJlcidzIHJlY29tbWVuZGF0aW9uOiAwLjM1IChhbGUgb25seSwgZnJlc2ggeWVhc3Qgb25seSlcbi8vIE1pZGRsZSBvZiB0aGUgcm9hZCBQcm8gQnJld2VyIDAuNzUgKGFsZSlcbi8vIFBybyBCcmV3ZXIgMS4wMCAoaGlnaCBncmF2aXR5IGFsZSlcbi8vIFBybyBCcmV3ZXIgMS41MCAobWluaW11bSBmb3IgbGFnZXIpXG4vLyBQcm8gQnJld2VyIDIuMCAoaGlnaCBncmF2aXR5IGxhZ2VyKVxuXG4vLyBjZWxsRGVuc2l0eSA9IGJpbGxpb24gY2VsbHMgLyBncmFtXG4vLyBTYWZhbGUgSy05N1x0MTRcbi8vIFNhZmFsZSBTLTA0XHQ4XG4vLyBTYWZicmV3IFQtNThcdDE4XG4vLyBTYWZicmV3IFMtMzNcdDE2XG4vLyBTYWZsYWdlciBTLTIzXHQxMFxuLy8gU2FmbGFnZXIgUy0xODlcdDlcblxuLy8gQSBwYWNrL3ZpYWwgY29udGFpbnMgMTAwIGJpbGxpb24gY2VsbHMgYXQgdGhlIGRhdGUgb2YgbWFudWZhY3R1cmUuXG4vLyBMaXF1aWQgeWVhc3QgdmlhYmlsaXR5IGRyb3BzIDIxJSBlYWNoIG1vbnRoLCBvciAwLjclIGVhY2ggZGF5LCBmcm9tIHRoZSBkYXRlIG9mIG1hbnVmYWN0dXJlLlxuLy8gVGhlIGFzc3VtcHRpb24gaXMgdGhlIHllYXN0IHZpYWJpbGl0eSBkcm9wcyBpbiBhIGxpbmVhciBmYXNoaW9uLiBJbiA0Ljc1IG1vbnRocyBvciAxNDMgZGF5cywgdGhpcyBjYWxjdWxhdG9yIGFzc3VtZXMgdGhlIHllYXN0IGlzIDEwMCUgZGVhZCAoMTAwIC8gMC43ID0gfjE0MykuXG5cbi8vIG1pbGxpb24gMTAgXiA2XG4vLyBiaWxsaW9uIDEwIF4gOVxuXG5leHBvcnQgY29uc3QgeWVhc3ROZWVkZWQgPSAocGl0Y2hSYXRlOiBudW1iZXIsIGJhdGNoU2l6ZTogbnVtYmVyLCBlOiBudW1iZXIpID0+XG4gIChwaXRjaFJhdGUgKiAoYmF0Y2hTaXplICogMTAwMCkgKiBlKSAvIDEwMDA7XG5cbmNvbnN0IHZpYWJpbGl0eSA9IChcbiAgY3VycmVudERhdGU6IHN0cmluZyxcbiAgY3VsdHVyZURhdGU6IHN0cmluZyA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKVxuKSA9PlxuICAxMDAgLVxuICBNYXRoLmZsb29yKChEYXRlLnBhcnNlKGN1cnJlbnREYXRlKSAtIERhdGUucGFyc2UoY3VsdHVyZURhdGUpKSAvIDg2NDAwMDAwKSAqXG4gICAgMC43O1xuXG5leHBvcnQgY29uc3QgeWVhc3RDb3VudCA9IChcbiAgeyBhbW91bnQsIGZvcm0sIGN1bHR1cmVEYXRlIH06IFllYXN0LFxuICBjdXJyZW50RGF0ZTogc3RyaW5nID0gbmV3IERhdGUoKS50b1N0cmluZygpLFxuICBjZWxsRGVuc2l0eTogbnVtYmVyID0gOCxcbiAgLy8gYmlsbGlvbiBjZWxscyAvIG1sXG4gIHNsdXJyeURlbnNpdHk6IG51bWJlciA9IDFcbikgPT4ge1xuICBzd2l0Y2ggKGZvcm0pIHtcbiAgICBjYXNlIFllYXN0Rm9ybXMuZHJ5OlxuICAgICAgcmV0dXJuIGNlbGxEZW5zaXR5ICogYW1vdW50ICogMTAwMDtcbiAgICBjYXNlIFllYXN0Rm9ybXMubGlxdWlkOlxuICAgICAgcmV0dXJuIDEwMCAqICh2aWFiaWxpdHkoY3VycmVudERhdGUsIGN1bHR1cmVEYXRlKSAvIDEwMCkgKiBhbW91bnQ7XG4gICAgY2FzZSBZZWFzdEZvcm1zLnNsYW50OlxuICAgICAgcmV0dXJuIHNsdXJyeURlbnNpdHkgKiBhbW91bnQgKiAxMDAwO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3RJbXBsZW1lbnRlZEVycm9yXCIpO1xuICB9XG59O1xuXG5jb25zdCB5ZWFzdEdyb3d0aCA9IChyYXRpbykgPT4gMi4zMyAtIDAuNjcgKiByYXRpbztcblxuY29uc3QgZ3Jvd3RoUmF0ZUN1cnZlQnJhdWthaXNlclN0aXIgPSAocmF0aW86IG51bWJlcikgPT5cbiAgcmF0aW8gPCAxLjRcbiAgICA/IDEuNFxuICAgIDogcmF0aW8gPj0gMS40ICYmIHJhdGlvIDw9IDMuNSAmJiB5ZWFzdEdyb3d0aChyYXRpbykgPiAwXG4gICAgPyB5ZWFzdEdyb3d0aChyYXRpbylcbiAgICA6IDA7XG5cbmV4cG9ydCBjb25zdCB5ZWFzdFN0YXJ0ZXJHcm93ID0gKFxuICBzdGFydGluZ1llYXN0Q291bnQ6IG51bWJlcixcbiAgc3RhcnRlclNpemU6IG51bWJlcixcbiAgZ3Jhdml0eTogbnVtYmVyLFxuICBiYXRjaFNpemU6IG51bWJlclxuKSA9PiB7XG4gIGNvbnN0IHZvbHVtZUxldmVsID0gbGl0ZXJzVG9HYWxsb25zKHN0YXJ0ZXJTaXplKTtcbiAgY29uc3QgcG9pbnRzTmVlZGVkID0gdm9sdW1lTGV2ZWwgKiAoZ3Jhdml0eSAtIDEpICogMTAwMDtcbiAgY29uc3QgcG91bmRzRE1FID0gcG9pbnRzTmVlZGVkIC8gNDI7XG4gIGNvbnN0IGdyYW1zRE1FID0gcG91bmRzVG9rZyhwb3VuZHNETUUpICogMTAwMDtcbiAgY29uc3QgY2VsbHNUb0dyYW1zUmF0aW8gPSBzdGFydGluZ1llYXN0Q291bnQgLyBncmFtc0RNRTtcblxuICBjb25zdCBncm93dGhSYXRlID0gZ3Jvd3RoUmF0ZUN1cnZlQnJhdWthaXNlclN0aXIoY2VsbHNUb0dyYW1zUmF0aW8pO1xuICBjb25zdCBlbmRpbmdDb3VudCA9IGdyYW1zRE1FICogZ3Jvd3RoUmF0ZSArIHN0YXJ0aW5nWWVhc3RDb3VudDtcbiAgY29uc3QgcGl0Y2hSYXRlID1cbiAgICAoZW5kaW5nQ291bnQgKiAxMDAwKSAvIHNnVG9QbGF0byhncmF2aXR5KSAvIChiYXRjaFNpemUgLyAxMDAwKTtcblxuICByZXR1cm4ge1xuICAgIGdyb3d0aFJhdGU6IGdyb3d0aFJhdGUsXG4gICAgZW5kaW5nQ291bnQ6IGVuZGluZ0NvdW50LFxuICAgIHBpdGNoUmF0ZTogcGl0Y2hSYXRlLFxuICB9O1xufTtcbiIsImltcG9ydCB7IHN1bSB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQge1xuICBWb2x1bWVUeXBlLFxuICBHcmF2aXR5VHlwZSxcbiAgWWllbGRUeXBlLFxuICBFZmZpY2llbmN5VHlwZSxcbiAgUGVyY2VudFR5cGUsXG4gIEZlcm1lbnRhYmxlQWRkaXRpb25UeXBlLFxuICBDdWx0dXJlQWRkaXRpb25UeXBlLFxufSBmcm9tICcuL3R5cGVzL2JlZXJqc29uJ1xuaW1wb3J0IHsgY29udmVydE1lYXN1cmFibGVWYWx1ZSB9IGZyb20gJy4vdW5pdHMnXG5cbi8vIFN1Z2FyIHByb3ZpZGVzIDQ2IGdyYXZpdHkgcG9pbnRzIHBlciBwb3VuZCwgcGVyIGdhbGxvbiAoUFBQRykuXG4vLyAxIHBvdW5kID0gMTYgb3ogKHdlaWdodC9tYXNzKVxuLy8gMSBnYWxsb24gPSAxMjggZmwgb3pcbi8vIHlpZWxkIGFuZCBlZmZpY2llbmN5IHNob3VsZCBiZSBwYXJzZWQgZnJvbSByZWNpcGUgYXMgcGVyY2VudCB2YWx1ZXNcbi8vIFRoZSBtYXhpbXVtIHBvdGVudGlhbCBpcyBhcHByb3hpbWF0ZWx5IDEuMDQ2IHdoaWNoIHdvdWxkIGJlIGEgcG91bmQgb2YgcHVyZSBzdWdhciBpbiBhIGdhbGxvbiBvZiB3YXRlci5cblxuY29uc3QgeWllbGRUb1BvdGVudGlhbCA9IChmZXJtZW50YWJsZVlpZWxkOiBQZXJjZW50VHlwZSk6IEdyYXZpdHlUeXBlID0+ICh7XG4gIHZhbHVlOiAoZmVybWVudGFibGVZaWVsZC52YWx1ZSAqIDAuMDEgKiA0NikgLyAxMDAwICsgMSxcbiAgdW5pdDogJ3NnJyxcbn0pXG5cbmNvbnN0IGNhbGNGZXJtZW50YWJsZUVmZmljaWVuY3kgPSAoXG4gIHR5cGU6IHN0cmluZyxcbiAgZXF1aXBtZW50RWZmaWNpZW5jeTogbnVtYmVyLFxuICBzdWdhckVmZmljaWVuY3kgPSAxXG4pID0+XG4gIHR5cGUgPT09ICdleHRyYWN0JyB8fCB0eXBlID09PSAnc3VnYXInIHx8IHR5cGUgPT09ICdkcnkgZXh0cmFjdCdcbiAgICA/IHN1Z2FyRWZmaWNpZW5jeVxuICAgIDogZXF1aXBtZW50RWZmaWNpZW5jeVxuXG5jb25zdCBjYWxjRmVybWVudGFibGVQb3RlbnRpYWwgPSAoZmVybWVudGFibGVZaWVsZDogWWllbGRUeXBlKTogR3Jhdml0eVR5cGUgPT4ge1xuICBpZiAoZmVybWVudGFibGVZaWVsZC5wb3RlbnRpYWwgIT0gbnVsbCkge1xuICAgIHJldHVybiBmZXJtZW50YWJsZVlpZWxkLnBvdGVudGlhbFxuICB9XG4gIGlmIChmZXJtZW50YWJsZVlpZWxkLmZpbmVfZ3JpbmQgIT0gbnVsbCkge1xuICAgIHJldHVybiB5aWVsZFRvUG90ZW50aWFsKGZlcm1lbnRhYmxlWWllbGQuZmluZV9ncmluZClcbiAgfVxuICBpZiAoZmVybWVudGFibGVZaWVsZC5jb2Fyc2VfZ3JpbmQgIT0gbnVsbCkge1xuICAgIHJldHVybiB5aWVsZFRvUG90ZW50aWFsKGZlcm1lbnRhYmxlWWllbGQuY29hcnNlX2dyaW5kKVxuICB9XG4gIHJldHVybiB7IHZhbHVlOiAwLCB1bml0OiAnc2cnIH1cbn1cblxuY29uc3QgY2FsY0Zlcm1lbnRhYmxlR3Jhdml0eVBvaW50cyA9IChcbiAgZmVybWVudGFibGU6IEZlcm1lbnRhYmxlQWRkaXRpb25UeXBlLFxuICBicmV3aG91c2VFZmZpY2llbmN5OiBQZXJjZW50VHlwZSA9IHsgdmFsdWU6IDEwMCwgdW5pdDogJyUnIH0sXG4gIGF0dGVudWF0aW9uOiBQZXJjZW50VHlwZSA9IHsgdmFsdWU6IDAsIHVuaXQ6ICclJyB9XG4pID0+IHtcbiAgY29uc3QgYW1vdW50VmFsdWUgPSBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKGZlcm1lbnRhYmxlLmFtb3VudCwgJ2xiJylcbiAgY29uc3QgcG90ZW50aWFsVmFsdWUgPSBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKFxuICAgIGNhbGNGZXJtZW50YWJsZVBvdGVudGlhbChmZXJtZW50YWJsZS55aWVsZCksXG4gICAgJ3NnJ1xuICApXG5cbiAgY29uc3QgZWZmaWNpZW5jeVZhbHVlOiBudW1iZXIgPVxuICAgICgxIC0gYXR0ZW51YXRpb24udmFsdWUgLyAxMDApICpcbiAgICBjYWxjRmVybWVudGFibGVFZmZpY2llbmN5KGZlcm1lbnRhYmxlLnR5cGUsIGJyZXdob3VzZUVmZmljaWVuY3kudmFsdWUgLyAxMDApXG5cbiAgcmV0dXJuIChwb3RlbnRpYWxWYWx1ZSAtIDEpICogYW1vdW50VmFsdWUgKiBlZmZpY2llbmN5VmFsdWVcbn1cblxuZXhwb3J0IGNvbnN0IGNhbGNUb3RhbEdyYXZpdHlQb2ludHMgPSAoXG4gIGZlcm1lbnRhYmxlczogQXJyYXk8RmVybWVudGFibGVBZGRpdGlvblR5cGU+LFxuICBlZmZpY2llbmN5OiBFZmZpY2llbmN5VHlwZSxcbiAgYXR0ZW51YXRpb24/OiBQZXJjZW50VHlwZVxuKSA9PlxuICBzdW0oXG4gICAgZmVybWVudGFibGVzLm1hcCgoZmVybWVudGFibGU6IEZlcm1lbnRhYmxlQWRkaXRpb25UeXBlKSA9PlxuICAgICAgY2FsY0Zlcm1lbnRhYmxlR3Jhdml0eVBvaW50cyhcbiAgICAgICAgZmVybWVudGFibGUsXG4gICAgICAgIGVmZmljaWVuY3kuYnJld2hvdXNlLFxuICAgICAgICBhdHRlbnVhdGlvblxuICAgICAgKVxuICAgIClcbiAgKVxuXG5jb25zdCBjYWxjR3Jhdml0eSA9IChiYXRjaFNpemU6IFZvbHVtZVR5cGUsIGdyYXZpdHlQb2ludHM6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIHJldHVybiAxLjAgKyBncmF2aXR5UG9pbnRzIC8gY29udmVydE1lYXN1cmFibGVWYWx1ZShiYXRjaFNpemUsICdnYWwnKVxufVxuXG5jb25zdCBib2lsR3Jhdml0eSA9IChcbiAgYmF0Y2hTaXplSW5HYWxsb25zOiBudW1iZXIsXG4gIGJvaWxTaXplSW5HYWxsb25zOiBudW1iZXIsXG4gIG9nSW5TRzogbnVtYmVyXG4pOiBudW1iZXIgPT4gMSArICgob2dJblNHIC0gMSkgKiBiYXRjaFNpemVJbkdhbGxvbnMpIC8gYm9pbFNpemVJbkdhbGxvbnNcblxuZXhwb3J0IGNvbnN0IGNhbGNPcmlnaW5hbEdyYXZpdHkgPSAoXG4gIGJhdGNoU2l6ZTogVm9sdW1lVHlwZSxcbiAgZmVybWVudGFibGVzOiBBcnJheTxGZXJtZW50YWJsZUFkZGl0aW9uVHlwZT4sXG4gIGVmZmljaWVuY3k6IEVmZmljaWVuY3lUeXBlXG4pOiBHcmF2aXR5VHlwZSA9PiB7XG4gIGNvbnN0IG9nVmFsdWUgPSBjYWxjR3Jhdml0eShcbiAgICBiYXRjaFNpemUsXG4gICAgY2FsY1RvdGFsR3Jhdml0eVBvaW50cyhmZXJtZW50YWJsZXMsIGVmZmljaWVuY3kpXG4gIClcbiAgcmV0dXJuIHtcbiAgICB1bml0OiAnc2cnLFxuICAgIHZhbHVlOiBvZ1ZhbHVlLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjYWxjRmluYWxHcmF2aXR5ID0gKFxuICBiYXRjaFNpemU6IFZvbHVtZVR5cGUsXG4gIGZlcm1lbnRhYmxlczogQXJyYXk8RmVybWVudGFibGVBZGRpdGlvblR5cGU+LFxuICBlZmZpY2llbmN5OiBFZmZpY2llbmN5VHlwZSxcbiAgY3VsdHVyZXM6IEFycmF5PEN1bHR1cmVBZGRpdGlvblR5cGU+XG4pOiBHcmF2aXR5VHlwZSA9PiB7XG4gIGNvbnN0IGZnVmFsdWUgPSBjYWxjR3Jhdml0eShcbiAgICBiYXRjaFNpemUsXG4gICAgY2FsY1RvdGFsR3Jhdml0eVBvaW50cyhmZXJtZW50YWJsZXMsIGVmZmljaWVuY3ksIGN1bHR1cmVzWzBdLmF0dGVudWF0aW9uKVxuICApXG4gIHJldHVybiB7XG4gICAgdW5pdDogJ3NnJyxcbiAgICB2YWx1ZTogZmdWYWx1ZSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2FsY0JvaWxHcmF2aXR5ID0gKFxuICBiYXRjaFNpemU6IFZvbHVtZVR5cGUsXG4gIGJvaWxTaXplOiBWb2x1bWVUeXBlLFxuICBPRzogR3Jhdml0eVR5cGVcbik6IEdyYXZpdHlUeXBlID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1bml0OiAnc2cnLFxuICAgIHZhbHVlOiBib2lsR3Jhdml0eShcbiAgICAgIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoYmF0Y2hTaXplLCAnZ2FsJyksXG4gICAgICBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKGJvaWxTaXplLCAnZ2FsJyksXG4gICAgICBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKE9HLCAnc2cnKVxuICAgICksXG4gIH1cbn1cbiIsImltcG9ydCB7IHN1bSB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgeyBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlIH0gZnJvbSAnLi91bml0cydcbmltcG9ydCB7IHVzZSwgYm9pbFRpbWUgfSBmcm9tICcuL3RpbWluZydcbmltcG9ydCB7XG4gIFZvbHVtZVR5cGUsXG4gIEhvcEFkZGl0aW9uVHlwZSxcbiAgQml0dGVybmVzc1R5cGUsXG4gIEdyYXZpdHlUeXBlLFxufSBmcm9tICcuL3R5cGVzL2JlZXJqc29uJ1xuXG5jb25zdCBhbHBoYUFjaWRVbml0cyA9IChhbW91bnRJbk96OiBudW1iZXIsIGFscGhhQWNpZDogbnVtYmVyKTogbnVtYmVyID0+XG4gIGFtb3VudEluT3ogKiBhbHBoYUFjaWRcblxuY29uc3QgZ3Jhdml0eUZhY3RvciA9IChib2lsR3Jhdml0eVZhbHVlOiBudW1iZXIpOiBudW1iZXIgPT5cbiAgMS42NSAqIE1hdGgucG93KDAuMDAwMTI1LCBib2lsR3Jhdml0eVZhbHVlIC0gMSlcblxuY29uc3QgdGltZUZhY3RvciA9IChib2lsVGltZUluTWluOiBudW1iZXIpOiBudW1iZXIgPT5cbiAgKDEgLSBNYXRoLmV4cCgtMC4wNCAqIGJvaWxUaW1lSW5NaW4pKSAvIDQuMTVcblxuY29uc3QgcGVsbGV0RmFjdG9yID0gKGZvcm06IHN0cmluZyA9ICcnKTogbnVtYmVyID0+XG4gIGZvcm0gPT09ICdwZWxsZXQnID8gMS4xIDogMVxuXG5jb25zdCBpYnVVdGlsaXphdGlvbiA9IChcbiAgaG9wRm9ybTogc3RyaW5nID0gJycsXG4gIGJvaWxHcmF2aXR5VmFsdWU6IG51bWJlcixcbiAgYm9pbFRpbWVJbk1pbjogbnVtYmVyID0gMFxuKSA9PlxuICBwZWxsZXRGYWN0b3IoaG9wRm9ybSkgKlxuICBncmF2aXR5RmFjdG9yKGJvaWxHcmF2aXR5VmFsdWUpICpcbiAgdGltZUZhY3Rvcihib2lsVGltZUluTWluKVxuXG4vLyBHbGVubiBUaW5zZXRoIGRldmVsb3BlZCB0aGUgZm9sbG93aW5nIGZvcm11bGEgdG8gY2FsY3VsYXRlIGJpdHRlcm5lc3MgaW4gSUJVczpcbi8vIElCVSA9IChVICogb3pzIGhvcHMgKiA3NDkwKS9Wb2x1bWUgKGluIGdhbGxvbnMpIFUgcmVwcmVzZW50cyB0aGUgdXRpbGl6YXRpb24gb2YgdGhlIGhvcHMgKGNvbnZlcnNpb24gdG8gaXNvLWFscGhhLWFjaWRzKSBiYXNlZCBvbiBib2lsIHRpbWUgYW5kIHdvcnQgZ3Jhdml0eS5cbi8vIFUgPSBiaWduZXNzIGZhY3RvciAqIGJvaWwgdGltZSBmYWN0b3JcblxuLy8gaHR0cDovL3d3dy5ob3d0b2JyZXcuY29tL2Jvb2svc2VjdGlvbi0xL2hvcHMvaG9wLWJpdHRlcmluZy1jYWxjdWxhdGlvbnNcblxuZXhwb3J0IGNvbnN0IGJpdHRlcm5lc3NJYnVUaW5zZXRoID0gKFxuICBob3BzOiBBcnJheTxIb3BBZGRpdGlvblR5cGU+LFxuICBib2lsR3Jhdml0eTogR3Jhdml0eVR5cGUsXG4gIHBvc3RCb2lsVm9sdW1lOiBWb2x1bWVUeXBlXG4pOiBCaXR0ZXJuZXNzVHlwZSA9PiB7XG4gIGNvbnN0IGJpdHRlcm5lc3MgPSBzdW0oXG4gICAgaG9wcy5tYXAoKHsgYW1vdW50LCBhbHBoYV9hY2lkLCBmb3JtLCB0aW1pbmcgfSkgPT4ge1xuICAgICAgLy8gVE9ETzogcmVzZWFyY2ggbmVlZGVkXG5cbiAgICAgIGlmICghdXNlKHRpbWluZykuYWRkX3RvX2JvaWwpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cblxuICAgICAgY29uc3QgQUFVID0gYWxwaGFBY2lkVW5pdHMoXG4gICAgICAgIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUoYW1vdW50LCAnb3onKSxcbiAgICAgICAgYWxwaGFfYWNpZC52YWx1ZVxuICAgICAgKVxuICAgICAgY29uc3QgVSA9IGlidVV0aWxpemF0aW9uKFxuICAgICAgICBmb3JtLFxuICAgICAgICBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKGJvaWxHcmF2aXR5LCAnc2cnKSxcbiAgICAgICAgYm9pbFRpbWUodGltaW5nKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gKFUgKiBBQVUgKiA3NC44OSkgLyBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKHBvc3RCb2lsVm9sdW1lLCAnZ2FsJylcbiAgICB9KVxuICApXG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogYml0dGVybmVzcyxcbiAgICB1bml0OiAnSUJVcycsXG4gIH1cbn1cblxuLy8gVGhlIHByZWNlaXZlZCBiaXR0ZXJuZXNzIGV4cHJlc3NlZCBpbiBhIHJhdGlvIG9mIElCVXMgdG8gZ3Jhdml0eS4gVGhpcyBpcyBmcmVxdWVudGx5IHNlZW4gZXhwcmVzc2VkIGFzIEJVL0dVLlxuLy8gVGhlIEdyYXZpdHkgVW5pdHMgYXJlIHRoZSBkZWNpbWFsIHBvcnRpb24gb2YgdGhlIG9yaWdpbmFsIGdyYXZpdHlcbi8vIGh0dHA6Ly9iZWVyc21pdGguY29tL2Jsb2cvMjAwOS8wOS8yNi9iYWxhbmNpbmcteW91ci1iZWVyLXdpdGgtdGhlLWJpdHRlcm5lc3MtcmF0aW8vXG5leHBvcnQgY29uc3QgYml0dGVybmVzc1JhdGlvID0gKGlidTogbnVtYmVyLCBndTogbnVtYmVyKSA9PiBpYnUgLyBndVxuXG4vLyByYWdlclxuY29uc3QgcmFnZXJIb3BHcmF2aXR5QWRqdXN0bWVudCA9IChzZ2IpID0+XG4gIHNnYiA8PSAxLjA1ID8gMCA6IChzZ2IgLSAxLjA1KSAvIDAuMlxuY29uc3QgcmFnZXJVdGlsID0gKHRpbWUpID0+IDE4LjExICsgMTMuODYgKiBNYXRoLnRhbmgoKHRpbWUgLSAzMS4zMikgLyAxOC4yNylcblxuY29uc3QgcmFnZXJIb3BJYnUgPSAoXG4gIGhvcDogSG9wQWRkaXRpb25UeXBlLFxuICBib2lsR3Jhdml0eTogR3Jhdml0eVR5cGUsXG4gIHBvc3RCb2lsVm9sdW1lOiBWb2x1bWVUeXBlXG4pOiBudW1iZXIgPT4ge1xuICBpZiAoIXVzZShob3AudGltaW5nKS5hZGRfdG9fYm9pbCkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICBjb25zdCBVID1cbiAgICAocmFnZXJVdGlsKE1hdGguZmxvb3IoYm9pbFRpbWUoaG9wLnRpbWluZykgKyAwLjUpKSAqXG4gICAgICBwZWxsZXRGYWN0b3IoaG9wLmZvcm0pKSAvXG4gICAgMTAwXG4gIGNvbnN0IEFBVSA9IGFscGhhQWNpZFVuaXRzKGhvcC5hbW91bnQudmFsdWUsIGhvcC5hbHBoYV9hY2lkLnZhbHVlKVxuXG4gIHJldHVybiAoXG4gICAgKFUgKiBBQVUgKiA3NC44OSkgL1xuICAgIHBvc3RCb2lsVm9sdW1lLnZhbHVlIC9cbiAgICAoMS4wICsgcmFnZXJIb3BHcmF2aXR5QWRqdXN0bWVudChib2lsR3Jhdml0eS52YWx1ZSkpXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGJpdHRlcm5lc3NJYnVSYWdlciA9IChcbiAgaG9wczogQXJyYXk8SG9wQWRkaXRpb25UeXBlPixcbiAgYm9pbEdyYXZpdHk6IEdyYXZpdHlUeXBlLFxuICBwb3N0Qm9pbFZvbHVtZTogVm9sdW1lVHlwZVxuKTogQml0dGVybmVzc1R5cGUgPT4ge1xuICBjb25zdCBiaXR0ZXJuZXNzID0gc3VtKFxuICAgIGhvcHMubWFwKChob3A6IEhvcEFkZGl0aW9uVHlwZSkgPT5cbiAgICAgIHJhZ2VySG9wSWJ1KGhvcCwgYm9pbEdyYXZpdHksIHBvc3RCb2lsVm9sdW1lKVxuICAgIClcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGJpdHRlcm5lc3MsXG4gICAgdW5pdDogJ0lCVXMnLFxuICB9XG59XG4iLCJpbXBvcnQgeyB5ZWFzdENvdW50LCB5ZWFzdE5lZWRlZCwgeWVhc3RTdGFydGVyR3JvdyB9IGZyb20gXCIuL2N1bHR1cmVcIjtcbmltcG9ydCB7IGNhbGNDYWxvcmllcywgY2FyYm9uYXRpb24gfSBmcm9tIFwiLi9jYXJib25hdGlvblwiO1xuXG5pbXBvcnQge1xuICBiaXR0ZXJuZXNzSWJ1UmFnZXIsXG4gIGJpdHRlcm5lc3NJYnVUaW5zZXRoLFxuICBiaXR0ZXJuZXNzUmF0aW8sXG59IGZyb20gXCIuL2hvcHNcIjtcblxuaW1wb3J0IHsgaXNOb3RFbXB0eUFycmF5LCByb3VuZE1lYXN1cmFibGUgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5pbXBvcnQgeyBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlIH0gZnJvbSBcIi4vdW5pdHNcIjtcbmltcG9ydCB7IGNvbnZlcnQgfSBmcm9tIFwiLi9jb252ZXJ0ZXIvY29udmVydGVyXCI7XG5cbmltcG9ydCB7XG4gIGNhbGNNYXNoR3JhaW5XZWlnaHQsXG4gIHJlY2FsY3VsYXRlTWFzaFN0ZXBzLFxuICB1cGRhdGVTcGFyZ2VWb2x1bWUsXG59IGZyb20gXCIuL21hc2hcIjtcbmltcG9ydCB7IGNhbGNCb2lsVm9sdW1lcywgY2FsY01hc2hWb2x1bWVzIH0gZnJvbSBcIi4vdm9sdW1lc1wiO1xuaW1wb3J0IHsgY2FsY1dhdGVyQ2hlbWlzdHJ5IH0gZnJvbSBcIi4vd2F0ZXJDaGVtXCI7XG5cbmltcG9ydCB0eXBlIHtcbiAgUmVjaXBlVHlwZSxcbiAgTWFzaFByb2NlZHVyZVR5cGUsXG4gIEVxdWlwbWVudEl0ZW1UeXBlLFxuICBHcmF2aXR5VHlwZSxcbiAgQ29sb3JUeXBlLFxuICBQZXJjZW50VHlwZSxcbiAgQml0dGVybmVzc1R5cGUsXG4gIEN1bHR1cmVBZGRpdGlvblR5cGUsXG4gIFZvbHVtZVR5cGUsXG4gIEJvaWxQcm9jZWR1cmVUeXBlLFxufSBmcm9tIFwiLi90eXBlcy9iZWVyanNvblwiO1xuXG5pbXBvcnQge1xuICBjYWxjT3JpZ2luYWxHcmF2aXR5LFxuICBjYWxjRmluYWxHcmF2aXR5LFxuICBjYWxjQm9pbEdyYXZpdHksXG59IGZyb20gXCIuL2dyYXZpdHlcIjtcbmltcG9ydCB7IHNybVRvQ3NzLCBzcm1Ub1JnYiwgY2FsY0NvbG9yIH0gZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCB7IGNhbGNBQlYgfSBmcm9tIFwiLi9hYnZcIjtcblxudHlwZSBTdGF0cyA9IHtcbiAgb3JpZ2luYWxfZ3Jhdml0eTogR3Jhdml0eVR5cGU7XG4gIGZpbmFsX2dyYXZpdHk6IEdyYXZpdHlUeXBlO1xuICBhbGNvaG9sX2J5X3ZvbHVtZTogUGVyY2VudFR5cGU7XG4gIGlidV9lc3RpbWF0ZTogQml0dGVybmVzc1R5cGU7XG4gIGNvbG9yX2VzdGltYXRlOiBDb2xvclR5cGU7XG59O1xuXG50eXBlIFZvbHVtZXMgPSB7XG4gIHNwYXJnZV92b2x1bWU/OiBWb2x1bWVUeXBlO1xuICBtYXNoX3ZvbHVtZT86IFZvbHVtZVR5cGU7XG4gIHRvdGFsX3ZvbHVtZT86IFZvbHVtZVR5cGU7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVSZWNpcGVCZWVySlNPTiA9IChcbiAgcmVjaXBlOiBSZWNpcGVUeXBlLFxuICBtYXNoOiBNYXNoUHJvY2VkdXJlVHlwZSxcbiAgZXF1aXBtZW50OiB7XG4gICAgaGx0PzogRXF1aXBtZW50SXRlbVR5cGU7XG4gICAgbWFzaF90dW4/OiBFcXVpcG1lbnRJdGVtVHlwZTtcbiAgICBicmV3X2tldHRsZT86IEVxdWlwbWVudEl0ZW1UeXBlO1xuICAgIGZlcm1lbnRlcj86IEVxdWlwbWVudEl0ZW1UeXBlO1xuICB9XG4pOiB7XG4gIHN0YXRzOiBTdGF0cztcbiAgbWFzaDogTWFzaFByb2NlZHVyZVR5cGU7XG4gIGJvaWw6IEJvaWxQcm9jZWR1cmVUeXBlO1xuICB2b2x1bWVzOiBWb2x1bWVzO1xufSA9PiB7XG4gIGNvbnN0IHsgYmF0Y2hfc2l6ZSwgYm9pbCwgZWZmaWNpZW5jeSwgaW5ncmVkaWVudHMgfSA9IHJlY2lwZTtcblxuICBjb25zdCB7IGZlcm1lbnRhYmxlX2FkZGl0aW9ucywgaG9wX2FkZGl0aW9ucywgY3VsdHVyZV9hZGRpdGlvbnMgfSA9XG4gICAgaW5ncmVkaWVudHM7XG5cbiAgbGV0IG9yaWdpbmFsX2dyYXZpdHk6IEdyYXZpdHlUeXBlID0ge1xuICAgIHVuaXQ6IFwic2dcIixcbiAgICB2YWx1ZTogbnVsbCxcbiAgfTtcbiAgbGV0IGZpbmFsX2dyYXZpdHk6IEdyYXZpdHlUeXBlID0ge1xuICAgIHVuaXQ6IFwic2dcIixcbiAgICB2YWx1ZTogbnVsbCxcbiAgfTtcbiAgbGV0IGNvbG9yOiBDb2xvclR5cGUgPSB7XG4gICAgdW5pdDogXCJTUk1cIixcbiAgICB2YWx1ZTogbnVsbCxcbiAgfTtcbiAgbGV0IGlidTogQml0dGVybmVzc1R5cGUgPSB7XG4gICAgdW5pdDogXCJJQlVzXCIsXG4gICAgdmFsdWU6IG51bGwsXG4gIH07XG4gIGxldCBhYnY6IFBlcmNlbnRUeXBlID0ge1xuICAgIHVuaXQ6IFwiJVwiLFxuICAgIHZhbHVlOiBudWxsLFxuICB9O1xuICBsZXQgdm9sdW1lcyA9IG51bGw7XG4gIGxldCBjYWxjdWxhdGVkTWFzaCA9IG51bGw7XG4gIGxldCBjYWxjdWxhdGVkQm9pbCA9IG51bGw7XG5cbiAgaWYgKGlzTm90RW1wdHlBcnJheShmZXJtZW50YWJsZV9hZGRpdGlvbnMpKSB7XG4gICAgb3JpZ2luYWxfZ3Jhdml0eSA9IGNhbGNPcmlnaW5hbEdyYXZpdHkoXG4gICAgICBiYXRjaF9zaXplLFxuICAgICAgZmVybWVudGFibGVfYWRkaXRpb25zLFxuICAgICAgZWZmaWNpZW5jeVxuICAgICk7XG5cbiAgICBjb25zdCBkZWZhdWx0Q3VsdHVyZUFkZGl0aW9uOiBDdWx0dXJlQWRkaXRpb25UeXBlID0ge1xuICAgICAgbmFtZTogXCJEZWZhdWx0IEN1bHR1cmVcIixcbiAgICAgIHR5cGU6IFwiYWxlXCIsXG4gICAgICBmb3JtOiBcImxpcXVpZFwiLFxuICAgICAgYXR0ZW51YXRpb246IHsgdmFsdWU6IDc1LCB1bml0OiBcIiVcIiB9LFxuICAgIH07XG5cbiAgICBmaW5hbF9ncmF2aXR5ID0gY2FsY0ZpbmFsR3Jhdml0eShcbiAgICAgIGJhdGNoX3NpemUsXG4gICAgICBmZXJtZW50YWJsZV9hZGRpdGlvbnMsXG4gICAgICBlZmZpY2llbmN5LFxuICAgICAgaXNOb3RFbXB0eUFycmF5KGN1bHR1cmVfYWRkaXRpb25zKVxuICAgICAgICA/IGN1bHR1cmVfYWRkaXRpb25zXG4gICAgICAgIDogW2RlZmF1bHRDdWx0dXJlQWRkaXRpb25dXG4gICAgKTtcblxuICAgIGFidiA9IGNhbGNBQlYob3JpZ2luYWxfZ3Jhdml0eSwgZmluYWxfZ3Jhdml0eSk7XG5cbiAgICBjb25zdCB7IHByZV9ib2lsX3NpemUgfSA9IGNhbGNCb2lsVm9sdW1lcyhiYXRjaF9zaXplLCBib2lsLCBlcXVpcG1lbnQpO1xuICAgIHZvbHVtZXMgPSB7XG4gICAgICBwcmVfYm9pbF9zaXplLFxuICAgIH07XG5cbiAgICBpZiAobWFzaCkge1xuICAgICAgY29uc3QgbWFzaEdyYWluV2VpZ2h0ID0gY2FsY01hc2hHcmFpbldlaWdodChmZXJtZW50YWJsZV9hZGRpdGlvbnMpO1xuXG4gICAgICBjb25zdCBtYXNoU3RlcHMgPSByZWNhbGN1bGF0ZU1hc2hTdGVwcyhcbiAgICAgICAgbWFzaC5tYXNoX3N0ZXBzLFxuICAgICAgICBtYXNoLmdyYWluX3RlbXBlcmF0dXJlLFxuICAgICAgICBtYXNoR3JhaW5XZWlnaHRcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHsgc3BhcmdlX3ZvbHVtZSwgbWFzaF92b2x1bWUsIHRvdGFsX3ZvbHVtZSB9ID0gY2FsY01hc2hWb2x1bWVzKFxuICAgICAgICBwcmVfYm9pbF9zaXplLFxuICAgICAgICBtYXNoU3RlcHMsXG4gICAgICAgIG1hc2hHcmFpbldlaWdodCxcbiAgICAgICAgZXF1aXBtZW50XG4gICAgICApO1xuXG4gICAgICB2b2x1bWVzID0ge1xuICAgICAgICAuLi52b2x1bWVzLFxuICAgICAgICBzcGFyZ2Vfdm9sdW1lLFxuICAgICAgICBtYXNoX3ZvbHVtZSxcbiAgICAgICAgdG90YWxfdm9sdW1lLFxuICAgICAgfTtcblxuICAgICAgY2FsY3VsYXRlZE1hc2ggPSB7XG4gICAgICAgIC4uLm1hc2gsXG4gICAgICAgIG1hc2hfc3RlcHM6IHVwZGF0ZVNwYXJnZVZvbHVtZShtYXNoU3RlcHMsIHNwYXJnZV92b2x1bWUpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoYm9pbCkge1xuICAgICAgY2FsY3VsYXRlZEJvaWwgPSB7IC4uLmJvaWwsIHByZV9ib2lsX3NpemUgfTtcbiAgICB9XG5cbiAgICBjb2xvciA9IGNhbGNDb2xvcihmZXJtZW50YWJsZV9hZGRpdGlvbnMsIGJhdGNoX3NpemUpO1xuXG4gICAgaWYgKGlzTm90RW1wdHlBcnJheShob3BfYWRkaXRpb25zKSkge1xuICAgICAgY29uc3QgYm9pbEdyYXZpdHkgPSBjYWxjQm9pbEdyYXZpdHkoXG4gICAgICAgIGJhdGNoX3NpemUsXG4gICAgICAgIHByZV9ib2lsX3NpemUsXG4gICAgICAgIG9yaWdpbmFsX2dyYXZpdHlcbiAgICAgICk7XG4gICAgICBpYnUgPSBiaXR0ZXJuZXNzSWJ1VGluc2V0aChob3BfYWRkaXRpb25zLCBib2lsR3Jhdml0eSwgYmF0Y2hfc2l6ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0czoge1xuICAgICAgb3JpZ2luYWxfZ3Jhdml0eTogcm91bmRNZWFzdXJhYmxlKG9yaWdpbmFsX2dyYXZpdHksIDMpLFxuICAgICAgZmluYWxfZ3Jhdml0eTogcm91bmRNZWFzdXJhYmxlKGZpbmFsX2dyYXZpdHksIDMpLFxuICAgICAgYWxjb2hvbF9ieV92b2x1bWU6IHJvdW5kTWVhc3VyYWJsZShhYnYsIDEpLFxuICAgICAgaWJ1X2VzdGltYXRlOiByb3VuZE1lYXN1cmFibGUoaWJ1LCAxKSxcbiAgICAgIGNvbG9yX2VzdGltYXRlOiByb3VuZE1lYXN1cmFibGUoY29sb3IsIDEpLFxuICAgIH0sXG4gICAgdm9sdW1lcyxcbiAgICBtYXNoOiBjYWxjdWxhdGVkTWFzaCxcbiAgICBib2lsOiBjYWxjdWxhdGVkQm9pbCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7XG4gIGNvbnZlcnQsXG4gIGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUsXG4gIGNhbGNPcmlnaW5hbEdyYXZpdHksXG4gIGNhbGNGaW5hbEdyYXZpdHksXG4gIGNhbGNCb2lsR3Jhdml0eSxcbiAgY2FsY0NvbG9yLFxuICBzcm1Ub0NzcyxcbiAgc3JtVG9SZ2IsXG4gIGNhbGNBQlYsXG4gIGJpdHRlcm5lc3NJYnVSYWdlcixcbiAgYml0dGVybmVzc0lidVRpbnNldGgsXG4gIGJpdHRlcm5lc3NSYXRpbyxcbiAgY2FsY3VsYXRlUmVjaXBlQmVlckpTT04sXG4gIGNhbGNCb2lsVm9sdW1lcyxcbiAgY2FsY01hc2hWb2x1bWVzLFxuICBjYWxjTWFzaEdyYWluV2VpZ2h0LFxuICByZWNhbGN1bGF0ZU1hc2hTdGVwcyxcbiAgLy9UT0RPOiB1c2UgYmVlckpTT05cbiAgY2FsY0NhbG9yaWVzLFxuICBjYXJib25hdGlvbixcbiAgeWVhc3RDb3VudCxcbiAgeWVhc3ROZWVkZWQsXG4gIHllYXN0U3RhcnRlckdyb3csXG59O1xuIiwiaW1wb3J0IHtcbiAgRmVybWVudGFibGVBZGRpdGlvblR5cGUsXG4gIE1hc2hTdGVwVHlwZSxcbiAgVGVtcGVyYXR1cmVUeXBlLFxuICBWb2x1bWVUeXBlLFxuICBNYXNzVHlwZSxcbn0gZnJvbSAnLi90eXBlcy9iZWVyanNvbidcbmltcG9ydCB7IGdldE1lYXN1cmFibGVWYWx1ZSwgc3VtIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCB7IGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUgfSBmcm9tICcuL3VuaXRzJ1xuaW1wb3J0IHsgdXNlIH0gZnJvbSAnLi90aW1pbmcnXG5cbmNvbnN0IGdyYWluVm9sdW1lID0gMC42NTIgLy8gbC9rZ1xuY29uc3QgYm9pbGluZ1RlbXAgPSAxMDBcbmNvbnN0IG1hbHRTcGVjaWZpY0hlYXQgPSAwLjM4IC8vIENhbC9ncmFtLUNcbmNvbnN0IGluaXRpYWxXYXRlckdyYWluUmF0aW8gPSAyLjUgLy8gbC9rZ1xuXG5jb25zdCBhZGp1c3RUdW5NYXNzID0gKHR1blZvbHVtZSwgdG90Vm9sdW1lLCB0dW5NYXNzKSA9PiB7XG4gIHR1blZvbHVtZSA9IHR1blZvbHVtZSAqIDAuOFxuICByZXR1cm4gdHVuVm9sdW1lID4gMCAmJiB0b3RWb2x1bWUgPCB0dW5Wb2x1bWVcbiAgICA/ICh0dW5NYXNzICogdG90Vm9sdW1lKSAvIHR1blZvbHVtZVxuICAgIDogdHVuTWFzc1xufVxuXG5jb25zdCBjYWxjRGVjb2N0aW9uU3RlcCA9IChcbiAgc3RhcnRUZW1wLFxuICB0YXJnZXRUZW1wLFxuICBzdGFydFZvbHVtZSxcbiAgbWFzaEdyYWluV2VpZ2h0LFxuICB0dW5NYXNzID0gMCxcbiAgdHVuU3BlY2lmaWNIZWF0ID0gMCxcbiAgdHVuVm9sdW1lID0gMFxuKTogeyBhbW91bnQ6IFZvbHVtZVR5cGUgfSA9PiB7XG4gIGNvbnN0IHRvdFZvbHVtZSA9IGdyYWluVm9sdW1lICogbWFzaEdyYWluV2VpZ2h0ICsgc3RhcnRWb2x1bWVcbiAgY29uc3QgYWRqdXN0ZWRUdW5NYXNzID0gYWRqdXN0VHVuTWFzcyh0dW5Wb2x1bWUsIHRvdFZvbHVtZSwgdHVuTWFzcylcbiAgbGV0IGZyYWN0aW9uID1cbiAgICAoKChtYWx0U3BlY2lmaWNIZWF0ICogbWFzaEdyYWluV2VpZ2h0ICtcbiAgICAgIHR1blNwZWNpZmljSGVhdCAqIGFkanVzdGVkVHVuTWFzcyArXG4gICAgICBzdGFydFZvbHVtZSkgL1xuICAgICAgKG1hbHRTcGVjaWZpY0hlYXQgKiBtYXNoR3JhaW5XZWlnaHQgKyBzdGFydFZvbHVtZSkpICpcbiAgICAgICh0YXJnZXRUZW1wIC0gc3RhcnRUZW1wKSkgL1xuICAgIChib2lsaW5nVGVtcCAtIHN0YXJ0VGVtcClcblxuICBpZiAoZnJhY3Rpb24gPiAxKSB7XG4gICAgZnJhY3Rpb24gPSAxXG4gIH1cbiAgcmV0dXJuIHsgYW1vdW50OiB7IHZhbHVlOiB0b3RWb2x1bWUgKiBmcmFjdGlvbiwgdW5pdDogJ2wnIH0gfVxufVxuXG5jb25zdCBjYWxjSW5mdXNpb25TdGVwID0gKFxuICBzdGFydFRlbXAsXG4gIHN0ZXBUZW1wLFxuICBzdGFydFZvbHVtZSxcbiAgaW5kZXgsXG4gIG1hc2hHcmFpbldlaWdodFxuKToge1xuICBhbW91bnQ6IFZvbHVtZVR5cGVcbiAgaW5mdXNlX3RlbXBlcmF0dXJlOiBUZW1wZXJhdHVyZVR5cGVcbn0gPT4ge1xuICBjb25zdCBpbmZ1c2VUZW1wID1cbiAgICBpbmRleCA+IDBcbiAgICAgID8gYm9pbGluZ1RlbXBcbiAgICAgIDogKG1hbHRTcGVjaWZpY0hlYXQgKiAoc3RlcFRlbXAgLSBzdGFydFRlbXApKSAvIGluaXRpYWxXYXRlckdyYWluUmF0aW8gK1xuICAgICAgICBzdGVwVGVtcFxuICBjb25zdCBpbmZ1c2VBbW91bnQgPVxuICAgICgobWFzaEdyYWluV2VpZ2h0ICogbWFsdFNwZWNpZmljSGVhdCArIHN0YXJ0Vm9sdW1lKSAqXG4gICAgICAoc3RlcFRlbXAgLSBzdGFydFRlbXApKSAvXG4gICAgKGluZnVzZVRlbXAgLSBzdGVwVGVtcClcblxuICByZXR1cm4ge1xuICAgIGluZnVzZV90ZW1wZXJhdHVyZToge1xuICAgICAgdW5pdDogJ0MnLFxuICAgICAgdmFsdWU6IGluZnVzZVRlbXAsXG4gICAgfSxcbiAgICBhbW91bnQ6IHtcbiAgICAgIHVuaXQ6ICdsJyxcbiAgICAgIHZhbHVlOiBpbmZ1c2VBbW91bnQsXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjYWxjdWxhdGVNYXNoU3RlcHMoXG4gIG1hc2hfc3RlcHM6IEFycmF5PE1hc2hTdGVwVHlwZT4sXG4gIGdyYWluX3RlbXBlcmF0dXJlOiBUZW1wZXJhdHVyZVR5cGUsXG4gIG1hc2hHcmFpbldlaWdodDogTWFzc1R5cGVcbik6IEFycmF5PE1hc2hTdGVwVHlwZT4ge1xuICBsZXQgc3RhcnRWb2x1bWUgPSAwXG4gIGxldCBzdGFydFRlbXAgPSBncmFpbl90ZW1wZXJhdHVyZS52YWx1ZVxuXG4gIGNvbnN0IGdyYWluV2VpZ2h0VmFsdWUgPSBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKG1hc2hHcmFpbldlaWdodCwgJ2tnJylcblxuICByZXR1cm4gbWFzaF9zdGVwcy5tYXAoKHN0ZXA6IE1hc2hTdGVwVHlwZSwgaW5kZXg6IG51bWJlcik6IE1hc2hTdGVwVHlwZSA9PiB7XG4gICAgY29uc3Qgc3RlcFRlbXAgPSBnZXRNZWFzdXJhYmxlVmFsdWUoc3RlcC5zdGVwX3RlbXBlcmF0dXJlKVxuXG4gICAgc3dpdGNoIChzdGVwLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2RlY29jdGlvbic6IHtcbiAgICAgICAgY29uc3QgeyBhbW91bnQgfSA9IGNhbGNEZWNvY3Rpb25TdGVwKFxuICAgICAgICAgIHN0YXJ0VGVtcCxcbiAgICAgICAgICBzdGVwVGVtcCxcbiAgICAgICAgICBzdGFydFZvbHVtZSxcbiAgICAgICAgICBncmFpbldlaWdodFZhbHVlXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0ZXAsXG4gICAgICAgICAgYW1vdW50LFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXNlICdpbmZ1c2lvbic6IHtcbiAgICAgICAgY29uc3QgeyBhbW91bnQsIGluZnVzZV90ZW1wZXJhdHVyZSB9ID0gY2FsY0luZnVzaW9uU3RlcChcbiAgICAgICAgICBzdGFydFRlbXAsXG4gICAgICAgICAgc3RlcFRlbXAsXG4gICAgICAgICAgc3RhcnRWb2x1bWUsXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgZ3JhaW5XZWlnaHRWYWx1ZVxuICAgICAgICApXG5cbiAgICAgICAgc3RhcnRWb2x1bWUgKz0gYW1vdW50LnZhbHVlXG4gICAgICAgIHN0YXJ0VGVtcCA9IHN0ZXBUZW1wXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGVwLFxuICAgICAgICAgIGluZnVzZV90ZW1wZXJhdHVyZSxcbiAgICAgICAgICBhbW91bnQsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGVwXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgY2FsY01hc2hHcmFpbldlaWdodCA9IChcbiAgZmVybWVudGFibGVzOiBBcnJheTxGZXJtZW50YWJsZUFkZGl0aW9uVHlwZT5cbik6IE1hc3NUeXBlID0+IHtcbiAgY29uc3QgdmFsdWUgPSBzdW0oXG4gICAgZmVybWVudGFibGVzLm1hcCgoeyB0aW1pbmcsIHR5cGUsIGFtb3VudCB9OiBGZXJtZW50YWJsZUFkZGl0aW9uVHlwZSkgPT5cbiAgICAgIHR5cGUgPT09ICdncmFpbicgJiYgdXNlKHRpbWluZykuYWRkX3RvX21hc2hcbiAgICAgICAgPyBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKGFtb3VudCwgJ2xiJylcbiAgICAgICAgOiAwXG4gICAgKVxuICApXG4gIHJldHVybiB7XG4gICAgdmFsdWUsXG4gICAgdW5pdDogJ2xiJyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3BhcmdlVm9sdW1lKFxuICBtYXNoX3N0ZXBzOiBBcnJheTxNYXNoU3RlcFR5cGU+LFxuICBzcGFyZ2VWb2x1bWU6IFZvbHVtZVR5cGVcbik6IEFycmF5PE1hc2hTdGVwVHlwZT4ge1xuICByZXR1cm4gbWFzaF9zdGVwcy5tYXAoKHN0ZXApID0+IHtcbiAgICBpZiAoc3RlcC50eXBlID09PSAnc3BhcmdlJykge1xuICAgICAgcmV0dXJuIHsgLi4uc3RlcCwgYW1vdW50OiBzcGFyZ2VWb2x1bWUgfVxuICAgIH1cbiAgICByZXR1cm4gc3RlcFxuICB9KVxufVxuIiwiaW1wb3J0IHR5cGUgeyBUaW1pbmdUeXBlIH0gZnJvbSAnLi90eXBlcy9iZWVyanNvbidcblxuZXhwb3J0IGNvbnN0IHVzZSA9IChcbiAgdGltaW5nOiBUaW1pbmdUeXBlID0ge31cbik6IHtcbiAgYWRkX3RvX2JvaWw6IGJvb2xlYW5cbiAgYWRkX3RvX21hc2g6IGJvb2xlYW5cbn0gPT4gKHtcbiAgYWRkX3RvX2JvaWw6IHRpbWluZy51c2UgPT09ICdhZGRfdG9fYm9pbCcsXG4gIGFkZF90b19tYXNoOiAhdGltaW5nLnVzZSB8fCB0aW1pbmcudXNlID09PSAnYWRkX3RvX21hc2gnLFxufSlcblxuZXhwb3J0IGNvbnN0IGJvaWxUaW1lID0gKHRpbWluZzogVGltaW5nVHlwZSA9IHt9KTogbnVtYmVyID0+XG4gIHRpbWluZy51c2UgPT09ICdhZGRfdG9fYm9pbCcgPyB0aW1pbmcudGltZS52YWx1ZSA6IDBcbiIsImV4cG9ydCB0eXBlIFllYXN0ID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgYW1vdW50OiBudW1iZXJcbiAgYXR0ZW51YXRpb24/OiBudW1iZXJcbiAgZm9ybTogJ0xpcXVpZCcgfCAnRHJ5JyB8ICdTbGFudCcgfCAnQ3VsdHVyZSdcbiAgdHlwZTogJ0FsZScgfCAnTGFnZXInIHwgJ1doZWF0JyB8ICdXaW5lJyB8ICdDaGFtcGFnbmUnXG4gIGN1bHR1cmVEYXRlPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBZZWFzdFR5cGVzID0ge1xuICBhbGU6ICdBbGUnLFxuICBsYWdlcjogJ0xhZ2VyJyxcbiAgd2hlYXQ6ICdXaGVhdCcsXG4gIHdpbmU6ICdXaW5lJyxcbiAgY2hhbXBhZ25lOiAnQ2hhbXBhZ25lJyxcbn1cbmV4cG9ydCBjb25zdCBZZWFzdEZvcm1zID0ge1xuICBsaXF1aWQ6ICdMaXF1aWQnLFxuICBkcnk6ICdEcnknLFxuICBzbGFudDogJ1NsYW50JyxcbiAgY3VsdHVyZTogJ0N1bHR1cmUnLFxufVxuIiwiaW1wb3J0IHsgY29udmVydCB9IGZyb20gJy4vY29udmVydGVyL2NvbnZlcnRlcidcblxudHlwZSBNZWFzdXJhYmxlID0ge1xuICB2YWx1ZTogbnVtYmVyXG4gIHVuaXQ6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgY29udmVydE1lYXN1cmFibGVWYWx1ZSA9IChcbiAgbWVhc3VyYWJsZTogTWVhc3VyYWJsZSxcbiAgdW5pdDogc3RyaW5nLFxuICBwcmVjaXNpb246IG51bWJlciA9IDRcbikgPT4ge1xuICByZXR1cm4gY29udmVydChtZWFzdXJhYmxlLnZhbHVlLCBtZWFzdXJhYmxlLnVuaXQsIHVuaXQsIHByZWNpc2lvbilcbn1cbiIsImV4cG9ydCBjb25zdCBrZ1RvT3VuY2VzID0gKGs6IG51bWJlcikgPT4gayAqIDM1LjI3Mzk2MTlcblxuZXhwb3J0IGNvbnN0IGtnVG9Qb3VuZHMgPSAoazogbnVtYmVyKSA9PiBrZ1RvT3VuY2VzKGspIC8gMTZcblxuZXhwb3J0IGNvbnN0IHBvdW5kc1Rva2cgPSAocDogbnVtYmVyKSA9PiBwIC8gMi4yMDRcblxuZXhwb3J0IGNvbnN0IGxpdGVyc1RvT3VuY2VzID0gKGw6IG51bWJlcikgPT4gbCAvIDAuMDI5NTczNVxuXG5leHBvcnQgY29uc3Qgb3VuY2VzVG9MaXRlcnMgPSAobzogbnVtYmVyKSA9PiBvICogMC4wMjk1NzM1XG5cbmV4cG9ydCBjb25zdCBsaXRlcnNUb0dhbGxvbnMgPSAobDogbnVtYmVyKSA9PiBsaXRlcnNUb091bmNlcyhsKSAvIDEyOFxuXG5leHBvcnQgY29uc3QgZ2FsbG9uc1RvTGl0ZXJzID0gKGc6IG51bWJlcikgPT4gb3VuY2VzVG9MaXRlcnMoZyAqIDEyOClcblxuZXhwb3J0IGNvbnN0IGZhaHJlbmhlaXRUb0NlbHNpdXMgPSAoZjogbnVtYmVyKSA9PiAoZiAtIDMyKSAvIDEuOFxuXG5leHBvcnQgY29uc3QgY2Vsc2l1c1RvRmFocmVuaGVpdCA9IChjOiBudW1iZXIpID0+IGMgKiAxLjggKyAzMlxuXG5leHBvcnQgY29uc3Qga3BhVG9Qc2kgPSAoa3BhOiBudW1iZXIpID0+IGtwYSAqIDAuMTQ1MDM3NzM3NzMwMjA5MjNcblxuZXhwb3J0IGNvbnN0IHBzaVRva3BhID0gKHBzaTogbnVtYmVyKSA9PiBwc2kgKiA2Ljg5NDc1NzI5MzE2ODM2MVxuXG5leHBvcnQgY29uc3Qgc2dUb1BsYXRvID0gKHNnOiBudW1iZXIpID0+XG4gIC02MTYuODY4ICtcbiAgMTExMS4xNCAqIHNnIC1cbiAgNjMwLjI3MiAqIE1hdGgucG93KHNnLCAyKSArXG4gIDEzNS45OTcgKiBNYXRoLnBvdyhzZywgMylcblxuZXhwb3J0IGNvbnN0IHBsYXRvVG9TRyA9IChlOiBudW1iZXIpID0+IDEgKyBlIC8gKDI1OC42IC0gKGUgLyAyNTguMikgKiAyMjcuMSlcblxuZXhwb3J0IGNvbnN0IGJyaXhUb1NHID0gKGJyaXg6IG51bWJlcikgPT5cbiAgYnJpeCAvICgyNTguNiAtIChicml4IC8gMjU4LjIpICogMjI3LjEpICsgMVxuXG5leHBvcnQgY29uc3Qgc2dUb0JyaXggPSAoc2c6IG51bWJlcikgPT5cbiAgLTY2OS41NjIyICtcbiAgMTI2Mi43NzQ5ICogc2cgLVxuICA3NzUuNjgyMSAqIE1hdGgucG93KHNnLCAyKSArXG4gIDE4Mi40NjAxICogTWF0aC5wb3coc2csIDMpXG5cbmV4cG9ydCBjb25zdCBzcm1Ub0ViYyA9IChzcm06IG51bWJlcikgPT4gc3JtICogMS45N1xuXG5leHBvcnQgY29uc3QgZWJjVG9Tcm0gPSAoZWJjOiBudW1iZXIpID0+IGViYyAqIDAuNTA4XG5cbmV4cG9ydCBjb25zdCBzcm1Ub0xvdmlib25kID0gKHNybTogbnVtYmVyKSA9PiAoc3JtICsgMC43NikgLyAxLjM1NDZcblxuZXhwb3J0IGNvbnN0IGxvdmlib25kVG9Tcm0gPSAobG92aWJvbmQ6IG51bWJlcikgPT4gMS4zNTQ2ICogbG92aWJvbmQgLSAwLjc2XG5cbmV4cG9ydCBjb25zdCBzdW0gPSAoYXJyYXk6IEFycmF5PG51bWJlcj4pOiBudW1iZXIgPT5cbiAgYXJyYXkucmVkdWNlKChwdiwgY3YpID0+IHB2ICsgY3YsIDApXG5cbmNvbnN0IHNjYWxlSW5ncmVkaWVudHMgPSAoc2NhbGVGYWN0b3I6IG51bWJlciwgaW5ncmVkaWVudHM6IGFueSkgPT5cbiAgaW5ncmVkaWVudHMubWFwKChpKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmksXG4gICAgICBhbW91bnQ6IHNjYWxlRmFjdG9yICogaS5hbW91bnQsXG4gICAgfVxuICB9KVxuXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZSA9IChzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHdvcmRzOiBBcnJheTxzdHJpbmc+ID0gc3RyLnNwbGl0KCcgJylcbiAgY29uc3QgY2FwaXRhbGl6ZWRXb3JkczogQXJyYXk8c3RyaW5nPiA9IHdvcmRzLm1hcChcbiAgICAod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSlcbiAgKVxuICByZXR1cm4gY2FwaXRhbGl6ZWRXb3Jkcy5qb2luKCcgJylcbn1cblxuZXhwb3J0IGNvbnN0IGlzTm90RW1wdHlBcnJheSA9IChhcnI6IEFycmF5PGFueT4pOiBib29sZWFuID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIHJldHVybiBhcnIubGVuZ3RoID4gMFxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQobnVtYmVyLCBwcmVjaXNpb24gPSAwKSB7XG4gIGlmICh0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBOdW1iZXIobnVtYmVyLnRvRml4ZWQocHJlY2lzaW9uKSlcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0J1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNZWFzdXJhYmxlKG9iamVjdCkge1xuICByZXR1cm4gKFxuICAgIGlzT2JqZWN0KG9iamVjdCkgJiZcbiAgICBvYmplY3QuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgJiZcbiAgICBvYmplY3QuaGFzT3duUHJvcGVydHkoJ3VuaXQnKVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZWFzdXJhYmxlVmFsdWUobWVhc3VyYWJsZSkge1xuICBpZiAoaXNNZWFzdXJhYmxlKG1lYXN1cmFibGUpKSB7XG4gICAgcmV0dXJuIG1lYXN1cmFibGUudmFsdWVcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgY29uc3Qgcm91bmRNZWFzdXJhYmxlID0gKG0sIHByZWNpc2lvbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHVuaXQ6IG0udW5pdCxcbiAgICB2YWx1ZTogcm91bmQobS52YWx1ZSwgcHJlY2lzaW9uKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgc3VtIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7XG4gIFZvbHVtZVR5cGUsXG4gIE1hc3NUeXBlLFxuICBFcXVpcG1lbnRJdGVtVHlwZSxcbiAgQm9pbFByb2NlZHVyZVR5cGUsXG4gIE1hc2hTdGVwVHlwZSxcbn0gZnJvbSBcIi4vdHlwZXMvYmVlcmpzb25cIjtcbmltcG9ydCB7IGNvbnZlcnRNZWFzdXJhYmxlVmFsdWUgfSBmcm9tIFwiLi91bml0c1wiO1xuXG5jb25zdCBkZWZhdWx0Qm9pbDogQm9pbFByb2NlZHVyZVR5cGUgPSB7XG4gIHByZV9ib2lsX3NpemU6IHtcbiAgICB2YWx1ZTogMCxcbiAgICB1bml0OiBcImdhbFwiLFxuICB9LFxuICBib2lsX3RpbWU6IHtcbiAgICB2YWx1ZTogMCxcbiAgICB1bml0OiBcIm1pblwiLFxuICB9LFxufTtcblxuY29uc3QgY29vbGluZ1Nocmlua2FnZVJhdGUgPSAwLjA0O1xuXG5jb25zdCBjb252ZXJ0VG9HYWxsb25zID0gKHZvbHVtZTogVm9sdW1lVHlwZSkgPT5cbiAgY29udmVydE1lYXN1cmFibGVWYWx1ZSh2b2x1bWUsIFwiZ2FsXCIpO1xuXG4vLyAwLjk2IC0gbnVtYmVyIG9mIGZsLiBvdW5jZXMgb2Ygd2F0ZXIgYWJzb3JiZWQgcGVyIG91bmNlIG9mIHRoZSBncmFpblxuLy8gMTI4IGZsLiBvdW5jZXMgaW4gZ2FsbG9uLCAxNiBvdW5jZXMgaW4gcG91bmRcbmNvbnN0IGdyYWluQWJzb3JwdGlvblJhdGlvID0gKDAuOTYgLyAxMjgpICogMTY7XG5cbmNvbnN0IGNhbGNHcmFpbkFic29ycHRpb24gPSAoZ3JhaW5XZWlnaHQ6IE1hc3NUeXBlKTogVm9sdW1lVHlwZSA9PiB7XG4gIGNvbnN0IHZhbHVlID1cbiAgICBjb252ZXJ0TWVhc3VyYWJsZVZhbHVlKGdyYWluV2VpZ2h0LCBcImxiXCIpICogZ3JhaW5BYnNvcnB0aW9uUmF0aW87XG4gIHJldHVybiB7XG4gICAgdmFsdWUsXG4gICAgdW5pdDogXCJnYWxcIixcbiAgfTtcbn07XG5cbmNvbnN0IGNhbGNNYXNoV2F0ZXJWb2x1bWUgPSAoXG4gIG1hc2hfc3RlcHM6IEFycmF5PE1hc2hTdGVwVHlwZT4gPSBbXVxuKTogVm9sdW1lVHlwZSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gc3VtKFxuICAgIG1hc2hfc3RlcHMubWFwKCh7IHR5cGUsIGFtb3VudCB9OiBNYXNoU3RlcFR5cGUpID0+XG4gICAgICB0eXBlID09PSBcImluZnVzaW9uXCIgPyBjb252ZXJ0VG9HYWxsb25zKGFtb3VudCkgOiAwXG4gICAgKVxuICApO1xuICByZXR1cm4ge1xuICAgIHZhbHVlLFxuICAgIHVuaXQ6IFwiZ2FsXCIsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY01hc2hWb2x1bWVzID0gKFxuICBwcmVfYm9pbF9zaXplOiBWb2x1bWVUeXBlLFxuICBtYXNoU3RlcHM6IEFycmF5PE1hc2hTdGVwVHlwZT4sXG4gIG1hc2hHcmFpbldlaWdodDogTWFzc1R5cGUsXG4gIGVxdWlwbWVudDoge1xuICAgIGhsdD86IEVxdWlwbWVudEl0ZW1UeXBlO1xuICAgIG1hc2hfdHVuPzogRXF1aXBtZW50SXRlbVR5cGU7XG4gICAgYnJld19rZXR0bGU/OiBFcXVpcG1lbnRJdGVtVHlwZTtcbiAgICBmZXJtZW50ZXI/OiBFcXVpcG1lbnRJdGVtVHlwZTtcbiAgfVxuKToge1xuICBtYXNoX3ZvbHVtZTogVm9sdW1lVHlwZTtcbiAgc3BhcmdlX3ZvbHVtZTogVm9sdW1lVHlwZTtcbiAgdG90YWxfdm9sdW1lOiBWb2x1bWVUeXBlO1xufSA9PiB7XG4gIGNvbnN0IG1hc2hXYXRlclZvbHVtZSA9IGNhbGNNYXNoV2F0ZXJWb2x1bWUobWFzaFN0ZXBzKTtcblxuICBjb25zdCBncmFpbkFic29ycHRpb24gPSBjYWxjR3JhaW5BYnNvcnB0aW9uKG1hc2hHcmFpbldlaWdodCk7XG5cbiAgY29uc3QgbWFzaExvc3MgPVxuICAgIGVxdWlwbWVudC5tYXNoX3R1biAhPSBudWxsID8gY29udmVydFRvR2FsbG9ucyhlcXVpcG1lbnQubWFzaF90dW4ubG9zcykgOiAwO1xuXG4gIGNvbnN0IHNwYXJnZVZvbHVtZVZhbHVlID1cbiAgICBjb252ZXJ0VG9HYWxsb25zKHByZV9ib2lsX3NpemUpICtcbiAgICBncmFpbkFic29ycHRpb24udmFsdWUgLVxuICAgIG1hc2hXYXRlclZvbHVtZS52YWx1ZSArXG4gICAgbWFzaExvc3M7XG5cbiAgY29uc3Qgc3BhcmdlVm9sdW1lOiBWb2x1bWVUeXBlID0ge1xuICAgIHZhbHVlOiBzcGFyZ2VWb2x1bWVWYWx1ZSxcbiAgICB1bml0OiBcImdhbFwiLFxuICB9O1xuXG4gIGNvbnN0IHRvdGFsVm9sdW1lOiBWb2x1bWVUeXBlID0ge1xuICAgIHZhbHVlOiBtYXNoV2F0ZXJWb2x1bWUudmFsdWUgKyBzcGFyZ2VWb2x1bWUudmFsdWUsXG4gICAgdW5pdDogXCJnYWxcIixcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1hc2hfdm9sdW1lOiBtYXNoV2F0ZXJWb2x1bWUsXG4gICAgc3BhcmdlX3ZvbHVtZTogc3BhcmdlVm9sdW1lLFxuICAgIHRvdGFsX3ZvbHVtZTogdG90YWxWb2x1bWUsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY0JvaWxWb2x1bWVzID0gKFxuICBiYXRjaF9zaXplOiBWb2x1bWVUeXBlLFxuICBib2lsOiBCb2lsUHJvY2VkdXJlVHlwZSA9IGRlZmF1bHRCb2lsLFxuICBlcXVpcG1lbnQ6IHtcbiAgICBobHQ/OiBFcXVpcG1lbnRJdGVtVHlwZTtcbiAgICBtYXNoX3R1bj86IEVxdWlwbWVudEl0ZW1UeXBlO1xuICAgIGJyZXdfa2V0dGxlPzogRXF1aXBtZW50SXRlbVR5cGU7XG4gICAgZmVybWVudGVyPzogRXF1aXBtZW50SXRlbVR5cGU7XG4gIH1cbik6IHsgcHJlX2JvaWxfc2l6ZTogVm9sdW1lVHlwZSB9ID0+IHtcbiAgY29uc3QgYm9pbFByb2ZpbGUgPSBib2lsIHx8IGRlZmF1bHRCb2lsO1xuXG4gIGNvbnN0IHBvc3RCb2lsVm9sdW1lID0gY29udmVydFRvR2FsbG9ucyhiYXRjaF9zaXplKTtcblxuICBsZXQgYm9pbExvc3MgPSAwO1xuICBsZXQgYm9pbFJhdGUgPSAwO1xuICBpZiAoZXF1aXBtZW50ICE9IG51bGwgJiYgZXF1aXBtZW50LmJyZXdfa2V0dGxlICE9IG51bGwpIHtcbiAgICBib2lsTG9zcyA9IGNvbnZlcnRUb0dhbGxvbnMoZXF1aXBtZW50LmJyZXdfa2V0dGxlLmxvc3MpO1xuICAgIGJvaWxSYXRlID0gY29udmVydFRvR2FsbG9ucyhlcXVpcG1lbnQuYnJld19rZXR0bGUuYm9pbF9yYXRlX3Blcl9ob3VyKTtcbiAgfVxuXG4gIGNvbnN0IGJvaWxPZmZWb2x1bWUgPSAoYm9pbFJhdGUgKiBib2lsUHJvZmlsZS5ib2lsX3RpbWUudmFsdWUpIC8gNjA7XG4gIGNvbnN0IGNvb2xpbmdTaHJpbmthZ2UgPSBwb3N0Qm9pbFZvbHVtZSAqIGNvb2xpbmdTaHJpbmthZ2VSYXRlO1xuICBjb25zdCBwcmVCb2lsVm9sdW1lID1cbiAgICBwb3N0Qm9pbFZvbHVtZSArIGJvaWxPZmZWb2x1bWUgKyBib2lsTG9zcyArIGNvb2xpbmdTaHJpbmthZ2U7XG5cbiAgcmV0dXJuIHtcbiAgICBwcmVfYm9pbF9zaXplOiB7XG4gICAgICB2YWx1ZTogcHJlQm9pbFZvbHVtZSxcbiAgICAgIHVuaXQ6IFwiZ2FsXCIsXG4gICAgfSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9