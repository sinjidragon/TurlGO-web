import { Theme as EmotionTheme } from '@emotion/react'

const typography = {
  fontFamily: {
    primary: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
}

const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
}

const borderRadius = {
  small: '0.25rem',
  medium: '0.5rem',
  large: '1rem',
}

const commonTheme = {
  typography,
  spacing,
  borderRadius,
}

export const lightTheme: EmotionTheme = {
  ...commonTheme,
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    border: '#E0E0E0',
    text: {
      primary: '#333333',
      secondary: '#666666',
      disabled: '#999999',
    },
    error: '#FF4444',
    success: '#4CAF50',
    warning: '#FFA000',
    info: '#2196F3',
  },
}

export const darkTheme: EmotionTheme = {
  ...commonTheme,
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    background: '#1A1A1A',
    surface: '#2A2A2A',
    border: '#404040',
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
      disabled: '#666666',
    },
    error: '#FF6B6B',
    success: '#4CAF50',
    warning: '#FFB74D',
    info: '#64B5F6',
  },
}

export type CustomTheme = typeof lightTheme
