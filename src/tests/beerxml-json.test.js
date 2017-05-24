import { convertXmlJson } from '../beerxml-json'

//equipment
//grain
//hops
//mash
//misc
//recipes
//style
//water
//yeast

test('convertXMLJson', () => {
  const fs = require('fs')
  const xmlData = fs.readFileSync(
    __dirname + '/data/beerxml/equipment.xml',
    'utf8'
  )
  const jsonEtalon = require(__dirname + '/data/beerjson/equipment.json')
  const json = convertXmlJson({
    xmlData: xmlData
  })

  expect(json.equipment[0].batchSize).toBe(jsonEtalon.equipment[0].batchSize)
})
