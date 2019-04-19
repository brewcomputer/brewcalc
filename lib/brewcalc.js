(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("brewcalc", [], factory);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/brewcalc.js":
/*!*************************!*\
  !*** ./src/brewcalc.js ***!
  \*************************/
/*! exports provided: originalGravity, finalGravity, boilGravity, gravityPoints, estABW, estABV, estABVrealExtract, srmToRgb, colorSRM, srmToCss, yeastNeeded, yeastCount, yeastStarterGrow, carbonation, calcCalories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "originalGravity", function() { return originalGravity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finalGravity", function() { return finalGravity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boilGravity", function() { return boilGravity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gravityPoints", function() { return gravityPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estABW", function() { return estABW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estABV", function() { return estABV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estABVrealExtract", function() { return estABVrealExtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "srmToRgb", function() { return srmToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorSRM", function() { return colorSRM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "srmToCss", function() { return srmToCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yeastNeeded", function() { return yeastNeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yeastCount", function() { return yeastCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yeastStarterGrow", function() { return yeastStarterGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carbonation", function() { return carbonation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCalories", function() { return calcCalories; });
/* harmony import */ var _types_fermentable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/fermentable */ "./src/types/fermentable.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _types_yeast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/yeast */ "./src/types/yeast.js");



var originalGravity = function originalGravity(batchSize, ogPts) {
  return 1.0 + ogPts / Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["litersToGallons"])(batchSize);
};
var finalGravity = function finalGravity(batchSize, fgPts) {
  return 1.0 + fgPts / Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["litersToGallons"])(batchSize);
};
var boilGravity = function boilGravity(batchSize, boilSize, og) {
  return 1 + (og - 1) * Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["litersToGallons"])(batchSize) / Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["litersToGallons"])(boilSize);
}; // Sugar provides 46 gravity points per pound, per gallon (PPPG).
// 1 pound = 16 oz (weight/mass)
// 1 gallon = 128 fl oz
// yield and efficiency should be parsed from recipe as percent values
// The maximum potential is approximately 1.046 which would be a pound of pure sugar in a gallon of water.

var fermentableGravityPoints = function fermentableGravityPoints(potential, amount, efficiency) {
  if (efficiency === void 0) {
    efficiency = 1;
  }

  return (potential - 1) * Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["kgToPounds"])(amount) * efficiency;
};

var fermentableEfficiency = function fermentableEfficiency(type, equipmentEfficiency, sugarEfficiency) {
  if (sugarEfficiency === void 0) {
    sugarEfficiency = 1;
  }

  return type === _types_fermentable__WEBPACK_IMPORTED_MODULE_0__["FermentableTypes"].extract || type === _types_fermentable__WEBPACK_IMPORTED_MODULE_0__["FermentableTypes"].sugar || type === _types_fermentable__WEBPACK_IMPORTED_MODULE_0__["FermentableTypes"].dryExtract ? sugarEfficiency : equipmentEfficiency;
};

var gravityPoints = function gravityPoints(fermentables, efficiency, attenutation) {
  if (attenutation === void 0) {
    attenutation = 0;
  }

  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["sum"])(fermentables.map(function (_ref) {
    var type = _ref.type,
        potential = _ref.potential,
        amount = _ref.amount;
    return fermentableGravityPoints(potential, amount, (1 - attenutation) * fermentableEfficiency(type, efficiency));
  }));
}; // http://byo.com/bock/item/408-calculating-alcohol-content-attenuation-extract-and-calories-advanced-homebrewing
// https://www.brewersfriend.com/2011/06/16/alcohol-by-volume-calculator-updated/
// ABW = (OG points - FG points) * 0.105
// ABV = (OG points - FG points) * 0.132

var estABW = function estABW(ogPts, fgPts) {
  return (ogPts - fgPts) * 0.105;
};
var estABV = function estABV(ogPts, fgPts) {
  return (ogPts - fgPts) * 0.132;
}; // http://beersmith.com/blog/2010/09/07/apparent-and-real-attenuation-for-beer-brewers-part-1/

var estABVrealExtract = function estABVrealExtract(og, fg) {
  var oe = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["sgToPlato"])(og);
  var ae = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["sgToPlato"])(fg);
  var re = 0.1808 * oe + 0.8192 * ae;
  var abw = (oe - re) / (2.0665 - 0.010665 * oe);
  var abv = abw * (fg / 0.79661);
  return abv;
}; // MCU = (weight of grain in lbs)*(color of grain in lovibond) / (volume in gal) SRM = 1.4922 * MCU ^ 0.6859

var mcu2srm = function mcu2srm(mcu) {
  return 1.4922 * Math.pow(mcu, 0.6859);
};

var calcMCU = function calcMCU(_ref2) {
  var amount = _ref2.amount,
      color = _ref2.color;
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["kgToPounds"])(amount) * color;
};

var srmToRgb = function srmToRgb(srm) {
  return {
    r: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.975, srm)))),
    g: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.88, srm)))),
    b: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.7, srm))))
  };
};
var colorSRM = function colorSRM(fermentables, postBoilVolime) {
  return mcu2srm(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["sum"])(fermentables.map(calcMCU)) / Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["litersToGallons"])(postBoilVolime));
};
var srmToCss = function srmToCss(srm) {
  var color = srmToRgb(srm);
  return "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
}; // https://www.brewersfriend.com/yeast-pitch-rate-and-starter-calculator/
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

var yeastNeeded = function yeastNeeded(pitchRate, batchSize, e) {
  return pitchRate * (batchSize * 1000) * e / 1000;
};

var viability = function viability(currentDate, cultureDate) {
  if (cultureDate === void 0) {
    cultureDate = new Date().toString();
  }

  return 100 - Math.floor((Date.parse(currentDate) - Date.parse(cultureDate)) / 86400000) * 0.7;
};

var yeastCount = function yeastCount(_ref3, currentDate, cellDensity, // billion cells / ml
slurryDensity) {
  var amount = _ref3.amount,
      form = _ref3.form,
      cultureDate = _ref3.cultureDate;

  if (currentDate === void 0) {
    currentDate = new Date().toString();
  }

  if (cellDensity === void 0) {
    cellDensity = 8;
  }

  if (slurryDensity === void 0) {
    slurryDensity = 1;
  }

  switch (form) {
    case _types_yeast__WEBPACK_IMPORTED_MODULE_2__["YeastForms"].dry:
      return cellDensity * amount * 1000;

    case _types_yeast__WEBPACK_IMPORTED_MODULE_2__["YeastForms"].liquid:
      return 100 * (viability(currentDate, cultureDate) / 100) * amount;

    case _types_yeast__WEBPACK_IMPORTED_MODULE_2__["YeastForms"].slant:
      return slurryDensity * amount * 1000;

    default:
      throw new Error('NotImplementedError');
  }
};

var yeastGrowth = function yeastGrowth(ratio) {
  return 2.33 - 0.67 * ratio;
};

var growthRateCurveBraukaiserStir = function growthRateCurveBraukaiserStir(ratio) {
  return ratio < 1.4 ? 1.4 : ratio >= 1.4 && ratio <= 3.5 && yeastGrowth(ratio) > 0 ? yeastGrowth(ratio) : 0;
};

var yeastStarterGrow = function yeastStarterGrow(startingYeastCount, starterSize, gravity, batchSize) {
  var volumeLevel = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["litersToGallons"])(starterSize);
  var pointsNeeded = volumeLevel * (gravity - 1) * 1000;
  var poundsDME = pointsNeeded / 42;
  var gramsDME = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["poundsTokg"])(poundsDME) * 1000;
  var cellsToGramsRatio = startingYeastCount / gramsDME;
  var growthRate = growthRateCurveBraukaiserStir(cellsToGramsRatio);
  var endingCount = gramsDME * growthRate + startingYeastCount;
  var pitchRate = endingCount * 1000 / Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["sgToPlato"])(gravity) / (batchSize / 1000);
  return {
    growthRate: growthRate,
    endingCount: endingCount,
    pitchRate: pitchRate
  };
}; // https://byo.com/yeast/item/164-balancing-your-draft-system-advanced-brewing

var kegPressure = function kegPressure(carbVolume, t) {
  return Math.max(0, -16.6999 - 0.0101059 * t + 0.00116512 * t * t + 0.173354 * t * carbVolume + 4.24267 * carbVolume - 0.0684226 * carbVolume * carbVolume);
}; // http://www.homebrewtalk.com/showthread.php?t=441383


var primingSugar = function primingSugar(carbVolume, t, batchSize) {
  return 15.195 * batchSize * (carbVolume - 3.0378 + 5.0062e-2 * t - 2.6555e-4 * t * t);
};

var normalizeTemp = function normalizeTemp(t) {
  return Math.max(32.0, Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["celsiusToFahrenheit"])(t));
};

var carbonation = function carbonation(carbVolume, t, batchSize) {
  var sugar = primingSugar(carbVolume, normalizeTemp(t), Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["litersToGallons"])(batchSize));
  return {
    kegPressure: kegPressure(carbVolume, normalizeTemp(t)),
    kegSugar: sugar * 0.5,
    cornSugar: sugar,
    dme: sugar * 1.538
  };
}; // http://beersmith.com/blog/2011/02/04/counting-calories-in-your-homebrewed-beer/
// Calorie_from_alcohol = 1881.22 * FG * (OG-FG)/(1.775-OG)
// Calories_from_carbs = 3550.0 * FG * ((0.1808 * OG) + (0.8192 * FG) – 1.0004)
// Total calories – just add the Calories_from_alcohol to Calories_from_carbs

var caloriesAlc = function caloriesAlc(og, fg) {
  return 1881.22 * fg * ((og - fg) / (1.775 - og));
};

var caloriesExt = function caloriesExt(og, fg) {
  return 3550.0 * fg * (0.1808 * og + 0.8192 * fg - 1.0004);
};

var calcCalories = function calcCalories(og, fg) {
  return caloriesAlc(og, fg) + caloriesExt(og, fg);
};

/***/ }),

/***/ "./src/hops.js":
/*!*********************!*\
  !*** ./src/hops.js ***!
  \*********************/
/*! exports provided: bitternessIbuTinseth, bitternessRatio, ragerHopIbu, bitternessIbuRager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bitternessIbuTinseth", function() { return bitternessIbuTinseth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bitternessRatio", function() { return bitternessRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ragerHopIbu", function() { return ragerHopIbu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bitternessIbuRager", function() { return bitternessIbuRager; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _types_hop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/hop */ "./src/types/hop.js");



var aromaFactor = function aromaFactor(use) {
  return use === _types_hop__WEBPACK_IMPORTED_MODULE_1__["HopUse"].aroma || use === _types_hop__WEBPACK_IMPORTED_MODULE_1__["HopUse"].dryHop ? 0 : 1;
};

var ibuUtilization = function ibuUtilization(avgBoilGravityPts, boilTime, pelletFactor) {
  return pelletFactor * 1.65 * Math.pow(0.000125, avgBoilGravityPts) * (1 - Math.pow(Math.E, -0.04 * boilTime)) / 4.15;
}; // Glenn Tinseth developed the following formula to calculate bitterness in IBUs:
// IBU = (U * ozs hops * 7490)/Volume (in gallons) U represents the utilization of the hops (conversion to iso-alpha-acids) based on boil time and wort gravity.
// U = bigness factor * boil time factor


var bitternessIbuTinseth = function bitternessIbuTinseth(hops, avgBoilGravityPts, postBoilVolume) {
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["sum"])(hops.map(function (_ref) {
    var amount = _ref.amount,
        alpha = _ref.alpha,
        form = _ref.form,
        time = _ref.time,
        use = _ref.use;
    return ibuUtilization(avgBoilGravityPts, time, form === _types_hop__WEBPACK_IMPORTED_MODULE_1__["HopForms"].pellet ? 1.1 : 1) * Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["kgToOunces"])(amount) * alpha * 7490 / Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["litersToGallons"])(postBoilVolume) * aromaFactor(use);
  }));
}; // The preceived bitterness expressed in a ratio of IBUs to gravity. This is frequently seen expressed as BU/GU.
// The Gravity Units are the decimal portion of the original gravity

var bitternessRatio = function bitternessRatio(ibu, gu) {
  return ibu / gu;
}; // rager

var ragerHopGravityAdjustment = function ragerHopGravityAdjustment(sgb) {
  return sgb <= 1.05 ? 0 : (sgb - 1.05) / 0.2;
};

var ragerUtil = function ragerUtil(time) {
  return 18.11 + 13.86 * Math.tanh((time - 31.32) / 18.27);
};

var ragerHopIbuFromWeight = function ragerHopIbuFromWeight(util, alpha, wt, vol, ga, wtFactor) {
  return util * alpha * wt * wtFactor / (vol * (1.0 + ga));
};

var ragerHopIbu = function ragerHopIbu(amount, alpha, time, sg, vol) {
  return time <= 0.0 || amount <= 0.0 || alpha < 0.0 ? 0 : ragerHopIbuFromWeight(ragerUtil(Math.floor(time + 0.5)) * 0.01, alpha, amount, vol, ragerHopGravityAdjustment(sg), 100.0 / 1.34);
};
var bitternessIbuRager = function bitternessIbuRager(hops, avgBoilGravityPts, postBoilVolume) {
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["sum"])(hops.map(function (_ref2) {
    var amount = _ref2.amount,
        alpha = _ref2.alpha,
        time = _ref2.time,
        use = _ref2.use;
    return ragerHopIbu(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["kgToOunces"])(amount), alpha * 100, time, avgBoilGravityPts, Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["litersToGallons"])(postBoilVolume)) * aromaFactor(use);
  }));
};

/***/ }),

/***/ "./src/importFromBeerXml.js":
/*!**********************************!*\
  !*** ./src/importFromBeerXml.js ***!
  \**********************************/
/*! exports provided: importFromBeerXml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importFromBeerXml", function() { return importFromBeerXml; });
/* harmony import */ var _xmlToJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xmlToJson */ "./src/xmlToJson.js");
/* harmony import */ var _xmlToJson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_xmlToJson__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var camelCase = function camelCase(str) {
  return str.length === 0 ? '' : str.length === 1 ? str.toLowerCase() : str.replace(/^[_.\- ]+/, '').toLowerCase().replace(/[_.\- ]+(\w|$)/g, function (m, p1) {
    return p1.toUpperCase();
  });
};

var xmlToCamelCase = function xmlToCamelCase(xml) {
  return xml.replace(/<(?!!)(?!\?)[^>]*>/g, function (str) {
    return camelCase(str.toLowerCase());
  });
};

var parseBool = function parseBool(s) {
  return s === 'TRUE';
};

var isBIAB = function isBIAB(mashName) {
  return mashName.includes('BIAB');
}; // TODO: May be it is not so good idea. But At the moment I can't figure out best practices for rounding operations.


var dirtyRound = function dirtyRound(n) {
  return Math.round(n * 100000000000) / 100000000000;
};

var importFromBeerXml = function importFromBeerXml(xml) {
  try {
    var recipe = _xmlToJson__WEBPACK_IMPORTED_MODULE_0___default()(new DOMParser().parseFromString(xmlToCamelCase(xml), 'text/xml')).recipes.recipe;
    var fermentableNode = recipe.fermentables.fermentable;
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
        potential: potential !== undefined ? parseFloat(potential) : parseFloat(f[i]["yield"]) * 0.01 * 46 / 1000 + 1,
        "yield": parseFloat(f[i]["yield"]),
        type: type
      };
    });
    var hopNode = recipe.hops.hop;
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
    var mashStepsNode = recipe.mash.mashSteps.mashStep;
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
    var mash = {
      grainTemp: parseFloat(recipe.mash.grainTemp),
      tunTemp: parseFloat(recipe.mash.tunTemp),
      equipAdjust: parseBool(recipe.mash.equipAdjust),
      spargeTemp: parseFloat(recipe.mash.spargeTemp),
      mashSteps: mashSteps
    };
    var yeastNode = recipe.yeasts.yeast;
    var yeasts = [_extends({
      name: yeastNode.name,
      amount: parseFloat(yeastNode.amount)
    }, yeastNode.attenuation !== undefined ? {
      attenuation: parseFloat(yeastNode.attenuation) * 0.01
    } : {}, yeastNode.cultureDate !== undefined ? {
      cultureDate: yeastNode.cultureDate
    } : {}, {
      form: yeastNode.form,
      type: yeastNode.type
    })];
    var recipeNode = recipe;
    var recipeResult = {
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
    var equipmentNode = recipe.equipment;
    var equipment = equipmentNode !== undefined ? {
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
      BIAB: isBIAB(recipe.mash.name)
    } : null;
    var specifications = {
      og: parseFloat(recipeNode.og),
      fg: parseFloat(recipeNode.fg),
      abv: parseFloat(recipeNode.abv) * 0.01,
      color: parseFloat(recipeNode.estColor),
      ibuMethod: recipeNode.ibuMethod,
      ibu: parseFloat(recipeNode.ibu),
      calories: parseFloat(recipeNode.calories)
    };
    return {
      recipe: recipeResult,
      equipment: equipment,
      specifications: specifications
    };
  } catch (err) {
    console.log('XML Parser Error: ' + err);
    throw err;
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: calculateRecipe, calculateRecipeBeerJSON, originalGravity, finalGravity, boilGravity, gravityPoints, estABW, estABV, estABVrealExtract, srmToRgb, colorSRM, srmToCss, yeastNeeded, yeastCount, yeastStarterGrow, carbonation, calcCalories, bitternessIbuTinseth, bitternessRatio, ragerHopIbu, bitternessIbuRager, mashRecalculate, kgToOunces, kgToPounds, poundsTokg, litersToOunces, ouncesToLiters, litersToGallons, fahrenheitToCelsius, celsiusToFahrenheit, kpaToPsi, psiTokpa, sgToPlato, platoTosg, srmToEbc, ebcToSrm, srmToLovibond, lovibondToSrm, sum, scaleRecipe, calculateVolumes, calcWaterChemistry, FermentableTypes, RecipeTypes, HopForms, HopUse, MashType, YeastForms, YeastTypes, importFromBeerXml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateRecipe", function() { return calculateRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateRecipeBeerJSON", function() { return calculateRecipeBeerJSON; });
/* harmony import */ var _brewcalc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brewcalc */ "./src/brewcalc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "originalGravity", function() { return _brewcalc__WEBPACK_IMPORTED_MODULE_0__["originalGravity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "finalGravity", function() { return _brewcalc__WEBPACK_IMPORTED_MODULE_0__["finalGravity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boilGravity", function() { return _brewcalc__WEBPACK_IMPORTED_MODULE_0__["boilGravity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gravityPoints", function() { return _brewcalc__WEBPACK_IMPORTED_MODULE_0__["gravityPoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "estABW", function() { return _brewcalc__WEBPACK_IMPORTED_MODULE_0__["estABW"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "estABV", function() { return _brewcalc__WEBPACK_IMPORTED_MODULE_0__["estABV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "estABVrealExtract", function() { return _brewcalc__WEBPACK_IMPORTED_MODULE_0__["estABVrealExtract"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "srmToRgb", function() { return _brewcalc__WEBPACK_IMPORTED_MODULE_0__["srmToRgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorSRM", function() { return _brewcalc__WEBPACK_IMPORTED_MODULE_0__["colorSRM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "srmToCss", function() { return _brewcalc__WEBPACK_IMPORTED_MODULE_0__["srmToCss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yeastNeeded", function() { return _brewcalc__WEBPACK_IMPORTED_MODULE_0__["yeastNeeded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yeastCount", function() { return _brewcalc__WEBPACK_IMPORTED_MODULE_0__["yeastCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yeastStarterGrow", function() { return _brewcalc__WEBPACK_IMPORTED_MODULE_0__["yeastStarterGrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "carbonation", function() { return _brewcalc__WEBPACK_IMPORTED_MODULE_0__["carbonation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcCalories", function() { return _brewcalc__WEBPACK_IMPORTED_MODULE_0__["calcCalories"]; });

/* harmony import */ var _hops__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hops */ "./src/hops.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bitternessIbuTinseth", function() { return _hops__WEBPACK_IMPORTED_MODULE_1__["bitternessIbuTinseth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bitternessRatio", function() { return _hops__WEBPACK_IMPORTED_MODULE_1__["bitternessRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ragerHopIbu", function() { return _hops__WEBPACK_IMPORTED_MODULE_1__["ragerHopIbu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bitternessIbuRager", function() { return _hops__WEBPACK_IMPORTED_MODULE_1__["bitternessIbuRager"]; });

/* harmony import */ var _mash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mash */ "./src/mash.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mashRecalculate", function() { return _mash__WEBPACK_IMPORTED_MODULE_2__["mashRecalculate"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kgToOunces", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["kgToOunces"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kgToPounds", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["kgToPounds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poundsTokg", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["poundsTokg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "litersToOunces", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["litersToOunces"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ouncesToLiters", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["ouncesToLiters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "litersToGallons", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["litersToGallons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fahrenheitToCelsius", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["fahrenheitToCelsius"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "celsiusToFahrenheit", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["celsiusToFahrenheit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kpaToPsi", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["kpaToPsi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "psiTokpa", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["psiTokpa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sgToPlato", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["sgToPlato"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "platoTosg", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["platoTosg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "srmToEbc", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["srmToEbc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ebcToSrm", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["ebcToSrm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "srmToLovibond", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["srmToLovibond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lovibondToSrm", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["lovibondToSrm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["sum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleRecipe", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["scaleRecipe"]; });

/* harmony import */ var _volumes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./volumes */ "./src/volumes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateVolumes", function() { return _volumes__WEBPACK_IMPORTED_MODULE_4__["calculateVolumes"]; });

/* harmony import */ var _waterChem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./waterChem */ "./src/waterChem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcWaterChemistry", function() { return _waterChem__WEBPACK_IMPORTED_MODULE_5__["calcWaterChemistry"]; });

/* harmony import */ var _types_fermentable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/fermentable */ "./src/types/fermentable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FermentableTypes", function() { return _types_fermentable__WEBPACK_IMPORTED_MODULE_6__["FermentableTypes"]; });

/* harmony import */ var _types_hop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/hop */ "./src/types/hop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HopForms", function() { return _types_hop__WEBPACK_IMPORTED_MODULE_7__["HopForms"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HopUse", function() { return _types_hop__WEBPACK_IMPORTED_MODULE_7__["HopUse"]; });

/* harmony import */ var _types_mashStep__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types/mashStep */ "./src/types/mashStep.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MashType", function() { return _types_mashStep__WEBPACK_IMPORTED_MODULE_8__["MashType"]; });

/* harmony import */ var _types_recipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types/recipe */ "./src/types/recipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecipeTypes", function() { return _types_recipe__WEBPACK_IMPORTED_MODULE_9__["RecipeTypes"]; });

/* harmony import */ var _types_yeast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types/yeast */ "./src/types/yeast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YeastForms", function() { return _types_yeast__WEBPACK_IMPORTED_MODULE_10__["YeastForms"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YeastTypes", function() { return _types_yeast__WEBPACK_IMPORTED_MODULE_10__["YeastTypes"]; });

/* harmony import */ var _importFromBeerXml_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./importFromBeerXml.js */ "./src/importFromBeerXml.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "importFromBeerXml", function() { return _importFromBeerXml_js__WEBPACK_IMPORTED_MODULE_11__["importFromBeerXml"]; });














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
    fermentables = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isNotEmptyArray"])(fermentable_bill) ? // $FlowFixMe
    fermentable_bill.map(function (item) {
      return {
        type: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(item.type),
        amount: item.amount.value,
        potential: item["yield"] * 0.01 * 46 / 1000 + 1,
        color: item.color.value
      };
    }) : null;
    hops = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isNotEmptyArray"])(hop_bill) ? // $FlowFixMe
    hop_bill.map(function (item) {
      return {
        amount: item.amount.value,
        alpha: item.alpha_acid_units / 100,
        form: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(item.form),
        time: item.time.value,
        use: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(item.use)
      };
    }) : null;
    yeasts = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isNotEmptyArray"])(culture_additions) ? // $FlowFixMe
    culture_additions.map(function (item) {
      return {
        attenuation: item.attenuation / 100
      };
    }) : null;
  }

  var mashSteps = null;

  if (mash && Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isNotEmptyArray"])(mash.mash_steps)) {
    mashSteps = {
      // $FlowFixMe
      mashSteps: mash.mash_steps.map(function (item) {
        return {
          type: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(item.type),
          infuseAmount: item.infuse_amount.value
        };
      })
    };
  } // $FlowFixMe


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
    og = Object(_brewcalc__WEBPACK_IMPORTED_MODULE_0__["originalGravity"])(batchSize, Object(_brewcalc__WEBPACK_IMPORTED_MODULE_0__["gravityPoints"])(fermentables, efficiency));
    colorSRMvalue = Object(_brewcalc__WEBPACK_IMPORTED_MODULE_0__["colorSRM"])(fermentables, batchSize);

    if (yeasts) {
      fg = Object(_brewcalc__WEBPACK_IMPORTED_MODULE_0__["finalGravity"])(batchSize, Object(_brewcalc__WEBPACK_IMPORTED_MODULE_0__["gravityPoints"])(fermentables, efficiency, yeasts[0].attenuation));
      abv = Object(_brewcalc__WEBPACK_IMPORTED_MODULE_0__["estABVrealExtract"])(Number(og.toFixed(3)), Number(fg.toFixed(2)));
      var calories = Object(_brewcalc__WEBPACK_IMPORTED_MODULE_0__["calcCalories"])(Number(og.toFixed(3)), Number(fg.toFixed(2)));
      var caloriesInOneL = calories / (12 * Object(_utils__WEBPACK_IMPORTED_MODULE_3__["ouncesToLiters"])(1));
    }

    if (hops && boilSize) {
      var avgBoilGravityPts = Object(_brewcalc__WEBPACK_IMPORTED_MODULE_0__["boilGravity"])(batchSize, boilSize, og) - 1;
      ibu = Object(_hops__WEBPACK_IMPORTED_MODULE_1__["bitternessIbuTinseth"])(hops, avgBoilGravityPts, batchSize);
    }
  }

  if (mash && boilTime && fermentables && boilSize) {
    // $FlowFixMe
    volumes = Object(_volumes__WEBPACK_IMPORTED_MODULE_4__["calculateVolumes"])({
      fermentables: fermentables,
      mash: mash,
      boilTime: boilTime
    }, {
      boilSize: boilSize
    });
  }

  return {
    stats: {
      og: og && Number(og.toFixed(3)),
      fg: fg && Number(fg.toFixed(3)),
      ibu: ibu && Number(ibu.toFixed(1)),
      color: colorSRMvalue && Number(colorSRMvalue.toFixed(1)),
      abv: abv && Number(abv.toFixed(1))
    },
    volumes: volumes
  };
};



/***/ }),

/***/ "./src/mash.js":
/*!*********************!*\
  !*** ./src/mash.js ***!
  \*********************/
/*! exports provided: mashRecalculate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mashRecalculate", function() { return mashRecalculate; });
/* harmony import */ var _types_mashStep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/mashStep */ "./src/types/mashStep.js");

var grainVolume = 0.652; // l/kg

var maltSpecificHeat = 0.38; // Cal/gram-C

var tunDeadspace = 0;
var boilTemp = 100;

var calcTotVolume = function calcTotVolume(grainVolume, mashGrainWeight, infuseAmount, startVolume) {
  if (infuseAmount === void 0) {
    infuseAmount = 0;
  }

  if (startVolume === void 0) {
    startVolume = 0;
  }

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

var mashRecalculate = function mashRecalculate(_ref, _ref2, mashGrainWeight) {
  var mashSteps = _ref.mashSteps,
      equipAdjust = _ref.equipAdjust,
      grainTemp = _ref.grainTemp,
      _ref$tunTemp = _ref.tunTemp,
      tunTemp = _ref$tunTemp === void 0 ? 0 : _ref$tunTemp;
  var _ref2$tunWeight = _ref2.tunWeight,
      tunWeight = _ref2$tunWeight === void 0 ? 0 : _ref2$tunWeight,
      _ref2$tunSpecificHeat = _ref2.tunSpecificHeat,
      tunSpecificHeat = _ref2$tunSpecificHeat === void 0 ? 0 : _ref2$tunSpecificHeat,
      _ref2$tunVolume = _ref2.tunVolume,
      tunVolume = _ref2$tunVolume === void 0 ? 0 : _ref2$tunVolume;
  var tunMass = !equipAdjust ? 0 : tunWeight;

  var calcInfuseStepAmount = function calcInfuseStepAmount(i, infuseAmount) {
    return i === 0 ? infuseAmount + tunDeadspace : infuseAmount;
  };

  var calcTotalInfusedOnStepAmount = function calcTotalInfusedOnStepAmount(i, mashSteps) {
    return mashSteps.slice(0, i).reduce(function (pv, cv, index) {
      return cv.type !== _types_mashStep__WEBPACK_IMPORTED_MODULE_0__["MashType"].decoction ? calcInfuseStepAmount(index, cv.infuseAmount) : 0;
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
      case _types_mashStep__WEBPACK_IMPORTED_MODULE_0__["MashType"].infusion:
        result.infussionTemp = i === 0 ? mashInTemp(infuseStepAmount, stepTemp, mashGrainWeight, grainTemp, tunMass, tunSpecificHeat, tunVolume, tunTemp) : infuseTemp(infuseStepAmount, stepTemp, totalInfusedOnStepAmount, mashSteps[i - 1].stepTemp, mashGrainWeight, tunMass, tunSpecificHeat, tunVolume);
        result.decoctionAmount = 0;
        break;

      case _types_mashStep__WEBPACK_IMPORTED_MODULE_0__["MashType"].decoction:
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

/***/ "./src/types/fermentable.js":
/*!**********************************!*\
  !*** ./src/types/fermentable.js ***!
  \**********************************/
/*! exports provided: FermentableTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FermentableTypes", function() { return FermentableTypes; });
var FermentableTypes = {
  grain: 'Grain',
  sugar: 'Sugar',
  extract: 'Extract',
  dryExtract: 'Dry Extract',
  adjunct: 'Adjunct'
};

/***/ }),

/***/ "./src/types/hop.js":
/*!**************************!*\
  !*** ./src/types/hop.js ***!
  \**************************/
/*! exports provided: HopUse, HopForms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopUse", function() { return HopUse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopForms", function() { return HopForms; });
// Hop USE May be "Boil", "Dry Hop", "Mash", "First Wort" or "Aroma".
// Note that "Aroma" and "Dry Hop" do not contribute to the bitterness of the beer while the others do.
// Aroma hops are added after the boil and do not contribute substantially to beer bitterness.
var HopUse = {
  boil: 'Boil',
  dryHop: 'Dry Hop',
  mash: 'Mash',
  firstWort: 'First Wort',
  aroma: 'Aroma' // Hop FORM May be "Pellet", "Plug" or "Leaf"

};
var HopForms = {
  pellet: 'Pellet',
  plug: 'Plug',
  leaf: 'Leaf'
};

/***/ }),

/***/ "./src/types/mashStep.js":
/*!*******************************!*\
  !*** ./src/types/mashStep.js ***!
  \*******************************/
/*! exports provided: MashType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MashType", function() { return MashType; });
// Mash type May be “Infusion”, “Temperature” or “Decoction” depending on the type of step.
// Infusion denotes adding hot water, Temperature denotes heating with an outside heat source, and decoction denotes drawing off some mash for boiling.
var MashType = {
  infusion: 'Infusion',
  temperature: 'Temperature',
  decoction: 'Decoction'
};

/***/ }),

/***/ "./src/types/recipe.js":
/*!*****************************!*\
  !*** ./src/types/recipe.js ***!
  \*****************************/
/*! exports provided: RecipeTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeTypes", function() { return RecipeTypes; });
var RecipeTypes = {
  extract: 'Extract',
  partialMash: 'Partial Mash',
  allGrain: 'All Grain'
};

/***/ }),

/***/ "./src/types/yeast.js":
/*!****************************!*\
  !*** ./src/types/yeast.js ***!
  \****************************/
/*! exports provided: YeastTypes, YeastForms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeastTypes", function() { return YeastTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeastForms", function() { return YeastForms; });
var YeastTypes = {
  ale: 'Ale',
  lager: 'Lager',
  wheat: 'Wheat',
  wine: 'Wine',
  champagne: 'Champagne'
};
var YeastForms = {
  liquid: 'Liquid',
  dry: 'Dry',
  slant: 'Slant',
  culture: 'Culture'
};

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: kgToOunces, kgToPounds, poundsTokg, litersToOunces, ouncesToLiters, litersToGallons, fahrenheitToCelsius, celsiusToFahrenheit, kpaToPsi, psiTokpa, sgToPlato, platoTosg, srmToEbc, ebcToSrm, srmToLovibond, lovibondToSrm, sum, scaleRecipe, capitalize, isNotEmptyArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kgToOunces", function() { return kgToOunces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kgToPounds", function() { return kgToPounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poundsTokg", function() { return poundsTokg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "litersToOunces", function() { return litersToOunces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ouncesToLiters", function() { return ouncesToLiters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "litersToGallons", function() { return litersToGallons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fahrenheitToCelsius", function() { return fahrenheitToCelsius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "celsiusToFahrenheit", function() { return celsiusToFahrenheit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kpaToPsi", function() { return kpaToPsi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "psiTokpa", function() { return psiTokpa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sgToPlato", function() { return sgToPlato; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platoTosg", function() { return platoTosg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "srmToEbc", function() { return srmToEbc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ebcToSrm", function() { return ebcToSrm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "srmToLovibond", function() { return srmToLovibond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lovibondToSrm", function() { return lovibondToSrm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleRecipe", function() { return scaleRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotEmptyArray", function() { return isNotEmptyArray; });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var kgToOunces = function kgToOunces(k) {
  return k * 35.2739619;
};
var kgToPounds = function kgToPounds(k) {
  return kgToOunces(k) / 16;
};
var poundsTokg = function poundsTokg(p) {
  return p / 2.204;
};
var litersToOunces = function litersToOunces(l) {
  return l / 0.0295735;
};
var ouncesToLiters = function ouncesToLiters(o) {
  return o * 0.0295735;
};
var litersToGallons = function litersToGallons(l) {
  return litersToOunces(l) / 128;
};
var fahrenheitToCelsius = function fahrenheitToCelsius(f) {
  return (f - 32) / 1.8;
};
var celsiusToFahrenheit = function celsiusToFahrenheit(c) {
  return c * 1.8 + 32;
};
var kpaToPsi = function kpaToPsi(kpa) {
  return kpa * 0.14503773773020923;
};
var psiTokpa = function psiTokpa(psi) {
  return psi * 6.894757293168361;
};
var sgToPlato = function sgToPlato(sg) {
  return -668.962 + 1262.45 * sg - 776.43 * Math.pow(sg, 2) + 182.94 * Math.pow(sg, 3);
};
var platoTosg = function platoTosg(e) {
  return 1 + e / (258.6 - e / 258.2 * 227.1);
};
var srmToEbc = function srmToEbc(srm) {
  return srm * 1.97;
};
var ebcToSrm = function ebcToSrm(ebc) {
  return ebc * 0.508;
};
var srmToLovibond = function srmToLovibond(srm) {
  return (srm + 0.76) / 1.3546;
};
var lovibondToSrm = function lovibondToSrm(lovibond) {
  return 1.3546 * lovibond - 0.76;
};
var sum = function sum(array) {
  return array.reduce(function (pv, cv) {
    return pv + cv;
  }, 0);
};

var scaleIngredients = function scaleIngredients(scaleFactor, ingredients) {
  return ingredients.map(function (i) {
    return _extends({}, i, {
      amount: scaleFactor * i.amount
    });
  });
};

var scaleRecipe = function scaleRecipe(r, _ref) {
  var batchSize = _ref.batchSize;
  var scaleFactor = batchSize / r.batchSize;
  return _extends({}, r, {
    batchSize: batchSize,
    fermentables: scaleIngredients(scaleFactor, r.fermentables),
    hops: scaleIngredients(scaleFactor, r.hops)
  });
};
var capitalize = function capitalize(str) {
  var words = str.split(' ');
  var capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(' ');
};
var isNotEmptyArray = function isNotEmptyArray(arr) {
  if (Array.isArray(arr)) {
    return arr.length > 0;
  }

  return false;
};

/***/ }),

/***/ "./src/volumes.js":
/*!************************!*\
  !*** ./src/volumes.js ***!
  \************************/
/*! exports provided: calculateVolumes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateVolumes", function() { return calculateVolumes; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _types_fermentable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/fermentable */ "./src/types/fermentable.js");
/* harmony import */ var _types_mashStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/mashStep */ "./src/types/mashStep.js");



var calculateVolumes = function calculateVolumes(_ref, _ref2) {
  var fermentables = _ref.fermentables,
      mash = _ref.mash,
      boilTime = _ref.boilTime;
  var boilSize = _ref2.boilSize,
      _ref2$lauterDeadspace = _ref2.lauterDeadspace,
      lauterDeadspace = _ref2$lauterDeadspace === void 0 ? 0 : _ref2$lauterDeadspace,
      _ref2$evapRate = _ref2.evapRate,
      evapRate = _ref2$evapRate === void 0 ? 0 : _ref2$evapRate,
      _ref2$coolingLossPct = _ref2.coolingLossPct,
      coolingLossPct = _ref2$coolingLossPct === void 0 ? 0 : _ref2$coolingLossPct,
      _ref2$trubChillerLoss = _ref2.trubChillerLoss,
      trubChillerLoss = _ref2$trubChillerLoss === void 0 ? 0 : _ref2$trubChillerLoss,
      _ref2$topUpKettle = _ref2.topUpKettle,
      topUpKettle = _ref2$topUpKettle === void 0 ? 0 : _ref2$topUpKettle,
      BIAB = _ref2.BIAB;
  var starterSize = 0;
  var fermentationLoss = 1.7;
  var mashGrainWeight = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["sum"])(fermentables.map(function (_ref3) {
    var amount = _ref3.amount,
        type = _ref3.type;
    return type === _types_fermentable__WEBPACK_IMPORTED_MODULE_1__["FermentableTypes"].grain ? amount : 0;
  }));
  var grainAbsorbtionRatio = BIAB ? 0.586 : 0.96; // number of ounces of water absorbed per ounce of the grain

  var grainAbsorbtion = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["ouncesToLiters"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["kgToOunces"])(mashGrainWeight) * grainAbsorbtionRatio);
  var totalMashWaterAdds = lauterDeadspace + Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["sum"])(mash.mashSteps.map(function (_ref4) {
    var type = _ref4.type,
        infuseAmount = _ref4.infuseAmount;
    return type !== _types_mashStep__WEBPACK_IMPORTED_MODULE_2__["MashType"].decoction ? infuseAmount : 0;
  })); // https://byo.com/bock/item/410-calculating-water-usage-advanced-brewing
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

/***/ "./src/waterChem.js":
/*!**************************!*\
  !*** ./src/waterChem.js ***!
  \**************************/
/*! exports provided: calcWaterChemistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcWaterChemistry", function() { return calcWaterChemistry; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var dilute = function dilute(value, dilution) {
  return Math.round(value * (1 - dilution));
};

var alkalinity = function alkalinity(value, dilution) {
  if (dilution === void 0) {
    dilution = 0;
  }

  return Math.round(value * (1 - dilution) * (50 / 61));
};

var adjustmentsFromSalts = function adjustmentsFromSalts(batchSize, _ref) {
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

var calcWaterChemistry = function calcWaterChemistry(batchSize, dilution, source, target, salts) {
  var adjustmentsFromSaltsWater = adjustmentsFromSalts(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["litersToGallons"])(batchSize), _extends({}, salts));
  var dilutedWater = {
    name: 'dilutedWater',
    Ca: dilute(source.Ca, dilution),
    Mg: dilute(source.Mg, dilution),
    SO4: dilute(source.SO4, dilution),
    Na: dilute(source.Na, dilution),
    Cl: dilute(source.Cl, dilution),
    HCO3: dilute(source.HCO3, dilution),
    alkalinity: alkalinity(source.HCO3, dilution)
  };
  var adjustedWater = {
    name: 'adjustedWater',
    Ca: dilutedWater.Ca + adjustmentsFromSaltsWater.Ca,
    Mg: dilutedWater.Mg + adjustmentsFromSaltsWater.Mg,
    SO4: dilutedWater.SO4 + adjustmentsFromSaltsWater.SO4,
    Na: dilutedWater.Na + adjustmentsFromSaltsWater.Na,
    Cl: dilutedWater.Cl + adjustmentsFromSaltsWater.Cl,
    HCO3: dilutedWater.HCO3 + adjustmentsFromSaltsWater.HCO3,
    alkalinity: alkalinity(dilutedWater.HCO3 + adjustmentsFromSaltsWater.HCO3)
  };
  var difference = {
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

/***/ "./src/xmlToJson.js":
/*!**************************!*\
  !*** ./src/xmlToJson.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var xmlToJson = function xmlToJson(xml) {
  var result = {};

  if (xml.childNodes == null || xml.childNodes.length === 0) {
    result = '';
  } else if (xml.childNodes.length === 1 && xml.childNodes.item(0).nodeType === 3) {
    result = xml.childNodes.item(0).textContent;
  } else {
    xml.childNodes.forEach(function (item) {
      if (item.nodeType !== 3) {
        if (result[item.nodeName] === undefined) {
          result[item.nodeName] = xmlToJson(item);
        } else {
          if (!Array.isArray(result[item.nodeName])) {
            var value = result[item.nodeName];
            result[item.nodeName] = [value];
          }

          result[item.nodeName].push(xmlToJson(item));
        }
      }
    });
  }

  return result;
};

module.exports = xmlToJson;

/***/ })

/******/ });
});
//# sourceMappingURL=brewcalc.js.map