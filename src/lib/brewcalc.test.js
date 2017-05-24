import { srmToCss } from "./brewcalc"

test("srm2css", () => {
  const cssColor = srmToCss(19.5)
  expect(cssColor).toMatchSnapshot()
})
