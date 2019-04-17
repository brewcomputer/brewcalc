// @flow
import type { Recipe } from './types/recipe'
import type { Fermentable } from './types/fermentable'
import type { Hop } from './types/hop'
import type { Mash } from './types/mash'
import type { MashStep } from './types/mashStep'
import type { Yeast } from './types/yeast'

import type { Equipment } from './types/equipment'

import type { Specifications } from './types/specifications'
// $FlowFixMe
import { DOMParser } from 'xmldom'
import xmlToJson from './xmlToJson'

const camelCase = (str: string) =>
  str.length === 0
    ? ''
    : str.length === 1
    ? str.toLowerCase()
    : str
        .replace(/^[_.\- ]+/, '')
        .toLowerCase()
        .replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase())

const xmlToCamelCase = (xml: string) =>
  xml.replace(/<(?!!)(?!\?)[^>]*>/g, str => camelCase(str.toLowerCase()))

const parseBool = (s: any) => s === 'TRUE'
const isBIAB = (mashName: any) => mashName.includes('BIAB')

// TODO: May be it is not so good idea. But At the moment I can't figure out best practices for rounding operations.
const dirtyRound = (n: number) => Math.round(n * 100000000000) / 100000000000

export const importFromBeerXml = (xml: string) => {
  try {
    const recipe = xmlToJson(
      new DOMParser().parseFromString(xmlToCamelCase(xml), 'text/xml')
    ).recipes.recipe
    const fermentableNode = recipe.fermentables.fermentable
    const fermentables = Array.from(
      Array.isArray(fermentableNode) ? fermentableNode : [fermentableNode]
    ).map(
      (
        { name, addAfterBoil, amount, color, potential, type }: Fermentable,
        i,
        f
      ) => {
        return {
          name: name,
          addAfterBoil: parseBool(addAfterBoil),
          amount: parseFloat(amount),
          color: parseFloat(color),
          potential:
            potential !== undefined
              ? parseFloat(potential)
              : (parseFloat(f[i].yield) * 0.01 * 46) / 1000 + 1,
          yield: parseFloat(f[i].yield),
          type: type
        }
      }
    )

    const hopNode = recipe.hops.hop
    const hops = Array.from(Array.isArray(hopNode) ? hopNode : [hopNode]).map(
      ({ name, alpha, amount, form, use, time }: Hop) => {
        return {
          name: name,
          alpha: parseFloat(alpha) * 0.01,
          amount: parseFloat(amount),
          form: form,
          use: use,
          time: parseFloat(time)
        }
      }
    )

    const mashStepsNode = recipe.mash.mashSteps.mashStep
    const mashSteps = Array.from(
      Array.isArray(mashStepsNode) ? mashStepsNode : [mashStepsNode]
    ).map(
      ({
        name,
        endTemp,
        infuseAmount,
        rampTime,
        stepTemp,
        stepTime,
        type
      }: MashStep) => {
        return {
          name: name,
          endTemp: parseFloat(endTemp),
          infuseAmount: parseFloat(infuseAmount),
          rampTime: parseFloat(rampTime),
          stepTemp: parseFloat(stepTemp),
          stepTime: parseFloat(stepTime),
          type: type
        }
      }
    )

    const mash: Mash = {
      grainTemp: parseFloat(recipe.mash.grainTemp),
      tunTemp: parseFloat(recipe.mash.tunTemp),
      equipAdjust: parseBool(recipe.mash.equipAdjust),
      spargeTemp: parseFloat(recipe.mash.spargeTemp),
      mashSteps: mashSteps
    }

    const yeastNode = recipe.yeasts.yeast
    const yeasts: Array<Yeast> = [
      {
        name: yeastNode.name,
        amount: parseFloat(yeastNode.amount),
        ...(yeastNode.attenuation !== undefined
          ? { attenuation: parseFloat(yeastNode.attenuation) * 0.01 }
          : {}),
        ...(yeastNode.cultureDate !== undefined
          ? { cultureDate: yeastNode.cultureDate }
          : {}),
        form: yeastNode.form,
        type: yeastNode.type
      }
    ]

    const recipeNode = recipe
    const recipeResult: Recipe = {
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
    }

    const equipmentNode = recipe.equipment
    const equipment: Equipment | null =
      equipmentNode !== undefined
        ? {
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
          }
        : null

    const specifications: Specifications = {
      og: parseFloat(recipeNode.og),
      fg: parseFloat(recipeNode.fg),
      abv: parseFloat(recipeNode.abv) * 0.01,
      color: parseFloat(recipeNode.estColor),
      ibuMethod: recipeNode.ibuMethod,
      ibu: parseFloat(recipeNode.ibu),
      calories: parseFloat(recipeNode.calories)
    }

    return {
      recipe: recipeResult,
      equipment: equipment,
      specifications: specifications
    }
  } catch (err) {
    console.log('XML Parser Error: ' + err)
    throw err
  }
}
