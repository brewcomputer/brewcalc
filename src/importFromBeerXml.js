// @flow
import type { Recipe } from './types/recipe'
import type { Fermentable } from './types/fermentable'
import type { Hop } from './types/hop'
import type { Mash } from './types/mash'
import type { MashStep } from './types/mashStep'
import type { Yeast } from './types/yeast'

// $FlowFixMe
import * as XML from 'pixl-xml'
// $FlowFixMe
import camelCase from 'camelcase'

const xmlToCamelCase = (xml: string) =>
  xml.replace(/<(?!!)(?!\?)[^>]*>/g, str => camelCase(str.toLowerCase()))

const parseBool = (s: any) => s === 'TRUE' ? true : false

export const importFromBeerXml = (xml: string) => {
  const doc = XML.parse(xmlToCamelCase(xml))

  const fermentables = Array.from(doc.recipe.fermentables.fermentable).map(({
    addAfterBoil,
    amount,
    color,
    potential,
    type
  }: Fermentable) => {
    return {
      addAfterBoil: parseBool(addAfterBoil),
      amount: parseFloat(amount),
      color: parseFloat(color),
      potential: parseFloat(potential),
      type: type
    }
  })

  const hops = Array.from(doc.recipe.hops.hop).map(({
    alpha,
    amount,
    form,
    use,
    time
  }: Hop) => {
    return {
      alpha: parseFloat(alpha) * 0.01,
      amount: parseFloat(amount),
      form: form,
      use: use,
      time: parseFloat(time)
    }
  })

  const mashSteps = Array.from(doc.recipe.mash.mashSteps.mashStep).map(({
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
  })

  const mash: Mash = {
    grainTemp: parseFloat(doc.recipe.mash.grainTemp),
    mashSteps: mashSteps
  }

  const yeastNode = doc.recipe.yeasts.yeast
  const yeasts: Array<Yeast> = [
    {
      amount: parseFloat(yeastNode.amount),
      attenuation: parseFloat(yeastNode.attenuation) * 0.01,
      cultureDate: yeastNode.cultureDate,
      form: yeastNode.form,
      type: yeastNode.type
    }
  ]

  const recipeNode = doc.recipe
  const recipe: Recipe = {
    name: recipeNode.name,
    batchSize: parseFloat(recipeNode.batchSize),
    boilSize: parseFloat(recipeNode.boilSize),
    boilTime: parseFloat(recipeNode.boilTime),
    type: recipeNode.type,
    fermentables: fermentables,
    hops: hops,
    mash: mash,
    yeasts: yeasts
  }
  return recipe
}
