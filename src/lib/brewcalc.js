export const srmToRgb = srm => ({
  r: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.975, srm)))),
  g: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.88, srm)))),
  b: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.7, srm))))
})

export const srmToCss = srm => {
  const color = srmToRgb(srm)
  return `rgb(${color.r}, ${color.g}, ${color.b})`
}
