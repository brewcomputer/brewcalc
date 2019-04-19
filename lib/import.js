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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/importFromBeerXml.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/importFromBeerXml.js":
/*!**********************************!*\
  !*** ./src/importFromBeerXml.js ***!
  \**********************************/
/*! exports provided: importFromBeerXml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"importFromBeerXml\", function() { return importFromBeerXml; });\n/* harmony import */ var _xmlToJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xmlToJson */ \"./src/xmlToJson.js\");\n/* harmony import */ var _xmlToJson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_xmlToJson__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar camelCase = function camelCase(str) {\n  return str.length === 0 ? '' : str.length === 1 ? str.toLowerCase() : str.replace(/^[_.\\- ]+/, '').toLowerCase().replace(/[_.\\- ]+(\\w|$)/g, function (m, p1) {\n    return p1.toUpperCase();\n  });\n};\n\nvar xmlToCamelCase = function xmlToCamelCase(xml) {\n  return xml.replace(/<(?!!)(?!\\?)[^>]*>/g, function (str) {\n    return camelCase(str.toLowerCase());\n  });\n};\n\nvar parseBool = function parseBool(s) {\n  return s === 'TRUE';\n};\n\nvar isBIAB = function isBIAB(mashName) {\n  return mashName.includes('BIAB');\n}; // TODO: May be it is not so good idea. But At the moment I can't figure out best practices for rounding operations.\n\n\nvar dirtyRound = function dirtyRound(n) {\n  return Math.round(n * 100000000000) / 100000000000;\n};\n\nvar importFromBeerXml = function importFromBeerXml(xml) {\n  try {\n    var recipe = _xmlToJson__WEBPACK_IMPORTED_MODULE_0___default()(new DOMParser().parseFromString(xmlToCamelCase(xml), 'text/xml')).recipes.recipe;\n    var fermentableNode = recipe.fermentables.fermentable;\n    var fermentables = Array.from(Array.isArray(fermentableNode) ? fermentableNode : [fermentableNode]).map(function (_ref, i, f) {\n      var name = _ref.name,\n          addAfterBoil = _ref.addAfterBoil,\n          amount = _ref.amount,\n          color = _ref.color,\n          potential = _ref.potential,\n          type = _ref.type;\n      return {\n        name: name,\n        addAfterBoil: parseBool(addAfterBoil),\n        amount: parseFloat(amount),\n        color: parseFloat(color),\n        potential: potential !== undefined ? parseFloat(potential) : parseFloat(f[i][\"yield\"]) * 0.01 * 46 / 1000 + 1,\n        \"yield\": parseFloat(f[i][\"yield\"]),\n        type: type\n      };\n    });\n    var hopNode = recipe.hops.hop;\n    var hops = Array.from(Array.isArray(hopNode) ? hopNode : [hopNode]).map(function (_ref2) {\n      var name = _ref2.name,\n          alpha = _ref2.alpha,\n          amount = _ref2.amount,\n          form = _ref2.form,\n          use = _ref2.use,\n          time = _ref2.time;\n      return {\n        name: name,\n        alpha: parseFloat(alpha) * 0.01,\n        amount: parseFloat(amount),\n        form: form,\n        use: use,\n        time: parseFloat(time)\n      };\n    });\n    var mashStepsNode = recipe.mash.mashSteps.mashStep;\n    var mashSteps = Array.from(Array.isArray(mashStepsNode) ? mashStepsNode : [mashStepsNode]).map(function (_ref3) {\n      var name = _ref3.name,\n          endTemp = _ref3.endTemp,\n          infuseAmount = _ref3.infuseAmount,\n          rampTime = _ref3.rampTime,\n          stepTemp = _ref3.stepTemp,\n          stepTime = _ref3.stepTime,\n          type = _ref3.type;\n      return {\n        name: name,\n        endTemp: parseFloat(endTemp),\n        infuseAmount: parseFloat(infuseAmount),\n        rampTime: parseFloat(rampTime),\n        stepTemp: parseFloat(stepTemp),\n        stepTime: parseFloat(stepTime),\n        type: type\n      };\n    });\n    var mash = {\n      grainTemp: parseFloat(recipe.mash.grainTemp),\n      tunTemp: parseFloat(recipe.mash.tunTemp),\n      equipAdjust: parseBool(recipe.mash.equipAdjust),\n      spargeTemp: parseFloat(recipe.mash.spargeTemp),\n      mashSteps: mashSteps\n    };\n    var yeastNode = recipe.yeasts.yeast;\n    var yeasts = [_extends({\n      name: yeastNode.name,\n      amount: parseFloat(yeastNode.amount)\n    }, yeastNode.attenuation !== undefined ? {\n      attenuation: parseFloat(yeastNode.attenuation) * 0.01\n    } : {}, yeastNode.cultureDate !== undefined ? {\n      cultureDate: yeastNode.cultureDate\n    } : {}, {\n      form: yeastNode.form,\n      type: yeastNode.type\n    })];\n    var recipeNode = recipe;\n    var recipeResult = {\n      name: recipeNode.name,\n      brewer: recipeNode.brewer,\n      batchSize: parseFloat(recipeNode.batchSize),\n      boilSize: parseFloat(recipeNode.boilSize),\n      boilTime: parseFloat(recipeNode.boilTime),\n      efficiency: dirtyRound(parseFloat(recipeNode.efficiency) * 0.01),\n      type: recipeNode.type,\n      fermentables: fermentables,\n      hops: hops,\n      mash: mash,\n      yeasts: yeasts\n    };\n    var equipmentNode = recipe.equipment;\n    var equipment = equipmentNode !== undefined ? {\n      name: equipmentNode.name,\n      batchSize: parseFloat(equipmentNode.batchSize),\n      boilSize: parseFloat(equipmentNode.boilSize),\n      tunWeight: parseFloat(equipmentNode.tunWeight),\n      tunVolume: parseFloat(equipmentNode.tunSpecificHeat),\n      tunSpecificHeat: parseFloat(equipmentNode.tunSpecificHeat),\n      coolingLossPct: parseFloat(equipmentNode.coolingLossPct) * 0.01,\n      evapRate: dirtyRound(parseFloat(equipmentNode.evapRate) * 0.01),\n      lauterDeadspace: parseFloat(equipmentNode.lauterDeadspace),\n      topUpKettle: parseFloat(equipmentNode.topUpKettle),\n      trubChillerLoss: parseFloat(equipmentNode.trubChillerLoss),\n      // TODO:: may be it is part of mashing steps, not eq\n      BIAB: isBIAB(recipe.mash.name)\n    } : null;\n    var specifications = {\n      og: parseFloat(recipeNode.og),\n      fg: parseFloat(recipeNode.fg),\n      abv: parseFloat(recipeNode.abv) * 0.01,\n      color: parseFloat(recipeNode.estColor),\n      ibuMethod: recipeNode.ibuMethod,\n      ibu: parseFloat(recipeNode.ibu),\n      calories: parseFloat(recipeNode.calories)\n    };\n    return {\n      recipe: recipeResult,\n      equipment: equipment,\n      specifications: specifications\n    };\n  } catch (err) {\n    console.log('XML Parser Error: ' + err);\n    throw err;\n  }\n};\n\n//# sourceURL=webpack://brewcalc/./src/importFromBeerXml.js?");

/***/ }),

/***/ "./src/xmlToJson.js":
/*!**************************!*\
  !*** ./src/xmlToJson.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var xmlToJson = function xmlToJson(xml) {\n  var result = {};\n\n  if (xml.childNodes == null || xml.childNodes.length === 0) {\n    result = '';\n  } else if (xml.childNodes.length === 1 && xml.childNodes.item(0).nodeType === 3) {\n    result = xml.childNodes.item(0).textContent;\n  } else {\n    xml.childNodes.forEach(function (item) {\n      if (item.nodeType !== 3) {\n        if (result[item.nodeName] === undefined) {\n          result[item.nodeName] = xmlToJson(item);\n        } else {\n          if (!Array.isArray(result[item.nodeName])) {\n            var value = result[item.nodeName];\n            result[item.nodeName] = [value];\n          }\n\n          result[item.nodeName].push(xmlToJson(item));\n        }\n      }\n    });\n  }\n\n  return result;\n};\n\nmodule.exports = xmlToJson;\n\n//# sourceURL=webpack://brewcalc/./src/xmlToJson.js?");

/***/ })

/******/ });
});