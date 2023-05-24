import { PixelRatio } from 'react-native'

export const palette = {
  primary: '#F2D6B3',
  secondary: '#A62929',
  auxiliary: '#D9B596',
  complementary1: '#8C6751',
  complementary2: '#0D0D0D',
  white: '#FFFF',
  error: 'red'
}

export const fonts = {
  Big: 24 / PixelRatio.getFontScale(),
  Medium: 18 / PixelRatio.getFontScale(),
  Small: 14 / PixelRatio.getFontScale(),
  Tiny: 12 / PixelRatio.getFontScale()
}
