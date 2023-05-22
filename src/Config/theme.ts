import { PixelRatio } from 'react-native'

export const palette = {
  primary: '#393D3E',
  secondary: '#48B5CF',
  auxiliary: '#EFF0F2',
  complementary1: '#41B490',
  complementary2: '#398C74',
  white: '#FFFF',
  error: 'red'
}

export const fonts = {
  Big: 24 / PixelRatio.getFontScale(),
  Medium: 18 / PixelRatio.getFontScale(),
  Small: 14 / PixelRatio.getFontScale(),
  Tiny: 12 / PixelRatio.getFontScale()
}
