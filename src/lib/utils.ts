import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getYouTubeId(url: string) {
  const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/)
  return undefined !== arr[2] ? arr[2].split(/[^\w-]/)[0] : arr[0]
}

interface RGBColor {
  r: number
  g: number
  b: number
}

function hexToRgb(hex: string): RGBColor | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : null
}

interface DarkColorOptions {
  override?: Record<string, boolean>
}

export function isDarkColor(
  hexColor: string,
  options?: DarkColorOptions,
): boolean {
  if (options && options.override) {
    const overridedColor = Object.keys(options.override).find(
      k => k.toLowerCase() === hexColor.toLowerCase(),
    )
    if (overridedColor !== undefined) {
      return options.override[overridedColor]
    }
  }

  const { r, g, b } = hexToRgb(hexColor) ?? { r: 0, g: 0, b: 0 }

  const colorArray = [r / 255, g / 255, b / 255].map((v) => {
    if (v <= 0.03928) {
      return v / 12.92
    }

    return ((v + 0.055) / 1.055) ** 2.4
  })

  const luminance
    = 0.2126 * colorArray[0] + 0.7152 * colorArray[1] + 0.0722 * colorArray[2]

  return luminance <= 0.179
}
