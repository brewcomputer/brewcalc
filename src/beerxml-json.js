import { parse } from 'pixl-xml'

export const convertXmlJson = data => {
  const camelCase = require('camelcase')

  data.xmlData = data.xmlData.replace(/<(?!!)(?!\?)[^>]*>/g, str => {
    return camelCase(str.toLowerCase())
  })

  return parse(data.xmlData)
}
