import { Theme } from '@emotion/react'

const baseTheme = {
  typography: {
    fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  borderRadius: {
    small: '4px',
    medium: '6px',
    large: '8px',
  },
}

export const lightTheme: Theme = {
  ...baseTheme,
  colors: {
    primary: '#EF798A',
    secondary: '#FEF2C5',
    background: '#ffffff',
    surface: '#ffffff',
    border: '#e1e1e1',
    error: '#ff4d4f',
    success: '#52c41a',
    text: {
      primary: '#333333',
      secondary: '#666666',
      disabled: '#999999',
    },
  },
}

export const darkTheme: Theme = {
  ...baseTheme,
  colors: {
    primary: '#EF798A',
    secondary: '#FEF2C5',
    background: '#1f1f1f',
    surface: '#2d2d2d',
    border: '#404040',
    error: '#ff4d4f',
    success: '#52c41a',
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
      disabled: '#808080',
    },
  },
}

export type CustomTheme = typeof lightTheme
