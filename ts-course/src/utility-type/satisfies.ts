type Properties = 'red' | 'green' | 'blue'
type RGB  = [red: number, green: number, blue: number]

const color = {
  red: [255, 0, 0],
  green: "#ffffff",
  blue: [255,0, 0]
} satisfies Record<Properties, RGB | string>

const redComponent = color.red[0]

const greenValue = color.green.toUpperCase()
